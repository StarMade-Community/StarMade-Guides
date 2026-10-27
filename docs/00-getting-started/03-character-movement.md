# Character Movement

Your character moves in two very different ways: walking where there is **gravity**, and floating freely in **zero gravity**.

## Gravity

Planets always have gravity. On ships and stations you need a **Gravity Unit** block: look at it and press `R` to step into its gravity field. Its gravity pulls toward the bottom of the block, so place it the way you want "down" to point.

| Action | Key |
|--------|-----|
| Walk | `W` `A` `S` `D` |
| Sprint | Double-tap `W` and hold |
| Jump | `Space` |
| Crouch | `Left Shift` (hold) |
| Prone | `Z` (press again or `Space` to stand) |
| Look | Mouse |
| Activate a block | `R` |

- **Crouching** halves your speed and lowers your view. You stay crouched while there's a low ceiling above you.
- **Prone** is very slow but keeps you low to the ground. You can't go prone while swimming, sitting or climbing.
- **Sprint** only works going forwards.

### Doors into Gravity

```scene
{ "height": 260,
  "blocks": [ { "from": [0,0,0], "to": [6,0,5], "block": "GREY_HULL" },
              { "from": [0,1,3], "to": [2,3,3], "block": "GREY_HULL" },
              { "from": [4,1,3], "to": [5,3,3], "block": "GREY_HULL" },
              { "at": [3,3,3], "block": "GREY_HULL" },
              { "at": [6,1,1], "block": "GRAVITY_UNIT", "orient": 3 } ],
  "steps": [
    { "text": "A room with a Gravity Unit. Without a door trigger you have to walk up to it and press R.", "blocks": [] },
    { "text": "Fill the doorway with Trigger (Area) blocks and link them to a Trigger (Area) Controller.",
      "blocks": [ { "at": [2,1,3], "block": "TRIGGER_AREA_CONTROLLER" },
                  { "from": [3,1,3], "to": [3,2,3], "block": "TRIGGER_AREA", "controller": [2,1,3] } ] },
    { "text": "Put an Activation Module against the controller and link it to the Gravity Unit. Walking through the doorway now puts you in the room's gravity.",
      "blocks": [ { "at": [2,2,3], "block": "ACTIVATION_MODULE" },
                  { "at": [6,1,1], "block": "GRAVITY_UNIT", "orient": 3, "controller": [2,2,3] } ] } ] }
```

A **Trigger (Area)** wired through logic to a Gravity Unit switches you into that gravity field as you walk through it, so you don't have to press `R` at the entrance. A **Gravity Exit Unit** used the same way takes you out of the field again. See [Logic Basics](../06-logic/00-logic-basics.md).

### Ladders

```scene
{ "height": 240,
  "blocks": [ { "from": [0,0,0], "to": [4,0,4], "block": "GREY_HULL" },
              { "from": [0,1,0], "to": [4,4,0], "block": "GREY_HULL" },
              { "from": [0,4,-3], "to": [4,4,-1], "block": "GREY_HULL" },
              { "from": [2,1,1], "to": [2,4,1], "block": "LADDER", "orient": 15 } ] }
```

Walk into a **Ladder** block to grab it. Hold `W` to climb; let go and you slide back down. Press `Space`, `S`, `A` or `D` to let go of the ladder.

### Swimming

In water you swim in the direction you look. `Space` swims up, and at the surface it climbs you out. You can't sprint or go prone in water.

## Zero Gravity

Outside a gravity field you float freely in all six directions.

| Action | Key |
|--------|-----|
| Move forward / backward | `W` / `S` |
| Strafe left / right | `A` / `D` |
| Move up / down | `E` / `Q` |
| Slow drift | `Left Shift` (hold) |
| Look | Mouse |
| Align to the structure in front of you | `Space` |

A **Thrust Pack** worn in your back slot makes you much faster in zero gravity.

## Aligning to a Structure

When you are floating near a ship or station, press `Space` to **align** to it. You then **move with the structure** wherever it goes.

This is very useful for:

- Moving around inside a piloted or AI-controlled ship without getting bashed into walls or left behind entirely when it moves
- Fitting through small doors, hallways, and vertical shafts which may only accommodate a character facing the right direction
- Placing blocks with the proper orientation as an astronaut (the build preview [`CTRL`] updates its orientation with your alignment)

To let go, press `Space` again while not looking at the structure. If it is moving fast, the game asks you to confirm first.

## Magnetic Boots

**Magnetic Boots**, worn in your feet slot, let you stand on any surface: ships, stations and planets, including walls, ceilings and cliff faces, with no gravity module needed.

- Press `` ` `` while looking at a surface within reach to stand on it.
- Press it at another surface to move onto that one.
- Press it while looking at nothing to let go.
- In zero gravity, `Space` (Align) also locks the boots on.

To wear gear, drag it into its slot on the **Equipment** tab of your inventory.

## Tips

- In build mode, movement is the same as zero gravity, but you pass through blocks. Hold `Left Shift` to move much faster around large ships.
- Mining is done with a ship's salvage beam, not by hand. See [Resources & Mining](../03-world/01-resources-and-mining.md).
