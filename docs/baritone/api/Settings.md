Settings (baritone 1.2.15 API)

baritone.api

## Class Settings

- java.lang.Object
  - baritone.api.Settings

- * * *





```
public final class Settings
extends java.lang.Object
```


Baritone's settings. Settings apply to all Baritone instances.


- ### Nested Class Summary

Nested ClassesModifier and TypeClass and Description`class ``Settings.Setting<T>`

- ### Field Summary

FieldsModifier and TypeField and Description`Settings.Setting<java.util.List<net.minecraft.item.Item>>``acceptableThrowawayItems`

Blocks that Baritone is allowed to place (as throwaway, for sneak bridging, pillaring, etc.)

`Settings.Setting<java.lang.Boolean>``allowBreak`

Allow Baritone to break blocks

`Settings.Setting<java.util.List<net.minecraft.block.Block>>``allowBreakAnyway`

Blocks that baritone will be allowed to break even with allowBreak set to false

`Settings.Setting<java.lang.Boolean>``allowDiagonalAscend`

Allow diagonal ascending

`Settings.Setting<java.lang.Boolean>``allowDiagonalDescend`

Allow descending diagonally

`Settings.Setting<java.lang.Boolean>``allowDownward`

Allow mining the block directly beneath its feet

`Settings.Setting<java.lang.Boolean>``allowInventory`

Allow Baritone to move items in your inventory to your hotbar

`Settings.Setting<java.lang.Boolean>``allowJumpAt256`

If true, parkour is allowed to make jumps when standing on blocks at the maximum height, so player feet is y=256

`Settings.Setting<java.lang.Boolean>``allowOnlyExposedOres`

This will only allow baritone to mine exposed ores, can be used to stop ore obfuscators on servers that use them.

`Settings.Setting<java.lang.Integer>``allowOnlyExposedOresDistance`

When allowOnlyExposedOres is enabled this is the distance around to search.

`Settings.Setting<java.lang.Boolean>``allowOvershootDiagonalDescend`

Is it okay to sprint through a descend followed by a diagonal?
The player overshoots the landing, but not enough to fall off.

`Settings.Setting<java.lang.Boolean>``allowParkour`

You know what it is

`Settings.Setting<java.lang.Boolean>``allowParkourAscend`

This should be monetized it's so good

`Settings.Setting<java.lang.Boolean>``allowParkourPlace`

Actually pretty reliable.

`Settings.Setting<java.lang.Boolean>``allowPlace`

Allow Baritone to place blocks

`Settings.Setting<java.lang.Boolean>``allowSprint`

Allow Baritone to sprint

`Settings.Setting<java.lang.Boolean>``allowVines`

Enables some more advanced vine features.

`Settings.Setting<java.lang.Boolean>``allowWalkOnBottomSlab`

Slab behavior is complicated, disable this for higher path reliability.

`Settings.Setting<java.lang.Boolean>``allowWaterBucketFall`

Allow Baritone to fall arbitrary distances and place a water bucket beneath it.

`java.util.List<Settings.Setting<?>>``allSettings`

A list of all settings

`Settings.Setting<java.lang.Boolean>``antiCheatCompatibility`

Will cause some minor behavioral differences to ensure that Baritone works on anticheats.

`Settings.Setting<java.lang.Boolean>``assumeExternalAutoTool`

Disable baritone's auto-tool at runtime, but still assume that another mod will provide auto tool functionality

`Settings.Setting<java.lang.Boolean>``assumeSafeWalk`

Assume safe walk functionality; don't sneak on a backplace traverse.

`Settings.Setting<java.lang.Boolean>``assumeStep`

Assume step functionality; don't jump on an Ascend.

`Settings.Setting<java.lang.Boolean>``assumeWalkOnLava`

If you have Fire Resistance and Jesus then I guess you could turn this on lol

`Settings.Setting<java.lang.Boolean>``assumeWalkOnWater`

Allow Baritone to assume it can walk on still water just like any other block.

`Settings.Setting<java.lang.Boolean>``autoTool`

Automatically select the best available tool

`Settings.Setting<java.lang.Boolean>``avoidance`

Toggle the following 4 settings

`Settings.Setting<java.lang.Double>``avoidBreakingMultiplier`

this multiplies the break speed, if set above 1 it's "encourage breaking" instead

`Settings.Setting<java.lang.Boolean>``avoidUpdatingFallingBlocks`

If this setting is true, Baritone will never break a block that is adjacent to an unsupported falling block.

`Settings.Setting<java.lang.Integer>``axisHeight`

The "axis" command (aka GoalAxis) will go to a axis, or diagonal axis, at this Y level.

`Settings.Setting<java.lang.Boolean>``backfill`

Fill in blocks behind you

`Settings.Setting<java.lang.Double>``backtrackCostFavoringCoefficient`

Set to 1.0 to effectively disable this feature

`Settings.Setting<java.lang.Boolean>``blacklistClosestOnFailure`

When GetToBlockProcess or MineProcess fails to calculate a path, instead of just giving up, mark the closest instance
of that block as "unreachable" and go towards the next closest.

`Settings.Setting<java.lang.Double>``blockBreakAdditionalPenalty`

This is just a tiebreaker to make it less likely to break blocks if it can avoid it.

`Settings.Setting<java.lang.Double>``blockPlacementPenalty`

It doesn't actually take twenty ticks to place a block, this cost is so high
because we want to generally conserve blocks which might be limited.

`Settings.Setting<java.lang.Float>``blockReachDistance`

Block reach distance

`Settings.Setting<java.util.List<net.minecraft.block.Block>>``blocksToAvoid`

Blocks that Baritone will attempt to avoid (Used in avoidance)

`Settings.Setting<java.util.List<net.minecraft.block.Block>>``blocksToAvoidBreaking`

blocks that baritone shouldn't break, but can if it needs to.

`Settings.Setting<java.util.List<net.minecraft.block.Block>>``blocksToDisallowBreaking`

Blocks that Baritone is not allowed to break

`Settings.Setting<java.lang.Double>``breakCorrectBlockPenaltyMultiplier`

Multiply the cost of breaking a block that's correct in the builder's schematic by this coefficient

`Settings.Setting<java.lang.Boolean>``breakFromAbove`

Allow standing above a block while mining it, in BuilderProcess

`Settings.Setting<java.lang.Integer>``builderTickScanRadius`

Distance to scan every tick for updates.

`Settings.Setting<java.util.List<net.minecraft.block.Block>>``buildIgnoreBlocks`

A list of blocks to be treated as if they're air.

`Settings.Setting<java.lang.Boolean>``buildIgnoreDirection`

If this is true, the builder will ignore directionality of certain blocks like glazed terracotta.

`Settings.Setting<java.lang.Boolean>``buildIgnoreExisting`

If this is true, the builder will treat all non-air blocks as correct.

`Settings.Setting<java.util.List<java.lang.String>>``buildIgnoreProperties`

A list of names of block properties the builder will ignore.

`Settings.Setting<java.lang.Boolean>``buildInLayers`

Don't consider the next layer in builder until the current one is done

`Settings.Setting<java.lang.Boolean>``buildOnlySelection`

Only build the selected part of schematics

`Settings.Setting<net.minecraft.util.math.Vec3i>``buildRepeat`

How far to move before repeating the build.

`Settings.Setting<java.lang.Integer>``buildRepeatCount`

How many times to buildrepeat.

`Settings.Setting<java.lang.Boolean>``buildRepeatSneaky`

Don't notify schematics that they are moved.

`Settings.Setting<java.util.List<net.minecraft.block.Block>>``buildSkipBlocks`

A list of blocks to be treated as correct.

`Settings.Setting<java.util.Map<net.minecraft.block.Block,java.util.List<net.minecraft.block.Block>>>``buildSubstitutes`

A mapping of blocks to blocks to be built instead

`Settings.Setting<java.util.Map<net.minecraft.block.Block,java.util.List<net.minecraft.block.Block>>>``buildValidSubstitutes`

A mapping of blocks to blocks treated as correct in their position

`java.util.Map<java.lang.String,Settings.Setting<?>>``byLowerName`

A map of lowercase setting field names to their respective setting

`Settings.Setting<java.lang.Long>``cachedChunksExpirySeconds`

