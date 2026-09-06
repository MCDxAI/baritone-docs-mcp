Waypoint (baritone 1.2.15 API)

baritone.api.cache

## Class Waypoint

- java.lang.Object
  - baritone.api.cache.Waypoint

- All Implemented Interfaces:[IWaypoint](../../../baritone/api/cache/IWaypoint.html "interface in baritone.api.cache")

* * *





```
public class Waypoint
extends java.lang.Object
implements IWaypoint
```


Basic implementation of [`IWaypoint`](../../../baritone/api/cache/IWaypoint.html "interface in baritone.api.cache")


- ### Nested Class Summary


  - ### Nested classes/interfaces inherited from interface baritone.api.cache. [IWaypoint](../../../baritone/api/cache/IWaypoint.html "interface in baritone.api.cache")

     `IWaypoint.Tag`

- ### Constructor Summary

ConstructorsConstructor and Description`Waypoint(java.lang.String name,
          IWaypoint.Tag tag,
          BetterBlockPos location)``Waypoint(java.lang.String name,
          IWaypoint.Tag tag,
          BetterBlockPos location,
          long creationTimestamp)`

Constructor called when a Waypoint is read from disk, adds the creationTimestamp
as a parameter so that it is reserved after a waypoint is wrote to the disk.


- ### Method Summary

All Methods[Instance Methods](javascript:show(2);)[Concrete Methods](javascript:show(8);)Modifier and TypeMethod and Description`boolean``equals(java.lang.Object o)``long``getCreationTimestamp()`

Returns the unix epoch time in milliseconds that this waypoint
was created.

`BetterBlockPos``getLocation()`

Returns the actual block position of this waypoint.

`java.lang.String``getName()``IWaypoint.Tag``getTag()`

Returns the tag for this waypoint.

`int``hashCode()``java.lang.String``toString()`
  - ### Methods inherited from class java.lang.Object

     `clone, finalize, getClass, notify, notifyAll, wait, wait, wait`

- ### Constructor Detail



  - #### Waypoint



    ```
    public Waypoint(java.lang.String name,
                    IWaypoint.Tag tag,
                    BetterBlockPos location)
    ```


  - #### Waypoint



    ```
    public Waypoint(java.lang.String name,
                    IWaypoint.Tag tag,
                    BetterBlockPos location,
                    long creationTimestamp)
    ```


    Constructor called when a Waypoint is read from disk, adds the creationTimestamp
     as a parameter so that it is reserved after a waypoint is wrote to the disk.
    Parameters:`name` \- The waypoint name`tag` \- The waypoint tag`location` \- The waypoint location`creationTimestamp` \- When the waypoint was created

- ### Method Detail



  - #### hashCode



    ```
    public int hashCode()
    ```

    Overrides:`hashCode` in class `java.lang.Object`

  - #### getName



    ```
    public java.lang.String getName()
    ```

    Specified by:`getName` in interface `IWaypoint`Returns:The label for this waypoint

  - #### getTag



    ```
    public IWaypoint.Tag getTag()
    ```


    Description copied from interface: `IWaypoint`

    Returns the tag for this waypoint. The tag is a category
     for the waypoint in a sense, it describes the source of
     the waypoint.
    Specified by:`getTag` in interface `IWaypoint`Returns:The waypoint tag

  - #### getCreationTimestamp



    ```
    public long getCreationTimestamp()
    ```


    Description copied from interface: `IWaypoint`

    Returns the unix epoch time in milliseconds that this waypoint
     was created. This value should only be set once, when the waypoint
     is initially created, and not when it is being loaded from file.
    Specified by:`getCreationTimestamp` in interface `IWaypoint`Returns:The unix epoch milliseconds that this waypoint was created

  - #### getLocation



    ```
    public BetterBlockPos getLocation()
    ```


    Description copied from interface: `IWaypoint`

    Returns the actual block position of this waypoint.
    Specified by:`getLocation` in interface `IWaypoint`Returns:The block position of this waypoint

  - #### toString



    ```
    public java.lang.String toString()
    ```

    Overrides:`toString` in class `java.lang.Object`

  - #### equals



    ```
    public boolean equals(java.lang.Object o)
    ```

    Overrides:`equals` in class `java.lang.Object`