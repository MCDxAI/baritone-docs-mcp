ICachedRegion (baritone 1.2.15 API)

baritone.api.cache

## Interface ICachedRegion

- All Superinterfaces:[IBlockTypeAccess](../../../baritone/api/cache/IBlockTypeAccess.html "interface in baritone.api.cache")

* * *





```
public interface ICachedRegion
extends IBlockTypeAccess
```

Since:9/24/2018

- ### Method Summary

All Methods[Instance Methods](javascript:show(2);)[Abstract Methods](javascript:show(4);)Modifier and TypeMethod and Description`int``getX()``int``getZ()``boolean``isCached(int blockX,
          int blockZ)`

Returns whether or not the block at the specified X and Z coordinates
is cached in this world.


  - ### Methods inherited from interface baritone.api.cache. [IBlockTypeAccess](../../../baritone/api/cache/IBlockTypeAccess.html "interface in baritone.api.cache")

     `getBlock, getBlock`

- ### Method Detail



  - #### isCached



    ```
    boolean isCached(int blockX,
                     int blockZ)
    ```


    Returns whether or not the block at the specified X and Z coordinates
     is cached in this world. Similar to [`ICachedWorld.isCached(int, int)`](../../../baritone/api/cache/ICachedWorld.html#isCached-int-int-),
     however, the block coordinates should in on a scale from 0 to 511 (inclusive)
     because region sizes are 512x512 blocks.
    Parameters:`blockX` \- The block X coordinate`blockZ` \- The block Z coordinateReturns:Whether or not the specified XZ location is cachedSee Also:[`ICachedWorld.isCached(int, int)`](../../../baritone/api/cache/ICachedWorld.html#isCached-int-int-)

  - #### getX



    ```
    int getX()
    ```

    Returns:The X coordinate of this region

  - #### getZ



    ```
    int getZ()
    ```

    Returns:The Z coordinate of this region