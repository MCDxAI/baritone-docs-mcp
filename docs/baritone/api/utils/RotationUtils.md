RotationUtils (baritone 1.2.15 API)

baritone.api.utils

## Class RotationUtils

- java.lang.Object
  - baritone.api.utils.RotationUtils

- * * *





```
public final class RotationUtils
extends java.lang.Object
```

Since:9/25/2018

- ### Field Summary

FieldsModifier and TypeField and Description`static double``DEG_TO_RAD`

Constant that a degree value is multiplied by to get the equivalent radian value

`static double``RAD_TO_DEG`

Constant that a radian value is multiplied by to get the equivalent degree value


- ### Method Summary

All Methods[Static Methods](javascript:show(1);)[Concrete Methods](javascript:show(8);)Modifier and TypeMethod and Description`static Rotation``calcRotationFromCoords(net.minecraft.util.math.BlockPos orig,
                        net.minecraft.util.math.BlockPos dest)`

Calculates the rotation from BlockPosdest to BlockPosorig

`static Rotation``calcRotationFromVec3d(net.minecraft.util.math.Vec3d orig,
                       net.minecraft.util.math.Vec3d dest,
                       Rotation current)`

Calculates the rotation from Vecdest to Vecorig and makes the
return value relative to the specified current rotations.

`static net.minecraft.util.math.Vec3d``calcVec3dFromRotation(Rotation rotation)`

Calculates the look vector for the specified yaw/pitch rotations.

`static java.util.Optional<Rotation>``reachable(net.minecraft.client.entity.EntityPlayerSP entity,
           net.minecraft.util.math.BlockPos pos,
           double blockReachDistance)`

Determines if the specified entity is able to reach the center of any of the sides
of the specified block.

`static java.util.Optional<Rotation>``reachable(net.minecraft.client.entity.EntityPlayerSP entity,
           net.minecraft.util.math.BlockPos pos,
           double blockReachDistance,
           boolean wouldSneak)``static java.util.Optional<Rotation>``reachable(IPlayerContext ctx,
           net.minecraft.util.math.BlockPos pos)``static java.util.Optional<Rotation>``reachable(IPlayerContext ctx,
           net.minecraft.util.math.BlockPos pos,
           boolean wouldSneak)``static java.util.Optional<Rotation>``reachableCenter(net.minecraft.entity.Entity entity,
                 net.minecraft.util.math.BlockPos pos,
                 double blockReachDistance,
                 boolean wouldSneak)`

Determines if the specified entity is able to reach the specified block where it is
looking at the direct center of it's hitbox.

`static java.util.Optional<Rotation>``reachableOffset(net.minecraft.entity.Entity entity,
                 net.minecraft.util.math.BlockPos pos,
                 net.minecraft.util.math.Vec3d offsetPos,
                 double blockReachDistance,
                 boolean wouldSneak)`

Determines if the specified entity is able to reach the specified block with
the given offsetted position.

`static Rotation``wrapAnglesToRelative(Rotation current,
                      Rotation target)`

