# Shields

Shields are your ship's first layer of defence. All incoming damage hits shields before reaching your hull and blocks. When shields are depleted they enter a **recovery lockout** before recharging.

## Shield Capacitor Blocks

Place **Shield Capacitor** blocks on your ship to add shields. Each block contributes:

| Stat | Value per block |
|------|----------------|
| Capacity | 250 |
| Recharge rate | 5 / sec |

Shield radius (the zone around your ship that the shield covers) scales up with block count on an exponential curve — small ships get good coverage quickly; large ships need proportionally more blocks for full hull coverage.

## Damage Flow

## Recharge Behaviour

Shield recharge has three distinct states:

| State | Recharge rate | Trigger |
|-------|--------------|---------|
| Normal | 100% | No recent damage |
| Under fire | 25–50% | Any hit within last 30 sec |
| Lockout | 0% | Shield broken; lasts 10 sec |

> **Under fire recharge reduction** scales with current shield level — low shields regen slower (25%) than high shields (50%) while under fire.

## Power Upkeep

Shields consume power continuously: **0.4% of total shield capacity per second**, regardless of current shield level. A ship with 10,000 capacity uses 40 e/s just to maintain its shields at idle.

While actively recharging, shields consume additional power per point of recharge.

## Turret Shield Interaction

When a turret (rail-docked ship) takes damage, the **host ship absorbs the hit** through its own shields as long as the host has more than 25% shields remaining. This means large turret loadouts can quickly drain a mothership's shields.

## Improving Shields with Chambers

Shield-related chamber trees can boost:
- **Total capacity** (more buffer before breaking)
- **Recharge rate** (recover faster between engagements)
- **Recovery time** (shorter lockout after shield break)

See the [Chambers guide](../ships/05-chambers.md) for details.
