# Reactor Chambers

Chambers are special blocks that plug into your reactor to give your ship additional capabilities — jump drives, stealth, enhanced mobility, and more. They are the primary way to unlock advanced ship systems.

## How Chambers Work

Chambers must be **physically connected to the reactor** using **Reactor Conduit** blocks. A chain of conduits running from a chamber back to a Reactor Block completes the connection.

The conduit chain can be any length and can route around other blocks — it just needs to form a continuous connected path from the chamber back to a Reactor Block.

## Chamber Capacity

Each reactor has a **chamber capacity budget** that grows with both the number of reactor blocks and the reactor level. Each chamber you install costs a portion of that budget. You cannot exceed 100% capacity.

- **More reactor blocks** → higher reactor level → more capacity available
- Each chamber type has a fixed capacity cost
- You can install multiple different chambers as long as the total stays within budget

Monitor your capacity usage in the ship stats panel.

## Chamber Types

| Chamber | Effect |
|---------|--------|
| **Mobility** | Increases ship movement speed and agility |
| **Jump** | Enables the jump drive system (see below) |
| **Stealth** | Enables cloaking / stealth mode |
| **Scanner** | Enhances scan range and detection ability |
| **Logistics** | Improves cargo and logistics handling |

## Jump Chamber Upgrades

The Jump chamber has a **tiered upgrade path**. Each tier extends jump range and must be built on top of the previous one:

| Tier | Upgrade |
|------|---------|
| 0 | Base jump capability |
| 1 | Extended range |
| 2 | Further range |
| 3 | Maximum range |

Higher jump tiers cost more capacity and require a higher reactor level to unlock.

## Installing a Chamber

1. In build mode, place one or more **Reactor Conduit** blocks forming a path from a Reactor Block outward.
2. Place the **Chamber Block** at the end of the conduit path (touching the last conduit).
3. The chamber activates automatically when the connection is valid.

> **Tip:** You can branch conduits to connect multiple chambers to the same reactor, as long as each chamber has an unbroken path back to a Reactor Block.
