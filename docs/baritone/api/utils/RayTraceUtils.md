RayTraceUtils (baritone 1.2.15 API)

baritone.api.utils

## Class RayTraceUtils

- java.lang.Object
  - baritone.api.utils.RayTraceUtils

- * * *





```
public final class RayTraceUtils
extends java.lang.Object
```

Since:8/25/2018

- ### Method Summary

All Methods[Static Methods](javascript:show(1);)[Concrete Methods](javascript:show(8);)Modifier and TypeMethod and Description`static net.minecraft.util.math.Vec3d``inferSneakingEyePosition(net.minecraft.entity.Entity entity)``static net.minecraft.util.math.RayTraceResult``rayTraceTowards(net.minecraft.entity.Entity entity,
                 Rotation rotation,
                 double blockReachDistance)`

Performs a block raytrace with the specified rotations.

`static net.minecraft.util.math.RayTraceResult``rayTraceTowards(net.minecraft.entity.Entity entity,
                 Rotation rotation,
                 double blockReachDistance,
                 boolean wouldSneak)`
  - ### Methods inherited from class java.lang.Object

     `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

- ### Method Detail



  - #### rayTraceTowards



    ```
    public static net.minecraft.util.math.RayTraceResult rayTraceTowards(net.minecraft.entity.Entity entity,
                                                                         Rotation rotation,
                                                                         double blockReachDistance)
    ```


    Performs a block raytrace with the specified rotations. This should only be used when
     any entity collisions can be ignored, because this method will not recognize if an
     entity is in the way or not. The local player's block reach distance will be used.
    Parameters:`entity` \- The entity representing the raytrace source`rotation` \- The rotation to raytrace towards`blockReachDistance` \- The block reach distance of the entityReturns:The calculated raytrace result

  - #### rayTraceTowards



    ```
    public static net.minecraft.util.math.RayTraceResult rayTraceTowards(net.minecraft.entity.Entity entity,
                                                                         Rotation rotation,
                                                                         double blockReachDistance,
                                                                         boolean wouldSneak)
    ```


  - #### inferSneakingEyePosition



    ```
    public static net.minecraft.util.math.Vec3d inferSneakingEyePosition(net.minecraft.entity.Entity entity)
    ```