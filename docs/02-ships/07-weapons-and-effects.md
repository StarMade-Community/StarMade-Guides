# Weapons

StarMade has three primary weapon types, three utility weapons, and explosive warhead blocks. Primary weapons can be **linked** to a **secondary weapon** to alter the functions and stats of the primary weapon, and can be linked to an **effect system** to alter its damage type distribution. Some weapons require **weapon capacity** to fire.

## Weapon Types

**Primary Weapons**:

| Weapon | Primary Role | Secondary Role |
|--------|--------------|----------------|
| **Cannon** | Simple direct-fire projectile | Shorter range, higher rate of fire |
| **Missile** | Complex explosive projectile | Higher damage, charge up time |
| **Damage Beam** | Hitscan damage beam | Longer range, slower rate of fire |

**Utility Weapons** (no direct damage):

| Weapon | Role |
|--------|------|
| **Push Pulse** | Knocks back nearby ships; deals no direct damage |
| **Tractor Beam** | Pulls, pushes, or tows ships and loose objects |
| **Astrotech Beam** | Repairs damaged or destroyed blocks on ships | 

**Block Weapons** (deal damage on block contact):

| Weapon | Role |
|--------|------|
| Warhead | Explodes on contact with another ship; ignores shields |

## Setting Up a Weapon

Every weapon system consists of two block types:

1. **Weapon Computer** — the controller. Assign it to a hotbar slot. One per weapon system.
2. **Weapon Modules** — the actual firepower. More modules = more damage.

### Steps

1. Place a **Weapon Computer** on your ship in build mode.
2. Place **Weapon Modules** anywhere on the ship (they don't need to touch the computer).
3. Open the **Weapon Panel** (`G`).
4. Drag the computer into a hotbar slot.
5. Close the panel, switch to flight mode, and select the weapon slot.

| Weapon | Computer | Module |
|--------|----------|--------|
| Cannon | Cannon Computer | Cannon Barrel |
| Missile | Missile Computer | Missile Tube |
| Beam | Damage Beam Computer | Damage Beam Module |
| Push Pulse | Push Pulse Computer | Push Pulse Module |
| Tractor Beam | Tractor Beam Computer | Tractor Beam Module |

## Combination System

By linking a **Secondary Weapon** computer and modules to a **Primary Weapon**, you can alter the function of the primary weapon, like its range, reload speed, and damage. Including the 3 basic primary weapons, there are 12 total **Weapon Combinations**, each with unique stats and function. The ratio of **weapon modules** linked to the **Secondary Weapon** compared to the **Primary Weapon** determines how much of the modification effect is applied, with 100% of the effect being applied at a 1:1 ratio. Experiment with partial secondary effects to find the perfect weapon for your niche!

> A weapon computer can only be used in **one combination at a time**.

| Primary Weapon | Cannon Secondary | Damage Beam Secondary | Missile Secondary | No Secondary |
|----------------|------------------|-----------------------|-------------------|--------------|
| Cannon | Machine Gun | Sniper Cannon | Charge Cannon | Basic Cannon |
| Damage Beam | Constant Beam | Sniper Beam | Charge Beam | Burst Beam |
| Missile | Heat-Seeking Swarms | Long Range Lock On | Inertia Bomb | Dumbfire Missile |

> Missile/Missile creates a special shield-ignoring bomb that has no velocity of its own and must be launched from a fast moving ship. 

## Effect System

Connecting certain **effect systems** to a weapon computer changes the damage type distribution (Kinetic, Heat, EM). This will make a weapon stronger against one type of defenses and weaker against the others. At a 1:1 **Primary Weapon** to **Effect System** ratio, the damage will be increased by 33.3% for the specified damage type and reduced by 16.6% for the other two types. A **primary weapon** can be linked to both a **secondary weapon** and an **effect system** at the same time. 

Each weapon type has a different default **damage distribution**, making them better suited for dealing with different types of targets.

| Weapon Type | Kinetic | Heat | EM |
|-------------|---------|------|----|
| Cannons | 50% | 16.6% | 33.3% |
| Damage Beams | 16.6% | 33.3% | 50% |
| Missiles | 16.6% | 50% | 33.3% |

See the [Armor & Damage guide](09-armor-and-damage.md) for how damage types interact with shields and armor.

## Linking via the Weapon Panel

1. Open the Weapon Panel (`G`).
2. Find your primary weapon computer in the list.
3. Drag the secondary weapon computer into the **secondary slot** of the primary.
4. The coloured borders on the computers in the world indicate the connection.

To unlink, drag the secondary out of its slot and drop it in the **unlink box**.

You can also link and unlink in-world: press `C` on the primary computer, then `V` on the secondary computer.

## Weapon Capacity

**Missiles** require **Missile Capacity** to fire. **Missile Capacity Modules** give a ship **Missile Capacity**, which is consumed when firing a **missile**. 
If a ship's **Missile Capacity** is not full, it will start reloading, with the length of time depending on how much **Missile Capacity** the ship has. 

Each **Missile Capacity Module** added gives diminishing returns, with the first few blocks giving a lot of **Missile Capacity**, but further capacity requiring exponentially more modules for each additional unit. This creates a soft cap on the number of missiles that a single ship can actually fire in a single volley.

## Projectile Colour

Link a **Light Source** block to a weapon computer (using `C` to select, then `V` to connect) to change the colour of that weapon's projectiles to match the light colour.

# Utility Weapons 

Utility weapons do no damage on their own, instead having some sort of support function to either reduce the effectiveness of an enemy or boost the effectiveness of your own ships.

## Push Pulse

Push Pulse projects an area of effect pulse that pushes ships away from its origin point. The more modules, the larger and more powerful the pushing effect is.

## Tractor Beam

Tractor Beams can push, pull, and stop a ship or asteroid by applying force at the point of the beam's impact. More modules increases the tractor strength. A small, slowly drifting asteroid is much easier to stop than a large ship that is actively fighting the tractor beam with its own thrusters.

## Astrotech Beam

Astrotech beams can repair damaged blocks and restore destroyed blocks on a ship. The ship must not have been edited with build mode after the blocks were destroyed for it to be repaired by an astrotech beam, as astrotech restores the ship to its last saved state. More modules increases the amount of blocks restored with each burst of the beam.

> There is a cooldown period after taking block damage before any blocks can be repaired by an astrotech beam.

# Warheads

Warheads are explosive blocks that detonate when hit by a weapon or when they collide with another object. All warheads in a contiguous group are automatically linked together and will detonate together, with the strength of the explosion determined by how many blocks are in the group. The explosion from warheads ignores shields. 

Warheads can be combined with shootout rails and a Bobby AI module to create powerful, single use "torpedo" ships that attempt to ram enemy ships with their warheads.