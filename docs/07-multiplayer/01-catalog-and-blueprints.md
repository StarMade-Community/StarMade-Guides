# Catalog & Blueprints

The Catalog stores ship blueprints — saved snapshots of ships and stations that can be purchased and spawned elsewhere.

## Accessing the Catalog

Open your inventory (`I`) and click the **Catalog** tab, or press `U` in build mode.

## Saving a Blueprint

While inside the ship you want to save:

1. Open the Catalog.
2. Click **Create New Entry**.
3. The ship is saved as a blueprint.

### Admin / Singleplayer Command

Server admins and singleplayer players can use chat commands:
- `/save <name>` — saves your current ship or the last ship you were in
- `/load <name>` — loads (spawns) a blueprint by name

Stations saved via `/save` are not listed in the Catalog but can be loaded with `/load`.

## Local vs. Server Catalog

| Catalog | Where blueprints are stored | When used |
|---------|---------------------------|-----------|
| **Server Catalog** | Server's `blueprints/` folder | Default; visible to all on that server |
| **Local Catalog** | Your `StarMade/blueprints/` folder on your PC | Singleplayer; private to you |

In multiplayer, tick **Save in Local Catalog** when saving if you want to keep the blueprint private on your machine rather than uploading it to the server.

## Uploading Local Blueprints to a Server

You can upload a blueprint from your local catalog to the server so you can spawn it there:

1. In the Catalog, find the local blueprint.
2. Click **Upload to Server**.

The server owner and admins will also have access to uploaded blueprints. Only upload designs you are comfortable sharing.

## Permissions

Each catalog entry has a **permission level** controlling who can spawn it:

| Permission | Who can spawn |
|-----------|--------------|
| **Others** | Anyone |
| **Faction** | Only your faction members |
| **Homebase** | Only from your faction's homebase |
| **Enemy Usable** | Also available for pirates and NPCs (admin/singleplayer only) |

## Spawning from the Catalog

At any **shop** you can purchase and spawn a blueprint:

1. Approach a shop.
2. Open the Catalog tab.
3. Find the blueprint and click **Buy / Spawn**.
4. The game checks if you have the required blocks in your inventory.
5. If you have the blocks, the ship spawns.

Blueprints are essentially "recipes" — the game deducts the required blocks from your inventory each time you spawn one. The design is saved permanently; you can spawn it as many times as you can afford the materials.

## Sharing Blueprints Across Servers

Local blueprints are stored in your `StarMade/blueprints/` folder as `.sment` files. You can:
- Copy them to another computer
- Share them with friends
- Upload them to multiplayer servers

This makes it possible to build a design in singleplayer, perfect it, then deploy it on a multiplayer server.
