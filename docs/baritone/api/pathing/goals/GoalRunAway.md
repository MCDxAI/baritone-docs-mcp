GoalRunAway (baritone 1.2.15 API)

baritone.api.pathing.goals

## Class GoalRunAway

- java.lang.Object
  - baritone.api.pathing.goals.GoalRunAway

- All Implemented Interfaces:[Goal](../../../../baritone/api/pathing/goals/Goal.html "interface in baritone.api.pathing.goals")

* * *





```
public class GoalRunAway
extends java.lang.Object
implements Goal
```


Useful for automated combat (retreating specifically)


- ### Constructor Summary

ConstructorsConstructor and Description`GoalRunAway(double distance,
             net.minecraft.util.math.BlockPos... from)``GoalRunAway(double distance,
             java.lang.Integer maintainY,
             net.minecraft.util.math.BlockPos... from)`

- ### Method Summary

All Methods[Instance Methods](javascript:show(2);)[Concrete Methods](javascript:show(8);)Modifier and TypeMethod and Description`double``heuristic()`

Returns the heuristic at the goal.

`double``heuristic(int x,
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

     `heuristic, isInGoal`

- ### Constructor Detail



  - #### GoalRunAway



    ```
    public GoalRunAway(double distance,
                       net.minecraft.util.math.BlockPos... from)
    ```


  - #### GoalRunAway



    ```
    public GoalRunAway(double distance,
                       java.lang.Integer maintainY,
                       net.minecraft.util.math.BlockPos... from)
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

  - #### heuristic



    ```
    public double heuristic()
    ```


    Description copied from interface: `Goal`

    Returns the heuristic at the goal.
     i.e. `heuristic() == heuristic(x,y,z)`
     when `isInGoal(x,y,z) == true`
     This is needed by `PathingBehavior#estimatedTicksToGoal` because
     some Goals actually do not have a heuristic of 0 when that condition is met
    Specified by:`heuristic` in interface `Goal`Returns:The estimate number of ticks to satisfy the goal when the goal
     is already satisfied

  - #### toString



    ```
    public java.lang.String toString()
    ```

    Overrides:`toString` in class `java.lang.Object`