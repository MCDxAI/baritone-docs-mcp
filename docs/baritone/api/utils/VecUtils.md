VecUtils (baritone 1.2.15 API)

baritone.api.utils

## Class VecUtils

- java.lang.Object
  - baritone.api.utils.VecUtils

- * * *





```
public final class VecUtils
extends java.lang.Object
```

Since:10/13/2018

- ### Method Summary

All Methods[Static Methods](javascript:show(1);)[Concrete Methods](javascript:show(8);)Modifier and TypeMethod and Description`static net.minecraft.util.math.Vec3d``calculateBlockCenter(net.minecraft.world.World world,
                      net.minecraft.util.math.BlockPos pos)`

Calculates the center of the block at the specified position's bounding box

`static double``distanceToCenter(net.minecraft.util.math.BlockPos pos,
                  double x,
                  double y,
                  double z)`

Gets the distance from the specified position to the assumed center of the specified block position.

`static double``entityDistanceToCenter(net.minecraft.entity.Entity entity,
                        net.minecraft.util.math.BlockPos pos)`

Gets the distance from the specified entity's position to the assumed
center of the specified block position.

`static double``entityFlatDistanceToCenter(net.minecraft.entity.Entity entity,
                            net.minecraft.util.math.BlockPos pos)`

Gets the distance from the specified entity's position to the assumed
center of the specified block position, ignoring the Y axis.

`static net.minecraft.util.math.Vec3d``getBlockPosCenter(net.minecraft.util.math.BlockPos pos)`

Gets the assumed center position of the given block position.


  - ### Methods inherited from class java.lang.Object

     `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

- ### Method Detail



  - #### calculateBlockCenter



    ```
    public static net.minecraft.util.math.Vec3d calculateBlockCenter(net.minecraft.world.World world,
                                                                     net.minecraft.util.math.BlockPos pos)
    ```


    Calculates the center of the block at the specified position's bounding box
    Parameters:`world` \- The world that the block is in, used to provide the bounding box`pos` \- The block positionReturns:The center of the block's bounding boxSee Also:[`getBlockPosCenter(BlockPos)`](../../../baritone/api/utils/VecUtils.html#getBlockPosCenter-net.minecraft.util.math.BlockPos-)

  - #### getBlockPosCenter



    ```
    public static net.minecraft.util.math.Vec3d getBlockPosCenter(net.minecraft.util.math.BlockPos pos)
    ```


    Gets the assumed center position of the given block position.
     This is done by adding 0.5 to the X, Y, and Z axes.



    TODO: We may want to consider replacing many usages of this method with #calculateBlockCenter(BlockPos)


    Parameters:`pos` \- The block positionReturns:The assumed center of the positionSee Also:[`calculateBlockCenter(World, BlockPos)`](../../../baritone/api/utils/VecUtils.html#calculateBlockCenter-net.minecraft.world.World-net.minecraft.util.math.BlockPos-)

  - #### distanceToCenter



    ```
    public static double distanceToCenter(net.minecraft.util.math.BlockPos pos,
                                          double x,
                                          double y,
                                          double z)
    ```


    Gets the distance from the specified position to the assumed center of the specified block position.
    Parameters:`pos` \- The block position`x` \- The x pos`y` \- The y pos`z` \- The z posReturns:The distance from the assumed block center to the positionSee Also:[`getBlockPosCenter(BlockPos)`](../../../baritone/api/utils/VecUtils.html#getBlockPosCenter-net.minecraft.util.math.BlockPos-)

  - #### entityDistanceToCenter



    ```
    public static double entityDistanceToCenter(net.minecraft.entity.Entity entity,
                                                net.minecraft.util.math.BlockPos pos)
    ```


    Gets the distance from the specified entity's position to the assumed
     center of the specified block position.
    Parameters:`entity` \- The entity`pos` \- The block positionReturns:The distance from the entity to the block's assumed centerSee Also:[`getBlockPosCenter(BlockPos)`](../../../baritone/api/utils/VecUtils.html#getBlockPosCenter-net.minecraft.util.math.BlockPos-)

  - #### entityFlatDistanceToCenter



    ```
    public static double entityFlatDistanceToCenter(net.minecraft.entity.Entity entity,
                                                    net.minecraft.util.math.BlockPos pos)
    ```


    Gets the distance from the specified entity's position to the assumed
     center of the specified block position, ignoring the Y axis.
    Parameters:`entity` \- The entity`pos` \- The block positionReturns:The horizontal distance from the entity to the block's assumed centerSee Also:[`getBlockPosCenter(BlockPos)`](../../../baritone/api/utils/VecUtils.html#getBlockPosCenter-net.minecraft.util.math.BlockPos-)