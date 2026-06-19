# Shields

Shields are your ship's first layer of defence. All incoming damage hits shields before reaching your hull and blocks. When shields are depleted they enter a **Shield Outage** before recharging.

```svg
<svg width="640" height="262" viewBox="0 0 640 262" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <rect x="1" y="1" width="638" height="260" rx="12" fill="#121821" stroke="#2c3b50" stroke-width="2"/>
  <text x="320" y="36" text-anchor="middle" fill="#e8eef7" font-size="22" font-weight="bold">Damage Hits Shields First</text>

  <line x1="36" y1="140" x2="214" y2="140" stroke="#e09a3e" stroke-width="6"/>
  <polygon points="214,128 240,140 214,152" fill="#e09a3e"/>
  <text x="42" y="124" fill="#e09a3e" font-size="13" font-weight="bold">Incoming damage</text>

  <rect x="250" y="64" width="350" height="152" rx="14" fill="#10303b" stroke="#4fc3e8" stroke-width="2"/>
  <rect x="296" y="92" width="258" height="96" rx="10" fill="#2a313b" stroke="#c3ccd8" stroke-width="2"/>
  <rect x="348" y="116" width="154" height="48" rx="8" fill="#1b232f" stroke="#8e9bac" stroke-width="2"/>
  <rect x="408" y="128" width="34" height="24" rx="4" fill="#4a3a1a" stroke="#e0b057"/>

  <text x="270" y="84" fill="#7fdcf2" font-size="14" font-weight="bold">SHIELDS</text>
  <text x="312" y="110" fill="#dde3ec" font-size="13" font-weight="bold">ARMOR</text>
  <text x="425" y="186" text-anchor="middle" fill="#aab7c6" font-size="12" font-weight="bold">SYSTEMS</text>

  <text x="320" y="246" text-anchor="middle" fill="#8e9bac" font-size="13">When shields are depleted they enter an outage; hits then pass to armor, then internal systems.</text>
</svg>
```

## Shield Capacitor Blocks

Place **Shield Capacitor** blocks on your ship to add shield capacity. Each block contributes:

| Stat | Value per block |
|------|----------------|
| Capacity | 250 |

Every contiguous group of **Shield Capacitors** forms a **Capacity Bank.** A ship can only have up to 20 **Capacity Banks**, so make sure your **Shield Capacitors** are grouped together to avoid going over the limit.

## Shield Recharger Blocks and Shield Radius

**Shield Rechargers** convert **Reactor Power** into Shields, which are stored by **Shield Capacitors** inside their **Shield Radius**. Each block contributes:

| Stat | Value per block |
|------|----------------|
| Recharge | 5/second |

And costs:

| Stat | Value per block |
|------|----------------|
| Reactor Power | 10/second |

This **Reactor Power** cost does not change whether the **Shield Rechargers** are resting or actively charging.

**Shield Radius** (the zone around your ship that the shield covers) projects from the center of each contiguous group of **Shield Rechargers**, and scales up with block count on an exponential curve — small ships get good coverage quickly; large ships need proportionally more blocks for full hull coverage. It is not a "shield bubble"; The shield is skin-tight to the hull of the ship, and the **Shield Radius** just shows what part of the hull is covered.

Each contiguous group of **Shield Rechargers** produces its own **Shield Radius**. If the center of one **Shield Radius** is inside another **Shield Radius**, the smaller of the two will be disabled.

**Shield Radius** determines which which **Capacity Banks** are charged by which **Shield Recharger** group. To be charged, a **Capacity Bank** must be inside the **Shield Recharger** group's **Shield Radius**. Each **Capacity Bank** can only belong to one **Shield Recharger** group, so in the event of **Shield Radius** overlap, the **Capacity Bank** will go to the largest **Shield Recharger** group. **Capacity Bank** ownership is indicated by pink arrows from the center of the **Capacity Bank** to the center of the **Shield Recharger** group.

## Shield Upkeep 

Each point of **Shield Capacity** also requires 0.004 points of **Shield Upkeep** per second. This equates to 1 point per block of **Shield Capacitors**. If **Shield Recharge** is less than the **Shield Upkeep** cost, the **Capacity Bank** will drain until it reaches zero.

## Recharge Behaviour

A **Shield Recharger** group that has not taken any damage for the last 30 seconds will recharge at its full rate regardless of how much **Shield Capacity** the group currently has.

**Shield Under Fire** is a debuff that lasts for 30 seconds after a **Shield Recharger** group has taken Shield damage. During this time, **Shield Recharge** is reduced, from a 0% reduction at 100% **Shield Capacity** to a 50% reduction at 20% **Shield Capacity**. The amount of reduction is based on the lowest percentage the **Shield Recharger** group reached while afflicted with the debuff, rather than the current **Shield Capacity**.

**Shield Outage** is a debuff that lasts for 10 seconds after a **Shield Recharger** group has reached 0% **Shield Capacity**. During this time, **Shield Recharge** for this group is completely disabled.

## Turrets/Docks Shield Interaction

Turrets and docked ships have their shields disabled while they are docked. When they are hit by weapons, they will be protected by the shields of the ship or station they are docked to instead.

## Improving Shields with Chambers

Shield-related chamber trees can boost:
- **Total capacity** (more buffer before breaking)
- **Shield upkeep** (less shield upkeep cost)
- **Recovery time** (shorter lockout after shield break)

See the [Chambers guide](04-chambers.md) for details.

## Tips and Tricks

> While it is possible to have multiple groups of **Shield Rechargers** on one ship, it is almost always better to just have a single group that covers the entire ship.

> It's important to make sure you have enough **Shield Regen** to still regenerate while afflicted with the **Shield Under Fire** debuff. If your **Shield Upkeep** exceeds your **Shield Regen** you will rapidly lose your shields and start taking hull damage.