# Ship Systems

StarMade uses a **block-group** system to determine how sets of same-type blocks behave together. This is most important for weapons, where grouping affects how shots are fired.

## What is a Block Group?

A block group is a set of **blocks of the same type that are all touching each other** (face-to-face, not diagonal). A solid cube is one block group. A straight line is also one block group. A single isolated block is its own group.

## Thrust

Thruster modules add to your ship's maximum speed and acceleration. More blocks equals more thrust. Group them together for compactness.

## Shields

Shield modules generate a shield that absorbs damage before it reaches your hull. Shield recharge requires power, so size your reactors to support your shield blocks.

## Weapon Groups

Each contiguous group of weapon barrel/module blocks fires **as a single shot**. You can choose between:

| Layout | Effect |
|--------|--------|
| All barrels in one touching group | One powerful shot |
| Multiple separate groups | Multiple weaker simultaneous projectiles |

**Multiple separate weapon groups incur a penalty** — the more groups you have, the less efficient each one is. For maximum single-target damage, keep barrel modules in one large connected group.

> The weapon **computer** is a separate block and doesn't need to touch the barrels — it is connected via the link system (see [Weapons](06-weapons.md)).
