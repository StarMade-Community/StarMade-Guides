# Logic: Gates

Building on the basics of [activation blocks and connections](00-logic-basics.md), StarMade provides four additional logic blocks that let you build complex circuits.

## Logic Gate Blocks

| Block | Behaviour |
|-------|-----------|
| **NOT** | Inverts the input signal |
| **AND** | ON only when ALL inputs are ON |
| **OR** | ON when ANY input is ON |
| **DELAY** | Passes the signal with a time delay |

All gate blocks are connected the same way as activation blocks: `C` to select a source, `V` to connect to a destination.

```svg
<svg width="640" height="312" viewBox="0 0 640 312" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <rect x="1" y="1" width="638" height="310" rx="12" fill="#121821" stroke="#2c3b50" stroke-width="2"/>
  <text x="320" y="36" text-anchor="middle" fill="#e8eef7" font-size="22" font-weight="bold">Logic Gate Blocks</text>

  <rect x="28" y="58" width="290" height="108" rx="10" fill="#161e29" stroke="#33445a"/>
  <text x="48" y="86" fill="#7fdcf2" font-size="17" font-weight="bold">NOT</text>
  <path d="M150 96 L150 148 L196 122 Z" fill="#1b2735" stroke="#4f8fd0" stroke-width="2"/>
  <circle cx="204" cy="122" r="7" fill="#161e29" stroke="#4f8fd0" stroke-width="2"/>
  <line x1="120" y1="122" x2="150" y2="122" stroke="#4f8fd0" stroke-width="2"/>
  <line x1="211" y1="122" x2="244" y2="122" stroke="#4f8fd0" stroke-width="2"/>
  <text x="48" y="118" fill="#aebccd" font-size="13">Inverts the</text>
  <text x="48" y="136" fill="#aebccd" font-size="13">input signal</text>

  <rect x="322" y="58" width="290" height="108" rx="10" fill="#161e29" stroke="#33445a"/>
  <text x="342" y="86" fill="#7fdcf2" font-size="17" font-weight="bold">AND</text>
  <path d="M470 96 L470 148 L496 148 A26 26 0 0 0 496 96 Z" fill="#1b2735" stroke="#4f8fd0" stroke-width="2"/>
  <line x1="448" y1="108" x2="470" y2="108" stroke="#4f8fd0" stroke-width="2"/>
  <line x1="448" y1="136" x2="470" y2="136" stroke="#4f8fd0" stroke-width="2"/>
  <line x1="522" y1="122" x2="544" y2="122" stroke="#4f8fd0" stroke-width="2"/>
  <text x="342" y="118" fill="#aebccd" font-size="13">ON only when</text>
  <text x="342" y="136" fill="#aebccd" font-size="13">ALL inputs are ON</text>

  <rect x="28" y="176" width="290" height="108" rx="10" fill="#161e29" stroke="#33445a"/>
  <text x="48" y="204" fill="#7fdcf2" font-size="17" font-weight="bold">OR</text>
  <path d="M168 210 Q182 240 168 270 Q204 264 222 240 Q204 216 168 210 Z" fill="#1b2735" stroke="#4f8fd0" stroke-width="2"/>
  <line x1="146" y1="222" x2="172" y2="222" stroke="#4f8fd0" stroke-width="2"/>
  <line x1="146" y1="258" x2="172" y2="258" stroke="#4f8fd0" stroke-width="2"/>
  <line x1="222" y1="240" x2="244" y2="240" stroke="#4f8fd0" stroke-width="2"/>
  <text x="48" y="236" fill="#aebccd" font-size="13">ON when ANY</text>
  <text x="48" y="254" fill="#aebccd" font-size="13">input is ON</text>

  <rect x="322" y="176" width="290" height="108" rx="10" fill="#161e29" stroke="#33445a"/>
  <text x="342" y="204" fill="#7fdcf2" font-size="17" font-weight="bold">DELAY</text>
  <rect x="476" y="214" width="52" height="52" rx="6" fill="#1b2735" stroke="#4f8fd0" stroke-width="2"/>
  <circle cx="502" cy="240" r="17" fill="none" stroke="#4f8fd0" stroke-width="2"/>
  <line x1="502" y1="240" x2="502" y2="228" stroke="#4f8fd0" stroke-width="2"/>
  <line x1="502" y1="240" x2="512" y2="246" stroke="#4f8fd0" stroke-width="2"/>
  <text x="342" y="236" fill="#aebccd" font-size="13">Passes signal</text>
  <text x="342" y="254" fill="#aebccd" font-size="13">after a time delay</text>
</svg>
```

