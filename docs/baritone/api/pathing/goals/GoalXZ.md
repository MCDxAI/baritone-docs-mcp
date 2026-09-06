GoalXZ (baritone 1.2.15 API)

baritone.api.pathing.goals

## Class GoalXZ

- java.lang.Object
  - baritone.api.pathing.goals.GoalXZ

- All Implemented Interfaces:[Goal](../../../../baritone/api/pathing/goals/Goal.html "interface in baritone.api.pathing.goals")

* * *





```
public class GoalXZ
extends java.lang.Object
implements Goal
```


Useful for long-range goals that don't have a specific Y level.


- ### Constructor Summary

ConstructorsConstructor and Description`GoalXZ(BetterBlockPos pos)``GoalXZ(int x,
        int z)`

- ### Method Summary

All Methods[Static Methods](javascript:show(1);)[Instance Methods](javascript:show(2);)[Concrete Methods](javascript:show(8);)Modifier and TypeMethod and Description`static double``calculate(double xDiff,
           double zDiff)``static GoalXZ``fromDirection(net.minecraft.util.math.Vec3d origin,
               float yaw,
               double distance)``int``getX()``int``getZ()``double``heuristic(int x,
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

- ### Constructor Detail



  - #### GoalXZ



    ```
    public GoalXZ(int x,
                  int z)
    ```


  - #### GoalXZ



    ```
    public GoalXZ(BetterBlockPos pos)
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

  - #### toString



    ```
    public java.lang.String toString()
    ```

    Overrides:`toString` in class `java.lang.Object`

  - #### calculate



    ```
    public static double calculate(double xDiff,
                                   double zDiff)
    ```


  - #### fromDirection



    ```
    public static GoalXZ fromDirection(net.minecraft.util.math.Vec3d origin,
                                       float yaw,
                                       double distance)
    ```


  - #### getX



    ```
    public int getX()
    ```


  - #### getZ



    ```
    public int getZ()
    ```