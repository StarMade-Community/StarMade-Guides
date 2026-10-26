# StarMade Guides
This repository contains guides for the game StarMade. The guides are written in Markdown format and cover various aspects of the game, including building, combat, and resource management.
These guides are public, and can be contributed to by anyone. If you have a guide that you would like to share, please submit a pull request with your guide in the appropriate folder.
These guides are pulled directly into the StarMade in-game guide system, so they will be available to players in the game. If you have any questions or suggestions for improving the guides,
please feel free to open an issue or submit a pull request.

These docs can be viewed online at https://starmade-community.github.io/StarMade-Guides/ or in-game via the "Guides" panel.

## Contributing
1. **Place your file** in the appropriate subfolder under `docs/` (e.g. `docs/combat/`). Create a new subfolder if your guide doesn't fit an existing category — it will automatically become a new section in the navigation.
2. **Use a numeric prefix** to control the order within a section (e.g. `03-weapons.md`). Files are sorted alphabetically, so `01-` always appears before `02-`.
3. **Start your file with a `# Title` heading.** This is used as the page title in the navigation — keep it concise.
4. **Submit a pull request.** The navigation is built from the folders, so there is nothing else to edit.

To preview the website locally, install [Node.js](https://nodejs.org/) and run `npm install` then `npm start`. Pushes to `main` publish the Release site and pushes to `pre` the Pre-release one.

### Graphics
The in-game renderer supports most markdown features (tables, images, etc.), as well as inline SVG diagrams via fenced code blocks:
````markdown
```svg
<svg ...>...</svg>
```
````
Other guide-only syntax, supported both in game and on the website:

- **3D block scene:** a ` ```scene ` fence with the world-test block JSON (see `docs/02-ships/03-reactors.md`). On the web, blocks use the game's textures from `docs/assets/blocks/`, exported by `scripts/export_guide_textures.py` in the game repo (re-run it when block textures change); mod blocks are drawn as coloured cubes.
- **Block icon:** `![block:Reactor Power]` or `![block:1008]`, on its own line or in a table cell. The web shows the block's name.
- **Image alignment:** `![alt](image.png){align=right}` (no space before the `{`).
- **Caption** below an image or diagram:
  ```
  /// caption
  Text of the caption.
  ///
  ```

Image paths are relative to the guide's own folder, e.g. `../assets/map.png`. Keep `.md` files out of `docs/assets/`: any folder with a `.md` file in it shows up as a section in the in-game guides.
