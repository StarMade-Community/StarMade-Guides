# Logic: Gates

Building on the basics of [activation blocks and connections](02-logic-basics.md), StarMade provides four additional logic blocks that let you build complex circuits.

## Logic Gate Blocks

| Block | Behaviour |
|-------|-----------|
| **NOT** | Inverts the input signal |
| **AND** | ON only when ALL inputs are ON |
| **OR** | ON when ANY input is ON |
| **DELAY** | Passes the signal with a time delay |

All gate blocks are connected the same way as activation blocks: `C` to select a source, `V` to connect to a destination.

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

**Key capability: Loops.** By connecting a DELAY block's output back to its own input (or through a chain), you create a **clock** — a continuously oscillating signal. Clocks are the foundation of:

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
