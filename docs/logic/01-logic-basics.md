# Logic: Basics

StarMade has a fully integrated, **Turing-complete logic system**. You can build anything from a simple light switch to a fully functional CPU using logic blocks connected to each other.

## Core Concept: Signals

Every logic block outputs one of two states: **ON** or **OFF**. These states propagate through connections to other blocks.

## The Activation Block

The most important block in the logic system is the **Activation Block**. It acts as both a switch and a signal carrier.

- Press `R` on it to manually toggle it **ON** or **OFF**.
- When ON, it sends an ON signal to every block connected to it.
- When OFF, it sends an OFF signal (or no signal) to connected blocks.

Activation blocks can be linked to:
- Other activation blocks
- Doors
- Lights
- Weapon computers (fire/stop)
- Gravity modules
- And any other activatable block

## Connecting Blocks

All logic connections use the same two-step process:

| Step | Key | Action |
|------|-----|--------|
| 1 | `C` | **Select** the block that will *send* the signal |
| 2 | `V` | **Connect** the selected block to the block that will *receive* the signal |

A visual indicator (coloured box) appears on connected blocks to show the connection.

To remove a connection, select the source block with `C` again and then press `V` on the connection target while it is already connected.

## Example: Remote Light Switch

## Chain Connections

You can create chains — activation block A → activation block B → light. When A is toggled, B receives the signal and passes it to the light.

This lets you build **remote switching panels**, **interlocked doors**, and **complex trigger sequences** from a single input.

## Connecting to Weapon Computers

Linking an activation block to a **weapon computer** fires that weapon while the activation block is ON, and stops it when OFF. This enables:

- Automated firing sequences
- Logic-triggered turrets
- Shoot-when-condition-met circuits

## Gravity Modules

Activation blocks can be linked directly to **Gravity Modules** to toggle gravity on or off. Note: the activation block must currently be directly connected to the gravity module (not through intermediate blocks).

## Command Modules

The **Command Module** block lets you send pre-configured commands to other systems on your ship or station. Unlike activation blocks (which only send ON/OFF signals), command modules execute specific actions like switching reactor configurations, toggling AI modes, or controlling shipyard operations.

### Setup

1. Place a **Command Module** block.
2. Connect it to a supported target block using `C` (on the command module) then `V` (on the target).
3. Press `R` on the command module to open its interface and configure the command.
4. Select a command type and set any required parameters.
5. Click **Execute** to run it manually, or trigger it via a **logic beam** from an activation block or logic circuit.

When triggered by logic, there is a **500 ms cooldown** between executions to prevent spam.

### Supported Targets

#### Bobby AI Module

| Command | Effect |
|---------|--------|
| Toggle AI | Flip AI on/off |
| Activate AI | Explicitly set AI on or off |
| Target Type | Set what the AI targets: Any, Selected Target, Stations, Ships, Missiles, Astronauts, Asteroids |
| Type | Set AI behavior: Ship, Fleet, Turret |

#### Reactor

| Command | Effect |
|---------|--------|
| Set Active Reactor | Switch to a specific reactor tree by ID |
| Next Reactor | Cycle to the next reactor |
| Previous Reactor | Cycle to the previous reactor |
| Reboot Reactor | Reboot the active reactor |

#### Shipyard Computer

| Command | Effect |
|---------|--------|
| Create New Design | Start a new shipyard design |
| Load Design | Load an existing design |
| Unload Design | Unload the current design |
| Spawn Design | Build the loaded design as a new ship |
| Deconstruct | Deconstruct a docked ship into a design |
| Deconstruct & Recycle | Deconstruct and recycle materials |
| Catalog to Design | Convert a catalog blueprint to a design |
| Blueprint to Design | Convert a blueprint to a design |
| Design to Blueprint | Save a design as a blueprint |
| Repair from Design | Repair a structure using its design as a template |

#### Warp Gate Computer

| Command | Effect |
|---------|--------|
| Set Target Sector | Set the warp destination coordinates |
| Activate | Turn the gate on or off |
| Toggle | Flip the gate state |

#### Rail-Docked Entities (Turrets, etc.)

Any block that can dock to a rail can be controlled:

| Command | Effect |
|---------|--------|
| Activate AI | Set docked entity AI on or off |
| Toggle AI | Flip docked entity AI state |
| Set Powered | Control power transfer to the docked entity |
| Toggle Powered | Flip power transfer state |
| Reset Rail | Reset turret to its default position and rotation |

### Use Cases

- **Automated turret control** — logic circuit detects an enemy, command module activates turret AI and sets targeting mode.
- **Reactor switching** — a button on the bridge cycles between combat and travel reactor configurations.
- **Shipyard automation** — logic triggers spawn a design when resources are ready.
- **Warp gate networks** — command modules set destination coordinates before activating the gate.

## Tips

- Connections are not affected by distance — a block on one end of your ship can control something on the other end.
- You can connect one source block to **many** targets — useful for turning on all lights at once.
- Multiple sources can connect to the same target block.
- Connections survive reloads and blueprint saves (if both blocks are included in the blueprint).

For more complex logic (NOT, AND, OR, DELAY gates), see [Logic: Gates](02-logic-gates.md).
