# Shipyards

Shipyards are Space Station based systems that allow players to design ships in a temporary virtual creative environment and mass produce those designs from a loaded design, which is similar to a [blueprint](07-multiplayer/01-catalog-and-blueprints.md). You can also dock an existing ship into a shipyard to completely deconstruct it, or repair it using an existing *loaded* design.

## Construction

Shipyards are constructed from a Shipyard Computer, Shipyard Modules, and a Shipyard Core Anchor. The computer, as with any other [system computer](06-logic/00-logic-basics.md/#connecting-to-weapon-computers), must have all of the Shipyard Modules [slaved](06-logic/00-logic-basics.md/#connecting-blocks) to it, as well as the Shipyard Core Anchor. A shipyard is only valid if the Shipyard Modules form a C shape, with both "ends" of the C being straight across from each other. A player can build as many or as few C-shaped sections as they want without affecting the function of a shipyard, provided that they are lined up. It should look [something like this](https://starmadedock.net/content/3210). The Shipyard Core Anchor can be placed anywhere within the perimeter of a Shipyard, but it is important that there are no solid blocks near it and that it is sufficiently spaced from the edges of the Shipyard to allow space for ships to take up. Note that wherever you place the Shipyard Core Anchor is where the actual [Ship Core](02-ships/01-building-a-ship.md/#spawning-a-ship-core) will appear. Ship designs will fail to load into the Shipyard Computer if there is not enough space inside the Shipyard Modules area for the ship.

## Ship Designs

Shipyards use a special type of item called 'Designs' to function. They are similar to blueprints, and can be interchanged with blueprints through the Shipyard Computer. To create a new ship, use the **Create New Design** function in the Shipyard Computer. This will create a blank design with a virtual Ship Core at the position of the Shipyard Core Anchor. Blocks cannot be placed on the virtual ship except in build mode. The virtual ship is almost identical in function to a normal ship, except for a few important aspects:
- The virtual ship cannot be edited except in the Shipyard's build mode.
- The virtual ship cannot be undocked (however, use of Flight Mode without undocking is permitted, e.g. to test [logic](06-logic/00-logic-basics.md))
- The virtual ship has a hologram-styled shader applied to all of its blocks outside of the Shipyard's build mode.
- When editing the virtual ship, regardless of permissions, the player uses a Creative Mode inventory.
- Using blocks from a linked cargo in your inventory will not actually consume materials, rather behaving like creative mode.

## Test Sector

The Test Sector is a virtual space in which a Design can be tested. Although it would seem to be a special [Sector](03-world/00-navigation.md/#sectors), it is not. It takes its surroundings from a specific location in [System](03-world/00-navigation.md/#systems) 0,0,0. As such, if there is a Pirate Station near that specific sector, it can cause problems when testing designs. Nominally, there would be no Pirate Stations present, and the player would be able to spawn in enemies of their choosing to fight or spawn static armored/shielded targets to test weapons on their design.

It should be noted that, although it is assured that use of the Test Sector imparts no penalty on the player, death while in the Test Sector results in respawning at the player's *most recently-activated* Undeathinator. This can be problematic for some players who forgot to set their spawn point at their far-out base.

## Mass Production

Assuming that all the necessary materials to construct a loaded ship design is present in the Shipyard Computer's inventory (which can be expanded with the use of Cargo), ships can be constructed, undocked, and reconstructed quickly. The Shipyard will, regardless of size, place up to 2,500 blocks per tick, meaning that a ship would have to be massive to take more than a couple minutes to be fully constructed with enough materials. Most small ships, such as drones, take only a few seconds to be constructed. In the Shipyard Computer, there is an option to undock the newly-constructed ship, so that all you have to do is move the new ship out of the way before re-loading and constructing the design again. When used properly, Shipyards can produce entire fleets of AI-controlled ships rapidly.

## Repairing Ships

Shipyards can also be used to repair damaged ships or update mass-produced ships to a new standard design. This is done through a function of the Shipyard Computer, which basically deconstructs the ship and reconstructs it according to the *loaded* design. This design does not have to bear any resemblance to the original ship. Note that, since repairing completely deconstructs the ship and rebuilds it, it resets any saved hotbar configurations. A less destructive Ship repairing solution would be to use an [Atrotech Beam](07-weapons-and-effects.md/#astrotech-beam) instead.

## Deconstructing Ships

Ships can [dock](01-building/02-docking-and-turrets.md/#docking-a-ship) to a Shipyard Core Anchor as they would with any other [Rail](01-building/02-docking-and-turrets.md/#rail-blocks), but with one notable difference; They must (counter-intuitively) have a Rail Docker somewhere on the ship. The position of the Rail Docker does not influence where the ship actually docks to the Core Anchor though. Instead, the ship is docked with the Ship Core at the position of the Shipyard Core Anchor. The Ship Core is **always** docked in alignment to the Shipyard Core Anchor.

> The Shipyard Computer can be used to deconstruct a docked ship and save it to a design, or simply deconstruct it without saving any design. This can be used to rapidly disassemble unused AI fleets or drones.










