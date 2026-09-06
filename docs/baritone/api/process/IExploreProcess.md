IExploreProcess (baritone 1.2.15 API)

baritone.api.process

## Interface IExploreProcess

- All Superinterfaces:[IBaritoneProcess](../../../baritone/api/process/IBaritoneProcess.html "interface in baritone.api.process")

* * *





```
public interface IExploreProcess
extends IBaritoneProcess
```


- ### Field Summary


  - ### Fields inherited from interface baritone.api.process. [IBaritoneProcess](../../../baritone/api/process/IBaritoneProcess.html "interface in baritone.api.process")

     `DEFAULT_PRIORITY`

- ### Method Summary

All Methods[Instance Methods](javascript:show(2);)[Abstract Methods](javascript:show(4);)Modifier and TypeMethod and Description`void``applyJsonFilter(java.nio.file.Path path,
                 boolean invert)``void``explore(int centerX,
         int centerZ)`
  - ### Methods inherited from interface baritone.api.process. [IBaritoneProcess](../../../baritone/api/process/IBaritoneProcess.html "interface in baritone.api.process")

     `displayName, displayName0, isActive, isTemporary, onLostControl, onTick, priority`

- ### Method Detail



  - #### explore



    ```
    void explore(int centerX,
                 int centerZ)
    ```


  - #### applyJsonFilter



    ```
    void applyJsonFilter(java.nio.file.Path path,
                         boolean invert)
                  throws java.lang.Exception
    ```

    Throws:`java.lang.Exception`