IWaypoint (baritone 1.2.15 API)

baritone.api.cache

## Interface IWaypoint

- All Known Implementing Classes:[Waypoint](../../../baritone/api/cache/Waypoint.html "class in baritone.api.cache")

* * *





```
public interface IWaypoint
```


A marker for a position in the world.
Since:9/24/2018

- ### Nested Class Summary

Nested ClassesModifier and TypeInterface and Description`static class ``IWaypoint.Tag`

- ### Method Summary

All Methods[Instance Methods](javascript:show(2);)[Abstract Methods](javascript:show(4);)Modifier and TypeMethod and Description`long``getCreationTimestamp()`

Returns the unix epoch time in milliseconds that this waypoint
was created.

`BetterBlockPos``getLocation()`

Returns the actual block position of this waypoint.

`java.lang.String``getName()``IWaypoint.Tag``getTag()`

Returns the tag for this waypoint.

- ### Method Detail



  - #### getName



    ```
    java.lang.String getName()
    ```

    Returns:The label for this waypoint

  - #### getTag



    ```
    IWaypoint.Tag getTag()
    ```


    Returns the tag for this waypoint. The tag is a category
     for the waypoint in a sense, it describes the source of
     the waypoint.
    Returns:The waypoint tag

  - #### getCreationTimestamp



    ```
    long getCreationTimestamp()
    ```


    Returns the unix epoch time in milliseconds that this waypoint
     was created. This value should only be set once, when the waypoint
     is initially created, and not when it is being loaded from file.
    Returns:The unix epoch milliseconds that this waypoint was created

  - #### getLocation



    ```
    BetterBlockPos getLocation()
    ```


    Returns the actual block position of this waypoint.
    Returns:The block position of this waypoint