Cached chunks (regardless of if they're in RAM or saved to disk) expire and are deleted after this number of seconds
   -1 to disable

`Settings.Setting<java.lang.Float>``cachedChunksOpacity`

0.0f = not visible, fully transparent (instead of setting this to 0, turn off renderCachedChunks)
1.0f = fully opaque

`Settings.Setting<java.lang.Boolean>``cancelOnGoalInvalidation`

Cancel the current path if the goal has changed, and the path originally ended in the goal but doesn't anymore.

`Settings.Setting<java.lang.Boolean>``censorCoordinates`

Censor coordinates in goals and block positions

`Settings.Setting<java.lang.Boolean>``censorRanCommands`

Censor arguments to ran commands, to hide, for example, coordinates to #goal

`Settings.Setting<java.lang.Boolean>``chatControl`

Allow chat based control of Baritone.

`Settings.Setting<java.lang.Boolean>``chatControlAnyway`

Some clients like Impact try to force chatControl to off, so here's a second setting to do it anyway

`Settings.Setting<java.lang.Boolean>``chatDebug`

Print all the debug messages to chat

`Settings.Setting<java.lang.Boolean>``chunkCaching`

The big one.

`Settings.Setting<java.awt.Color>``colorBestPathSoFar`

The color of the best path so far

`Settings.Setting<java.awt.Color>``colorBlocksToBreak`

The color of the blocks to break

`Settings.Setting<java.awt.Color>``colorBlocksToPlace`

The color of the blocks to place

`Settings.Setting<java.awt.Color>``colorBlocksToWalkInto`

The color of the blocks to walk into

`Settings.Setting<java.awt.Color>``colorCurrentPath`

The color of the current path

`Settings.Setting<java.awt.Color>``colorGoalBox`

The color of the goal box

`Settings.Setting<java.awt.Color>``colorInvertedGoalBox`

The color of the goal box when it's inverted

`Settings.Setting<java.awt.Color>``colorMostRecentConsidered`

The color of the path to the most recent considered node

`Settings.Setting<java.awt.Color>``colorNextPath`

The color of the next path

`Settings.Setting<java.awt.Color>``colorSelection`

The color of all selections

`Settings.Setting<java.awt.Color>``colorSelectionPos1`

The color of the selection pos 1

`Settings.Setting<java.awt.Color>``colorSelectionPos2`

The color of the selection pos 2

`Settings.Setting<java.lang.Boolean>``considerPotionEffects`

For example, if you have Mining Fatigue or Haste, adjust the costs of breaking blocks accordingly.

`Settings.Setting<java.lang.Double>``costHeuristic`

This is the big A\* setting.

`Settings.Setting<java.lang.Integer>``costVerificationLookahead`

Stop 5 movements before anything that made the path COST\_INF.

`Settings.Setting<java.lang.Boolean>``cutoffAtLoadBoundary`

After calculating a path (potentially through cached chunks), artificially cut it off to just the part that is
entirely within currently loaded chunks.

`Settings.Setting<java.lang.Boolean>``desktopNotifications`

Desktop notifications

`Settings.Setting<java.lang.Boolean>``disableCompletionCheck`

Turn this on if your exploration filter is enormous, you don't want it to check if it's done,
and you are just fine with it just hanging on completion

`Settings.Setting<java.lang.Boolean>``disconnectOnArrival`

Disconnect from the server upon arriving at your goal

`Settings.Setting<java.lang.Boolean>``distanceTrim`

Trim incorrect positions too far away, helps performance but hurts reliability in very large schematics

`Settings.Setting<java.lang.Boolean>``doBedWaypoints`

allows baritone to save bed waypoints when interacting with beds

`Settings.Setting<java.lang.Boolean>``doDeathWaypoints`

allows baritone to save death waypoints

`Settings.Setting<java.lang.Boolean>``echoCommands`

Echo commands to chat when they are run

`Settings.Setting<java.lang.Boolean>``enterPortal`

When running a goto towards a nether portal block, walk all the way into the portal
instead of stopping one block before.

`Settings.Setting<java.lang.Integer>``exploreChunkSetMinimumSize`

Take the 10 closest chunks, even if they aren't strictly tied for distance metric from origin.

`Settings.Setting<java.lang.Boolean>``exploreForBlocks`

When GetToBlock or non-legit Mine doesn't know any locations for the desired block, explore randomly instead of giving up.

`Settings.Setting<java.lang.Integer>``exploreMaintainY`

Attempt to maintain Y coordinate while exploring

`Settings.Setting<java.lang.Boolean>``extendCacheOnThreshold`

When the cache scan gives less blocks than the maximum threshold (but still above zero), scan the main world too.

`Settings.Setting<java.lang.Boolean>``fadePath`

Start fading out the path at 20 movements ahead, and stop rendering it entirely 30 movements ahead.

`Settings.Setting<java.lang.Long>``failureTimeoutMS`

Pathing can never take longer than this, even if that means failing to find any path at all

`Settings.Setting<java.lang.Float>``followOffsetDirection`

The actual GoalNear is set in this direction from the entity you're following.

`Settings.Setting<java.lang.Double>``followOffsetDistance`

The actual GoalNear is set this distance away from the entity you're following

`Settings.Setting<java.lang.Integer>``followRadius`

The radius (for the GoalNear) of how close to your target position you actually have to be

`Settings.Setting<java.lang.Boolean>``forceInternalMining`

When mining block of a certain type, try to mine two at once instead of one.

`Settings.Setting<java.lang.Boolean>``freeLook`

Move without having to force the client-sided rotations

`Settings.Setting<java.lang.Boolean>``goalBreakFromAbove`

As well as breaking from above, set a goal to up and to the side of all blocks to break.

`Settings.Setting<java.lang.Float>``goalRenderLineWidthPixels`

Line width of the goal when rendered, in pixels

`Settings.Setting<java.lang.Integer>``incorrectSize`

The set of incorrect blocks can never grow beyond this size

`Settings.Setting<java.lang.Boolean>``internalMiningAirException`

Modification to the previous setting, only has effect if forceInternalMining is true
If true, only apply the previous setting if the block adjacent to the goal isn't air.

`Settings.Setting<java.lang.Boolean>``itemSaver`

Stop using tools just before they are going to break.

`Settings.Setting<java.lang.Integer>``itemSaverThreshold`

Durability to leave on the tool when using itemSaver

`Settings.Setting<java.lang.Double>``jumpPenalty`

Additional penalty for hitting the space bar (ascend, pillar, or parkour) because it uses hunger

`Settings.Setting<java.lang.Integer>``layerHeight`

How high should the individual layers be?

`Settings.Setting<java.lang.Boolean>``layerOrder`

false = build from bottom to top

`Settings.Setting<java.lang.Boolean>``legitMine`

Disallow MineBehavior from using X-Ray to see where the ores are.

`Settings.Setting<java.lang.Boolean>``legitMineIncludeDiagonals`

Magically see ores that are separated diagonally from existing ores.

`Settings.Setting<java.lang.Integer>``legitMineYLevel`

What Y level to go to for legit strip mining

`Settings.Setting<java.lang.Boolean>``logAsToast`

Shows popup message in the upper right corner, similarly to when you make an advancement

`Settings.Setting<java.util.function.Consumer<net.minecraft.util.text.ITextComponent>>``logger`

The function that is called when Baritone will log to chat.

`Settings.Setting<java.lang.Boolean>``mapArtMode`

Build in map art mode, which makes baritone only care about the top block in each column

`Settings.Setting<java.lang.Integer>``maxCachedWorldScanCount`

After finding this many instances of the target block in the cache, it will stop expanding outward the chunk search.

`Settings.Setting<java.lang.Double>``maxCostIncrease`

If a movement's cost increases by more than this amount between calculation and execution (due to changes
in the environment / world), cancel and recalculate

`Settings.Setting<java.lang.Integer>``maxFallHeightBucket`

How far are you allowed to fall onto solid ground (with a water bucket)?
It's not that reliable, so I've set it below what would kill an unarmored player (23)

`Settings.Setting<java.lang.Integer>``maxFallHeightNoWater`

How far are you allowed to fall onto solid ground (without a water bucket)?
3 won't deal any damage.

`Settings.Setting<java.lang.Integer>``maxPathHistoryLength`

If we are more than 300 movements into the current path, discard the oldest segments, as they are no longer useful

`Settings.Setting<java.lang.Long>``mineDropLoiterDurationMSThanksLouca`

While mining, wait this number of milliseconds after mining an ore to see if it will drop an item
instead of immediately going onto the next one

`Settings.Setting<java.lang.Integer>``mineGoalUpdateInterval`

Rescan for the goal once every 5 ticks.

`Settings.Setting<java.lang.Boolean>``mineScanDroppedItems`

While mining, should it also consider dropped items of the correct type as a pathing destination (as well as ore blocks)?

`Settings.Setting<java.lang.Boolean>``minimumImprovementRepropagation`

Don't repropagate cost improvements below 0.01 ticks.

`Settings.Setting<java.lang.Integer>``minYLevelWhileMining`

Sets the minimum y level whilst mining - set to 0 to turn off.

`Settings.Setting<java.lang.Double>``mobAvoidanceCoefficient`

Set to 1.0 to effectively disable this feature

`Settings.Setting<java.lang.Integer>``mobAvoidanceRadius`

Distance to avoid mobs.

`Settings.Setting<java.lang.Double>``mobSpawnerAvoidanceCoefficient`

Set to 1.0 to effectively disable this feature

`Settings.Setting<java.lang.Integer>``mobSpawnerAvoidanceRadius`

Distance to avoid mob spawners.

`Settings.Setting<java.lang.Integer>``movementTimeoutTicks`

If a movement takes this many ticks more than its initial cost estimate, cancel it

`Settings.Setting<java.lang.Boolean>``notificationOnBuildFinished`

Desktop notification on build finished

`Settings.Setting<java.lang.Boolean>``notificationOnExploreFinished`

Desktop notification on explore finished

`Settings.Setting<java.lang.Boolean>``notificationOnFarmFail`

Desktop notification on farm fail

`Settings.Setting<java.lang.Boolean>``notificationOnMineFail`

Desktop notification on mine fail

`Settings.Setting<java.lang.Boolean>``notificationOnPathComplete`

Desktop notification on path complete

`Settings.Setting<java.util.function.BiConsumer<java.lang.String,java.lang.Boolean>>``notifier`

The function that is called when Baritone will send a desktop notification.

`Settings.Setting<java.util.List<net.minecraft.block.Block>>``okIfAir`

A list of blocks to become air

`Settings.Setting<java.lang.Boolean>``okIfWater`

Override builder's behavior to not attempt to correct blocks that are currently water

`Settings.Setting<java.lang.Boolean>``overshootTraverse`

If we overshoot a traverse and end up one block beyond the destination, mark it as successful anyway.

`Settings.Setting<java.lang.Double>``pathCutoffFactor`

Static cutoff factor.

`Settings.Setting<java.lang.Integer>``pathCutoffMinimumLength`

