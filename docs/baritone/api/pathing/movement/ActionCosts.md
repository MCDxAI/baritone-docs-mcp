ActionCosts (baritone 1.2.15 API)

baritone.api.pathing.movement

## Interface ActionCosts

- All Known Implementing Classes:[GoalYLevel](../../../../baritone/api/pathing/goals/GoalYLevel.html "class in baritone.api.pathing.goals")

* * *





```
public interface ActionCosts
```


- ### Field Summary

FieldsModifier and TypeField and Description`static double``CENTER_AFTER_FALL_COST`

To walk the rest of the way to be centered on the new block

`static double``COST_INF`

don't make this Double.MAX\_VALUE because it's added to other things, maybe other COST\_INFs,
and that would make it overflow to negative

`static double``FALL_0_25_BLOCKS_COST``static double``FALL_1_25_BLOCKS_COST``static double[]``FALL_N_BLOCKS_COST``static double``JUMP_ONE_BLOCK_COST`

When you hit space, you get enough upward velocity to go 1.25 blocks
Then, you fall the remaining 0.25 to get on the surface, on block higher.

`static double``LADDER_DOWN_ONE_COST``static double``LADDER_UP_ONE_COST``static double``SNEAK_ONE_BLOCK_COST``static double``SPRINT_MULTIPLIER``static double``SPRINT_ONE_BLOCK_COST``static double``WALK_OFF_BLOCK_COST`

To walk off an edge you need to walk 0.5 to the edge then 0.3 to start falling off

`static double``WALK_ONE_BLOCK_COST`

These costs are measured roughly in ticks btw

`static double``WALK_ONE_IN_WATER_COST``static double``WALK_ONE_OVER_SOUL_SAND_COST`

- ### Method Summary

All Methods[Static Methods](javascript:show(1);)[Default Methods](javascript:show(16);)Modifier and TypeMethod and Description`static double``distanceToTicks(double distance)``static double[]``generateFallNBlocksCost()``static double``oldFormula(double ticks)``static double``velocity(int ticks)`

- ### Field Detail



  - #### WALK\_ONE\_BLOCK\_COST



    ```
    static final double WALK_ONE_BLOCK_COST
    ```


    These costs are measured roughly in ticks btw
    See Also:[Constant Field Values](../../../../constant-values.html#baritone.api.pathing.movement.ActionCosts.WALK_ONE_BLOCK_COST)

  - #### WALK\_ONE\_IN\_WATER\_COST



    ```
    static final double WALK_ONE_IN_WATER_COST
    ```

    See Also:[Constant Field Values](../../../../constant-values.html#baritone.api.pathing.movement.ActionCosts.WALK_ONE_IN_WATER_COST)

  - #### WALK\_ONE\_OVER\_SOUL\_SAND\_COST



    ```
    static final double WALK_ONE_OVER_SOUL_SAND_COST
    ```

    See Also:[Constant Field Values](../../../../constant-values.html#baritone.api.pathing.movement.ActionCosts.WALK_ONE_OVER_SOUL_SAND_COST)

  - #### LADDER\_UP\_ONE\_COST



    ```
    static final double LADDER_UP_ONE_COST
    ```

    See Also:[Constant Field Values](../../../../constant-values.html#baritone.api.pathing.movement.ActionCosts.LADDER_UP_ONE_COST)

  - #### LADDER\_DOWN\_ONE\_COST



    ```
    static final double LADDER_DOWN_ONE_COST
    ```

    See Also:[Constant Field Values](../../../../constant-values.html#baritone.api.pathing.movement.ActionCosts.LADDER_DOWN_ONE_COST)

  - #### SNEAK\_ONE\_BLOCK\_COST



    ```
    static final double SNEAK_ONE_BLOCK_COST
    ```

    See Also:[Constant Field Values](../../../../constant-values.html#baritone.api.pathing.movement.ActionCosts.SNEAK_ONE_BLOCK_COST)

  - #### SPRINT\_ONE\_BLOCK\_COST



    ```
    static final double SPRINT_ONE_BLOCK_COST
    ```

    See Also:[Constant Field Values](../../../../constant-values.html#baritone.api.pathing.movement.ActionCosts.SPRINT_ONE_BLOCK_COST)

  - #### SPRINT\_MULTIPLIER



    ```
    static final double SPRINT_MULTIPLIER
    ```

    See Also:[Constant Field Values](../../../../constant-values.html#baritone.api.pathing.movement.ActionCosts.SPRINT_MULTIPLIER)

  - #### WALK\_OFF\_BLOCK\_COST



    ```
    static final double WALK_OFF_BLOCK_COST
    ```


    To walk off an edge you need to walk 0.5 to the edge then 0.3 to start falling off
    See Also:[Constant Field Values](../../../../constant-values.html#baritone.api.pathing.movement.ActionCosts.WALK_OFF_BLOCK_COST)

  - #### CENTER\_AFTER\_FALL\_COST



    ```
    static final double CENTER_AFTER_FALL_COST
    ```


    To walk the rest of the way to be centered on the new block
    See Also:[Constant Field Values](../../../../constant-values.html#baritone.api.pathing.movement.ActionCosts.CENTER_AFTER_FALL_COST)

  - #### COST\_INF



    ```
    static final double COST_INF
    ```


    don't make this Double.MAX\_VALUE because it's added to other things, maybe other COST\_INFs,
     and that would make it overflow to negative
    See Also:[Constant Field Values](../../../../constant-values.html#baritone.api.pathing.movement.ActionCosts.COST_INF)

  - #### FALL\_N\_BLOCKS\_COST



    ```
    static final double[] FALL_N_BLOCKS_COST
    ```


  - #### FALL\_1\_25\_BLOCKS\_COST



    ```
    static final double FALL_1_25_BLOCKS_COST
    ```


  - #### FALL\_0\_25\_BLOCKS\_COST



    ```
    static final double FALL_0_25_BLOCKS_COST
    ```


  - #### JUMP\_ONE\_BLOCK\_COST



    ```
    static final double JUMP_ONE_BLOCK_COST
    ```


    When you hit space, you get enough upward velocity to go 1.25 blocks
     Then, you fall the remaining 0.25 to get on the surface, on block higher.
     Since parabolas are symmetric, the amount of time it takes to ascend up from 1 to 1.25
     will be the same amount of time that it takes to fall back down from 1.25 to 1.
     And the same applies to the overall shape, if it takes X ticks to fall back down 1.25 blocks,
     it will take X ticks to reach the peak of your 1.25 block leap.
     Therefore, the part of your jump from y=0 to y=1.25 takes distanceToTicks(1.25) ticks,
     and the sub-part from y=1 to y=1.25 takes distanceToTicks(0.25) ticks.
     Therefore, the other sub-part, from y=0 to y-1, takes distanceToTicks(1.25)-distanceToTicks(0.25) ticks.
     That's why JUMP\_ONE\_BLOCK\_COST = FALL\_1\_25\_BLOCKS\_COST - FALL\_0\_25\_BLOCKS\_COST

- ### Method Detail



  - #### generateFallNBlocksCost



    ```
    static double[] generateFallNBlocksCost()
    ```


  - #### velocity



    ```
    static double velocity(int ticks)
    ```


  - #### oldFormula



    ```
    static double oldFormula(double ticks)
    ```


  - #### distanceToTicks



    ```
    static double distanceToTicks(double distance)
    ```