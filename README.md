# StarMade Guides
This repository contains guides for the game StarMade. The guides are written in Markdown format and cover various aspects of the game, including building, combat, and resource management.
These guides are public, and can be contributed to by anyone. If you have a guide that you would like to share, please submit a pull request with your guide in the appropriate folder.
These guides are pulled directly into the StarMade in-game guide system, so they will be available to players in the game. If you have any questions or suggestions for improving the guides,
please feel free to open an issue or submit a pull request.

## Contributing
1. **Place your file** in the appropriate subfolder under `docs/` (e.g. `docs/combat/`). Create a new subfolder if your guide doesn't fit an existing category — it will automatically become a new section in the navigation.
2. **Use a numeric prefix** to control the order within a section (e.g. `03-weapons.md`). Files are sorted alphabetically, so `01-` always appears before `02-`.
3. **Start your file with a `# Title` heading.** This is used as the page title in the navigation — keep it concise.
4. **Submit a pull request.** The navigation is auto-generated on deploy, so you don't need to edit `mkdocs.yml`.

### Graphics
The in-game renderer supports most markdown features (tables, images, etc.), as well as inline SVG diagrams via fenced code blocks:
````markdown
```svg
<svg ...>...</svg>
```
````