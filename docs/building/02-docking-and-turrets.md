# Docking & Turrets

StarMade uses a **rail-based docking system**. Ships dock to rail blocks on stations or other ships using a **Rail Docker** block. This system handles rigid docking, rotating turrets, moving platforms, automated cargo transfer, and carrier hangar docking.

## Rail Blocks

| Block | Role |
|-------|------|
| **Rail Docker** | Placed on the ship being docked; the connector end |
| **Rail Basic** | Standard docking/track rail placed on the host structure |
| **Rail Turret Axis** | Lets a docked ship rotate along one axis; chain two for full 360° |
| **Rail Rotator (CW / CCW)** | Moves a docked ship in a circular path |
| **Rail Mass Enhancer** | Increases the mass a rail can support |
| **Rail Speed Controller** | Controls movement speed along a rail |
| **Rail Load / Rail Unload** | Transfers cargo between a docked ship and connected storage |
| **Pickup Rail + Pickup Point** | Automatically docks ships that fly into the detection area |

## Docking a Ship

1. Place a **Rail Docker** on your ship. The **arrow** on its top face points toward the docking direction — it must align with the arrow on the target rail block.
2. Equip the **Rail Docking Beam** in a weapon slot via the weapons panel.
3. Fly your ship close to a **Rail Basic** (or other dockable rail) on the host structure.
4. Aim at the rail block and **fire** to connect.

> **Tip:** The Rail Docker's arrow must face toward the target block. Use the orientation tool (`Left Alt` → Orientation) to adjust it.

## Mass Limits

Each rail block supports **50 mass** by default. Add **Rail Mass Enhancer** blocks connected to the rail on the host structure to raise the limit — each enhancer adds 50 mass capacity at a small power cost per tick.

## Undocking

To undock, pilot the docked ship and fire the docking beam at open space (not aimed at a rail), or release it remotely via the **Structure Panel** (`Delete`) on the host ship.

## Turrets

A turret is a docked ship that rotates automatically to track and fire at enemies. Use a **Rail Turret Axis** on the host structure instead of a Rail Basic. A single axis allows rotation on one plane; **chain two Rail Turret Axes** (one on the host, one on an intermediate bracket docked to the first) for full pitch + yaw freedom.

### Turret Design Rules

- The **ship core must be at the bottom** of the turret structure. Nothing may be built below the core.
- Orient the Rail Docker's arrow to face the Rail Turret Axis arrow.
- The turret rotates around the docking point, so core position determines the pivot.

### Enabling AI on a Turret

1. Place an **AI Module** on the turret.
2. Press `R` on the AI module and set the mode to **Turret**.
3. Place a **Faction Module** on the turret and register it to your faction (press `R`, enter your faction signature). The AI uses this to identify enemies.
4. Enable the AI by ticking **Activate** in the AI module panel, **or** do it remotely from the Structure Panel (`Delete`) of the host ship.

### AI Targeting Modes

| Mode | Behaviour |
|------|-----------|
| Aim at Any | Attacks any enemy entity in range |
| Aim at Selected Target | Attacks the entity targeted by the host ship's pilot (`F` to select) |

> Entering the turret's core **disables the AI**. Exit before re-enabling it.

## Automatic Docking (Pickup System)

For carrier hangars, use the **Pickup Rail + Pickup Point** pair on the host:

- **Pickup Point** projects a detection sphere; any ship with a Rail Docker that enters this area docks automatically.
- **Pickup Rail** is the block the ship actually docks to.

The docked ship remembers this pickup rail and can be recalled to it automatically. This is the recommended approach for fighter bays and carrier designs — no manual beam aiming required.

## Moving Rails

Rail blocks can also carry ships along a track rather than simply holding them:

- **Rail Rotator (CW/CCW)** — rotates a docked entity in a circle.
- **Rail Speed Controller** — connected to rail blocks via `C`/`V`; the ratio of active to inactive blocks sets the movement speed (e.g. 5 active + 5 inactive = 50% speed).

This enables elevators, rotating weapon platforms, and automated launch/recovery systems.
