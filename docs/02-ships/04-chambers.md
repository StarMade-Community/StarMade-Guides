# Reactor Chambers

Chambers are special blocks that plug into your reactor to give your ship additional capabilities — jump drives, stealth, enhanced mobility, and more. They are the primary way to unlock advanced ship systems.

## How Chambers Work

Chambers must be **physically connected to the reactor** using **Reactor Conduit** blocks. A chain of conduits running from a chamber back to a Reactor Block completes the connection.

The conduit chain can be any length and can route around other blocks — it just needs to form a continuous connected path from the chamber back to a Reactor Block.

```scene
{ "height": 280,
  "blocks": [ { "from": [0,0,0], "to": [2,2,2], "block": "REACTOR_POWER" } ],
  "steps": [
    { "text": "A reactor: one group of Reactor Power blocks.", "blocks": [] },
    { "text": "Run Reactor Conduits out of the reactor. A chamber placed against the last conduit is a base chamber.",
      "blocks": [ { "from": [1,3,1], "to": [1,4,1], "block": "REACTOR_CONDUIT", "orient": 2 },
                  { "from": [0,5,0], "to": [2,5,2], "block": "MOBILITY_CHAMBER" } ] },
    { "text": "Each base chamber gets its own conduit line from the reactor.",
      "blocks": [ { "from": [3,1,1], "to": [4,1,1], "block": "REACTOR_CONDUIT", "orient": 4 },
                  { "from": [5,0,0], "to": [5,2,2], "block": "DEFENCE_CHAMBER" } ] },
    { "text": "A conduit from one chamber to another makes the new chamber an upgrade of the first, not a separate base chamber.",
      "blocks": [ { "from": [5,3,1], "to": [5,4,1], "block": "REACTOR_CONDUIT", "orient": 2 },
                  { "from": [4,5,0], "to": [6,5,2], "block": "DEFENCE_CHAMBER" } ] } ] }
```

## Chamber Capacity

Each reactor has a **chamber capacity budget** that remains fixed, regardless of the size of the reactor. Each chamber you install costs a portion of that budget. You cannot exceed 100% capacity.

Monitor your capacity usage in the ship stats panel.

## Chamber Types

| Chamber | Effect |
|---------|--------|
| **Mobility** | Upgrades ship movement speed and agility |
| **Jump** | Upgrades a ship's Jump Drive system |
| **Stealth** | Enhances a ship's Stealth system functionality, such as allowing full invisibility or longer stealth durations |
| **Recon** | Enhances scan range and detection ability |
| **Logistics** | Improves cargo and logistics handling |


## Installing a Chamber

1. In build mode, place one or more **Reactor Conduit** blocks forming a path from a Reactor Block or parent Chamber outward.
2. Place the **Chamber Block** at the end of the conduit path (touching the last conduit).
3. The chamber activates automatically when the connection is valid.

> **Tip:** Give each base chamber its own conduit line to a Reactor Block. A conduit between two chambers makes the second one an upgrade of the first, so it can only be specified from the first chamber's tree.
