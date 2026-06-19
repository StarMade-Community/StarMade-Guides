# Reactor Chambers

Chambers are special blocks that plug into your reactor to give your ship additional capabilities — jump drives, stealth, enhanced mobility, and more. They are the primary way to unlock advanced ship systems.

## How Chambers Work

Chambers must be **physically connected to the reactor** using **Reactor Conduit** blocks. A chain of conduits running from a chamber back to a Reactor Block completes the connection.

The conduit chain can be any length and can route around other blocks — it just needs to form a continuous connected path from the chamber back to a Reactor Block.

```svg
<svg width="640" height="276" viewBox="0 0 640 276" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <rect x="1" y="1" width="638" height="274" rx="12" fill="#121821" stroke="#2c3b50" stroke-width="2"/>
  <text x="320" y="36" text-anchor="middle" fill="#e8eef7" font-size="22" font-weight="bold">Connecting a Chamber</text>

  <rect x="36" y="138" width="48" height="48" rx="4" fill="#4f8fd0" stroke="#274a6b" stroke-width="2"/>
  <text x="60" y="206" text-anchor="middle" fill="#8fb6e0" font-size="12" font-weight="bold">Reactor</text>

  <g fill="#3f8c9a" stroke="#1f5560" stroke-width="2">
    <rect x="100" y="146" width="32" height="32" rx="4"/>
    <rect x="140" y="146" width="32" height="32" rx="4"/>
    <rect x="180" y="146" width="32" height="32" rx="4"/>
    <rect x="220" y="146" width="32" height="32" rx="4"/>
  </g>
  <g fill="#3f8c9a" stroke="#1f5560" stroke-width="2">
    <rect x="220" y="106" width="32" height="32" rx="4"/>
  </g>
  <text x="176" y="206" text-anchor="middle" fill="#69c6d4" font-size="12" font-weight="bold">Conduits</text>

  <rect x="280" y="138" width="48" height="48" rx="4" fill="#e09a3e" stroke="#7a531c" stroke-width="2"/>
  <text x="304" y="206" text-anchor="middle" fill="#e0b57a" font-size="12" font-weight="bold">Chamber</text>

  <rect x="216" y="58" width="40" height="40" rx="4" fill="#e09a3e" stroke="#7a531c" stroke-width="2"/>
  <text x="266" y="83" fill="#e0b57a" font-size="12" font-weight="bold">Chamber</text>

  <text x="36" y="240" fill="#aebccd" font-size="13">Conduits form an unbroken path from a reactor block to each chamber.</text>
  <text x="36" y="258" fill="#8e9bac" font-size="12">Branch the chain to feed several chambers from one reactor.</text>
</svg>
```

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