## NOT Block

The NOT block **inverts** its input.

**Common use:** Keep a system running by default and shut it off when a condition is met, rather than turning it on.

## AND Block

The AND block outputs ON **only when every single connected input is ON**.

**Common use:** A door that only opens when two independent conditions are both met (e.g. a switch AND a timer).

## OR Block

The OR block outputs ON **when at least one connected input is ON**.

**Common use:** A system that activates from multiple independent triggers (e.g. two different switches can each open the same door).

## DELAY Block

The DELAY block passes its input signal through **after a configurable time delay**.

**Key capability: Loops.** By connecting a DELAY block's output back to its own input (or through a chain), you create a **clock** — a continuously oscillating signal.

```svg
<svg width="600" height="220" viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <rect x="1" y="1" width="598" height="218" rx="12" fill="#121821" stroke="#2c3b50" stroke-width="2"/>
  <text x="300" y="36" text-anchor="middle" fill="#e8eef7" font-size="22" font-weight="bold">Building a Clock</text>

  <rect x="120" y="92" width="120" height="56" rx="8" fill="#1b2735" stroke="#4f8fd0" stroke-width="2"/>
  <text x="180" y="126" text-anchor="middle" fill="#7fdcf2" font-size="16" font-weight="bold">DELAY</text>

  <line x1="240" y1="120" x2="288" y2="120" stroke="#4f8fd0" stroke-width="3"/>
  <path d="M288 120 L288 60 L96 60 L96 120 L116 120" fill="none" stroke="#4f8fd0" stroke-width="3"/>
  <polygon points="116,112 134,120 116,128" fill="#4f8fd0"/>
  <text x="192" y="52" text-anchor="middle" fill="#8fb6e0" font-size="12" font-weight="bold">output fed back to input</text>

  <line x1="240" y1="120" x2="240" y2="180" stroke="#33445a" stroke-width="2" stroke-dasharray="4 4"/>
  <polyline points="330,196 330,168 360,168 360,196 390,196 390,168 420,168 420,196 450,196 450,168 480,168 480,196 510,196 510,168"
            fill="none" stroke="#5cb87a" stroke-width="3"/>
  <text x="420" y="146" text-anchor="middle" fill="#9fe6c2" font-size="13" font-weight="bold">oscillating ON / OFF</text>

  <text x="300" y="214" text-anchor="middle" fill="#8e9bac" font-size="12">A clock drives repeating fire sequences, light patterns, and timers.</text>
</svg>
```

Clocks are the foundation of:

- Repeating firing sequences
- Animated light patterns
- Timer-based mechanisms
- Complex synchronised systems

## Combining Gates

Gates can be chained and combined freely. Inputs and outputs of one gate become inputs to another. Since the system is Turing-complete, any digital logic circuit you can design on paper can be built in StarMade.

### Practical Example: Airlock

```
[Button A] ─┐
            AND ──► [Inner Door]
[Pressure] ─┘

[Button A] ──► NOT ──► [Outer Door]
```

Both the inner and outer doors are managed so they never open at the same time.

## Resources

For further study on logic gate designs, search for "logic gate truth tables" or "digital electronics basics" online. The same principles apply directly to StarMade's system.
