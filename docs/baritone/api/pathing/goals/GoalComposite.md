GoalComposite (baritone 1.2.15 API)

baritone.api.pathing.goals

## Class GoalComposite

- java.lang.Object
  - baritone.api.pathing.goals.GoalComposite

- All Implemented Interfaces:[Goal](../../../../baritone/api/pathing/goals/Goal.html "interface in baritone.api.pathing.goals")

* * *





```
public class GoalComposite
extends java.lang.Object
implements Goal
```


A composite of many goals, any one of which satisfies the composite.
For example, a GoalComposite of block goals for every oak log in loaded chunks
would result in it pathing to the easiest oak log to get to


- ### Constructor Summary

ConstructorsConstructor and Description`GoalComposite(Goal... goals)`

- ### Method Summary

All Methods[Instance Methods](javascript:show(2);)[Concrete Methods](javascript:show(8);)Modifier and TypeMethod and Description`Goal[]``goals()``double``heuristic()`

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


  - #### GoalComposite



    ```
    public GoalComposite(Goal... goals)
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

  - #### goals



    ```
    public Goal[] goals()
    ```