Wraps the target angles to a relative value from the current angles.


  - ### Methods inherited from class java.lang.Object

     `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

- ### Field Detail



  - #### DEG\_TO\_RAD



    ```
    public static final double DEG_TO_RAD
    ```


    Constant that a degree value is multiplied by to get the equivalent radian value
    See Also:[Constant Field Values](../../../constant-values.html#baritone.api.utils.RotationUtils.DEG_TO_RAD)

  - #### RAD\_TO\_DEG



    ```
    public static final double RAD_TO_DEG
    ```


    Constant that a radian value is multiplied by to get the equivalent degree value
    See Also:[Constant Field Values](../../../constant-values.html#baritone.api.utils.RotationUtils.RAD_TO_DEG)

- ### Method Detail



  - #### calcRotationFromCoords



    ```
    public static Rotation calcRotationFromCoords(net.minecraft.util.math.BlockPos orig,
                                                  net.minecraft.util.math.BlockPos dest)
    ```


    Calculates the rotation from BlockPosdest to BlockPosorig
    Parameters:`orig` \- The origin position`dest` \- The destination positionReturns:The rotation from the origin to the destination

  - #### wrapAnglesToRelative



    ```
    public static Rotation wrapAnglesToRelative(Rotation current,
                                                Rotation target)
    ```


    Wraps the target angles to a relative value from the current angles. This is done by
     subtracting the current from the target, normalizing it, and then adding the current
     angles back to it.
    Parameters:`current` \- The current angles`target` \- The target anglesReturns:The wrapped angles

  - #### calcRotationFromVec3d



    ```
    public static Rotation calcRotationFromVec3d(net.minecraft.util.math.Vec3d orig,
                                                 net.minecraft.util.math.Vec3d dest,
                                                 Rotation current)
    ```


    Calculates the rotation from Vecdest to Vecorig and makes the
     return value relative to the specified current rotations.
    Parameters:`orig` \- The origin position`dest` \- The destination position`current` \- The current rotationsReturns:The rotation from the origin to the destinationSee Also:[`wrapAnglesToRelative(Rotation, Rotation)`](../../../baritone/api/utils/RotationUtils.html#wrapAnglesToRelative-baritone.api.utils.Rotation-baritone.api.utils.Rotation-)

  - #### calcVec3dFromRotation



    ```
    public static net.minecraft.util.math.Vec3d calcVec3dFromRotation(Rotation rotation)
    ```


    Calculates the look vector for the specified yaw/pitch rotations.
    Parameters:`rotation` \- The input rotationReturns:Look vector for the rotation

  - #### reachable



    ```
    public static java.util.Optional<Rotation> reachable(IPlayerContext ctx,
                                                         net.minecraft.util.math.BlockPos pos)
    ```

    Parameters:`ctx` \- Context for the viewing entity`pos` \- The target block positionReturns:The optional rotationSee Also:[`reachable(EntityPlayerSP, BlockPos, double)`](../../../baritone/api/utils/RotationUtils.html#reachable-net.minecraft.client.entity.EntityPlayerSP-net.minecraft.util.math.BlockPos-double-)

  - #### reachable



    ```
    public static java.util.Optional<Rotation> reachable(IPlayerContext ctx,
                                                         net.minecraft.util.math.BlockPos pos,
                                                         boolean wouldSneak)
    ```


  - #### reachable



    ```
    public static java.util.Optional<Rotation> reachable(net.minecraft.client.entity.EntityPlayerSP entity,
                                                         net.minecraft.util.math.BlockPos pos,
                                                         double blockReachDistance)
    ```


    Determines if the specified entity is able to reach the center of any of the sides
     of the specified block. It first checks if the block center is reachable, and if so,
     that rotation will be returned. If not, it will return the first center of a given
     side that is reachable. The return type will be `Optional.empty()` if the entity is
     unable to reach any of the sides of the block.
    Parameters:`entity` \- The viewing entity`pos` \- The target block position`blockReachDistance` \- The block reach distance of the entityReturns:The optional rotation

  - #### reachable



    ```
    public static java.util.Optional<Rotation> reachable(net.minecraft.client.entity.EntityPlayerSP entity,
                                                         net.minecraft.util.math.BlockPos pos,
                                                         double blockReachDistance,
                                                         boolean wouldSneak)
    ```


  - #### reachableOffset



    ```
    public static java.util.Optional<Rotation> reachableOffset(net.minecraft.entity.Entity entity,
                                                               net.minecraft.util.math.BlockPos pos,
                                                               net.minecraft.util.math.Vec3d offsetPos,
                                                               double blockReachDistance,
                                                               boolean wouldSneak)
    ```


    Determines if the specified entity is able to reach the specified block with
     the given offsetted position. The return type will be `Optional.empty()` if
     the entity is unable to reach the block with the offset applied.
    Parameters:`entity` \- The viewing entity`pos` \- The target block position`offsetPos` \- The position of the block with the offset applied.`blockReachDistance` \- The block reach distance of the entityReturns:The optional rotation

  - #### reachableCenter



    ```
    public static java.util.Optional<Rotation> reachableCenter(net.minecraft.entity.Entity entity,
                                                               net.minecraft.util.math.BlockPos pos,
                                                               double blockReachDistance,
                                                               boolean wouldSneak)
    ```


    Determines if the specified entity is able to reach the specified block where it is
     looking at the direct center of it's hitbox.
    Parameters:`entity` \- The viewing entity`pos` \- The target block position`blockReachDistance` \- The block reach distance of the entityReturns:The optional rotation