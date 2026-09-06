ICustomGoalProcess (baritone 1.2.15 API)

baritone.api.process

## Interface ICustomGoalProcess

- All Superinterfaces:[IBaritoneProcess](../../../baritone/api/process/IBaritoneProcess.html "interface in baritone.api.process")

* * *





```
public interface ICustomGoalProcess
extends IBaritoneProcess
```


- ### Field Summary


  - ### Fields inherited from interface baritone.api.process. [IBaritoneProcess](../../../baritone/api/process/IBaritoneProcess.html "interface in baritone.api.process")

     `DEFAULT_PRIORITY`

- ### Method Summary

All Methods[Instance Methods](javascript:show(2);)[Abstract Methods](javascript:show(4);)[Default Methods](javascript:show(16);)Modifier and TypeMethod and Description`Goal``getGoal()``void``path()`

Starts path calculation and execution.

`void``setGoal(Goal goal)`

Sets the pathing goal

`default void``setGoalAndPath(Goal goal)`

Sets the goal and begins the path execution.


  - ### Methods inherited from interface baritone.api.process. [IBaritoneProcess](../../../baritone/api/process/IBaritoneProcess.html "interface in baritone.api.process")

     `displayName, displayName0, isActive, isTemporary, onLostControl, onTick, priority`

- ### Method Detail



  - #### setGoal



    ```
    void setGoal(Goal goal)
    ```


    Sets the pathing goal
    Parameters:`goal` \- The new goal

  - #### path



    ```
    void path()
    ```


    Starts path calculation and execution.


  - #### getGoal



    ```
    Goal getGoal()
    ```

    Returns:The current goal

  - #### setGoalAndPath



    ```
    default void setGoalAndPath(Goal goal)
    ```


    Sets the goal and begins the path execution.
    Parameters:`goal` \- The new goal