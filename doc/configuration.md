# Configuration

The `minmod` theme is designed to be highly configurable directly from your `hugo.toml` (or `hugo.yaml`/`hugo.json`) file.

## Basic Configuration

```toml
baseURL = "https://yourwebsite.com/"
title = "Your Name"
theme = "minmod"
languageCode = "en-us"
```

## Site Parameters `[params]`

| Parameter | Type | Description |
|-----------|------|-------------|
| `ShowPostNavLinks` | Boolean | Enable/disable next/prev links on posts. |
| `ShowBreadCrumbs` | Boolean | Enable/disable breadcrumb navigation. |
| `twitterHandle` | String | Your Twitter handle (e.g., "@username"). |

## Homepage Sections `[params.home]`

The homepage is composed of several modular sections. Each section can be enabled, titled, and linked to a dedicated page.

### Hero Section `[params.home.hero]`

The top banner of the homepage.

```toml
[params.home.hero]
enable = true
title = "Your Name"
subtitle = "Your Tagline"
image = "/path/to/profile.jpg"
cta_text = "Read Blog"
cta_url = "/posts/"
```

### Content Sections

The theme supports several content sections: `education`, `work`, `research`, `publications`, `projects`, and `recent_posts`.

#### Common Parameters for Sections

| Parameter | Description |
|-----------|-------------|
| `enable` | Set to `true` to show the section. |
| `title` | The heading for the section. |
| `url` | The URL the section heading/link points to (e.g., "/projects/"). |
| `count` | (For `projects` and `recent_posts`) Number of items to display. |

#### Example: Projects Section

```toml
[params.home.projects]
enable = true
title = "Latest Projects"
url = "/project/"
count = 3
```

#### Example: Education Section (Manual Items)

For `education`, `work`, `research`, and `publications`, you define items manually in the config:

```toml
[params.home.education]
enable = true
title = "Education"
url = "/education/"

[[params.home.education.items]]
degree = "PhD in Physics"
institution = "University Name"
year = "2017 - 2022"
description = "Thesis topic..."
```

## Search Configuration

The theme uses Fuse.js for client-side search.

```toml
[params.fuseOpts]
isCaseSensitive = false
keys = [ "title", "permalink", "summary", "content" ]
```

## Menus

Configure the top navigation bar using the `main` menu.

```toml
[[menu.main]]
identifier = "blog"
name = "Blog"
url = "/posts/"
weight = 10
```
