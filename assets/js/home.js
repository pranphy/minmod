(function () {
        const canvas = document.getElementById('physics-bg');
        const ctx = canvas.getContext('2d');
        const isDark = () => document.documentElement.classList.contains('dark');

        // Color palette
        const LIGHT = { particle: '14,165,233', orbit: '99,102,241', link: '14,165,233', eq: '30,58,138' };
        const DARK  = { particle: '56,189,248', orbit: '167,139,250', link: '56,189,248', eq: '199,210,254' };
        const col = () => isDark() ? DARK : LIGHT;

        // ── resize ──────────────────────────────────────────────────────────────
        function resize() {
            canvas.width  = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
            // re-scatter equation positions on resize
            equations.forEach(e => { e.x = Math.random(); e.y = Math.random(); });
        }
        window.addEventListener('resize', resize);

        // ── Floating equations ───────────────────────────────────────────────────
        // Unicode approximations of real equations — rendered as canvas text
        const EQ_STRINGS = [
            // General Relativity
            'G\u03bc\u03bd + \u039bg\u03bc\u03bd = 8\u03c0G T\u03bc\u03bd',
            'ds\u00b2 = g\u03bc\u03bd dx\u03bc dx\u03bd',
            'R\u03bc\u03bd \u2212 \u00bdRg\u03bc\u03bd = 8\u03c0G T\u03bc\u03bd',
            // Quantum Mechanics
            'i\u210f \u2202\u03c8/\u2202t = \u0124\u03c8',
            '\u0394x\u0394p \u2265 \u210f/2',
            '[\u0078\u0302, \u0070\u0302] = i\u210f',
            '\u03c8(x,t) = \u222b \u03c6(k) e^{ikx\u2212i\u03c9t} dk',
            // QFT / QED / QCD
            '\u2112 = \u03c8\u0304(i\u03b3\u03bc\u2202\u03bc \u2212 m)\u03c8 \u2212 \u00bcF\u03bc\u03bdF\u03bc\u03bd',
            '(i\u03b3\u03bc\u2202\u03bc \u2212 m)\u03c8 = 0',
            'Z = \u222b D\u03c6 e^{iS[\u03c6]/\u210f}',
            '\u2202\u03bcF\u03bc\u03bd = J\u03bd',
            '\u2112_{QCD} = \u2212\u00bcG\u03bc\u03bd^a G_a^\u03bc\u03bd',
            // Statistical Mechanics & Thermo
            'S = \u2212k_B \u2211 p_i ln p_i',
            'Z = \u2211 e^{\u2212\u03b2E_n}',
            '\u27e8E\u27e9 = \u2212\u2202 ln Z/\u2202\u03b2',
            // Wave & Klein-Gordon
            '(\u25a1 + m\u00b2)\u03c6 = 0',
            '\u25a1\u03c6 = \u2202\u03bc\u2202\u03bc\u03c6 = 0',
            // de Broglie / Planck
            'E = h\u03bd',
            '\u03bb = h/p',
            'E\u00b2 = (pc)\u00b2 + (mc\u00b2)\u00b2',
        ];

        const equations = EQ_STRINGS.map(text => ({
            text,
            x:     Math.random(),
            y:     Math.random(),
            vx:    (Math.random() - 0.5) * 0.000055,
            vy:    (Math.random() - 0.5) * 0.000035,
            tilt:  (Math.random() - 0.5) * 0.35,       // radians, slight lean
            phase: Math.random() * Math.PI * 2,         // for sine bob
            size:  Math.floor(Math.random() * 3) + 10,  // 10-12 px
            alpha: Math.random() * 0.045 + 0.025,       // 0.025 – 0.07
        }));

        // ── Particles ───────────────────────────────────────────────────────────
        const N = 38;
        const particles = Array.from({ length: N }, () => ({
            x:  Math.random(),
            y:  Math.random(),
            vx: (Math.random() - 0.5) * 0.00018,
            vy: (Math.random() - 0.5) * 0.00018,
            r:  Math.random() * 1.8 + 0.8,
        }));

        // ── Orbitals ────────────────────────────────────────────────────────────
        const orbitals = [
            { cx: 0.5, cy: 0.5, a: 0.18, b: 0.08, tilt: -0.4, speed:  0.008, electrons: 2 },
            { cx: 0.5, cy: 0.5, a: 0.22, b: 0.11, tilt:  0.9, speed: -0.006, electrons: 2 },
            { cx: 0.5, cy: 0.5, a: 0.28, b: 0.07, tilt:  0.2, speed:  0.005, electrons: 1 },
        ];
        orbitals.forEach(o => {
            o.angles = Array.from({ length: o.electrons }, (_, i) =>
                (i / o.electrons) * Math.PI * 2
            );
        });

        // ── Helpers ─────────────────────────────────────────────────────────────
        function drawEllipse(cx, cy, a, b, tilt, alpha, c) {
            ctx.save();
            ctx.translate(cx, cy);
            ctx.rotate(tilt);
            ctx.beginPath();
            ctx.ellipse(0, 0, a, b, 0, 0, Math.PI * 2);
            ctx.strokeStyle = `rgba(${c.orbit},${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
            ctx.restore();
        }

        function ellipsePoint(cx, cy, a, b, tilt, angle) {
            const px = a * Math.cos(angle);
            const py = b * Math.sin(angle);
            return {
                x: cx + px * Math.cos(tilt) - py * Math.sin(tilt),
                y: cy + px * Math.sin(tilt) + py * Math.cos(tilt),
            };
        }

        // ── Main loop ────────────────────────────────────────────────────────────
        let frame = 0;
        function draw() {
            const W = canvas.width, H = canvas.height;
            ctx.clearRect(0, 0, W, H);
            const c = col();
            const baseAlpha = 0.13;

            // Layer 1 — particles
            particles.forEach(p => {
                p.x += p.vx; p.y += p.vy;
                if (p.x < 0) p.x = 1; if (p.x > 1) p.x = 0;
                if (p.y < 0) p.y = 1; if (p.y > 1) p.y = 0;
                ctx.beginPath();
                ctx.arc(p.x * W, p.y * H, p.r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${c.particle},${baseAlpha + 0.08})`;
                ctx.fill();
            });

            // Layer 1b — links
            const LINK_DIST = 0.14;
            for (let i = 0; i < N; i++) {
                for (let j = i + 1; j < N; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const d  = Math.sqrt(dx*dx + dy*dy);
                    if (d < LINK_DIST) {
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x * W, particles[i].y * H);
                        ctx.lineTo(particles[j].x * W, particles[j].y * H);
                        ctx.strokeStyle = `rgba(${c.link},${baseAlpha * (1 - d / LINK_DIST)})`;
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                }
            }

            // Layer 2 — orbitals
            orbitals.forEach(o => {
                const cx = o.cx * W, cy = o.cy * H;
                const a  = o.a  * Math.min(W, H);
                const b  = o.b  * Math.min(W, H);
                drawEllipse(cx, cy, a, b, o.tilt, baseAlpha * 1.2, c);
                o.angles = o.angles.map(angle => {
                    const next = angle + o.speed;
                    const pt = ellipsePoint(cx, cy, a, b, o.tilt, next);
                    ctx.beginPath();
                    ctx.arc(pt.x, pt.y, 2.2, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(${c.orbit},0.55)`;
                    ctx.fill();
                    const g = ctx.createRadialGradient(pt.x, pt.y, 0, pt.x, pt.y, 7);
                    g.addColorStop(0, `rgba(${c.orbit},0.18)`);
                    g.addColorStop(1, `rgba(${c.orbit},0)`);
                    ctx.beginPath();
                    ctx.arc(pt.x, pt.y, 7, 0, Math.PI * 2);
                    ctx.fillStyle = g;
                    ctx.fill();
                    return next;
                });
            });

            // Layer 3 — floating equations
            const t = frame * 0.008;
            equations.forEach(e => {
                // drift
                e.x += e.vx; e.y += e.vy;
                if (e.x < -0.25) e.x = 1.1;
                if (e.x >  1.1)  e.x = -0.2;
                if (e.y < -0.1)  e.y = 1.05;
                if (e.y >  1.05) e.y = -0.05;

                const screenX = e.x * W;
                // gentle sine bob on top of drift
                const screenY = e.y * H + Math.sin(t + e.phase) * 4;

                ctx.save();
                ctx.translate(screenX, screenY);
                ctx.rotate(e.tilt);
                ctx.font = `${e.size}px "Iosevka Term", "Courier New", monospace`;
                ctx.fillStyle = `rgba(${c.eq},${e.alpha})`;
                ctx.fillText(e.text, 0, 0);
                ctx.restore();
            });

            frame++;
            requestAnimationFrame(draw);
        }

        // Kick off after layout is painted so offsetWidth/Height are valid
        requestAnimationFrame(() => { resize(); draw(); });
    })();