# Fleets

A fleet is a group of AI-controlled ships that act together under a single set of orders. No special block is required — fleets are created and managed entirely through the **Fleet Panel** (`K`).

## Creating a Fleet

1. Open the Fleet Panel (`K`).
2. Create a new fleet and give it a name.
3. Add ships to the fleet by selecting them from your faction's ship list.
4. The **first ship added becomes the flagship**.

## The Flagship

The flagship is the anchor of the fleet. It determines:

- The reference position for all formation modes.
- The shared target in combined targeting mode.
- The recall destination for carrier operations.

If the flagship is removed from the fleet, the next ship in the list automatically takes over as the new flagship.

## Fleet Types

When creating a fleet you assign it a **type**, which describes its intended role. This is a classification label and does not restrict which commands you can issue.

| Type | Intended Role |
|------|--------------|
| **Assault** | Front-line combat |
| **Defense** | Sector or station guarding |
| **Scouting** | Exploration and reconnaissance |
| **Supporting** | Logistics, repair, escort |
| **Cargo** | Hauling goods between locations |
| **Commerce** | Trade operations |
| **Mining** | Asteroid mining operations |
| **Salvage** | Wreck salvage operations |

## Fleet Commands

Issue commands from the Fleet Panel. Commands are grouped below by function.

### Movement

| Command | Behaviour |
|---------|-----------|
| **Idle** | Fleet holds position and ignores enemies |
| **Move** | Fleet moves to the specified sector |
| **Patrol** | Fleet patrols a route between two or more waypoint sectors |
| **Escort** | Fleet follows the flagship; attacks enemies within 1 sector radius of it |

### Combat

| Command | Behaviour |
|---------|-----------|
| **Attack** | Fleet moves to target sector and engages enemy ships |
| **Defend** | Fleet moves to sector and attacks nearby enemies; will not chase more than 2 sectors |
| **Sentry** | Fleet stays in place and attacks enemies that come into range |
| **Standoff** | Fleet engages at distance and retreats if enemies close in |
| **Repair** | Fleet disengages combat and prioritises repairs |

### Utility

| Command | Behaviour |
|---------|-----------|
| **Mine** | All non-flagship ships mine asteroids in the current sector |
| **Carrier Recall** | All ships return to the pickup rails of the last carrier they docked with |
| **Activate Remote** | Triggers a named inner-ship logic remote on every fleet member |

### Stealth & EW

| Command | Behaviour |
|---------|-----------|
| **Cloak / Uncloak** | All capable ships engage or disengage cloaking |
| **Jam / Unjam** | All capable ships enable or disable radar jamming |
| **Interdict / Stop Interdict** | All capable ships enable or disable FTL interdiction |

### Trade

| Command | Behaviour |
|---------|-----------|
| **Trade (NPC)** | Fleet moves to fulfill a trade order between two locations |
| **Trade (Active)** | Fleet actively seeks trade runs |
| **Trade (Waiting)** | Fleet waits at faction homebase to fulfill incoming trade orders |

## Formation Modes

Two formation commands keep ships in organised positions relative to the flagship:

| Formation | Behaviour |
|-----------|-----------|
| **Sentry Formation** | Holds formation while attacking nearby enemies |
| **Idle Formation** | Holds formation without engaging enemies |

> **Warning:** Formation modes are experimental and can cause movement glitches, especially with large ships or crowded sectors. Use with caution.

## Combat Settings

Each fleet has a combat engagement setting that controls unprompted aggression:

| Setting | Behaviour |
|---------|-----------|
| **Sometimes Engage** *(default)* | Fleet engages enemies opportunistically |
| **Always Engage** | Fleet attacks all enemies on sight |
| **Never Engage** | Fleet ignores all enemies unless commanded |

### Combined Targeting

When **combined targeting** is enabled, all fleet members share the flagship's current target. Every ship in the fleet focuses fire on the same enemy, updated every second. This is effective for quickly destroying individual targets but leaves other nearby threats unaddressed.

## Carrier Recall

If your fleet ships were launched from a carrier using the [Pickup Rail system](../advanced/04-docking-and-turrets.md), each ship remembers its last docking point. Issue the **Carrier Recall** command to send them all back to their pickup rails automatically.

Ships navigate back individually and re-dock when they arrive. The process completes once all ships are docked.

> Recall only works if the ship has docked to a pickup rail at least once. Ships spawned fresh without a prior docking have no recall point.
