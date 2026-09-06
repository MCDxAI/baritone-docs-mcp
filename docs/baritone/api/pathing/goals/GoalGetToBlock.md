GoalGetToBlock (baritone 1.2.15 API)

baritone.api.pathing.goals

## Class GoalGetToBlock

- java.lang.Object
  - baritone.api.pathing.goals.GoalGetToBlock

- All Implemented Interfaces:[Goal](../../../../baritone/api/pathing/goals/Goal.html "interface in baritone.api.pathing.goals"), [IGoalRenderPos](../../../../baritone/api/utils/interfaces/IGoalRenderPos.html "interface in baritone.api.utils.interfaces")

* * *





```
public class GoalGetToBlock
extends java.lang.Object
implements Goal, IGoalRenderPos
```


Don't get into the block, but get directly adjacent to it. Useful for chests.


- ### Field Summary

FieldsModifier and TypeField and Description`int``x``int``y``int``z`

- ### Constructor Summary

ConstructorsConstructor and Description`GoalGetToBlock(net.minecraft.util.math.BlockPos pos)`

- ### Method Summary

All Methods[Instance Methods](javascript:show(2);)[Concrete Methods](javascript:show(8);)Modifier and TypeMethod and Description`net.minecraft.util.math.BlockPos``getGoalPos()``double``heuristic(int x,
           int y,
           int z)`

Estimate the number of ticks it will take to get to the goal

`boolean``isInGoal(int x,
          int y,
          int z)`

Returns whether or not the specified position
meets the requirement for this goal based.

`java.lang.String``toString()`

  - ### Methods inherited from class java.lang.Object

     `clone, equals, finalize, getClass, hashCode, notify, notifyAll, wait, wait, wait`

  - ### Methods inherited from interface baritone.api.pathing.goals. [Goal](../../../../baritone/api/pathing/goals/Goal.html "interface in baritone.api.pathing.goals")

     `heuristic, heuristic, isInGoal`

- ### Field Detail



  - #### x



    ```
    public final int x
    ```


  - #### y



    ```
    public final int y
    ```


  - #### z



    ```
    public final int z
    ```

- ### Constructor Detail


  - #### GoalGetToBlock



    ```
    public GoalGetToBlock(net.minecraft.util.math.BlockPos pos)
    ```

- ### Method Detail



  - #### getGoalPos



    ```
    public net.minecraft.util.math.BlockPos getGoalPos()
    ```

    Specified by:`getGoalPos` in interface `IGoalRenderPos`

  - #### isInGoal



    ```
    public boolean isInGoal(int x,
                            int y,
                            int z)
    ```


    Description copied from interface: `Goal`

    Returns whether or not the specified position
     meets the requirement for this goal based.
    Specified by:`isInGoal` in interface `Goal`Parameters:`x` \- The goal X position`y` \- The goal Y position`z` \- The goal Z positionReturns:Whether or not it satisfies this goal

  - #### heuristic



    ```
    public double heuristic(int x,
                            int y,
                            int z)
    ```


    Description copied from interface: `Goal`

    Estimate the number of ticks it will take to get to the goal
    Specified by:`heuristic` in interface `Goal`Parameters:`x` \- The goal X position`y` \- The goal Y position`z` \- The goal Z positionReturns:The estimate number of ticks to satisfy the goal

  - #### toString



    ```
    public java.lang.String toString()
    ```

    Overrides:`toString` in class `java.lang.Object`