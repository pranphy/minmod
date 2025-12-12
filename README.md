# Minmod - A Minimal Hugo Theme

`minmod` is a minimal yet feature-rich Hugo theme designed for personal portfolios and blogs. It focuses on speed, readability, and a clean aesthetic, providing a solid foundation for showcasing your work and thoughts.

## Features

-   **🌓 Dark Mode**: Built-in dark mode that respects user system preferences, with a toggle for manual switching and persistence via `localStorage`.
-   **🔍 Fast Search**: Client-side search powered by [Fuse.js](https://fusejs.io/) for instant results and keyboard navigation.
-   **📐 MathJax Support**: Native support for mathematical notation using standard LaTeX syntax.
-   **🎨 Tailwind CSS Typography**: Content is automatically styled for optimal readability using [Tailwind CSS](https://tailwindcss.com/) and the `@tailwindcss/typography` plugin.
-   **📱 Responsive Design**: Fully responsive layout that looks great on all devices, including a mobile hamburger menu.
-   **🚀 Projects Section**: Dedicated section for showcasing projects with a card layout, technology tags (chips), and external links.

## Usage

### Adding Content

To create new content, use the Hugo CLI:

-   **New Post**:
    ```bash
    hugo new posts/my-new-post.md
    ```
-   **New Project**:
    ```bash
    hugo new project/my-project.md
    ```

### Frontmatter Parameters

The theme utilizes specific frontmatter parameters for enhanced content display:

-   `title`: The title of the post or project.
-   `date`: Publication date.
-   `author`: Author's name.
-   `description`: A brief summary for lists and cards.
-   `tags`: List of tags (e.g., `["hugo", "theme"]`).
-   `thumbnail`: (Project/Card specific) Path to an image for the card's thumbnail.
-   `hyperlink`: (Project/Card specific) An external URL for the card title/button.
-   `chips`: (Project/Card specific) A list of short text labels (technologies, categories) for badges.

## Configuration

The `minmod` theme is highly configurable via your `hugo.toml` (or `hugo.yaml`/`hugo.json`) file. You can customize basic site parameters, homepage sections (Hero, Education, Work, Projects, etc.), search options, and navigation menus.

For detailed configuration options, please refer to `doc/configuration.md`.
