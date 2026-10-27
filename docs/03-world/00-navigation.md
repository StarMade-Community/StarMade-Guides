# Navigation

The StarMade universe is vast. Understanding its structure and using the navigation tools efficiently will save you a lot of time.

## Universe Structure

The universe is organised into **sectors** grouped into **systems**.

### Sectors

A **sector** is the basic unit of space. Your current sector coordinates (`[X, Y, Z]`) are always displayed at the top of your HUD next to your player name. Each sector can contain:

- Planets and their surrounding space
- Asteroid fields
- Trading stations and NPC structures
- Other players' ships and bases
- Empty space

### Systems

A **system** is a 16 × 16 × 16 cube of sectors. **Stars** and **wormholes** are always located near the centre of their respective System. Resources and encounter types vary depending on how far a sector is from the star.

> **Distance from the star affects asteroid types.** Rare mineral asteroids are more likely to appear in sectors farther from the star.

## The Navigation Panel

Press `N` to open the Navigation Panel. It lists every object in your current and adjacent sectors.

### Filters

Use the filter checkboxes to show or hide:
- Planets
- Asteroids
- Stations
- Ships (player and NPC)
- Radar beacons

### Selecting a Target

Click any entry in the navigation list to **select** it. A selection indicator appears on your HUD pointing toward the selected object, making it easy to fly to it without having to spot it visually.

## The Astro Scanner

Astro Scanners are a ship system that provides information about a Star System.
Similar to a weapon or utility beam, it consists of two block types: an **Astro Scanner Computer** that controls the system, and **Astro Scanner Antenna** blocks linked to the computer.

Once an Astro Scanner is placed and added to your ship's hotbar, it can be used to scan whichever Star System your ship is currently in. It will reveal the locations of all planets and stations in that system on the Map screen, and also provide a report containing the names, locations, and factions of active ships found within its detection range. This report is viewable via the second tab of your Navigation Panel.
Depending on which Reactor Chambers are installed on your ship, scanner reports also provide other information, such as what useful resources are available in the system.

## Waypoints

To navigate to a specific sector coordinate:

1. Open the Navigation Panel (`N`).
2. Click the **Waypoint** button.
3. Enter the `[X, Y, Z]` coordinates of your destination sector.
4. A **white blinking arrow** appears on your HUD pointing toward the waypoint.

Waypoints persist until you remove them. You can use them to mark resource-rich sectors, player bases, or planned routes.

## Practical Tips

- Your starting sector usually contains a **Trading Guild station** — check the navigation panel immediately to locate it.
- Asteroid field sectors are clearly visible in space; approach any dark-coloured irregular objects.
- When travelling long distances, set a waypoint and use full thrust (`W` held). Ships have a natural speed cap per sector, but there is no global travel limit.
- You can **select an entity** in the world directly by looking at it and pressing `F` — this selects it in the HUD without opening the nav panel.
