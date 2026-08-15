# Brand and asset intake template

Complete this register before a page layout, CSS system or component is built. It is the first project gate.

## Brand system

| Field | Record |
|---|---|
| Brand and display name | Approved spelling, tagline, legal/business-name constraints and prohibited names. |
| Final logo pack | Exact filenames, expected context, dark/light use, favicon use and whether each file is protected. |
| Palette | Named colour roles, exact values, allowed pairings, contrast intent and colours that must never be used for a logo background. |
| Typography | Display and body families, weights, hierarchy, source/licensing and fallback stack. |
| Appearance | Approved light/dark mode rules, surfaces, text contrast rules and theme-specific artwork. |
| Visual direction | Mood, layout reference, image character, signature motifs, motion rules and treatments to avoid. |

## Asset register

Create one row per file before using it. Do not infer transparency from a thumbnail; inspect the actual alpha field.

| Filename | Role and route | Dimensions / ratio | Alpha | Origin | Placement / crop | Status |
|---|---|---|---|---|---|---|
| `client-home-hero-1600x900-client.png` | Homepage hero | 1600 × 900 / 16:9 | Opaque | Supplied client photograph | Full composition; protect people shown | Approved / protected |
| `client-square-mark-1000x1000-tpt-gpt.png` | Favicon and compact mark | 1000 × 1000 / 1:1 | Transparent (`tpt`) | GPT | Use against approved theme background | Approved |

Use these filename elements where the client has not supplied a fixed name:

`<client>-<role>-<dimensions>-<alpha-if-transparent>-<origin>.<extension>`

Use `client`, `gpt`, `gemini`, `stock`, `photographer-name` or another accurate source label for `<origin>`. Use `tpt` only if the file has genuine transparency. Retain the client’s existing names for final supplied artwork, and document them rather than renaming them.

## Image plan before generation or selection

| Page or component | Required subject | Target aspect ratio | Text overlay | Approved source or prompt | Fallback |
|---|---|---|---|---|---|
| Homepage hero | Real local people/service context | 16:9 | State if dark/light text needs a reading field | Client supplied or approved generation brief | Do not use an unrelated stock placeholder |
| Service hero | Specific service action or product context | 16:9 | State text position and contrast treatment | Approved source or detailed prompt | Use a relevant existing image only if the client approves |
| Journal card | Exact guide topic | Match article card ratio | Usually no text on image | Matching editorial asset | Keep card text outside the image |

