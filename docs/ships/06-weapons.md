# Weapons

StarMade has three primary weapon types plus two utility weapons. Primary weapons can be **combined** to change how damage is delivered.

## Weapon Types

| Weapon | Role |
|--------|------|
| **Cannon** | General-purpose direct-fire; high burst, short-to-mid range |
| **Missile** | Guided projectiles; high damage, travel time, area splash |
| **Damage Beam** | Continuous damage ray; sustained DPS, long range |

**Utility weapons** (not direct damage):

| Weapon | Role |
|--------|------|
| **Push Pulse** | Knocks back nearby ships; no direct damage |
| **Tractor Beam** | Pulls or tows ships and loose objects |

## Setting Up a Weapon

Every weapon system consists of two block types:

1. **Weapon Computer** — the controller. Assign it to a hotbar slot. One per weapon system.
2. **Weapon Modules** — the actual firepower. More modules = more damage and range.

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

Two weapon computers can be **linked** — the **slave** weapon modifies the behaviour of the **primary** weapon. The primary fires; the slave only provides its secondary effect.

### Linking via the Weapon Panel

1. Open the Weapon Panel (`G`).
2. Find your primary weapon computer in the list.
3. Drag the slave weapon computer into the **slave slot** of the primary.
4. The coloured borders on the computers in the world indicate the connection.

To unlink, drag the slave out of its slot and drop it in the **unlink box**.

You can also link in-world: press `C` on the primary computer, then `V` on the slave computer.

## Ratios and DPS

The **ratio** of modules between the primary and slave determines how much of the secondary effect you receive.

```
Primary modules : Slave modules = effect ratio
```

| Example | Effect |
|---------|--------|
| 70 Cannon + 30 Cannon (slave) | LMG: ~60% rapid-fire buff, higher damage per shot |
| 50 Cannon + 50 Missile (slave) | Charge Cannon: full charge effect, lower damage per charge |
| 100 Cannon (no slave) | Full base damage, normal fire rate |

**Total DPS is determined by total block count across both computers.** Combining weapons does not increase DPS — it changes *how* that DPS is delivered.

> A weapon computer can only be used in **one combination at a time**.

## Projectile Colour

Link a **Light Source** block to a weapon computer (using `C` to select, then `V` to connect) to change the colour of that weapon's projectiles to match the light colour.

## Effect Blocks

Connecting certain **effect blocks** to a weapon computer changes the damage type distribution (Kinetic, Heat, EM). See the [Armor & Damage guide](../combat/02-armor-and-damage.md) for how damage types interact with shields and armor.
