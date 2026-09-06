IFarmProcess (baritone 1.2.15 API)

baritone.api.process

## Interface IFarmProcess

- All Superinterfaces:[IBaritoneProcess](../../../baritone/api/process/IBaritoneProcess.html "interface in baritone.api.process")

* * *





```
public interface IFarmProcess
extends IBaritoneProcess
```


- ### Field Summary


  - ### Fields inherited from interface baritone.api.process. [IBaritoneProcess](../../../baritone/api/process/IBaritoneProcess.html "interface in baritone.api.process")

     `DEFAULT_PRIORITY`

- ### Method Summary

All Methods[Instance Methods](javascript:show(2);)[Abstract Methods](javascript:show(4);)[Default Methods](javascript:show(16);)Modifier and TypeMethod and Description`default void``farm()`

Begin to search for nearby crops to farm.

`default void``farm(int range)`

Begin to search for crops to farm with in specified aria
from the position the command was executed.

`void``farm(int range,
      net.minecraft.util.math.BlockPos pos)`

Begin to search for crops to farm with in specified aria
from specified location.


  - ### Methods inherited from interface baritone.api.process. [IBaritoneProcess](../../../baritone/api/process/IBaritoneProcess.html "interface in baritone.api.process")

     `displayName, displayName0, isActive, isTemporary, onLostControl, onTick, priority`

- ### Method Detail



  - #### farm



    ```
    void farm(int range,
              net.minecraft.util.math.BlockPos pos)
    ```


    Begin to search for crops to farm with in specified aria
     from specified location.
    Parameters:`range` \- The distance from center to farm from`pos` \- The center position to base the range from

  - #### farm



    ```
    default void farm()
    ```


    Begin to search for nearby crops to farm.


  - #### farm



    ```
    default void farm(int range)
    ```


    Begin to search for crops to farm with in specified aria
     from the position the command was executed.
    Parameters:`range` \- The distance to search for crops to farm