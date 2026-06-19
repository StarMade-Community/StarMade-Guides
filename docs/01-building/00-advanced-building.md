# Advanced Building

Build mode has a full set of power tools accessible by holding `Left Alt`, as well as a radial menu of shape tools for placing blocks in geometric patterns. These tools dramatically speed up construction of large ships and stations.

## Build Tools Radial Menu

Press the **backtick key** (`` ` ``) while in Build Mode to open the radial menu. This gives you access to eight shape-based placement tools. Select a tool from the ring, then click in the world to use it.

The **center button** of the radial menu toggles **Hollow Mode** — when enabled, shapes are placed as empty shells instead of solid fills. Hollow mode applies to all tools except Single.

### Single

The default mode. Place or remove one block (or one build-dimension group) per click.

### Line

Draw a straight line of blocks between two points.

1. Click to set the **start point**.
2. Click again to set the **end point** — the line fills in.

- **Scroll wheel** cycles axis restriction: Auto, XY plane, XZ plane, YZ plane.
- **Hold Left Shift** to snap to 45-degree angles (cardinals and diagonals).

### Box

Fill a 3D rectangular volume with blocks.

1. Click to set the **first corner**.
2. Click to set the **opposite corner** — the box fills in.

- **Hold Left Ctrl** for camera-based virtual positioning (build over empty space).
- Supports hollow mode.

### Circle

Place a flat circle of blocks.

1. Click to set the **center**.
2. Click to set a point on the **radius**.

- **Scroll wheel** cycles plane lock: Auto, XY, XZ, YZ.
- **Hold Left Shift** to snap angles.
- Supports hollow mode (ring).

### Curve

Draw a smooth curved line using three control points.

1. Click to set the **start point**.
2. Click to set the **end point**.
3. Click to set the **control point** — the curve fills in between the start and end, bending toward the control point.

- **Scroll wheel** cycles axis restriction.
- **Hold Left Shift** to snap angles.

### Cylinder

Build a 3D cylinder.

1. Click to set the **base center**.
2. Click to set the **radius**.
3. Click to set the **height** — the cylinder fills in.

- **Scroll wheel** cycles plane lock.
- Supports hollow mode (tube).

### Ellipsoid

Build a 3D ellipsoid (sphere or egg shape).

1. Click to set the **first corner** of the bounding box.
2. Click to set the **opposite corner** — the ellipsoid fills in.

- Supports hollow mode (shell).

### Polygon

Build a custom flat polygon with up to 8 vertices.

1. Click to place each **vertex** (minimum 3, maximum 8).
2. **Scroll wheel** adjusts target point count.
3. **Right-click** to finalize with the current points.

- The plane locks after the third point is placed.
- Supports hollow mode.

> All shape tools support **remove mode** (right-click removes instead of places), real-time **preview rendering**, and **undo/redo**.

## Accessing Advanced Build Tools

You must be in **Build Mode** (inside a ship core or build block). Hold `Left Alt` to reveal the advanced tool panel on the right side of the screen.

While holding `Left Alt`:
- Click with the mouse to place/remove blocks with the current tool active
- Scroll the mouse wheel to cycle through block orientations (for rotatable blocks)

> **Speed tip:** Hold `Left Shift` in build mode to move much faster — essential for working on large structures.

## Tool Reference

### Remove Mode

Toggles the build box from **yellow** (place) to **red** (remove). Useful for clearing large areas quickly. Works with the area sliders to remove multiple blocks at once.

### Lighten Mode

Removes all shadows and ambient occlusion rendering. Dark interiors become fully lit, making it easier to see what you are building. **Toggle it off periodically** to check how your ship actually looks with normal lighting.

### Area Sliders

Three sliders — one for each axis — expand the placement/removal box so you can place or remove multiple blocks in a rectangular volume with a single click.

> Server admins can set maximum slider values in `server.cfg`. In singleplayer the limit is configurable in the same file.

### Orientation

When a rotatable block is selected (wedges, sloped hull, directional blocks), the orientation picker lets you choose which way the block faces. You can also scroll the mouse wheel to cycle orientations while holding `Left Alt`.

### Undo / Redo

- **Undo** (`Ctrl+Z` or the button): Reverts your most recent build action.
- **Redo**: Re-applies an undone action.

Multiple undo steps are supported.

### Copy / Paste

1. Click **Copy**, then drag to select a rectangular volume.
2. Click **Paste** to place the copied region. You need the required blocks in your inventory.

**Connections are preserved** if both the controlling block and the controlled block are within the copied region.

### Symmetry Planes

Symmetry planes are the most powerful build tool. You place invisible walls that divide your structure; placing a block on one side automatically mirrors it to the other.

- Place symmetry planes on X, Y, and Z simultaneously to build in all three axes at once — this quadruples (or eighths for all three axes) your build speed.
- **Odd symmetry** mode offsets the plane to sit at the centre of a block rather than between blocks, useful for ships with an odd-numbered width.

### Mirror Mode

When symmetry planes are active, **Mirror Mode** also mirrors the **orientation** of directional blocks. Without it, a weapon turret on the left side would face the same direction as the one on the right; with mirror mode it faces the opposite direction (correctly outward).

### Remove Filter

Select a specific block type from the dropdown and only that block type will be removed when you right-click — all other blocks are ignored. Works with area sliders and symmetry planes.

This is invaluable for **refitting ships**: you can quickly strip all power blocks without accidentally removing hull or weapons.
