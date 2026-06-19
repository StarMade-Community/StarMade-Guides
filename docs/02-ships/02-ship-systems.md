# Ship Systems

StarMade uses a **block-group** system to determine how sets of same-type blocks behave together. This is most important for weapons, where grouping affects how shots are fired.

## What is a Block Group?

A block group is a set of **blocks of the same type that are all touching each other** (face-to-face, not diagonal). A solid cube is one block group. A straight line is also one block group. A single isolated block is its own group.

## Reactors

Reactors are the core of your ship, generating the **energy** that all other ship systems use to function, and are the central linking point for your reactor **chambers**, which modify other ship systems. See [Reactors](03-reactors.md).

## Chambers

Chambers are sub-systems that branch off from your **reactor** and modify the function of other systems on your ship (such as shields, jump drives, and thrusters), or give you new systems (such as scanners and stealth drives). See [Chambers](04-chambers.md).

## Thrusters

Thruster modules add to your ship's maximum speed and acceleration. More blocks equals more thrust. Higher thrust to mass ratio gives you a higher top speed. See [Thrusters](05-thrusters.md).

## Shields

Shield modules generate a shield that absorbs damage before it reaches your hull. Shield recharge requires power, so size your reactors to support your shield blocks. See [Shields](06-shields.md).

## Weapon and Salvager Groups

Each contiguous group of weapon, salvager, or astrotech barrel/module blocks fires **as a single shot**. You can choose between:

| Layout | Effect |
|--------|--------|
| All barrels in one touching group | One powerful shot |
| Multiple separate groups | Multiple weaker simultaneous shots |

The weapon or salvage **computer** is a separate block and doesn't need to touch the barrels — it is connected via the link system. See [Weapons](07-weapons-and-effects.md) and [Salvagers](08-salvagers.md).


