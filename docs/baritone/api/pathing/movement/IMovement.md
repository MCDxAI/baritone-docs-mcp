IMovement (baritone 1.2.15 API)

baritone.api.pathing.movement

## Interface IMovement

- * * *





```
public interface IMovement
```

Since:10/8/2018

- ### Method Summary

All Methods[Instance Methods](javascript:show(2);)[Abstract Methods](javascript:show(4);)Modifier and TypeMethod and Description`boolean``calculatedWhileLoaded()``double``getCost()``BetterBlockPos``getDest()``net.minecraft.util.math.BlockPos``getDirection()``BetterBlockPos``getSrc()``void``reset()`

Resets the current state status to [`MovementStatus.PREPPING`](../../../../baritone/api/pathing/movement/MovementStatus.html#PREPPING)

`void``resetBlockCache()`

Resets the cache for special break, place, and walk into blocks

`boolean``safeToCancel()``MovementStatus``update()`

- ### Method Detail



  - #### getCost



    ```
    double getCost()
    ```


  - #### update



    ```
    MovementStatus update()
    ```


  - #### reset



    ```
    void reset()
    ```


    Resets the current state status to [`MovementStatus.PREPPING`](../../../../baritone/api/pathing/movement/MovementStatus.html#PREPPING)


  - #### resetBlockCache



    ```
    void resetBlockCache()
    ```


    Resets the cache for special break, place, and walk into blocks


  - #### safeToCancel



    ```
    boolean safeToCancel()
    ```

    Returns:Whether or not it is safe to cancel the current movement state

  - #### calculatedWhileLoaded



    ```
    boolean calculatedWhileLoaded()
    ```


  - #### getSrc



    ```
    BetterBlockPos getSrc()
    ```


  - #### getDest



    ```
    BetterBlockPos getDest()
    ```


  - #### getDirection



    ```
    net.minecraft.util.math.BlockPos getDirection()
    ```