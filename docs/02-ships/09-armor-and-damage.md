# Armor & Damage

Understanding armor and damage types is essential for both building durable ships and designing effective weapons.

## Damage Types

All damage in StarMade is split across three types:

| Type | Description |
|------|-------------|
| **Kinetic** | Physical impact; most effective against unarmored system blocks |
| **Heat** | Thermal damage; most effective against armored hull blocks |
| **EM** | Electromagnetic; most effective against shields |

Different weapons deal different mixes of these types. The **Damage Beam**, for example, is heavily EM (≈50% EM, ≈33% Heat, ≈17% Kinetic), making it more effective against shield-heavy targets. Effect blocks connected to a weapon computer can shift its damage type distribution.

Systems, armor, and shields each have one heavy resistance, one slight resistance, and one damage type with no resistance.

| Type | Kinetic Resistance | Heat Resistance | EM Resistance |
|-|-|-|-|
| Systems | 0% | 15% | 10% |
| Armor | 10% | 0 % | 15% |
| Shields| 15% | 10% | 0% |

## Armor Blocks

**Basic Armor** blocks provide structural protection. They come in multiple colours (Grey, White, Dark Grey, Black, and many more) and shapes (full block, wedge, corner, hepta, tetra, 1/4, 1/2, 3/4 slab) for hull construction.

All armour colors and shapes have the same combat stats per block; the shape variants are purely for aesthetics and hull smoothing.

**Standard Armor** and **Advanced Armor** offer greater armor value per block but are heavier and more expensive to craft. **Advanced Armor** has lower total HP, but much higher armor value, making it stronger overall. 

| Type | HP | Armor Value | Mass |
|------|----|-------------|------|
| **Basic** | 200 | 0.1 | 0.05 |
| **Standard** | 300 | 4.4 | 0.1 |
| **Advanced** | 150 | 15.63 | 0.2 |

## How Armor Works

Armor uses an **exponential formula** to determine how much damage passes through:

```
Damage dealt = D² / (A³ + D)
```

Where `D` = incoming damage per shot and `A` = total armor value in the path of the shot.

Armor thickness is only calculated up to 32 blocks, but thicker armor is still more durable as it can maintain a 32 block thickness even as outer layers of the hull are destroyed.

**Overpenetration** occurs when a cannon hit does more than 20 times an armor block's HP before accounting for reduction by armor value. When **overpenetrating**, the cannon shell will pass straight through the block instead of stopping and spreading damage to all surrounding blocks. **Overpenetration** does not apply to damage beams and missiles.

## Armor Hit Points
Every armor block on a ship (or station, or planet...) contributes to the structure's pool of Armor Hit Points, or **AHP**.
While AHP remains above zero, heavy armor will be even tougher, and the extra damage absorbed will be incurred as AHP damage rather than block destruction.
The effect of AHP is a multiplier of the effect of armor thickness, so thin armor will still be easier to break through than thick armor even if a ship has some or all AHP remaining.

## Bombs & Armor
Just as with shields, armor's damage reduction mechanics are bypassed by bombs (the Missile/Missile combo weapon). They are a high-risk, high-reward weapon which is relatively easy for an agile ship to avoid, however a heavy and slow armored ship may be vulnerable to bombers.
Bomb damage is still absorbed by raw block hitpoints, however, so Basic and Standard Armor, with their higher hitpoints per weight, are likely the most efficient way to 'soak up' bomb explosions before the blast wave can reach critical systems.

### Key Takeaways and Practical Implications

- **Small hits are almost completely absorbed by substantial armor.** A wall of armor is nearly impenetrable against many weak shots.
- **Massive single cannon hits penetrate.** A cannon shot doing more than 20× the armor block's HP bypasses it entirely via **overpenetration**.

| Situation | Best approach |
|-----------|--------------|
| Defending against many small rapid-fire hits | Thick armor wall; Machine gun and sustained beams struggle |
| Defending against high-damage burst weapons | Harder to block; armor is penetrated by high damage |
| Attacking armored ships | Use high-damage burst combos (Charge Cannon, Sniper Cannon) to reach overpenetration threshold |
| Attacking unarmored ships | Any weapon combo works; shields are the main barrier; focus on EM damage |

## Effect Blocks and Damage Type Shifting

Linking **effect blocks** to a weapon computer shifts the weapon's Kinetic/Heat/EM distribution. Different armor tiers and special block types may have varying resistances to each damage type — this is exposed in the block properties panel in build mode.

> Effect block combinations and exact resistances are configurable on servers and may vary.
