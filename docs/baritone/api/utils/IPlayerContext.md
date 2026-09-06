IPlayerContext (baritone 1.2.15 API)

baritone.api.utils

## Interface IPlayerContext

- * * *





```
public interface IPlayerContext
```

Since:11/12/2018

- ### Method Summary

All Methods[Static Methods](javascript:show(1);)[Instance Methods](javascript:show(2);)[Abstract Methods](javascript:show(4);)[Default Methods](javascript:show(16);)Modifier and TypeMethod and Description`static double``eyeHeight(boolean ifSneaking)``default java.util.Optional<net.minecraft.util.math.BlockPos>``getSelectedBlock()`

Returns the block that the crosshair is currently placed over.

`default boolean``isLookingAt(net.minecraft.util.math.BlockPos pos)``net.minecraft.util.math.RayTraceResult``objectMouseOver()``net.minecraft.client.entity.EntityPlayerSP``player()``IPlayerController``playerController()``default BetterBlockPos``playerFeet()``default net.minecraft.util.math.Vec3d``playerFeetAsVec()``default net.minecraft.util.math.Vec3d``playerHead()``default Rotation``playerRotations()``net.minecraft.world.World``world()``IWorldData``worldData()`

- ### Method Detail



  - #### player



    ```
    net.minecraft.client.entity.EntityPlayerSP player()
    ```


  - #### playerController



    ```
    IPlayerController playerController()
    ```


  - #### world



    ```
    net.minecraft.world.World world()
    ```


  - #### worldData



    ```
    IWorldData worldData()
    ```


  - #### objectMouseOver



    ```
    net.minecraft.util.math.RayTraceResult objectMouseOver()
    ```


  - #### playerFeet



    ```
    default BetterBlockPos playerFeet()
    ```


  - #### playerFeetAsVec



    ```
    default net.minecraft.util.math.Vec3d playerFeetAsVec()
    ```


  - #### playerHead



    ```
    default net.minecraft.util.math.Vec3d playerHead()
    ```


  - #### playerRotations



    ```
    default Rotation playerRotations()
    ```


  - #### eyeHeight



    ```
    static double eyeHeight(boolean ifSneaking)
    ```


  - #### getSelectedBlock



    ```
    default java.util.Optional<net.minecraft.util.math.BlockPos> getSelectedBlock()
    ```


    Returns the block that the crosshair is currently placed over. Updated once per tick.
    Returns:The position of the highlighted block

  - #### isLookingAt



    ```
    default boolean isLookingAt(net.minecraft.util.math.BlockPos pos)
    ```