IWorldScanner (baritone 1.2.15 API)

baritone.api.cache

## Interface IWorldScanner

- * * *





```
public interface IWorldScanner
```

Since:10/6/2018

- ### Method Summary

All Methods[Instance Methods](javascript:show(2);)[Abstract Methods](javascript:show(4);)[Default Methods](javascript:show(16);)Modifier and TypeMethod and Description`int``repack(IPlayerContext ctx)`

Overload of [`repack(IPlayerContext, int)`](../../../baritone/api/cache/IWorldScanner.html#repack-baritone.api.utils.IPlayerContext-int-) where the value of the `range` parameter is `40`.

`int``repack(IPlayerContext ctx,
        int range)`

Queues the chunks in a square formation around the specified player, using the specified
range, which represents 1/2 the square's dimensions, where the player is in the center.

`java.util.List<net.minecraft.util.math.BlockPos>``scanChunk(IPlayerContext ctx,
           BlockOptionalMetaLookup filter,
           net.minecraft.util.math.ChunkPos pos,
           int max,
           int yLevelThreshold)`

Scans a single chunk for the specified blocks.

`default java.util.List<net.minecraft.util.math.BlockPos>``scanChunk(IPlayerContext ctx,
           java.util.List<net.minecraft.block.Block> blocks,
           net.minecraft.util.math.ChunkPos pos,
           int max,
           int yLevelThreshold)`

Scans a single chunk for the specified blocks.

`java.util.List<net.minecraft.util.math.BlockPos>``scanChunkRadius(IPlayerContext ctx,
                 BlockOptionalMetaLookup filter,
                 int max,
                 int yLevelThreshold,
                 int maxSearchRadius)`

Scans the world, up to the specified max chunk radius, for the specified blocks.

`default java.util.List<net.minecraft.util.math.BlockPos>``scanChunkRadius(IPlayerContext ctx,
                 java.util.List<net.minecraft.block.Block> filter,
                 int max,
                 int yLevelThreshold,
                 int maxSearchRadius)`

- ### Method Detail



  - #### scanChunkRadius



    ```
    java.util.List<net.minecraft.util.math.BlockPos> scanChunkRadius(IPlayerContext ctx,
                                                                     BlockOptionalMetaLookup filter,
                                                                     int max,
                                                                     int yLevelThreshold,
                                                                     int maxSearchRadius)
    ```


    Scans the world, up to the specified max chunk radius, for the specified blocks.
    Parameters:`ctx` \- The [`IPlayerContext`](../../../baritone/api/utils/IPlayerContext.html "interface in baritone.api.utils") containing player and world info that the scan is based upon`filter` \- The blocks to scan for`max` \- The maximum number of blocks to scan before cutoff`yLevelThreshold` \- If a block is found within this Y level, the current result will be returned, if the value
     is negative, then this condition doesn't apply.`maxSearchRadius` \- The maximum chunk search radiusReturns:The matching block positions

  - #### scanChunkRadius



    ```
    default java.util.List<net.minecraft.util.math.BlockPos> scanChunkRadius(IPlayerContext ctx,
                                                                             java.util.List<net.minecraft.block.Block> filter,
                                                                             int max,
                                                                             int yLevelThreshold,
                                                                             int maxSearchRadius)
    ```


  - #### scanChunk



    ```
    java.util.List<net.minecraft.util.math.BlockPos> scanChunk(IPlayerContext ctx,
                                                               BlockOptionalMetaLookup filter,
                                                               net.minecraft.util.math.ChunkPos pos,
                                                               int max,
                                                               int yLevelThreshold)
    ```


    Scans a single chunk for the specified blocks.
    Parameters:`ctx` \- The [`IPlayerContext`](../../../baritone/api/utils/IPlayerContext.html "interface in baritone.api.utils") containing player and world info that the scan is based upon`filter` \- The blocks to scan for`pos` \- The position of the target chunk`max` \- The maximum number of blocks to scan before cutoff`yLevelThreshold` \- If a block is found within this Y level, the current result will be returned, if the value
     is negative, then this condition doesn't apply.Returns:The matching block positions

  - #### scanChunk



    ```
    default java.util.List<net.minecraft.util.math.BlockPos> scanChunk(IPlayerContext ctx,
                                                                       java.util.List<net.minecraft.block.Block> blocks,
                                                                       net.minecraft.util.math.ChunkPos pos,
                                                                       int max,
                                                                       int yLevelThreshold)
    ```


    Scans a single chunk for the specified blocks.
    Parameters:`ctx` \- The [`IPlayerContext`](../../../baritone/api/utils/IPlayerContext.html "interface in baritone.api.utils") containing player and world info that the scan is based upon`blocks` \- The blocks to scan for`pos` \- The position of the target chunk`max` \- The maximum number of blocks to scan before cutoff`yLevelThreshold` \- If a block is found within this Y level, the current result will be returned, if the value
     is negative, then this condition doesn't apply.Returns:The matching block positions

  - #### repack



    ```
    int repack(IPlayerContext ctx)
    ```


    Overload of [`repack(IPlayerContext, int)`](../../../baritone/api/cache/IWorldScanner.html#repack-baritone.api.utils.IPlayerContext-int-) where the value of the `range` parameter is `40`.
    Parameters:`ctx` \- The player, describing the originReturns:The amount of chunks successfully queued for repacking

  - #### repack



    ```
    int repack(IPlayerContext ctx,
               int range)
    ```


    Queues the chunks in a square formation around the specified player, using the specified
     range, which represents 1/2 the square's dimensions, where the player is in the center.
    Parameters:`ctx` \- The player, describing the origin`range` \- The range to repackReturns:The amount of chunks successfully queued for repacking