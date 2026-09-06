IWaypointCollection (baritone 1.2.15 API)

baritone.api.cache

## Interface IWaypointCollection

- * * *





```
public interface IWaypointCollection
```

Since:9/24/2018

- ### Method Summary

All Methods[Instance Methods](javascript:show(2);)[Abstract Methods](javascript:show(4);)Modifier and TypeMethod and Description`void``addWaypoint(IWaypoint waypoint)`

Adds a waypoint to this collection

`java.util.Set<IWaypoint>``getAllWaypoints()`

Gets all of the waypoints in this collection, regardless of the tag.

`java.util.Set<IWaypoint>``getByTag(IWaypoint.Tag tag)`

Gets all of the waypoints that have the specified tag

`IWaypoint``getMostRecentByTag(IWaypoint.Tag tag)`

Gets the most recently created waypoint by the specified [`IWaypoint.Tag`](../../../baritone/api/cache/IWaypoint.Tag.html "enum in baritone.api.cache")

`void``removeWaypoint(IWaypoint waypoint)`

Removes a waypoint from this collection

- ### Method Detail



  - #### addWaypoint



    ```
    void addWaypoint(IWaypoint waypoint)
    ```


    Adds a waypoint to this collection
    Parameters:`waypoint` \- The waypoint

  - #### removeWaypoint



    ```
    void removeWaypoint(IWaypoint waypoint)
    ```


    Removes a waypoint from this collection
    Parameters:`waypoint` \- The waypoint

  - #### getMostRecentByTag



    ```
    IWaypoint getMostRecentByTag(IWaypoint.Tag tag)
    ```


    Gets the most recently created waypoint by the specified [`IWaypoint.Tag`](../../../baritone/api/cache/IWaypoint.Tag.html "enum in baritone.api.cache")
    Parameters:`tag` \- The tagReturns:The most recently created waypoint with the specified tag

  - #### getByTag



    ```
    java.util.Set<IWaypoint> getByTag(IWaypoint.Tag tag)
    ```


    Gets all of the waypoints that have the specified tag
    Parameters:`tag` \- The tagReturns:All of the waypoints with the specified tagSee Also:[`getAllWaypoints()`](../../../baritone/api/cache/IWaypointCollection.html#getAllWaypoints--)

  - #### getAllWaypoints



    ```
    java.util.Set<IWaypoint> getAllWaypoints()
    ```


    Gets all of the waypoints in this collection, regardless of the tag.
    Returns:All of the waypoints in this collectionSee Also:[`getByTag(IWaypoint.Tag)`](../../../baritone/api/cache/IWaypointCollection.html#getByTag-baritone.api.cache.IWaypoint.Tag-)