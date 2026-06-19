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

```svg
<svg width="640" height="396" viewBox="0 0 640 396" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <rect x="1" y="1" width="638" height="394" rx="12" fill="#121821" stroke="#2c3b50" stroke-width="2"/>
  <text x="320" y="38" text-anchor="middle" fill="#e8eef7" font-size="22" font-weight="bold">Damage Type vs. Defense Resistance</text>

  <g font-size="15" font-weight="bold" text-anchor="middle">
    <rect x="200" y="62" width="136" height="36" rx="6" fill="#3a2c14" stroke="#e09a3e"/>
    <text x="268" y="86" fill="#e09a3e">KINETIC</text>
    <rect x="340" y="62" width="136" height="36" rx="6" fill="#3a1f1a" stroke="#d75d49"/>
    <text x="408" y="86" fill="#d75d49">HEAT</text>
    <rect x="480" y="62" width="136" height="36" rx="6" fill="#152f44" stroke="#57b0ec"/>
    <text x="548" y="86" fill="#57b0ec">EM</text>
  </g>

  <g font-size="15" font-weight="bold" text-anchor="middle">
    <rect x="40" y="106" width="156" height="80" rx="6" fill="#1b232f" stroke="#8e9bac"/>
    <text x="118" y="152" fill="#c4cdda">SYSTEMS</text>
    <rect x="40" y="190" width="156" height="80" rx="6" fill="#1b232f" stroke="#c3ccd8"/>
    <text x="118" y="236" fill="#dde3ec">ARMOR</text>
    <rect x="40" y="274" width="156" height="80" rx="6" fill="#1b232f" stroke="#4fc3e8"/>
    <text x="118" y="320" fill="#9fe0f4">SHIELDS</text>
  </g>

  <g text-anchor="middle">
    <rect x="200" y="106" width="136" height="80" rx="6" fill="#1d4b33" stroke="#46c483" stroke-width="2"/>
    <text x="268" y="148" fill="#d4fbe5" font-size="26" font-weight="bold">0%</text>
    <text x="268" y="170" fill="#9fe6c2" font-size="12" font-weight="bold">WEAK POINT</text>
    <rect x="340" y="106" width="136" height="80" rx="6" fill="#4a221c" stroke="#e07a6b"/>
    <text x="408" y="148" fill="#f8d4cc" font-size="26" font-weight="bold">15%</text>
    <text x="408" y="170" fill="#e0a99f" font-size="12">strong resist</text>
    <rect x="480" y="106" width="136" height="80" rx="6" fill="#4a3a1a" stroke="#e0b057"/>
    <text x="548" y="148" fill="#f6e4bd" font-size="26" font-weight="bold">10%</text>
    <text x="548" y="170" fill="#d8bf8a" font-size="12">slight resist</text>
    <rect x="200" y="190" width="136" height="80" rx="6" fill="#4a3a1a" stroke="#e0b057"/>
    <text x="268" y="232" fill="#f6e4bd" font-size="26" font-weight="bold">10%</text>
    <text x="268" y="254" fill="#d8bf8a" font-size="12">slight resist</text>
    <rect x="340" y="190" width="136" height="80" rx="6" fill="#1d4b33" stroke="#46c483" stroke-width="2"/>
    <text x="408" y="232" fill="#d4fbe5" font-size="26" font-weight="bold">0%</text>
    <text x="408" y="254" fill="#9fe6c2" font-size="12" font-weight="bold">WEAK POINT</text>
    <rect x="480" y="190" width="136" height="80" rx="6" fill="#4a221c" stroke="#e07a6b"/>
    <text x="548" y="232" fill="#f8d4cc" font-size="26" font-weight="bold">15%</text>
    <text x="548" y="254" fill="#e0a99f" font-size="12">strong resist</text>
    <rect x="200" y="274" width="136" height="80" rx="6" fill="#4a221c" stroke="#e07a6b"/>
    <text x="268" y="316" fill="#f8d4cc" font-size="26" font-weight="bold">15%</text>
    <text x="268" y="338" fill="#e0a99f" font-size="12">strong resist</text>
    <rect x="340" y="274" width="136" height="80" rx="6" fill="#4a3a1a" stroke="#e0b057"/>
    <text x="408" y="316" fill="#f6e4bd" font-size="26" font-weight="bold">10%</text>
    <text x="408" y="338" fill="#d8bf8a" font-size="12">slight resist</text>
    <rect x="480" y="274" width="136" height="80" rx="6" fill="#1d4b33" stroke="#46c483" stroke-width="2"/>
    <text x="548" y="316" fill="#d4fbe5" font-size="26" font-weight="bold">0%</text>
    <text x="548" y="338" fill="#9fe6c2" font-size="12" font-weight="bold">WEAK POINT</text>
  </g>

  <text x="320" y="382" text-anchor="middle" fill="#8e9bac" font-size="13">Lower resistance = more damage taken. Hit each layer with its weak-point damage type.</text>
</svg>
```

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

### Key Takeaways and Practical Implications

- **Small hits are almost completely absorbed.** A wall of armor is nearly impenetrable against many weak shots.
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