Only apply static cutoff for paths of at least this length (in terms of number of movements)

`Settings.Setting<java.lang.Integer>``pathHistoryCutoffAmount`

If the current path is too long, cut off this many movements from the beginning.

`Settings.Setting<java.lang.Integer>``pathingMapDefaultSize`

Default size of the Long2ObjectOpenHashMap used in pathing

`Settings.Setting<java.lang.Float>``pathingMapLoadFactor`

Load factor coefficient for the Long2ObjectOpenHashMap used in pathing

`Settings.Setting<java.lang.Integer>``pathingMaxChunkBorderFetch`

The maximum number of times it will fetch outside loaded or cached chunks before assuming that
pathing has reached the end of the known area, and should therefore stop.

`Settings.Setting<java.lang.Float>``pathRenderLineWidthPixels`

Line width of the path when rendered, in pixels

`Settings.Setting<java.lang.Boolean>``pathThroughCachedOnly`

Exclusively use cached chunks for pathing

`Settings.Setting<java.lang.Boolean>``pauseMiningForFallingBlocks`

When breaking blocks for a movement, wait until all falling blocks have settled before continuing

`Settings.Setting<java.lang.Long>``planAheadFailureTimeoutMS`

Planning ahead while executing a segment can never take longer than this, even if that means failing to find any path at all

`Settings.Setting<java.lang.Long>``planAheadPrimaryTimeoutMS`

Planning ahead while executing a segment ends after this amount of time, but only if a path has been found

`Settings.Setting<java.lang.Integer>``planningTickLookahead`

Start planning the next path once the remaining movements tick estimates sum up to less than this value

`Settings.Setting<java.lang.Boolean>``preferSilkTouch`

Always prefer silk touch tools over regular tools.

`Settings.Setting<java.lang.String>``prefix`

The command prefix for chat control

`Settings.Setting<java.lang.Boolean>``prefixControl`

Whether or not to allow you to run Baritone commands with the prefix

`Settings.Setting<java.lang.Long>``primaryTimeoutMS`

Pathing ends after this amount of time, but only if a path has been found

`Settings.Setting<java.lang.Boolean>``pruneRegionsFromRAM`

On save, delete from RAM any cached regions that are more than 1024 blocks away from the player

`Settings.Setting<java.lang.Double>``randomLooking`

How many degrees to randomize the pitch and yaw every tick.

`Settings.Setting<java.lang.Boolean>``renderCachedChunks`

😎 Render cached chunks as semitransparent.

`Settings.Setting<java.lang.Boolean>``renderGoal`

Render the goal

`Settings.Setting<java.lang.Boolean>``renderGoalAnimated`

