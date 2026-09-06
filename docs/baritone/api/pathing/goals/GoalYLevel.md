GoalYLevel (baritone 1.2.15 API)

baritone.api.pathing.goals

## Class GoalYLevel

- java.lang.Object
  - baritone.api.pathing.goals.GoalYLevel

- All Implemented Interfaces:[Goal](../../../../baritone/api/pathing/goals/Goal.html "interface in baritone.api.pathing.goals"), [ActionCosts](../../../../baritone/api/pathing/movement/ActionCosts.html "interface in baritone.api.pathing.movement")

* * *





```
public class GoalYLevel
extends java.lang.Object
implements Goal, ActionCosts
```


Useful for mining (getting to diamond / iron level)


- ### Field Summary

FieldsModifier and TypeField and Description`int``level`

The target Y level


  - ### Fields inherited from interface baritone.api.pathing.movement. [ActionCosts](../../../../baritone/api/pathing/movement/ActionCosts.html "interface in baritone.api.pathing.movement")

     `CENTER_AFTER_FALL_COST, COST_INF, FALL_0_25_BLOCKS_COST, FALL_1_25_BLOCKS_COST, FALL_N_BLOCKS_COST, JUMP_ONE_BLOCK_COST, LADDER_DOWN_ONE_COST, LADDER_UP_ONE_COST, SNEAK_ONE_BLOCK_COST, SPRINT_MULTIPLIER, SPRINT_ONE_BLOCK_COST, WALK_OFF_BLOCK_COST, WALK_ONE_BLOCK_COST, WALK_ONE_IN_WATER_COST, WALK_ONE_OVER_SOUL_SAND_COST`

- ### Constructor Summary

ConstructorsConstructor and Description`GoalYLevel(int level)`

- ### Method Summary

All Methods[Static Methods](javascript:show(1);)[Instance Methods](javascript:show(2);)[Concrete Methods](javascript:show(8);)Modifier and TypeMethod and Description`static double``calculate(int goalY,
           int currentY)``double``heuristic(int x,
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

  - ### Methods inherited from interface baritone.api.pathing.movement. [ActionCosts](../../../../baritone/api/pathing/movement/ActionCosts.html "interface in baritone.api.pathing.movement")

     `distanceToTicks, generateFallNBlocksCost, oldFormula, velocity`

- ### Field Detail


  - #### level



    ```
    public final int level
    ```


    The target Y level

- ### Constructor Detail


  - #### GoalYLevel



    ```
    public GoalYLevel(int level)
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

  - #### calculate



    ```
    public static double calculate(int goalY,
                                   int currentY)
    ```


  - #### toString



    ```
    public java.lang.String toString()
    ```

    Overrides:`toString` in class `java.lang.Object`