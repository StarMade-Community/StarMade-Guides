# Armor & Damage

Understanding armor and damage types is essential for both building durable ships and designing effective weapons.

## Damage Types

All damage in StarMade is split across three types:

| Type | Description |
|------|-------------|
| **Kinetic** | Physical impact; most effective against physical structures |
| **Heat** | Thermal damage; bypasses some resistances |
| **EM** | Electromagnetic; most effective against electronics and shields |

Different weapons deal different mixes of these types. The **Damage Beam**, for example, is heavily EM (≈50% EM, ≈33% Heat, ≈17% Kinetic), making it more effective against shield-heavy targets. Effect blocks connected to a weapon computer can shift its damage type distribution.

## Armor Blocks

**Basic Armor** blocks provide structural protection. They come in multiple colours (Grey, White, Dark Grey, Black, and many more) and shapes (full block, wedge, corner, hepta, tetra, 1/4, 1/2, 3/4 slab) for hull construction.

All armour variants have the same combat stats per block; the shape variants are purely for aesthetics and hull smoothing.

> Higher-tier armor blocks offer greater HP per block but are more expensive to craft.

## How Armor Works

Armor uses an **exponential formula** to determine how much damage passes through:

```
Damage dealt = D² / (A³ + D)
```

Where `D` = incoming damage per shot and `A` = total armor HP in the path of the shot.

### Key takeaways

- **Small hits are almost completely absorbed.** A wall of armor is nearly impenetrable against many weak shots.
- **Massive single hits penetrate.** A weapon doing more than 20× the armor block's HP bypasses it entirely via **overpenetration**.
- **Depth doesn't multiply** — armor blocks in a line each absorb independently; there is no stacking bonus for wall thickness beyond the sum of individual block HP.
- **Non-armor blocks** (hull, system blocks) are unprotected but overpenetration still requires at least 2,500 damage per shot to punch through them directly.

## Practical Implications

| Situation | Best approach |
|-----------|--------------|
| Defending against many small rapid-fire hits | Thick armor wall; LMG and sustained beams struggle |
| Defending against high-damage burst weapons | Harder to block; armor is bypassed at high D |
| Attacking armored ships | Use high-damage burst combos (Charge Cannon, Bomb, Artillery) to reach overpenetration threshold |
| Attacking unarmored ships | Any weapon works; shields are the main barrier |

## Effect Blocks and Damage Type Shifting

Linking **effect blocks** to a weapon computer shifts the weapon's Kinetic/Heat/EM distribution. Different armor tiers and special block types may have varying resistances to each damage type — this is exposed in the block properties panel in build mode.

> Effect block combinations and exact resistances are configurable on servers and may vary.