Render the goal as a sick animated thingy instead of just a box
(also controls animation of GoalXZ if [`renderGoalXZBeacon`](../../baritone/api/Settings.html#renderGoalXZBeacon) is enabled)

`Settings.Setting<java.lang.Boolean>``renderGoalIgnoreDepth`

Ignore depth when rendering the goal

`Settings.Setting<java.lang.Boolean>``renderGoalXZBeacon`

Renders X/Z type Goals with the vanilla beacon beam effect.

`Settings.Setting<java.lang.Boolean>``renderPath`

Render the path

`Settings.Setting<java.lang.Boolean>``renderPathAsLine`

Render the path as a line instead of a frickin thingy

`Settings.Setting<java.lang.Boolean>``renderPathIgnoreDepth`

Ignore depth when rendering the path

`Settings.Setting<java.lang.Boolean>``renderSelection`

Render selections

`Settings.Setting<java.lang.Boolean>``renderSelectionBoxes`

Render selection boxes

`Settings.Setting<java.lang.Boolean>``renderSelectionBoxesIgnoreDepth`

Ignore depth when rendering the selection boxes (to break, to place, to walk into)

`Settings.Setting<java.lang.Boolean>``renderSelectionCorners`

Render selection corners

`Settings.Setting<java.lang.Boolean>``renderSelectionIgnoreDepth`

Ignore depth when rendering selections

`Settings.Setting<java.lang.Boolean>``repackOnAnyBlockChange`

Whenever a block changes, repack the whole chunk that it's in

`Settings.Setting<java.lang.Boolean>``replantCrops`

Replant normal Crops while farming and leave cactus and sugarcane to regrow

`Settings.Setting<java.lang.Boolean>``replantNetherWart`

Replant nether wart while farming.

`Settings.Setting<java.lang.Boolean>``rightClickContainerOnArrival`

When running a goto towards a container block (chest, ender chest, furnace, etc),
right click and open it once you arrive.

`Settings.Setting<java.lang.Integer>``rightClickSpeed`

How many ticks between right clicks are allowed.

`Settings.Setting<java.lang.String>``schematicFallbackExtension`

The fallback used by the build command when no extension is specified.

`Settings.Setting<java.lang.Boolean>``schematicOrientationX`

When this setting is true, build a schematic with the highest X coordinate being the origin, instead of the lowest

`Settings.Setting<java.lang.Boolean>``schematicOrientationY`

When this setting is true, build a schematic with the highest Y coordinate being the origin, instead of the lowest

`Settings.Setting<java.lang.Boolean>``schematicOrientationZ`

When this setting is true, build a schematic with the highest Z coordinate being the origin, instead of the lowest

`Settings.Setting<java.lang.Float>``selectionLineWidth`

Line width of the goal when rendered, in pixels

`Settings.Setting<java.lang.Float>``selectionOpacity`

The opacity of the selection.

`java.util.Map<Settings.Setting<?>,java.lang.reflect.Type>``settingTypes``Settings.Setting<java.lang.Boolean>``shortBaritonePrefix`

Use a short Baritone prefix \[B\] instead of \[Baritone\] when logging to chat

`Settings.Setting<java.lang.Boolean>``simplifyUnloadedYCoord`

If your goal is a GoalBlock in an unloaded chunk, assume it's far enough away that the Y coord
doesn't matter yet, and replace it with a GoalXZ to the same place before calculating a path.

`Settings.Setting<java.lang.Boolean>``skipFailedLayers`

If a layer is unable to be constructed, just skip it.

`Settings.Setting<java.lang.Boolean>``slowPath`

For debugging, consider nodes much much slower

`Settings.Setting<java.lang.Long>``slowPathTimeDelayMS`

Milliseconds between each node

`Settings.Setting<java.lang.Long>``slowPathTimeoutMS`

The alternative timeout number when slowPath is on

`Settings.Setting<java.lang.Boolean>``splicePath`

When a new segment is calculated that doesn't overlap with the current one, but simply begins where the current segment ends,
splice it on and make a longer combined path.

`Settings.Setting<java.lang.Boolean>``sprintAscends`

Sprint and jump a block early on ascends wherever possible

`Settings.Setting<java.lang.Boolean>``sprintInWater`

Continue sprinting while in water

`Settings.Setting<java.lang.Integer>``startAtLayer`

Start building the schematic at a specific layer.

`Settings.Setting<java.util.function.BiConsumer<net.minecraft.util.text.ITextComponent,net.minecraft.util.text.ITextComponent>>``toaster`

The function that is called when Baritone will show a toast.

`Settings.Setting<java.lang.Long>``toastTimer`

The time of how long the message in the pop-up will display

`Settings.Setting<java.lang.Boolean>``useSwordToMine`

Use sword to mine.

`Settings.Setting<java.lang.Double>``walkOnWaterOnePenalty`

Walking on water uses up hunger really quick, so penalize it

`Settings.Setting<java.lang.Boolean>``walkWhileBreaking`

Don't stop walking forward when you need to break blocks in your way

`Settings.Setting<java.lang.Integer>``worldExploringChunkOffset`

While exploring the world, offset the closest unloaded chunk by this much in both axes.

`Settings.Setting<java.lang.Double>``yLevelBoxSize`

The size of the box that is rendered when the current goal is a GoalYLevel


- ### Method Summary

All Methods[Instance Methods](javascript:show(2);)[Concrete Methods](javascript:show(8);)Modifier and TypeMethod and Description`<T> java.util.List<Settings.Setting<T>>``getAllValuesByType(java.lang.Class<T> cla$$)`
  - ### Methods inherited from class java.lang.Object

     `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

- ### Field Detail



  - #### allowBreak



    ```
    public final Settings.Setting<java.lang.Boolean> allowBreak
    ```


    Allow Baritone to break blocks


  - #### allowBreakAnyway



    ```
    public final Settings.Setting<java.util.List<net.minecraft.block.Block>> allowBreakAnyway
    ```


    Blocks that baritone will be allowed to break even with allowBreak set to false


  - #### allowSprint



    ```
    public final Settings.Setting<java.lang.Boolean> allowSprint
    ```


    Allow Baritone to sprint


  - #### allowPlace



    ```
    public final Settings.Setting<java.lang.Boolean> allowPlace
    ```


    Allow Baritone to place blocks


  - #### allowInventory



    ```
    public final Settings.Setting<java.lang.Boolean> allowInventory
    ```


    Allow Baritone to move items in your inventory to your hotbar


  - #### assumeExternalAutoTool



    ```
    public final Settings.Setting<java.lang.Boolean> assumeExternalAutoTool
    ```


    Disable baritone's auto-tool at runtime, but still assume that another mod will provide auto tool functionality



    Specifically, path calculation will still assume that an auto tool will run at execution time, even though
    Baritone itself will not do that.


  - #### autoTool



    ```
    public final Settings.Setting<java.lang.Boolean> autoTool
    ```


    Automatically select the best available tool


  - #### blockPlacementPenalty



    ```
    public final Settings.Setting<java.lang.Double> blockPlacementPenalty
    ```


    It doesn't actually take twenty ticks to place a block, this cost is so high
     because we want to generally conserve blocks which might be limited.



    Decrease to make Baritone more often consider paths that would require placing blocks


  - #### blockBreakAdditionalPenalty



    ```
    public final Settings.Setting<java.lang.Double> blockBreakAdditionalPenalty
    ```


    This is just a tiebreaker to make it less likely to break blocks if it can avoid it.
     For example, fire has a break cost of 0, this makes it nonzero, so all else being equal
     it will take an otherwise equivalent route that doesn't require it to put out fire.


  - #### jumpPenalty



    ```
    public final Settings.Setting<java.lang.Double> jumpPenalty
    ```


    Additional penalty for hitting the space bar (ascend, pillar, or parkour) because it uses hunger


  - #### walkOnWaterOnePenalty



    ```
    public final Settings.Setting<java.lang.Double> walkOnWaterOnePenalty
    ```


    Walking on water uses up hunger really quick, so penalize it


  - #### allowWaterBucketFall



    ```
    public final Settings.Setting<java.lang.Boolean> allowWaterBucketFall
    ```


    Allow Baritone to fall arbitrary distances and place a water bucket beneath it.
     Reliability: questionable.


  - #### assumeWalkOnWater



    ```
    public final Settings.Setting<java.lang.Boolean> assumeWalkOnWater
    ```


    Allow Baritone to assume it can walk on still water just like any other block.
     This functionality is assumed to be provided by a separate library that might have imported Baritone.


  - #### assumeWalkOnLava



    ```
    public final Settings.Setting<java.lang.Boolean> assumeWalkOnLava
    ```


    If you have Fire Resistance and Jesus then I guess you could turn this on lol


  - #### assumeStep



    ```
    public final Settings.Setting<java.lang.Boolean> assumeStep
    ```


    Assume step functionality; don't jump on an Ascend.


  - #### assumeSafeWalk



    ```
    public final Settings.Setting<java.lang.Boolean> assumeSafeWalk
    ```


    Assume safe walk functionality; don't sneak on a backplace traverse.



    Warning: if you do something janky like sneak-backplace from an ender chest, if this is true
    it won't sneak right click, it'll just right click, which means it'll open the chest instead of placing
    against it. That's why this defaults to off.


  - #### allowJumpAt256



    ```
    public final Settings.Setting<java.lang.Boolean> allowJumpAt256
    ```


    If true, parkour is allowed to make jumps when standing on blocks at the maximum height, so player feet is y=256



    Defaults to false because this fails on constantiam. Please let me know if this is ever disabled. Please.


  - #### allowParkourAscend



    ```
    public final Settings.Setting<java.lang.Boolean> allowParkourAscend
    ```


    This should be monetized it's so good



    Defaults to true, but only actually takes effect if allowParkour is also true


  - #### allowDiagonalDescend



    ```
    public final Settings.Setting<java.lang.Boolean> allowDiagonalDescend
    ```


    Allow descending diagonally



    Safer than allowParkour yet still slightly unsafe, can make contact with unchecked adjacent blocks, so it's unsafe in the nether.





    For a generic "take some risks" mode I'd turn on this one, parkour, and parkour place.


  - #### allowDiagonalAscend



    ```
    public final Settings.Setting<java.lang.Boolean> allowDiagonalAscend
    ```


    Allow diagonal ascending



    Actually pretty safe, much safer than diagonal descend tbh


  - #### allowDownward



    ```
    public final Settings.Setting<java.lang.Boolean> allowDownward
    ```


    Allow mining the block directly beneath its feet



    Turn this off to force it to make more staircases and less shafts


  - #### acceptableThrowawayItems



    ```
    public final Settings.Setting<java.util.List<net.minecraft.item.Item>> acceptableThrowawayItems
    ```


    Blocks that Baritone is allowed to place (as throwaway, for sneak bridging, pillaring, etc.)


  - #### blocksToAvoid



    ```
    public final Settings.Setting<java.util.List<net.minecraft.block.Block>> blocksToAvoid
    ```


    Blocks that Baritone will attempt to avoid (Used in avoidance)


  - #### blocksToDisallowBreaking



    ```
    public final Settings.Setting<java.util.List<net.minecraft.block.Block>> blocksToDisallowBreaking
    ```


    Blocks that Baritone is not allowed to break


  - #### blocksToAvoidBreaking



    ```
    public final Settings.Setting<java.util.List<net.minecraft.block.Block>> blocksToAvoidBreaking
    ```


    blocks that baritone shouldn't break, but can if it needs to.


  - #### avoidBreakingMultiplier



    ```
    public final Settings.Setting<java.lang.Double> avoidBreakingMultiplier
    ```


    this multiplies the break speed, if set above 1 it's "encourage breaking" instead


  - #### buildIgnoreBlocks



    ```
    public final Settings.Setting<java.util.List<net.minecraft.block.Block>> buildIgnoreBlocks
    ```


    A list of blocks to be treated as if they're air.



    If a schematic asks for air at a certain position, and that position currently contains a block on this list, it will be treated as correct.


  - #### buildSkipBlocks



    ```
    public final Settings.Setting<java.util.List<net.minecraft.block.Block>> buildSkipBlocks
    ```


    A list of blocks to be treated as correct.



    If a schematic asks for any block on this list at a certain position, it will be treated as correct, regardless of what it currently is.


  - #### buildValidSubstitutes



    ```
    public final Settings.Setting<java.util.Map<net.minecraft.block.Block,java.util.List<net.minecraft.block.Block>>> buildValidSubstitutes
    ```


    A mapping of blocks to blocks treated as correct in their position



    If a schematic asks for a block on this mapping, all blocks on the mapped list will be accepted at that location as well





    Syntax same as [buildSubstitutes](https://baritone.leijurv.com/baritone/api/Settings.html#buildSubstitutes)


  - #### buildSubstitutes



    ```
    public final Settings.Setting<java.util.Map<net.minecraft.block.Block,java.util.List<net.minecraft.block.Block>>> buildSubstitutes
    ```


    A mapping of blocks to blocks to be built instead



    If a schematic asks for a block on this mapping, Baritone will place the first placeable block in the mapped list





    Usage Syntax:




    ```
          sourceblockA->blockToSubstituteA1,blockToSubstituteA2,...blockToSubstituteAN,sourceBlockB->blockToSubstituteB1,blockToSubstituteB2,...blockToSubstituteBN,...sourceBlockX->blockToSubstituteX1,blockToSubstituteX2...blockToSubstituteXN

    ```


     Example:


    ```
         stone->cobblestone,andesite,oak_planks->birch_planks,acacia_planks,glass

    ```


  - #### okIfAir



    ```
    public final Settings.Setting<java.util.List<net.minecraft.block.Block>> okIfAir
    ```


    A list of blocks to become air



    If a schematic asks for a block on this list, only air will be accepted at that location (and nothing on buildIgnoreBlocks)


  - #### buildIgnoreExisting



    ```
    public final Settings.Setting<java.lang.Boolean> buildIgnoreExisting
    ```


    If this is true, the builder will treat all non-air blocks as correct. It will only place new blocks.


  - #### buildIgnoreDirection



    ```
    public final Settings.Setting<java.lang.Boolean> buildIgnoreDirection
    ```


    If this is true, the builder will ignore directionality of certain blocks like glazed terracotta.


  - #### buildIgnoreProperties



    ```
    public final Settings.Setting<java.util.List<java.lang.String>> buildIgnoreProperties
    ```


    A list of names of block properties the builder will ignore.


  - #### avoidUpdatingFallingBlocks



    ```
    public final Settings.Setting<java.lang.Boolean> avoidUpdatingFallingBlocks
    ```


    If this setting is true, Baritone will never break a block that is adjacent to an unsupported falling block.



    I.E. it will never trigger cascading sand / gravel falls


  - #### allowVines



    ```
    public final Settings.Setting<java.lang.Boolean> allowVines
    ```


    Enables some more advanced vine features. They're honestly just gimmicks and won't ever be needed in real
     pathing scenarios. And they can cause Baritone to get trapped indefinitely in a strange scenario.



    Almost never turn this on lol


  - #### allowWalkOnBottomSlab



    ```
    public final Settings.Setting<java.lang.Boolean> allowWalkOnBottomSlab
    ```


    Slab behavior is complicated, disable this for higher path reliability. Leave enabled if you have bottom slabs
     everywhere in your base.


  - #### allowParkour



    ```
    public final Settings.Setting<java.lang.Boolean> allowParkour
    ```


    You know what it is



    But it's very unreliable and falls off when cornering like all the time so.





    It also overshoots the landing pretty much always (making contact with the next block over), so be careful


  - #### allowParkourPlace



    ```
    public final Settings.Setting<java.lang.Boolean> allowParkourPlace
    ```


    Actually pretty reliable.



    Doesn't make it any more dangerous compared to just normal allowParkour th


  - #### considerPotionEffects



    ```
    public final Settings.Setting<java.lang.Boolean> considerPotionEffects
    ```


    For example, if you have Mining Fatigue or Haste, adjust the costs of breaking blocks accordingly.


  - #### sprintAscends



    ```
    public final Settings.Setting<java.lang.Boolean> sprintAscends
    ```


    Sprint and jump a block early on ascends wherever possible


  - #### overshootTraverse



    ```
    public final Settings.Setting<java.lang.Boolean> overshootTraverse
    ```


    If we overshoot a traverse and end up one block beyond the destination, mark it as successful anyway.



    This helps with speed exceeding 20m/s


  - #### pauseMiningForFallingBlocks



    ```
    public final Settings.Setting<java.lang.Boolean> pauseMiningForFallingBlocks
    ```


    When breaking blocks for a movement, wait until all falling blocks have settled before continuing


  - #### rightClickSpeed



    ```
    public final Settings.Setting<java.lang.Integer> rightClickSpeed
    ```


    How many ticks between right clicks are allowed. Default in game is 4


  - #### blockReachDistance



    ```
    public final Settings.Setting<java.lang.Float> blockReachDistance
    ```


    Block reach distance


  - #### randomLooking



    ```
    public final Settings.Setting<java.lang.Double> randomLooking
    ```


    How many degrees to randomize the pitch and yaw every tick. Set to 0 to disable


  - #### costHeuristic



    ```
    public final Settings.Setting<java.lang.Double> costHeuristic
    ```


    This is the big A\* setting.
     As long as your cost heuristic is an \*underestimate\*, it's guaranteed to find you the best path.
     3.5 is always an underestimate, even if you are sprinting.
     If you're walking only (with allowSprint off) 4.6 is safe.
     Any value below 3.5 is never worth it. It's just more computation to find the same path, guaranteed.
     (specifically, it needs to be strictly slightly less than ActionCosts.WALK\_ONE\_BLOCK\_COST, which is about 3.56)



    Setting it at 3.57 or above with sprinting, or to 4.64 or above without sprinting, will result in
    faster computation, at the cost of a suboptimal path. Any value above the walk / sprint cost will result
    in it going straight at its goal, and not investigating alternatives, because the combined cost / heuristic
    metric gets better and better with each block, instead of slightly worse.





    Finding the optimal path is worth it, so it's the default.


  - #### pathingMaxChunkBorderFetch



    ```
    public final Settings.Setting<java.lang.Integer> pathingMaxChunkBorderFetch
    ```


    The maximum number of times it will fetch outside loaded or cached chunks before assuming that
     pathing has reached the end of the known area, and should therefore stop.


  - #### backtrackCostFavoringCoefficient



    ```
    public final Settings.Setting<java.lang.Double> backtrackCostFavoringCoefficient
    ```


    Set to 1.0 to effectively disable this feature
    See Also:[Issue #18](https://github.com/cabaletta/baritone/issues/18)

  - #### avoidance



    ```
    public final Settings.Setting<java.lang.Boolean> avoidance
    ```


    Toggle the following 4 settings



    They have a noticeable performance impact, so they default off





    Specifically, building up the avoidance map on the main thread before pathing starts actually takes a noticeable
    amount of time, especially when there are a lot of mobs around, and your game jitters for like 200ms while doing so


  - #### mobSpawnerAvoidanceCoefficient



    ```
    public final Settings.Setting<java.lang.Double> mobSpawnerAvoidanceCoefficient
    ```


    Set to 1.0 to effectively disable this feature



    Set below 1.0 to go out of your way to walk near mob spawners


  - #### mobSpawnerAvoidanceRadius



    ```
    public final Settings.Setting<java.lang.Integer> mobSpawnerAvoidanceRadius
    ```


    Distance to avoid mob spawners.


  - #### mobAvoidanceCoefficient



    ```
    public final Settings.Setting<java.lang.Double> mobAvoidanceCoefficient
    ```


    Set to 1.0 to effectively disable this feature



    Set below 1.0 to go out of your way to walk near mobs


  - #### mobAvoidanceRadius



    ```
    public final Settings.Setting<java.lang.Integer> mobAvoidanceRadius
    ```


    Distance to avoid mobs.


  - #### rightClickContainerOnArrival



    ```
    public final Settings.Setting<java.lang.Boolean> rightClickContainerOnArrival
    ```


    When running a goto towards a container block (chest, ender chest, furnace, etc),
     right click and open it once you arrive.


  - #### enterPortal



    ```
    public final Settings.Setting<java.lang.Boolean> enterPortal
    ```


    When running a goto towards a nether portal block, walk all the way into the portal
     instead of stopping one block before.


  - #### minimumImprovementRepropagation



    ```
    public final Settings.Setting<java.lang.Boolean> minimumImprovementRepropagation
    ```


    Don't repropagate cost improvements below 0.01 ticks. They're all just floating point inaccuracies,
     and there's no point.


  - #### cutoffAtLoadBoundary



    ```
    public final Settings.Setting<java.lang.Boolean> cutoffAtLoadBoundary
    ```


    After calculating a path (potentially through cached chunks), artificially cut it off to just the part that is
     entirely within currently loaded chunks. Improves path safety because cached chunks are heavily simplified.



    This is much safer to leave off now, and makes pathing more efficient. More explanation in the issue.


    See Also:[Issue #114](https://github.com/cabaletta/baritone/issues/114)

  - #### maxCostIncrease



    ```
    public final Settings.Setting<java.lang.Double> maxCostIncrease
    ```


    If a movement's cost increases by more than this amount between calculation and execution (due to changes
     in the environment / world), cancel and recalculate


  - #### costVerificationLookahead



    ```
    public final Settings.Setting<java.lang.Integer> costVerificationLookahead
    ```


    Stop 5 movements before anything that made the path COST\_INF.
     For example, if lava has spread across the path, don't walk right up to it then recalculate, it might
     still be spreading lol


  - #### pathCutoffFactor



    ```
    public final Settings.Setting<java.lang.Double> pathCutoffFactor
    ```


    Static cutoff factor. 0.9 means cut off the last 10% of all paths, regardless of chunk load state


  - #### pathCutoffMinimumLength



    ```
    public final Settings.Setting<java.lang.Integer> pathCutoffMinimumLength
    ```


    Only apply static cutoff for paths of at least this length (in terms of number of movements)


  - #### planningTickLookahead



    ```
    public final Settings.Setting<java.lang.Integer> planningTickLookahead
    ```


    Start planning the next path once the remaining movements tick estimates sum up to less than this value


  - #### pathingMapDefaultSize



    ```
    public final Settings.Setting<java.lang.Integer> pathingMapDefaultSize
    ```


    Default size of the Long2ObjectOpenHashMap used in pathing


  - #### pathingMapLoadFactor



    ```
    public final Settings.Setting<java.lang.Float> pathingMapLoadFactor
    ```


    Load factor coefficient for the Long2ObjectOpenHashMap used in pathing



    Decrease for faster map operations, but higher memory usage


  - #### maxFallHeightNoWater



    ```
    public final Settings.Setting<java.lang.Integer> maxFallHeightNoWater
    ```


    How far are you allowed to fall onto solid ground (without a water bucket)?
     3 won't deal any damage. But if you just want to get down the mountain quickly and you have
     Feather Falling IV, you might set it a bit higher, like 4 or 5.


  - #### maxFallHeightBucket



    ```
    public final Settings.Setting<java.lang.Integer> maxFallHeightBucket
    ```


    How far are you allowed to fall onto solid ground (with a water bucket)?
     It's not that reliable, so I've set it below what would kill an unarmored player (23)


  - #### allowOvershootDiagonalDescend



    ```
    public final Settings.Setting<java.lang.Boolean> allowOvershootDiagonalDescend
    ```


    Is it okay to sprint through a descend followed by a diagonal?
     The player overshoots the landing, but not enough to fall off. And the diagonal ensures that there isn't
     lava or anything that's !canWalkInto in that space, so it's technically safe, just a little sketchy.



    Note: this is \*not\* related to the allowDiagonalDescend setting, that is a completely different thing.


  - #### simplifyUnloadedYCoord



    ```
    public final Settings.Setting<java.lang.Boolean> simplifyUnloadedYCoord
    ```


    If your goal is a GoalBlock in an unloaded chunk, assume it's far enough away that the Y coord
     doesn't matter yet, and replace it with a GoalXZ to the same place before calculating a path.
     Once a segment ends within chunk load range of the GoalBlock, it will go back to normal behavior
     of considering the Y coord. The reasoning is that if your X and Z are 10,000 blocks away,
     your Y coordinate's accuracy doesn't matter at all until you get much much closer.


  - #### repackOnAnyBlockChange



    ```
    public final Settings.Setting<java.lang.Boolean> repackOnAnyBlockChange
    ```


    Whenever a block changes, repack the whole chunk that it's in


  - #### movementTimeoutTicks



    ```
    public final Settings.Setting<java.lang.Integer> movementTimeoutTicks
    ```


    If a movement takes this many ticks more than its initial cost estimate, cancel it


  - #### primaryTimeoutMS



    ```
    public final Settings.Setting<java.lang.Long> primaryTimeoutMS
    ```


    Pathing ends after this amount of time, but only if a path has been found



    If no valid path (length above the minimum) has been found, pathing continues up until the failure timeout


  - #### failureTimeoutMS



    ```
    public final Settings.Setting<java.lang.Long> failureTimeoutMS
    ```


    Pathing can never take longer than this, even if that means failing to find any path at all


  - #### planAheadPrimaryTimeoutMS



    ```
    public final Settings.Setting<java.lang.Long> planAheadPrimaryTimeoutMS
    ```


    Planning ahead while executing a segment ends after this amount of time, but only if a path has been found



    If no valid path (length above the minimum) has been found, pathing continues up until the failure timeout


  - #### planAheadFailureTimeoutMS



    ```
    public final Settings.Setting<java.lang.Long> planAheadFailureTimeoutMS
    ```


    Planning ahead while executing a segment can never take longer than this, even if that means failing to find any path at all


  - #### slowPath



    ```
    public final Settings.Setting<java.lang.Boolean> slowPath
    ```


    For debugging, consider nodes much much slower


  - #### slowPathTimeDelayMS



    ```
    public final Settings.Setting<java.lang.Long> slowPathTimeDelayMS
    ```


    Milliseconds between each node


  - #### slowPathTimeoutMS



    ```
    public final Settings.Setting<java.lang.Long> slowPathTimeoutMS
    ```


    The alternative timeout number when slowPath is on


  - #### doBedWaypoints



    ```
    public final Settings.Setting<java.lang.Boolean> doBedWaypoints
    ```


    allows baritone to save bed waypoints when interacting with beds


  - #### doDeathWaypoints



    ```
    public final Settings.Setting<java.lang.Boolean> doDeathWaypoints
    ```


    allows baritone to save death waypoints


  - #### chunkCaching



    ```
    public final Settings.Setting<java.lang.Boolean> chunkCaching
    ```


    The big one. Download all chunks in simplified 2-bit format and save them for better very-long-distance pathing.


  - #### pruneRegionsFromRAM



    ```
    public final Settings.Setting<java.lang.Boolean> pruneRegionsFromRAM
    ```


    On save, delete from RAM any cached regions that are more than 1024 blocks away from the player



    Temporarily disabled





    Temporarily reenabled


    See Also:[Issue #248](https://github.com/cabaletta/baritone/issues/248)

  - #### backfill



    ```
    public final Settings.Setting<java.lang.Boolean> backfill
    ```


    Fill in blocks behind you


  - #### logAsToast



    ```
    public final Settings.Setting<java.lang.Boolean> logAsToast
    ```


    Shows popup message in the upper right corner, similarly to when you make an advancement


  - #### toastTimer



    ```
    public final Settings.Setting<java.lang.Long> toastTimer
    ```


    The time of how long the message in the pop-up will display



    If below 1000L (1sec), it's better to disable this


  - #### chatDebug



    ```
    public final Settings.Setting<java.lang.Boolean> chatDebug
    ```


    Print all the debug messages to chat


  - #### chatControl



    ```
    public final Settings.Setting<java.lang.Boolean> chatControl
    ```


    Allow chat based control of Baritone. Most likely should be disabled when Baritone is imported for use in
     something else


  - #### chatControlAnyway



    ```
    public final Settings.Setting<java.lang.Boolean> chatControlAnyway
    ```


    Some clients like Impact try to force chatControl to off, so here's a second setting to do it anyway


  - #### renderPath



    ```
    public final Settings.Setting<java.lang.Boolean> renderPath
    ```


    Render the path


  - #### renderPathAsLine



    ```
    public final Settings.Setting<java.lang.Boolean> renderPathAsLine
    ```


    Render the path as a line instead of a frickin thingy


  - #### renderGoal



    ```
    public final Settings.Setting<java.lang.Boolean> renderGoal
    ```


    Render the goal


  - #### renderGoalAnimated



    ```
    public final Settings.Setting<java.lang.Boolean> renderGoalAnimated
    ```


    Render the goal as a sick animated thingy instead of just a box
     (also controls animation of GoalXZ if [`renderGoalXZBeacon`](../../baritone/api/Settings.html#renderGoalXZBeacon) is enabled)


  - #### renderSelectionBoxes



    ```
    public final Settings.Setting<java.lang.Boolean> renderSelectionBoxes
    ```


    Render selection boxes


  - #### renderGoalIgnoreDepth



    ```
    public final Settings.Setting<java.lang.Boolean> renderGoalIgnoreDepth
    ```


    Ignore depth when rendering the goal


  - #### renderGoalXZBeacon



    ```
    public final Settings.Setting<java.lang.Boolean> renderGoalXZBeacon
    ```


    Renders X/Z type Goals with the vanilla beacon beam effect. Combining this with
     [`renderGoalIgnoreDepth`](../../baritone/api/Settings.html#renderGoalIgnoreDepth) will cause strange render clipping.


  - #### renderSelectionBoxesIgnoreDepth



    ```
    public final Settings.Setting<java.lang.Boolean> renderSelectionBoxesIgnoreDepth
    ```


    Ignore depth when rendering the selection boxes (to break, to place, to walk into)


  - #### renderPathIgnoreDepth



    ```
    public final Settings.Setting<java.lang.Boolean> renderPathIgnoreDepth
    ```


    Ignore depth when rendering the path


  - #### pathRenderLineWidthPixels



    ```
    public final Settings.Setting<java.lang.Float> pathRenderLineWidthPixels
    ```


    Line width of the path when rendered, in pixels


  - #### goalRenderLineWidthPixels



    ```
    public final Settings.Setting<java.lang.Float> goalRenderLineWidthPixels
    ```


    Line width of the goal when rendered, in pixels


  - #### fadePath



    ```
    public final Settings.Setting<java.lang.Boolean> fadePath
    ```


    Start fading out the path at 20 movements ahead, and stop rendering it entirely 30 movements ahead.
     Improves FPS.


  - #### freeLook



    ```
    public final Settings.Setting<java.lang.Boolean> freeLook
    ```


    Move without having to force the client-sided rotations


  - #### antiCheatCompatibility



    ```
    public final Settings.Setting<java.lang.Boolean> antiCheatCompatibility
    ```


    Will cause some minor behavioral differences to ensure that Baritone works on anticheats.



    At the moment this will silently set the player's rotations when using freeLook so you're not sprinting in
    directions other than forward, which is picken up by more "advanced" anticheats like AAC, but not NCP.


  - #### pathThroughCachedOnly



    ```
    public final Settings.Setting<java.lang.Boolean> pathThroughCachedOnly
    ```


    Exclusively use cached chunks for pathing



    Never turn this on


  - #### sprintInWater



    ```
    public final Settings.Setting<java.lang.Boolean> sprintInWater
    ```


    Continue sprinting while in water


  - #### blacklistClosestOnFailure



    ```
    public final Settings.Setting<java.lang.Boolean> blacklistClosestOnFailure
    ```


    When GetToBlockProcess or MineProcess fails to calculate a path, instead of just giving up, mark the closest instance
     of that block as "unreachable" and go towards the next closest. GetToBlock expands this search to the whole "vein"; MineProcess does not.
     This is because MineProcess finds individual impossible blocks (like one block in a vein that has gravel on top then lava, so it can't break)
     Whereas GetToBlock should blacklist the whole "vein" if it can't get to any of them.


  - #### renderCachedChunks



    ```
    public final Settings.Setting<java.lang.Boolean> renderCachedChunks
    ```


    😎 Render cached chunks as semitransparent. Doesn't work with OptiFine 😭 Rarely randomly crashes, see [this issue](https://github.com/cabaletta/baritone/issues/327).



    Can be very useful on servers with low render distance. After enabling, you may need to reload the world in order for it to have an effect
    (e.g. disconnect and reconnect, enter then exit the nether, die and respawn, etc). This may literally kill your FPS and CPU because
    every chunk gets recompiled twice as much as normal, since the cached version comes into range, then the normal one comes from the server for real.





    Note that flowing water is cached as AVOID, which is rendered as lava. As you get closer, you may therefore see lava falls being replaced with water falls.





    SOLID is rendered as stone in the overworld, netherrack in the nether, and end stone in the end


  - #### cachedChunksOpacity



    ```
    public final Settings.Setting<java.lang.Float> cachedChunksOpacity
    ```


    0.0f = not visible, fully transparent (instead of setting this to 0, turn off renderCachedChunks)
     1.0f = fully opaque


  - #### prefixControl



    ```
    public final Settings.Setting<java.lang.Boolean> prefixControl
    ```


    Whether or not to allow you to run Baritone commands with the prefix


  - #### prefix



    ```
    public final Settings.Setting<java.lang.String> prefix
    ```


    The command prefix for chat control


  - #### shortBaritonePrefix



    ```
    public final Settings.Setting<java.lang.Boolean> shortBaritonePrefix
    ```


    Use a short Baritone prefix \[B\] instead of \[Baritone\] when logging to chat


  - #### echoCommands



    ```
    public final Settings.Setting<java.lang.Boolean> echoCommands
    ```


    Echo commands to chat when they are run


  - #### censorCoordinates



    ```
    public final Settings.Setting<java.lang.Boolean> censorCoordinates
    ```


    Censor coordinates in goals and block positions


  - #### censorRanCommands



    ```
    public final Settings.Setting<java.lang.Boolean> censorRanCommands
    ```


    Censor arguments to ran commands, to hide, for example, coordinates to #goal


  - #### itemSaver



    ```
    public final Settings.Setting<java.lang.Boolean> itemSaver
    ```


    Stop using tools just before they are going to break.


  - #### itemSaverThreshold



    ```
    public final Settings.Setting<java.lang.Integer> itemSaverThreshold
    ```


    Durability to leave on the tool when using itemSaver


  - #### preferSilkTouch



    ```
    public final Settings.Setting<java.lang.Boolean> preferSilkTouch
    ```


    Always prefer silk touch tools over regular tools. This will not sacrifice speed, but it will always prefer silk
     touch tools over other tools of the same speed. This includes always choosing ANY silk touch tool over your hand.


  - #### walkWhileBreaking



    ```
    public final Settings.Setting<java.lang.Boolean> walkWhileBreaking
    ```


    Don't stop walking forward when you need to break blocks in your way


  - #### splicePath



    ```
    public final Settings.Setting<java.lang.Boolean> splicePath
    ```


    When a new segment is calculated that doesn't overlap with the current one, but simply begins where the current segment ends,
     splice it on and make a longer combined path. If this setting is off, any planned segment will not be spliced and will instead
     be the "next path" in PathingBehavior, and will only start after this one ends. Turning this off hurts planning ahead,
     because the next segment will exist even if it's very short.
    See Also:[`planningTickLookahead`](../../baritone/api/Settings.html#planningTickLookahead)

  - #### maxPathHistoryLength



    ```
    public final Settings.Setting<java.lang.Integer> maxPathHistoryLength
    ```


    If we are more than 300 movements into the current path, discard the oldest segments, as they are no longer useful


  - #### pathHistoryCutoffAmount



    ```
    public final Settings.Setting<java.lang.Integer> pathHistoryCutoffAmount
    ```


    If the current path is too long, cut off this many movements from the beginning.


  - #### mineGoalUpdateInterval



    ```
    public final Settings.Setting<java.lang.Integer> mineGoalUpdateInterval
    ```


    Rescan for the goal once every 5 ticks.
     Set to 0 to disable.


  - #### maxCachedWorldScanCount



    ```
    public final Settings.Setting<java.lang.Integer> maxCachedWorldScanCount
    ```


    After finding this many instances of the target block in the cache, it will stop expanding outward the chunk search.


  - #### minYLevelWhileMining



    ```
    public final Settings.Setting<java.lang.Integer> minYLevelWhileMining
    ```


    Sets the minimum y level whilst mining - set to 0 to turn off.


  - #### allowOnlyExposedOres



    ```
    public final Settings.Setting<java.lang.Boolean> allowOnlyExposedOres
    ```


    This will only allow baritone to mine exposed ores, can be used to stop ore obfuscators on servers that use them.


  - #### allowOnlyExposedOresDistance



    ```
    public final Settings.Setting<java.lang.Integer> allowOnlyExposedOresDistance
    ```


    When allowOnlyExposedOres is enabled this is the distance around to search.



    It is recommended to keep this value low, as it dramatically increases calculation times.


  - #### exploreForBlocks



    ```
    public final Settings.Setting<java.lang.Boolean> exploreForBlocks
    ```


    When GetToBlock or non-legit Mine doesn't know any locations for the desired block, explore randomly instead of giving up.


  - #### worldExploringChunkOffset



    ```
    public final Settings.Setting<java.lang.Integer> worldExploringChunkOffset
    ```


    While exploring the world, offset the closest unloaded chunk by this much in both axes.



    This can result in more efficient loading, if you set this to the render distance.


  - #### exploreChunkSetMinimumSize



    ```
    public final Settings.Setting<java.lang.Integer> exploreChunkSetMinimumSize
    ```


    Take the 10 closest chunks, even if they aren't strictly tied for distance metric from origin.


  - #### exploreMaintainY



    ```
    public final Settings.Setting<java.lang.Integer> exploreMaintainY
    ```


    Attempt to maintain Y coordinate while exploring



     -1 to disable


  - #### replantCrops



    ```
    public final Settings.Setting<java.lang.Boolean> replantCrops
    ```


    Replant normal Crops while farming and leave cactus and sugarcane to regrow


  - #### replantNetherWart



    ```
    public final Settings.Setting<java.lang.Boolean> replantNetherWart
    ```


    Replant nether wart while farming. This setting only has an effect when replantCrops is also enabled


  - #### extendCacheOnThreshold



    ```
    public final Settings.Setting<java.lang.Boolean> extendCacheOnThreshold
    ```


    When the cache scan gives less blocks than the maximum threshold (but still above zero), scan the main world too.



    Only if you have a beefy CPU and automatically mine blocks that are in cache


  - #### buildInLayers



    ```
    public final Settings.Setting<java.lang.Boolean> buildInLayers
    ```


    Don't consider the next layer in builder until the current one is done


  - #### layerOrder



    ```
    public final Settings.Setting<java.lang.Boolean> layerOrder
    ```


    false = build from bottom to top



    true = build from top to bottom


  - #### layerHeight



    ```
    public final Settings.Setting<java.lang.Integer> layerHeight
    ```


    How high should the individual layers be?


  - #### startAtLayer



    ```
    public final Settings.Setting<java.lang.Integer> startAtLayer
    ```


    Start building the schematic at a specific layer.
     Can help on larger builds when schematic wants to break things its already built


  - #### skipFailedLayers



    ```
    public final Settings.Setting<java.lang.Boolean> skipFailedLayers
    ```


    If a layer is unable to be constructed, just skip it.


  - #### buildOnlySelection



    ```
    public final Settings.Setting<java.lang.Boolean> buildOnlySelection
    ```


    Only build the selected part of schematics


  - #### buildRepeat



    ```
    public final Settings.Setting<net.minecraft.util.math.Vec3i> buildRepeat
    ```


    How far to move before repeating the build. 0 to disable repeating on a certain axis, 0,0,0 to disable entirely


  - #### buildRepeatCount



    ```
    public final Settings.Setting<java.lang.Integer> buildRepeatCount
    ```


    How many times to buildrepeat. -1 for infinite.


  - #### buildRepeatSneaky



    ```
    public final Settings.Setting<java.lang.Boolean> buildRepeatSneaky
    ```


    Don't notify schematics that they are moved.
     e.g. replacing will replace the same spots for every repetition
     Mainly for backward compatibility.


  - #### breakFromAbove



    ```
    public final Settings.Setting<java.lang.Boolean> breakFromAbove
    ```


    Allow standing above a block while mining it, in BuilderProcess



    Experimental


  - #### goalBreakFromAbove



    ```
    public final Settings.Setting<java.lang.Boolean> goalBreakFromAbove
    ```


    As well as breaking from above, set a goal to up and to the side of all blocks to break.



    Never turn this on without also turning on breakFromAbove.


  - #### mapArtMode



    ```
    public final Settings.Setting<java.lang.Boolean> mapArtMode
    ```


    Build in map art mode, which makes baritone only care about the top block in each column


  - #### okIfWater



    ```
    public final Settings.Setting<java.lang.Boolean> okIfWater
    ```


    Override builder's behavior to not attempt to correct blocks that are currently water


  - #### incorrectSize



    ```
    public final Settings.Setting<java.lang.Integer> incorrectSize
    ```


    The set of incorrect blocks can never grow beyond this size


  - #### breakCorrectBlockPenaltyMultiplier



    ```
    public final Settings.Setting<java.lang.Double> breakCorrectBlockPenaltyMultiplier
    ```


    Multiply the cost of breaking a block that's correct in the builder's schematic by this coefficient


  - #### schematicOrientationX



    ```
    public final Settings.Setting<java.lang.Boolean> schematicOrientationX
    ```


    When this setting is true, build a schematic with the highest X coordinate being the origin, instead of the lowest


  - #### schematicOrientationY



    ```
    public final Settings.Setting<java.lang.Boolean> schematicOrientationY
    ```


    When this setting is true, build a schematic with the highest Y coordinate being the origin, instead of the lowest


  - #### schematicOrientationZ



    ```
    public final Settings.Setting<java.lang.Boolean> schematicOrientationZ
    ```


    When this setting is true, build a schematic with the highest Z coordinate being the origin, instead of the lowest


  - #### schematicFallbackExtension



    ```
    public final Settings.Setting<java.lang.String> schematicFallbackExtension
    ```


    The fallback used by the build command when no extension is specified. This may be useful if schematics of a
     particular format are used often, and the user does not wish to have to specify the extension with every usage.


  - #### builderTickScanRadius



    ```
    public final Settings.Setting<java.lang.Integer> builderTickScanRadius
    ```


    Distance to scan every tick for updates. Expanding this beyond player reach distance (i.e. setting it to 6 or above)
     is only necessary in very large schematics where rescanning the whole thing is costly.


  - #### mineScanDroppedItems



    ```
    public final Settings.Setting<java.lang.Boolean> mineScanDroppedItems
    ```


    While mining, should it also consider dropped items of the correct type as a pathing destination (as well as ore blocks)?


  - #### mineDropLoiterDurationMSThanksLouca



    ```
    public final Settings.Setting<java.lang.Long> mineDropLoiterDurationMSThanksLouca
    ```


    While mining, wait this number of milliseconds after mining an ore to see if it will drop an item
     instead of immediately going onto the next one



    Thanks Louca


  - #### distanceTrim



    ```
    public final Settings.Setting<java.lang.Boolean> distanceTrim
    ```


    Trim incorrect positions too far away, helps performance but hurts reliability in very large schematics


  - #### cancelOnGoalInvalidation



    ```
    public final Settings.Setting<java.lang.Boolean> cancelOnGoalInvalidation
    ```


    Cancel the current path if the goal has changed, and the path originally ended in the goal but doesn't anymore.



    Currently only runs when either MineBehavior or FollowBehavior is active.





    For example, if Baritone is doing "mine iron\_ore", the instant it breaks the ore (and it becomes air), that location
    is no longer a goal. This means that if this setting is true, it will stop there. If this setting were off, it would
    continue with its path, and walk into that location. The tradeoff is if this setting is true, it mines ores much faster
    since it doesn't waste any time getting into locations that no longer contain ores, but on the other hand, it misses
    some drops, and continues on without ever picking them up.





    Also on cosmic prisons this should be set to true since you don't actually mine the ore it just gets replaced with stone.


  - #### axisHeight



    ```
    public final Settings.Setting<java.lang.Integer> axisHeight
    ```


    The "axis" command (aka GoalAxis) will go to a axis, or diagonal axis, at this Y level.


  - #### disconnectOnArrival



    ```
    public final Settings.Setting<java.lang.Boolean> disconnectOnArrival
    ```


    Disconnect from the server upon arriving at your goal


  - #### legitMine



    ```
    public final Settings.Setting<java.lang.Boolean> legitMine
    ```


    Disallow MineBehavior from using X-Ray to see where the ores are. Turn this option on to force it to mine "legit"
     where it will only mine an ore once it can actually see it, so it won't do or know anything that a normal player
     couldn't. If you don't want it to look like you're X-Raying, turn this on
     This will always explore, regardless of exploreForBlocks


  - #### legitMineYLevel



    ```
    public final Settings.Setting<java.lang.Integer> legitMineYLevel
    ```


    What Y level to go to for legit strip mining


  - #### legitMineIncludeDiagonals



    ```
    public final Settings.Setting<java.lang.Boolean> legitMineIncludeDiagonals
    ```


    Magically see ores that are separated diagonally from existing ores. Basically like mining around the ores that it finds
     in case there's one there touching it diagonally, except it checks it un-legit-ly without having the mine blocks to see it.
     You can decide whether this looks plausible or not.



    This is disabled because it results in some weird behavior. For example, it can """see""" the top block of a vein of iron\_ore
    through a lava lake. This isn't an issue normally since it won't consider anything touching lava, so it just ignores it.
    However, this setting expands that and allows it to see the entire vein so it'll mine under the lava lake to get the iron that
    it can reach without mining blocks adjacent to lava. This really defeats the purpose of legitMine since a player could never
    do that lol, so thats one reason why its disabled


  - #### forceInternalMining



    ```
    public final Settings.Setting<java.lang.Boolean> forceInternalMining
    ```


    When mining block of a certain type, try to mine two at once instead of one.
     If the block above is also a goal block, set GoalBlock instead of GoalTwoBlocks
     If the block below is also a goal block, set GoalBlock to the position one down instead of GoalTwoBlocks


  - #### internalMiningAirException



    ```
    public final Settings.Setting<java.lang.Boolean> internalMiningAirException
    ```


    Modification to the previous setting, only has effect if forceInternalMining is true
     If true, only apply the previous setting if the block adjacent to the goal isn't air.


  - #### followOffsetDistance



    ```
    public final Settings.Setting<java.lang.Double> followOffsetDistance
    ```


    The actual GoalNear is set this distance away from the entity you're following



    For example, set followOffsetDistance to 5 and followRadius to 0 to always stay precisely 5 blocks north of your follow target.


  - #### followOffsetDirection



    ```
    public final Settings.Setting<java.lang.Float> followOffsetDirection
    ```


    The actual GoalNear is set in this direction from the entity you're following. This value is in degrees.


  - #### followRadius



    ```
    public final Settings.Setting<java.lang.Integer> followRadius
    ```


    The radius (for the GoalNear) of how close to your target position you actually have to be


  - #### disableCompletionCheck



    ```
    public final Settings.Setting<java.lang.Boolean> disableCompletionCheck
    ```


    Turn this on if your exploration filter is enormous, you don't want it to check if it's done,
     and you are just fine with it just hanging on completion


  - #### cachedChunksExpirySeconds



    ```
    public final Settings.Setting<java.lang.Long> cachedChunksExpirySeconds
    ```


    Cached chunks (regardless of if they're in RAM or saved to disk) expire and are deleted after this number of seconds
     -1 to disable



    I would highly suggest leaving this setting disabled (-1).





    The only valid reason I can think of enable this setting is if you are extremely low on disk space and you play on multiplayer,
    and can't take (average) 300kb saved for every 512x512 area. (note that more complicated terrain is less compressible and will take more space)





    However, simply discarding old chunks because they are old is inadvisable. Baritone is extremely good at correcting
    itself and its paths as it learns new information, as new chunks load. There is no scenario in which having an
    incorrect cache can cause Baritone to get stuck, take damage, or perform any action it wouldn't otherwise, everything
    is rechecked once the real chunk is in range.





    Having a robust cache greatly improves long distance pathfinding, as it's able to go around large scale obstacles
    before they're in render distance. In fact, when the chunkCaching setting is disabled and Baritone starts anew
    every time, or when you enter a completely new and very complicated area, it backtracks far more often because it
    has to build up that cache from scratch. But after it's gone through an area just once, the next time will have zero
    backtracking, since the entire area is now known and cached.


  - #### logger



    ```
    public final Settings.Setting<java.util.function.Consumer<net.minecraft.util.text.ITextComponent>> logger
    ```


    The function that is called when Baritone will log to chat. This function can be added to
     via `Consumer.andThen(Consumer)` or it can completely be overriden via setting
     [`Settings.Setting.value`](../../baritone/api/Settings.Setting.html#value);


  - #### notifier



    ```
    public final Settings.Setting<java.util.function.BiConsumer<java.lang.String,java.lang.Boolean>> notifier
    ```


    The function that is called when Baritone will send a desktop notification. This function can be added to
     via `Consumer.andThen(Consumer)` or it can completely be overriden via setting
     [`Settings.Setting.value`](../../baritone/api/Settings.Setting.html#value);


  - #### toaster



    ```
    public final Settings.Setting<java.util.function.BiConsumer<net.minecraft.util.text.ITextComponent,net.minecraft.util.text.ITextComponent>> toaster
    ```


    The function that is called when Baritone will show a toast. This function can be added to
     via `Consumer.andThen(Consumer)` or it can completely be overriden via setting
     [`Settings.Setting.value`](../../baritone/api/Settings.Setting.html#value);


  - #### yLevelBoxSize



    ```
    public final Settings.Setting<java.lang.Double> yLevelBoxSize
    ```


    The size of the box that is rendered when the current goal is a GoalYLevel


  - #### colorCurrentPath



    ```
    public final Settings.Setting<java.awt.Color> colorCurrentPath
    ```


    The color of the current path


  - #### colorNextPath



    ```
    public final Settings.Setting<java.awt.Color> colorNextPath
    ```


    The color of the next path


  - #### colorBlocksToBreak



    ```
    public final Settings.Setting<java.awt.Color> colorBlocksToBreak
    ```


    The color of the blocks to break


  - #### colorBlocksToPlace



    ```
    public final Settings.Setting<java.awt.Color> colorBlocksToPlace
    ```


    The color of the blocks to place


  - #### colorBlocksToWalkInto



    ```
    public final Settings.Setting<java.awt.Color> colorBlocksToWalkInto
    ```


    The color of the blocks to walk into


  - #### colorBestPathSoFar



    ```
    public final Settings.Setting<java.awt.Color> colorBestPathSoFar
    ```


    The color of the best path so far


  - #### colorMostRecentConsidered



    ```
    public final Settings.Setting<java.awt.Color> colorMostRecentConsidered
    ```


    The color of the path to the most recent considered node


  - #### colorGoalBox



    ```
    public final Settings.Setting<java.awt.Color> colorGoalBox
    ```


    The color of the goal box


  - #### colorInvertedGoalBox



    ```
    public final Settings.Setting<java.awt.Color> colorInvertedGoalBox
    ```


    The color of the goal box when it's inverted


  - #### colorSelection



    ```
    public final Settings.Setting<java.awt.Color> colorSelection
    ```


    The color of all selections


  - #### colorSelectionPos1



    ```
    public final Settings.Setting<java.awt.Color> colorSelectionPos1
    ```


    The color of the selection pos 1


  - #### colorSelectionPos2



    ```
    public final Settings.Setting<java.awt.Color> colorSelectionPos2
    ```


    The color of the selection pos 2


  - #### selectionOpacity



    ```
    public final Settings.Setting<java.lang.Float> selectionOpacity
    ```


    The opacity of the selection. 0 is completely transparent, 1 is completely opaque


  - #### selectionLineWidth



    ```
    public final Settings.Setting<java.lang.Float> selectionLineWidth
    ```


    Line width of the goal when rendered, in pixels


  - #### renderSelection



    ```
    public final Settings.Setting<java.lang.Boolean> renderSelection
    ```


    Render selections


  - #### renderSelectionIgnoreDepth



    ```
    public final Settings.Setting<java.lang.Boolean> renderSelectionIgnoreDepth
    ```


    Ignore depth when rendering selections


  - #### renderSelectionCorners



    ```
    public final Settings.Setting<java.lang.Boolean> renderSelectionCorners
    ```


    Render selection corners


  - #### useSwordToMine



    ```
    public final Settings.Setting<java.lang.Boolean> useSwordToMine
    ```


    Use sword to mine.


  - #### desktopNotifications



    ```
    public final Settings.Setting<java.lang.Boolean> desktopNotifications
    ```


    Desktop notifications


  - #### notificationOnPathComplete



    ```
    public final Settings.Setting<java.lang.Boolean> notificationOnPathComplete
    ```


    Desktop notification on path complete


  - #### notificationOnFarmFail



    ```
    public final Settings.Setting<java.lang.Boolean> notificationOnFarmFail
    ```


    Desktop notification on farm fail


  - #### notificationOnBuildFinished



    ```
    public final Settings.Setting<java.lang.Boolean> notificationOnBuildFinished
    ```


    Desktop notification on build finished


  - #### notificationOnExploreFinished



    ```
    public final Settings.Setting<java.lang.Boolean> notificationOnExploreFinished
    ```


    Desktop notification on explore finished


  - #### notificationOnMineFail



    ```
    public final Settings.Setting<java.lang.Boolean> notificationOnMineFail
    ```


    Desktop notification on mine fail


  - #### byLowerName



    ```
    public final java.util.Map<java.lang.String,Settings.Setting<?>> byLowerName
    ```


    A map of lowercase setting field names to their respective setting


  - #### allSettings



    ```
    public final java.util.List<Settings.Setting<?>> allSettings
    ```


    A list of all settings


  - #### settingTypes



    ```
    public final java.util.Map<Settings.Setting<?>,java.lang.reflect.Type> settingTypes
    ```

- ### Method Detail


  - #### getAllValuesByType



    ```
    public <T> java.util.List<Settings.Setting<T>> getAllValuesByType(java.lang.Class<T> cla$$)
    ```