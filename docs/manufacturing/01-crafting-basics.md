# Crafting Basics

StarMade's crafting system is based on a **consistence tree** — a hierarchy of ingredients where higher-tier items are made from lower-tier ones, all the way down to raw ores and shards.

## The Consistence Tree

Think of crafting like a tree with branches:

- The **root** is the item you want to make.
- Each **branch** is an ingredient required for that item.
- Each ingredient branch has its own sub-branches (its own ingredients).
- Trees never loop — an item is never an ingredient of itself.

A factory only performs the **last step** of a tree. To make a Power Reactor Module, the factory consumes Metal Mesh and Active Varat Processor — you need a separate factory to make each of those from their own ingredients.

## Recipes (Fixed)

Some items use a **recipe** instead of a consistence tree. These are fixed:

| Recipe | Output |
|--------|--------|
| 10 ore capsules (any type) | 1 Metal Mesh |
| 10 shard capsules (any type) | 1 Crystal Circuit |

## Step-by-Step: First Materials

### 1. Mine Raw Resources

Go to an asteroid field and mine ores and shards with the right mouse button (no weapon selected).

### 2. Personal Capsule Refinery

Open your inventory (`I`) and click **Craft Capsule**. This opens your personal capsule refinery.

- Put one stack of raw ore or shards in the input slot.
- Leave the second slot empty — the product (capsules) will appear there.
- Wait for processing to complete.

> You can only process **one type** at a time in the personal refinery because it needs a free slot for the output. Factory blocks are more efficient for bulk processing.

### 3. Personal Micro-Factory

In your inventory, click **Micro** to open the personal micro-factory.

- Place **10 capsules** (all the same type: all ore capsules, or all shard capsules).
- After a moment you get:
  - **10 ore capsules → 1 Metal Mesh**
  - **10 shard capsules → 1 Crystal Circuit**

### 4. Personal Macro-Factory Craft

When you have **10 Metal Meshes** or **10 Crystal Circuits**, click **Craft Macro** in your inventory to craft your first **Macro Factory** block.

This factory can produce any craftable block in the game — see [Factories & Production](02-factories.md) for how to use it.

## Material Summary

| Raw → Capsule | Capsule × 10 → |
|--------------|----------------|
| Ore → Ore Capsule | Metal Mesh |
| Shard → Shard Capsule | Crystal Circuit |

Metal Mesh and Crystal Circuit are ingredients in virtually every block recipe.
