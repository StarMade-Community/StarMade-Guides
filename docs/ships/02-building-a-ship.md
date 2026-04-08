# Building a Ship

Ships are built block by block in **Build Mode**. This guide takes you through spawning your first ship and making it flight-ready.

## Spawning a Ship Core

Press `X` (default: Spawn Ship) to place a new **Ship Core** block in the world. Give your ship a name when prompted. The core must have enough clear space around it to materialise.

> **Tip:** Don't look at the ground or a wall when spawning — the core needs room in the direction you are facing.

After spawning, enter the ship with `R` (look at the core first), then switch to build mode with `Z`.

## Build Mode Basics

In build mode you **pass through all blocks** and float freely. This makes it easy to work inside and around your ship.

| Action | Key |
|--------|-----|
| Place block | `Left Mouse Button` |
| Remove block | `Right Mouse Button` |
| Select block | `1`–`9`, `0` / Mouse wheel |
| Fast movement | `Left Shift` (hold) |
| Advanced Build Mode | `Left Ctrl` (hold) |
| Build tools radial menu | `` ` `` |
| Undo | `Ctrl+Z` |

The selected block type is shown in your hotbar. Open your inventory (`I`) to move blocks into the hotbar slots.

## Making a Ship Flyable

A bare ship core cannot move or fire weapons. At minimum you need:

1. **Power Reactor Module** — place one or more anywhere on the ship. More reactor blocks = more power generation. The layout of reactor groups affects efficiency (see [Ship Systems](03-ship-systems.md)).
2. **Thruster Module** — place one or more anywhere on the ship. More thruster blocks = more top speed and acceleration. The direction the thrusters face doesn't matter mechanically — they push the ship forward in whatever direction the core is pointed.

With both placed, switch to flight mode (`Z`) — you can now fly.

## Adding Weapons

To arm your ship:

1. Place a **Weapon Computer** block (e.g. Cannon Computer).
2. Place several **Weapon Barrel/Module** blocks near it. These are the actual gun barrels.
3. Open the **Weapon Panel** (`G`).
4. Drag the weapon computer into a hotbar slot at the bottom of the panel.
5. Close the panel and select that slot with the number keys.

The weapon computer turns **orange and pulses** when it is the last selected/placed computer — this indicates it is "active" for connections.

See [Weapons](06-weapons.md) for details on weapon types and combinations.

## Blueprint Tips

At any time, you can save your current ship as a **blueprint**:
- Open the Catalog (`U`, or the Catalog tab in inventory)
- Click **Create New Entry**
- The blueprint is saved and can later be spawned at any shop, provided you supply the required blocks

See [Catalog & Blueprints](../multiplayer/02-catalog-and-blueprints.md) for the full catalog guide.

## Good Building Practices

- Build **symmetrically** — a balanced ship handles more predictably. Use symmetry planes (see [Advanced Building](../advanced/01-advanced-building.md)) to mirror blocks automatically.
- **Protect your core** — the ship core is its most critical block. Surround it with hull and armour.
- **Protect computers and reactors** — a destroyed weapon computer disables that weapon system; a destroyed reactor drops available power.
- Use **build mode fast movement** (`Left Shift`) to move quickly around large ships.
