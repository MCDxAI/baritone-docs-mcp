TypeUtils (baritone 1.2.15 API)

baritone.api.utils

## Class TypeUtils

- java.lang.Object
  - baritone.api.utils.TypeUtils

- * * *





```
public final class TypeUtils
extends java.lang.Object
```

Since:4/20/2019

- ### Method Summary

All Methods[Static Methods](javascript:show(1);)[Concrete Methods](javascript:show(8);)Modifier and TypeMethod and Description`static java.lang.Class<?>``resolveBaseClass(java.lang.reflect.Type type)`

Resolves the "base type" for the specified type.


  - ### Methods inherited from class java.lang.Object

     `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

- ### Method Detail


  - #### resolveBaseClass



    ```
    public static java.lang.Class<?> resolveBaseClass(java.lang.reflect.Type type)
    ```


    Resolves the "base type" for the specified type. For example, if the specified
     type is `List<String>`, then `List.class` will be returned. If the
     specified type is already a class, then it is directly returned.
    Parameters:`type` \- The type to resolveReturns:The base class