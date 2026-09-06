IWorldData (baritone 1.2.15 API)

baritone.api.cache

## Interface IWorldData

- * * *





```
public interface IWorldData
```

Since:9/24/2018

- ### Method Summary

All Methods[Instance Methods](javascript:show(2);)[Abstract Methods](javascript:show(4);)Modifier and TypeMethod and Description`ICachedWorld``getCachedWorld()`

Returns the cached world for this world.

`IWaypointCollection``getWaypoints()`

- ### Method Detail



  - #### getCachedWorld



    ```
    ICachedWorld getCachedWorld()
    ```


    Returns the cached world for this world. A cached world is a simplified format
     of a regular world, intended for use on multiplayer servers where chunks are not
     traditionally stored to disk, allowing for long distance pathing with minimal disk usage.
    Returns:The cached world for this world

  - #### getWaypoints



    ```
    IWaypointCollection getWaypoints()
    ```

    Returns:The waypoint collection for this world