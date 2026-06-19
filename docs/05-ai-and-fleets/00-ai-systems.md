# AI Systems

StarMade has two distinct AI systems: **ship/turret AI** controlled by the AI Module block, and **AI Crew** — NPC companions you can hire and command.

---

## Ship & Turret AI

The AI Module block allows a ship or turret to operate autonomously.

### Requirements

- **One AI Module** per ship (only one is allowed — protect it well).
- Faction membership is strongly recommended so the AI knows who its enemies are. The AI can operate without a faction, but enemy identification is less reliable.

### Setup

1. Place an **AI Module** on the ship in build mode.
2. Press `R` on the AI module to open its configuration panel.
3. Set the **mode**: Ship (uses thrusters to manoeuvre) or Turret (does not use thrusters, rotates in place).
4. Set the **targeting behaviour** (see below).
5. Tick **Activate** to enable the AI.

> **Warning:** Entering the ship core **disables the AI** instantly. You must re-enable it each time you exit the core.

### Targeting Behaviour

| Setting | Effect |
|---------|--------|
| **Aim at Any** | Attacks any enemy entity within range |
| **Aim at Selected Target** | Targets only the entity selected by the host ship's pilot (turrets only) |

### Remote Activation via Structure Panel

You don't need to walk to the AI module each time. From inside the host ship:

1. Press `Delete` to open the Structure Panel.
2. Find the docked entity you want to control.
3. Enable or disable its AI from there.

You can also **toggle all docked entities at once** from the Structure Panel.

---

## AI Crew

AI Crew are NPC characters you can hire and give direct commands to.

### Hiring Crew

Crew is hired from **Advanced Shops** — these are special NPC stations found:
- In the starting sector of new worlds
- Rarely throughout the universe (check the navigation panel for Trading Guild NPCs)

Talk to the NPC at an advanced shop (`R`) to hire up to **5 active crew members**. You can have more total crew by assigning some to a ship as their home base.

### Commanding Crew

Press the **AI Control key** (default: check your key bindings — listed in the HUD as AI Control) to open the crew command panel. Select a crew member from the list on the left and issue commands.

| Command | Effect |
|---------|--------|
| Follow me | Crew member follows your character |
| Wait here | Crew member stays at current location |
| Go to point | Crew member moves to a position you designate |

### Assigning Crew to a Ship (Setting Home)

Crew members have a **home** — a ship or station they belong to. By default they spawn near where you hired them. To reassign a crew member to your ship:

1. Tell the crew member to **Follow You**.
2. Go to your ship.
3. Tell the crew member to **Go to a Point** on your ship.

The ship is now their home and they will move with it when it travels.

### Crew Management Panel

Press the **AI Config Panel key** (check key bindings) to open the full crew panel. In the **Crew** tab you can:
- Rename crew members
- Remove crew members
- Adjust individual behaviour settings

### Limits

- You can only have **5 crew members** under direct active command at a time.
- Crew assigned to a ship as their home do not count against this limit while they are stationed there.
- Discharge crew to their ship to free up active command slots.
