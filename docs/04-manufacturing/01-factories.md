# Factories & Production

Production or 'crafting' in StarMade is primarily achieved via various types of **Factories**. A full production line requires multiple linked factories.

## Types of Factories

### Refineries
- Basic Capsule Refinery: Produces mesh/composite from basic ores, and refined resource Capsules from uncommon ores.
- Catalytic Capsule Refinery: Consumes Catalyst items to refine ores more efficiently than the Basic Refinery. Catalysts require extremely rare resources to manufacture.

### Manufacturing Factories
- Component Fabricator: Produces any Component from Capsules/Mesh/Composite.
- Block Assembler: Creates blocks from Components.
- Chemical Factory: Produces Catalysts from ultra rare resources for enhanced refining in the Catalytic Capsule Refinery. (In future versions of StarMade, the Chemical Factory will also produce other intermediate products for efficient specialized refining and Component production.)
- Shipyard: Produces Ships matching provided blueprints or existing ships, deconstructs existing ships back into their constituent parts, or allows you to create new designs without spending blocks and then produce ships from those designs later.

### Reclamation Factories
- Block Recycler: Reclaims the constituent Components from any Block placed inside it.
- Micro Reprocessor: Transforms decayed scrap materials, as well as advanced metals and crystals, into basic Metal Mesh and Crystal Composite used by the Compoenet Fabricator.

## Placing a Factory

Factories can only be placed on a **station** or a **planet** - they cannot be placed on ships.

Factories require **power** to operate. You can supply power by:
- Shooting the factory with a personal power beam
- Placing a group of **Reactor Power** blocks on the same entity as the factory to generate power.

## Setting Up Production

1. Press `R` on the factory to open its interface.
2. Click **Change Production**.
3. Use the search filter to find the item you want to produce (e.g. type "reactor" to find Reactor Power Module).
4. Select the item from the dropdown.
5. Click **View Graph** to see the full crafting tree for that item.

## The Graph View

The **View Graph** button shows the entire crafting tree as a flowchart. The factory only processes the **topmost step** — everything below it must be handled by separate factories.

### Example: Power Reactor Module

```
[Power Reactor Module]   ← your Block Assembler produces this
  ├─ [Structural Frame]  ← a Component Fabricator must provide this
  │    └─ [Metal Mesh]   ← a Capsule Refinery/Micro Reprocessor provides this
  └─ [Energy Cell]       ← a Component Fabricator must provide this
       ├─ [Metal Mesh]
       └─ [Crystal Composite]
```

Your Block Assembler factory takes the **Structural Frame** and **Energy Cell** components as inputs, and outputs **Power Reactor Modules**. You need additional factories set up to produce each of those, which in turn must be supplied raw materials from a Refinery factory.

## Factory Linking (Chaining)

Factories can pull ingredients from other Factories or Storages automatically using connections:

1. Press `C` on the factory that needs to be supplied with items.
2. Press `V` on the factory or storage block that produces or holds those items.
3. The first factory will now draw needed materials from the second automatically.

With a properly linked chain, you place raw materials into the bottom factory and the top factory outputs the final product — everything in between is handled automatically.

## Accelerating production

By default, factories can only process one item at a time. If you plan on building a mighty star cruiser to conquer the universe, this is extremely slow!
Factory Enhancers are extremely useful blocks that allow you to batch-process multiples of an item at once using a single Factory. Each Factory Enhancer represents one extra item/block your Factory can produce at once.
Pressing `C` on the factory and `V` on a Factory Enhancer links it to the factory. `Shift`+`V` can link entire groups of enhancers at once.

Only one Factory can make use of any given Factory Enhancer block(s) at a time.

If you have a heavily-enhanced factory but only need 1 of something, you can set a production limit in the factory's UI panel.

## Factory Manager

The **Factory Manager** block automates an entire production chain. Instead of manually setting recipes and linking factories one by one, a Factory Manager analyzes what needs to be built, figures out what raw materials are missing, and assigns recipes to connected factories automatically.

### How It Works

1. **Place a Factory Manager** on your station.
2. **Connect it to your factories** — link the Factory Manager to every factory you want it to control using `C` (on the manager) and `V` (on each factory). It supports all factory types.
3. **Connect it to storage** — link the Factory Manager to inventories (storage blocks) so it can see what raw materials are available.
4. **Place an order** — tell the manager what you want produced. Orders can come from:
   - A **factory** — the manager reads what recipe is set and ensures all intermediate ingredients are produced.
   - A **shipyard** — the manager produces all blocks needed for a ship under construction.
   - A **storage filter** — the manager keeps a storage filled to the quantities defined in its filter.

### Order Processing

When an order is placed, the Factory Manager:

1. **Walks the crafting tree** — starting from the requested item, it recursively determines every intermediate product and raw material needed.
2. **Checks inventories** — it scans connected storage to see what materials are already available and reserves them.
3. **Identifies shortages** — any raw material that no connected factory can produce is added to a **shopping list** (materials the player must supply).
4. **Prioritizes production** — items are sorted by urgency. Bottleneck ingredients (ones blocking other production steps) are prioritized over items already in surplus.
5. **Assigns recipes to factories** — the manager sets each connected factory's recipe and production limit automatically, activating idle factories and shutting down ones with nothing to produce.

### Production Capacity

The Factory Manager accounts for the **capability** of each factory (based on the amount of Factory Enhancers linked to the given factory block). When deciding how much to produce per cycle, it estimates combined capacity as roughly the sum of all factory capabilities of a given type, ensuring larger factories are assigned work first.

### Shopping List & Clipboard

The Factory Manager tracks two resource lists:

- **Needed (remaining)** — raw materials still required to complete the current order.
- **Total** — all raw materials the full order requires from the start.

Both lists can be **copied to the clipboard** directly from the Factory Manager interface, making it easy to see exactly what you need to gather.

### Graph View Colors

When viewing the crafting graph through a Factory Manager, nodes are color-coded:

| Color | Meaning |
|-------|---------|
| Green | Resource is fully stocked |
| Blue | Resource is partially available |
| Red | Resource is missing or insufficient |

## Tips

- **Power matters.** A factory without power stalls. Build a sufficiently large reactor in order to supply your factory.
- **Use View Graph every time** you set up a new production line — it clearly shows exactly what inputs the factory expects at each step.
- Multiple factories can be linked to one source factory — the source will supply whatever any of its connected factories need.
- **Use a Factory Manager** for complex production chains — it eliminates the tedious manual setup of recipe assignment and linking, especially when producing blocks that require many intermediate steps.
- **Reduce, reuse, recycle!** All blocks are made from a small selection of common Components. If you have spare blocks from a previous building project, salvage mission, or loot from combat, they may be a gold mine in disguise! Try disassembling leftover blocks in the Block Recycler and see if they provide the necessary Components for your new project, before running off on a mining trip for fresh resources.
