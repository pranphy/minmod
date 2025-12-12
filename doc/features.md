# Features

`minmod` is a minimal yet feature-rich Hugo theme designed for personal portfolios and blogs.

## 🌓 Dark Mode

The theme includes a built-in dark mode that respects the user's system preference by default.
- **Toggle**: A toggle button in the navigation bar allows users to manually switch between light and dark modes.
- **Persistence**: The user's preference is saved in `localStorage`.
- **Styling**: Dark mode uses a carefully curated color palette (slate/gray) for reduced eye strain.

## 🔍 Fast Search

Client-side search is implemented using [Fuse.js](https://fusejs.io/).
- **Fast**: Search results appear instantly as you type.
- **Keyboard Navigation**: Use arrow keys to navigate results and `Enter` to select.
- **Content Indexing**: Indexes titles, summaries, and content of your posts.

## 📐 MathJax Support

Native support for mathematical notation using [MathJax](https://www.mathjax.org/).
- **LaTeX Syntax**: Write equations using standard LaTeX syntax.
- **Delimiters**:
    - Inline: `$ ... $` or `\( ... \)`
    - Block: `$$ ... $$` or `\[ ... \]`
- **Configuration**: Enabled via `markup.goldmark.extensions.passthrough` in `hugo.toml`.

## 🎨 Tailwind CSS Typography

The theme uses [Tailwind CSS](https://tailwindcss.com/) and the `@tailwindcss/typography` plugin.
- **Prose**: Content is automatically styled for optimal readability.
- **Customization**: Typography settings can be customized in `tailwind.config.js`.
- **Code Blocks**: Syntax highlighting is supported with a custom "Iosevka Term" font stack.

## 📱 Responsive Design

- **Mobile First**: The layout is fully responsive and looks great on all devices.
- **Mobile Menu**: A hamburger menu on mobile devices provides easy access to navigation links.

## 🚀 Projects Section

A dedicated section for showcasing your projects.
- **Card Layout**: Projects are displayed in a beautiful card grid.
- **Chips**: Add technology tags (chips) to your projects.
- **External Links**: Link directly to GitHub or other external sites with a visual indicator.
