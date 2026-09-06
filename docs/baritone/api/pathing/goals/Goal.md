Goal (baritone 1.2.15 API)

baritone.api.pathing.goals

## Interface Goal

- All Known Implementing Classes:[GoalAxis](../../../../baritone/api/pathing/goals/GoalAxis.html "class in baritone.api.pathing.goals"), [GoalBlock](../../../../baritone/api/pathing/goals/GoalBlock.html "class in baritone.api.pathing.goals"), [GoalComposite](../../../../baritone/api/pathing/goals/GoalComposite.html "class in baritone.api.pathing.goals"), [GoalGetToBlock](../../../../baritone/api/pathing/goals/GoalGetToBlock.html "class in baritone.api.pathing.goals"), [GoalInverted](../../../../baritone/api/pathing/goals/GoalInverted.html "class in baritone.api.pathing.goals"), [GoalNear](../../../../baritone/api/pathing/goals/GoalNear.html "class in baritone.api.pathing.goals"), [GoalRunAway](../../../../baritone/api/pathing/goals/GoalRunAway.html "class in baritone.api.pathing.goals"), [GoalStrictDirection](../../../../baritone/api/pathing/goals/GoalStrictDirection.html "class in baritone.api.pathing.goals"), [GoalTwoBlocks](../../../../baritone/api/pathing/goals/GoalTwoBlocks.html "class in baritone.api.pathing.goals"), [GoalXZ](../../../../baritone/api/pathing/goals/GoalXZ.html "class in baritone.api.pathing.goals"), [GoalYLevel](../../../../baritone/api/pathing/goals/GoalYLevel.html "class in baritone.api.pathing.goals")

* * *





```
public interface Goal
```


An abstract Goal for pathing, can be anything from a specific block to just a Y coordinate.


- ### Method Summary

All Methods[Instance Methods](javascript:show(2);)[Abstract Methods](javascript:show(4);)[Default Methods](javascript:show(16);)Modifier and TypeMethod and Description`default double``heuristic()`

Returns the heuristic at the goal.

`default double``heuristic(net.minecraft.util.math.BlockPos pos)``double``heuristic(int x,
           int y,
           int z)`

Estimate the number of ticks it will take to get to the goal

`default boolean``isInGoal(net.minecraft.util.math.BlockPos pos)``boolean``isInGoal(int x,
          int y,
          int z)`

Returns whether or not the specified position
meets the requirement for this goal based.

- ### Method Detail



  - #### isInGoal



    ```
    boolean isInGoal(int x,
                     int y,
                     int z)
    ```


    Returns whether or not the specified position
     meets the requirement for this goal based.
    Parameters:`x` \- The goal X position`y` \- The goal Y position`z` \- The goal Z positionReturns:Whether or not it satisfies this goal

  - #### heuristic



    ```
    double heuristic(int x,
                     int y,
                     int z)
    ```


    Estimate the number of ticks it will take to get to the goal
    Parameters:`x` \- The goal X position`y` \- The goal Y position`z` \- The goal Z positionReturns:The estimate number of ticks to satisfy the goal

  - #### isInGoal



    ```
    default boolean isInGoal(net.minecraft.util.math.BlockPos pos)
    ```


  - #### heuristic



    ```
    default double heuristic(net.minecraft.util.math.BlockPos pos)
    ```


  - #### heuristic



    ```
    default double heuristic()
    ```


    Returns the heuristic at the goal.
     i.e. `heuristic() == heuristic(x,y,z)`
     when `isInGoal(x,y,z) == true`
     This is needed by `PathingBehavior#estimatedTicksToGoal` because
     some Goals actually do not have a heuristic of 0 when that condition is met
    Returns:The estimate number of ticks to satisfy the goal when the goal
     is already satisfied