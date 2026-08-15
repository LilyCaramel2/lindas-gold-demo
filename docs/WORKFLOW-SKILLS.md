# Gold Wanted workflow and skills inventory

This document records the agent skills and operating workflows used during the Gold Wanted refocus. It gives future agents a short route to the relevant guidance without exposing credentials or internal configuration.

## Skills used during the refocus

| Skill | Used for Gold Wanted work | Use again when |
|---|---|---|
| `webdev-readme-static` | Static-site structure, validation and frontend delivery guidance. | Changing HTML, CSS, vanilla JavaScript, responsive UI or static-site deployment readiness. |
| `imagegen` | Routing visual-asset work and protecting supplied design assets. | A request involves a new image, image edit, logo, visual mock-up or asset decision. Do not use it to alter protected assets. |
| `tts-prompter` | Preparing spoken-guide prompts and the English/Afrikaans audio workflow. | Creating or revising spoken guides, voice prompts or audio scripts. |
| `manus-config` | Reviewing session integrations and configuration relevant to connected services. | A task requires connector, browser, integration or schedule configuration. |
| `persistent-computing` | Choosing safe temporary review-server and preview approaches. | A task needs a persistent service, review server, background process or hosting decision. |
| `skill-creator` | Designing concise, validated shared skills for repeat Gold Wanted maintenance. | Creating or improving a reusable agent skill. |

## Repository-local skills

The following skills are stored in this repository so an agent working from the clone can read the project-specific workflow. They do not replace platform-level skills; they provide the Gold Wanted constraints those general skills cannot know.

`docs/GOLD-WANTED-COMPONENT-BLUEPRINT.md` is the companion implementation reference. It records the complete live pattern: full-page hero, clear logo header, utility controls, light/dark appearance, home and contact forms, Google Map, reviews route, Journal/audio system, languages, search, privacy, analytics readiness, social/UTM preparation and production gate.

| Skill | Purpose |
|---|---|
| `skills/caramel-local-business-site-delivery/SKILL.md` | The full Caramel Digital Studio workflow: brand-and-asset intake before code, client brief, component map, content, local SEO, reviewed languages, accessibility, compliance, distribution, review and explicit approval. |
| `skills/gold-wanted-static-maintenance/SKILL.md` | Safe static-site changes, protected assets, appearance control, consent testing and the branch/approval gate. |
| `skills/gold-wanted-content-localisation/SKILL.md` | Local content, approved business language, on-page SEO, social repurposing and reviewed English/Afrikaans maintenance. |

## Skill-selection sequence

Start with `AGENTS.md`. Then select the narrowest relevant repository skill. Read the asset register before changing an image, logo, favicon or audio link. Use platform skills only when the task needs their specialised capability, and retain the production approval gate in all cases.
