NotificationHelper (baritone 1.2.15 API)

baritone.api.utils

## Class NotificationHelper

- java.lang.Object
  - baritone.api.utils.NotificationHelper

- * * *





```
public class NotificationHelper
extends java.lang.Object
```


This class is not called from the main game thread.
Do not refer to any Minecraft classes, it wouldn't be thread safe.


- ### Constructor Summary

ConstructorsConstructor and Description`NotificationHelper()`

- ### Method Summary

All Methods[Static Methods](javascript:show(1);)[Concrete Methods](javascript:show(8);)Modifier and TypeMethod and Description`static void``notify(java.lang.String text,
        boolean error)`
  - ### Methods inherited from class java.lang.Object

     `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

- ### Constructor Detail


  - #### NotificationHelper



    ```
    public NotificationHelper()
    ```

- ### Method Detail


  - #### notify



    ```
    public static void notify(java.lang.String text,
                              boolean error)
    ```