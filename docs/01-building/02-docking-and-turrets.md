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

```svg
<svg width="640" height="330" viewBox="0 0 640 330" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <rect x="1" y="1" width="638" height="328" rx="12" fill="#121821" stroke="#2c3b50" stroke-width="2"/>
  <text x="320" y="36" text-anchor="middle" fill="#e8eef7" font-size="22" font-weight="bold">Two-Axis Turret</text>

  <rect x="40" y="270" width="560" height="34" rx="6" fill="#1b232f" stroke="#33445a"/>
  <text x="320" y="292" text-anchor="middle" fill="#7e8da0" font-size="12" font-style="italic">host ship / station surface</text>

  <rect x="244" y="236" width="60" height="34" rx="5" fill="#3f6f9c" stroke="#274a6b" stroke-width="2"/>
  <text x="316" y="258" fill="#8fb6e0" font-size="12" font-weight="bold">Rail Turret Axis 1 (yaw)</text>
  <path d="M210 236 A60 22 0 0 1 338 236" fill="none" stroke="#5cb87a" stroke-width="2" stroke-dasharray="4 3"/>
  <polygon points="338,236 326,228 330,242" fill="#5cb87a"/>

  <rect x="232" y="176" width="84" height="60" rx="6" fill="#2a313b" stroke="#c3ccd8" stroke-width="2"/>
  <text x="274" y="210" text-anchor="middle" fill="#aab7c6" font-size="12">base</text>

  <rect x="316" y="186" width="34" height="40" rx="5" fill="#3f6f9c" stroke="#274a6b" stroke-width="2"/>
  <text x="358" y="210" fill="#8fb6e0" font-size="12" font-weight="bold">Axis 2 (pitch)</text>

  <rect x="333" y="176" width="150" height="20" rx="5" fill="#4f8fd0" stroke="#274a6b" stroke-width="2" transform="rotate(-24 333 186)"/>
  <text x="452" y="118" fill="#8fb6e0" font-size="12" font-weight="bold">barrel</text>
  <path d="M388 168 A48 48 0 0 1 420 132" fill="none" stroke="#5cb87a" stroke-width="2" stroke-dasharray="4 3"/>
  <polygon points="420,132 408,135 416,144" fill="#5cb87a"/>

  <rect x="262" y="244" width="24" height="24" rx="3" fill="#e09a3e" stroke="#7a531c" stroke-width="2"/>
  <line x1="274" y1="256" x2="150" y2="256" stroke="#e09a3e" stroke-width="1.5" stroke-dasharray="3 3"/>
  <text x="46" y="252" fill="#e0b57a" font-size="12" font-weight="bold">Ship core</text>
  <text x="46" y="268" fill="#8e9bac" font-size="11">at the bottom</text>

  <text x="320" y="322" text-anchor="middle" fill="#8e9bac" font-size="13">Chain two Rail Turret Axes for full yaw + pitch tracking. Nothing below the core.</text>
</svg>
```

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
