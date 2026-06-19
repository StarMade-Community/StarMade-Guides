# Reactors and Stabilizers

Every ship needs a power reactor to run its systems. This guide covers how to build and balance your reactor.

## Core Blocks

| Block | Role |
|-------|------|
| **Reactor Block** | Generates power. More blocks = more power capacity and higher reactor level. |
| **Reactor Stabilizer** | Increases stabilization, unlocking the reactor's full output. |
| **Reactor Conduit** | Connects chambers to the reactor (see [Chambers](04-chambers.md)). |

## Power and Stabilization

Your reactor's effective power output is determined by two things: the number of **Reactor Blocks** and the **stabilization percentage** provided by your **Reactor Stabilizers**.

- **Reactor Blocks** set the maximum possible power and the reactor's **level** (more blocks = higher level).
- **Stabilizers** unlock the reactor's full output. Below 100% stabilization your ship has power generation reduced. Stabilizers can be placed anywhere on the ship — position and orientation do not matter.

## Reactor Level

Reactor level scales logarithmically with the number of reactor blocks. A small ship with a handful of reactor blocks will be level 0 or 1; a large capital ship can reach much higher levels.

Level matters primarily because it determines how many chamber modules are required to activate chambers. (see [Chambers](04-chambers.md)).

## How Much to Build

Only the first 10 **Reactor Power** modules do not require stabilization. After the first 10 modules, a balanced reactor has **equal numbers** of Reactor Power and Reactor Stabilizers, which achieves 100% stabilization. You can monitor your stabilization percentage in the ship's stats panel.

> **Tip:** Always aim for 100% stabilization. Non-stabilized Power Reactor blocks will not provide any energy!  

```svg
<svg width="640" height="330" viewBox="0 0 640 330" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <rect x="1" y="1" width="638" height="328" rx="12" fill="#121821" stroke="#2c3b50" stroke-width="2"/>
  <text x="320" y="36" text-anchor="middle" fill="#e8eef7" font-size="22" font-weight="bold">Reactor Power &amp; Stabilization</text>

  <rect x="30" y="56" width="580" height="170" rx="18" fill="#0d141d" stroke="#27384d" stroke-width="2" stroke-dasharray="6 5"/>
  <text x="46" y="78" fill="#56708c" font-size="12" font-style="italic">your ship</text>

  <g fill="#4f8fd0" stroke="#274a6b">
    <rect x="84" y="104" width="30" height="30" rx="3"/>
    <rect x="116" y="104" width="30" height="30" rx="3"/>
    <rect x="148" y="104" width="30" height="30" rx="3"/>
    <rect x="84" y="136" width="30" height="30" rx="3"/>
    <rect x="116" y="136" width="30" height="30" rx="3"/>
    <rect x="148" y="136" width="30" height="30" rx="3"/>
  </g>
  <text x="131" y="194" text-anchor="middle" fill="#8fb6e0" font-size="13" font-weight="bold">Reactor blocks</text>
  <text x="131" y="210" text-anchor="middle" fill="#8e9bac" font-size="11">one active group</text>

  <line x1="178" y1="135" x2="430" y2="120" stroke="#3f6f9c" stroke-width="2" stroke-dasharray="5 5"/>
  <g fill="#e09a3e" stroke="#7a531c">
    <rect x="432" y="92" width="28" height="28" rx="3"/>
    <rect x="470" y="104" width="28" height="28" rx="3"/>
    <rect x="448" y="132" width="28" height="28" rx="3"/>
    <rect x="500" y="92" width="28" height="28" rx="3"/>
    <rect x="528" y="120" width="28" height="28" rx="3"/>
  </g>
  <text x="498" y="184" text-anchor="middle" fill="#e0b57a" font-size="13" font-weight="bold">Stabilizers</text>
  <text x="498" y="200" text-anchor="middle" fill="#8e9bac" font-size="11">any position / distance</text>

  <rect x="30" y="248" width="430" height="22" rx="6" fill="#1b232f" stroke="#33445a"/>
  <rect x="32" y="250" width="426" height="18" rx="5" fill="#1d4b33"/>
  <text x="245" y="264" text-anchor="middle" fill="#9fe6c2" font-size="13" font-weight="bold">Stabilization 100%</text>
  <text x="476" y="264" fill="#5cb87a" font-size="13" font-weight="bold">&#10003;</text>

  <text x="30" y="296" fill="#aebccd" font-size="13">First 10 reactor blocks need no stabilizers. After that, add</text>
  <text x="30" y="314" fill="#aebccd" font-size="13"><tspan fill="#e8eef7" font-weight="bold">1 stabilizer per reactor block</tspan>&#160;to reach 100% — unstabilized blocks make no energy.</text>
</svg>
```

## Power Failure

If your power runs completely empty while under attack, the ship enters a **power failure** state — all systems go offline temporarily until power recovers. Keep enough stabilizers to maintain full capacity, and avoid over-committing power to weapons or thrusters during sustained combat.
