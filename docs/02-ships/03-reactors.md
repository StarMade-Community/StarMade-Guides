# Reactors and Stabilizers

Every ship needs a power reactor to run its systems. This guide covers how to build and balance your reactor.

## Core Blocks

| Block | Role |
|-------|------|
| **Reactor Power** | Generates power. More blocks = more power regen and a higher reactor level. |
| **Reactor Stabilizer** | Keeps the reactor stable. Below 100% stability the ship takes extra damage. |
| **Reactor Conduit** | Connects chambers to the reactor (see [Chambers](04-chambers.md)). |

## Building a Reactor

Reactor Power blocks that touch each other form one reactor. Its power regen increases with every block in it.

```scene
{ "height": 260,
  "blocks": [ { "from": [0,0,0], "to": [2,2,2], "block": "REACTOR_POWER" } ],
  "steps": [
    { "text": "27 Reactor Power blocks touching each other form one reactor.", "blocks": [] },
    { "text": "The first 10 reactor blocks are free; every block after that needs one stabilizer. 27 - 10 = 17 stabilizers for 100% stability.",
      "blocks": [ { "from": [6,0,0], "to": [6,2,2], "block": "REACTOR_STABILIZER" },
                  { "from": [-4,0,0], "to": [-4,2,2], "block": "REACTOR_STABILIZER" } ] },
    { "text": "Conduits lead from the reactor to its chambers, which unlock extra ship abilities.",
      "blocks": [ { "from": [1,3,1], "to": [1,4,1], "block": "REACTOR_CONDUIT", "orient": 2 },
                  { "from": [0,5,0], "to": [2,5,2], "block": "MOBILITY_CHAMBER" } ] } ] }
```

A ship can hold more than one reactor, but only one is **active** at a time. You can switch the active reactor from the reactor panel; switching has a 10 second cooldown.

## Stability

Stability compares your stabilizers to the size of your active reactor:

> **stability = (10 + stabilizers) ÷ reactor blocks**, capped at 100%

- The first **10 reactor blocks** are stabilized for free. After that, you need **one stabilizer per reactor block**.
- Stabilizers can go **anywhere on the ship** — distance and direction from the reactor don't matter.
- Only your **20 largest stabilizer groups** count, so don't scatter them as single blocks all over the hull.

Stability does not reduce your power output, but below 100% your ship takes **extra damage** from beams and explosions (missiles and explosive effects). Cannon hits are not affected.

| Stability | Damage taken |
|-----------|--------------|
| 100% | Normal |
| 90% | About 3× |
| 50% | About 11× |
| 0% | 21× |

> **Tip:** Always aim for 100% stability. You can check it in the ship's reactor panel. Losing stabilizers in combat lowers it, so a few spare stabilizers buy you margin.

## Reactor Level

Reactor level goes up by one for every **150 reactor blocks** (0–149 blocks is level 0, 150 is level 1, 300 is level 2, and so on).

Level matters because it sets how many chamber blocks you need to activate chambers (see [Chambers](04-chambers.md)). It is also shown in the flight HUD when you select a ship (`F`), so you can quickly size up a potential adversary by its reactor level.

## Running Out of Power

Your systems draw power continuously, and more while they charge. If the reactor can't keep up, weapons and other charged systems recharge more slowly, and once they get less than 90% of the power they need at rest they start to **lose** charge.

When the active reactor loses blocks, it starts **rebooting**: for at least 15 seconds (longer the more damaged the reactor and the heavier the ship) you can't place reactor or chamber blocks or change your chambers.
