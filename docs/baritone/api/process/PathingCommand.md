PathingCommand (baritone 1.2.15 API)

baritone.api.process

## Class PathingCommand

- java.lang.Object
  - baritone.api.process.PathingCommand

- * * *





```
public class PathingCommand
extends java.lang.Object
```


- ### Field Summary

FieldsModifier and TypeField and Description`PathingCommandType``commandType`

The command type.

`Goal``goal`

The target goal, may be `null`.


- ### Constructor Summary

ConstructorsConstructor and Description`PathingCommand(Goal goal,
                PathingCommandType commandType)`

Create a new [`PathingCommand`](../../../baritone/api/process/PathingCommand.html "class in baritone.api.process").


- ### Method Summary

All Methods[Instance Methods](javascript:show(2);)[Concrete Methods](javascript:show(8);)Modifier and TypeMethod and Description`java.lang.String``toString()`
  - ### Methods inherited from class java.lang.Object

     `clone, equals, finalize, getClass, hashCode, notify, notifyAll, wait, wait, wait`

- ### Field Detail



  - #### goal



    ```
    public final Goal goal
    ```


    The target goal, may be `null`.


  - #### commandType



    ```
    public final PathingCommandType commandType
    ```


    The command type.
    See Also:[`PathingCommandType`](../../../baritone/api/process/PathingCommandType.html "enum in baritone.api.process")

- ### Constructor Detail


  - #### PathingCommand



    ```
    public PathingCommand(Goal goal,
                          PathingCommandType commandType)
    ```


    Create a new [`PathingCommand`](../../../baritone/api/process/PathingCommand.html "class in baritone.api.process").
    Parameters:`goal` \- The target goal, may be `null`.`commandType` \- The command type, cannot be `null`.Throws:`java.lang.NullPointerException` \- if `commandType` is `null`.See Also:[`Goal`](../../../baritone/api/pathing/goals/Goal.html "interface in baritone.api.pathing.goals"),
    [`PathingCommandType`](../../../baritone/api/process/PathingCommandType.html "enum in baritone.api.process")

- ### Method Detail


  - #### toString



    ```
    public java.lang.String toString()
    ```

    Overrides:`toString` in class `java.lang.Object`