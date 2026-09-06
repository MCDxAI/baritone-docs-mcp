GoalTwoBlocks (baritone 1.2.15 API)

baritone.api.pathing.goals

## Class GoalTwoBlocks

- java.lang.Object
  - baritone.api.pathing.goals.GoalTwoBlocks

- All Implemented Interfaces:[Goal](../../../../baritone/api/pathing/goals/Goal.html "interface in baritone.api.pathing.goals"), [IGoalRenderPos](../../../../baritone/api/utils/interfaces/IGoalRenderPos.html "interface in baritone.api.utils.interfaces")

* * *





```
public class GoalTwoBlocks
extends java.lang.Object
implements Goal, IGoalRenderPos
```


Useful if the goal is just to mine a block. This goal will be satisfied if the specified
`BlockPos` is at to or above the specified position for this goal.


- ### Field Summary

FieldsModifier and TypeField and Description`protected int``x`

The X block position of this goal

`protected int``y`

The Y block position of this goal

`protected int``z`

The Z block position of this goal


- ### Constructor Summary

ConstructorsConstructor and Description`GoalTwoBlocks(net.minecraft.util.math.BlockPos pos)``GoalTwoBlocks(int x,
               int y,
               int z)`

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
    protected final int x
    ```


    The X block position of this goal


  - #### y



    ```
    protected final int y
    ```


    The Y block position of this goal


  - #### z



    ```
    protected final int z
    ```


    The Z block position of this goal

- ### Constructor Detail



  - #### GoalTwoBlocks



    ```
    public GoalTwoBlocks(net.minecraft.util.math.BlockPos pos)
    ```


  - #### GoalTwoBlocks



    ```
    public GoalTwoBlocks(int x,
                         int y,
                         int z)
    ```

- ### Method Detail



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

  - #### getGoalPos



    ```
    public net.minecraft.util.math.BlockPos getGoalPos()
    ```

    Specified by:`getGoalPos` in interface `IGoalRenderPos`

  - #### toString



    ```
    public java.lang.String toString()
    ```

    Overrides:`toString` in class `java.lang.Object`