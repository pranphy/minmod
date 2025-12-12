# Usage

This guide explains how to add content and utilize the features of the `minmod` theme.

## Adding Content

### Creating a New Post

To create a new blog post, run:

```bash
hugo new posts/my-new-post.md
```

This will create a new markdown file in `content/posts/` with the default frontmatter.

### Creating a New Project

To add a project to your portfolio, run:

```bash
hugo new project/my-project.md
```

## Frontmatter Parameters

The theme uses specific frontmatter parameters to enhance content display.

### Common Parameters

- `title`: The title of the post or project.
- `date`: Publication date.
- `author`: Author's name.
- `description`: A brief summary displayed in lists and cards.
- `tags`: List of tags (e.g., `["hugo", "theme"]`).

### Project/Card Specific Parameters

These parameters are particularly useful for the **Projects** section but can also be used in other list layouts that use the card view.

- **`thumbnail`**: Path to an image file to display as the card's thumbnail.
  ```yaml
  thumbnail: /asset/image/project/my-project-logo.png
  ```

- **`hyperlink`**: An external URL. If provided, clicking the card title or "Read" button will open this link in a new tab instead of the internal page.
  ```yaml
  hyperlink: https://github.com/username/repo
  ```

- **`chips`**: A list of short text labels (technologies, categories) displayed as badges on the card.
  ```yaml
  chips: [python, ai, web]
  ```

## Example Project Frontmatter

```yaml
---
title: "My Awesome Project"
date: 2023-10-27
author: "Your Name"
thumbnail: /asset/image/project/logo.png
chips: [go, hugo, tailwind]
hyperlink: https://github.com/yourname/my-awesome-project
description: "A brief description of what this project does and why it's cool."
---
```
