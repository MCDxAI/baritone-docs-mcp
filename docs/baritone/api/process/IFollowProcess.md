IFollowProcess (baritone 1.2.15 API)

baritone.api.process

## Interface IFollowProcess

- All Superinterfaces:[IBaritoneProcess](../../../baritone/api/process/IBaritoneProcess.html "interface in baritone.api.process")

* * *





```
public interface IFollowProcess
extends IBaritoneProcess
```

Since:9/23/2018

- ### Field Summary


  - ### Fields inherited from interface baritone.api.process. [IBaritoneProcess](../../../baritone/api/process/IBaritoneProcess.html "interface in baritone.api.process")

     `DEFAULT_PRIORITY`

- ### Method Summary

All Methods[Instance Methods](javascript:show(2);)[Abstract Methods](javascript:show(4);)[Default Methods](javascript:show(16);)Modifier and TypeMethod and Description`default void``cancel()`

Cancels the follow behavior, this will clear the current follow target.

`java.util.function.Predicate<net.minecraft.entity.Entity>``currentFilter()``void``follow(java.util.function.Predicate<net.minecraft.entity.Entity> filter)`

Set the follow target to any entities matching this predicate

`java.util.List<net.minecraft.entity.Entity>``following()`
  - ### Methods inherited from interface baritone.api.process. [IBaritoneProcess](../../../baritone/api/process/IBaritoneProcess.html "interface in baritone.api.process")

     `displayName, displayName0, isActive, isTemporary, onLostControl, onTick, priority`

- ### Method Detail



  - #### follow



    ```
    void follow(java.util.function.Predicate<net.minecraft.entity.Entity> filter)
    ```


    Set the follow target to any entities matching this predicate
    Parameters:`filter` \- the predicate

  - #### following



    ```
    java.util.List<net.minecraft.entity.Entity> following()
    ```

    Returns:The entities that are currently being followed. null if not currently following, empty if nothing matches the predicate

  - #### currentFilter



    ```
    java.util.function.Predicate<net.minecraft.entity.Entity> currentFilter()
    ```


  - #### cancel



    ```
    default void cancel()
    ```


    Cancels the follow behavior, this will clear the current follow target.