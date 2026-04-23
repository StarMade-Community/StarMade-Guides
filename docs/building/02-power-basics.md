# Power Basics

Shipcores themselves can fly around and produce enough power for a very small ship, however if your ship gets to be a decent size you will need to create reactors to generate power for your onboard systems.

## Reactor Power and Reactor Stabilizer Blocks

**Reactor Power Blocks** (from now on shortened to just "reactor blocks") generate **Energy** (Shortened to "e" in many in game and community sources). All contiguous reactor blocks in a group are considered a "reactor." **A ship can have multiple reactors, but only one reactor can be active at a time. Inactive reactors will not produce energy.**

![reactors_fig1.png](https://images.steamusercontent.com/ugc/2279448944260622156/CC7FA52879BDDC19694E2A6FB832144BA2FE8BDF/)

The yellow highlighted reactor is inactive and the purple highlighted reactor is active.

The more reactor blocks in a reactor, the more energy it produces. However, **any reactor over 10 blocks will start to lose power generation per block as it becomes unstable.**

![reactors_fig2.png](https://images.steamusercontent.com/ugc/2279448944260652351/C41D8B67389E35E2A920EECF9E032706DE7FD11C/)

![reactors_fig3.png](https://images.steamusercontent.com/ugc/2279448944260655389/2F38740FD01AAA2422740A6BA697ED25D892C440/)

Despite adding more reactors, our reactor isn't gaining any power generation!

How do you fix this? With **Stabilizers**.

![reactors_fig4.png](https://images.steamusercontent.com/ugc/2279448944260656040/40813E992A429F82EB9CC6D52978219F09921AC1/)

**Reactor Stabilizer Blocks** (from now on shortened to just "stabilizers") provide stabilization for a reactor. 1 stabilizer block will counteract the instability of 1 reactor block, so after the first 10 blocks, you will need 1 stabilizer block per reactor block.
Unlike reactor power blocks, stabilizers do not need to be in one contiguous group. They can be any distance from the reactor, either right next to it or hundreds of blocks away, and provide the same effect.

![reactors_fig5.png](https://images.steamusercontent.com/ugc/2279448944260681201/93ACED09E6CBC3E97623434AEF6D4D949224D60C/)

![reactors_fig6.png](https://images.steamusercontent.com/ugc/2279448944260681759/03A02A0052FA0DA67811900EC6E15695F91527E7/)

These two split groups of stabilizers provide identical amounts of stabilization.

The same stabilizers can provide the stabilization for every individual reactor on the ship.

![reactors_fig7.png](https://images.steamusercontent.com/ugc/2279448944260705014/A0B7463640D2E772A817013CAB752C781D8F1C8B/)

This secondary reactor gets stabilized along with the main reactor.

These basic rules scale for a reactor of any size, from 100 blocks to 1,000,000 blocks or more. **You will always need an equal number of reactor blocks and stabilizers past the first 10.**

**There is no special shape or rules for how reactor blocks should touch.** They just need to be in the same group. Shape-based reactor power bonuses were part of Power 1.0 and have been removed with the 2.0 updates.

## Reactor Level

A **Reactor's Level** is based on how many blocks it has. Every 150 blocks is a new "level," starting at level 0. The main purpose of reactor level is to determine how many blocks are needed for a Chamber to function, which we will cover in a later section. Reactor level can be viewed in the advanced build mode "System" side menu "Power and Reactor" tab, or in the **Reactor Menu**

## Reactor Menu

Using the Radial Menu (Default Key: Tab), the dedicated Reactor Menu button (Default Key: Insert), or by navigating to it from the player inventory top menu bar while inside the ship, we can access the **Reactor Menu**.

![reactors_fig8.png](https://images.steamusercontent.com/ugc/2279448944260776147/400EEF1E43DF8653CB08D428BC65B29AA535D5D8/)

![reactors_fig9.png](https://images.steamusercontent.com/ugc/2279448944260892781/922E77078628FE6B556375E2F0C7733866256961/)

This menu lets us view basically everything you'd need to know about your reactor, and lets us switch which of our reactors is active using the previous and next buttons.

It also allows us to access the chamber tree, which we will be covering next.

## Reactor Conduits, Reactor Chambers, and Reactor Capacity

**Reactor Chambers** are "specialization trees" for your ship that give you special bonuses or abilities. They are linked to eachother and the ship's reactor with **Reactor Conduit Blocks**. Chambers are powerful, but you can only have so many active at one time because they take up **Reactor Capacity** (abbreviated as RC or RC%), which you can only use up to 100% of. The size of your chambers depends on your reactor level, with each consecutive level requiring additional blocks for the chambers to function. At level 0, only 1 chamber block is needed for a chamber. Build your ships wisely so you can upgrade your chambers if you need to increase your power generation.

![reactors_fig10.png](https://images.steamusercontent.com/ugc/2279448944260984782/744478BC231198904CF261D46D2232D95B837721/)

To specify a chamber, open the reactor menu, select the unspecified chamber, press "Specify Chamber," and then select a valid option. After specifying, you can level the chamber up for a stronger effect at the cost of further RC%.

![reactors_fig11.png](https://images.steamusercontent.com/ugc/2279448944261039736/6E1BEAA5CF92481FF59386D28BE15B1B4A109A48/)

![reactors_fig12.png](https://images.steamusercontent.com/ugc/2279448944261040189/AC23A9D2FD9F674DE1E893896A0CE7F8562554B4/)

See this example of the shield enhancement tree.

There are eight chamber types in the game at this time: Defense, FTL, Logistics, Mass (Station Only), Mobility, Power, Recon, and Stealth. Covering these in depth deserves its own guide beyond the basics presented here.

![reactor_fig13.png](https://images.steamusercontent.com/ugc/2279448944261081175/EE5BBF661FF6CDA35499E25970F869FDC05EC1B4/)

Defense increases the strength of your shields and armor, FTL increases the range and speed of your jump drives (or warp gates on stations) and lets you inhibit enemy jump drives, Logistics increases mining yields, Mass allows you to generate gravity fields on your stations, Mobility increases your agility, Power increases your power generation, Recon allows you to detect ores and cloaked ships, and Stealth allows you to cloak.

Some chambers have been temporarily disabled by the default config or may be disabled by server owners for a number of reasons such as balance or exploits. These are marked as (DISABLED) in the chamber menu and will do nothing if selected. 
