IPlayerController (baritone 1.2.15 API)

baritone.api.utils

## Interface IPlayerController

- * * *





```
public interface IPlayerController
```

Since:12/14/2018

- ### Method Summary

All Methods[Instance Methods](javascript:show(2);)[Abstract Methods](javascript:show(4);)[Default Methods](javascript:show(16);)Modifier and TypeMethod and Description`boolean``clickBlock(net.minecraft.util.math.BlockPos loc,
            net.minecraft.util.EnumFacing face)``default double``getBlockReachDistance()``net.minecraft.world.GameType``getGameType()``boolean``hasBrokenBlock()``boolean``onPlayerDamageBlock(net.minecraft.util.math.BlockPos pos,
                     net.minecraft.util.EnumFacing side)``net.minecraft.util.EnumActionResult``processRightClick(net.minecraft.client.entity.EntityPlayerSP player,
                   net.minecraft.world.World world,
                   net.minecraft.util.EnumHand hand)``net.minecraft.util.EnumActionResult``processRightClickBlock(net.minecraft.client.entity.EntityPlayerSP player,
                        net.minecraft.world.World world,
                        net.minecraft.util.math.BlockPos pos,
                        net.minecraft.util.EnumFacing direction,
                        net.minecraft.util.math.Vec3d vec,
                        net.minecraft.util.EnumHand hand)``void``resetBlockRemoving()``void``setHittingBlock(boolean hittingBlock)``void``syncHeldItem()``net.minecraft.item.ItemStack``windowClick(int windowId,
             int slotId,
             int mouseButton,
             net.minecraft.inventory.ClickType type,
             net.minecraft.entity.player.EntityPlayer player)`

- ### Method Detail



  - #### syncHeldItem



    ```
    void syncHeldItem()
    ```


  - #### hasBrokenBlock



    ```
    boolean hasBrokenBlock()
    ```


  - #### onPlayerDamageBlock



    ```
    boolean onPlayerDamageBlock(net.minecraft.util.math.BlockPos pos,
                                net.minecraft.util.EnumFacing side)
    ```


  - #### resetBlockRemoving



    ```
    void resetBlockRemoving()
    ```


  - #### windowClick



    ```
    net.minecraft.item.ItemStack windowClick(int windowId,
                                             int slotId,
                                             int mouseButton,
                                             net.minecraft.inventory.ClickType type,
                                             net.minecraft.entity.player.EntityPlayer player)
    ```


  - #### getGameType



    ```
    net.minecraft.world.GameType getGameType()
    ```


  - #### processRightClickBlock



    ```
    net.minecraft.util.EnumActionResult processRightClickBlock(net.minecraft.client.entity.EntityPlayerSP player,
                                                               net.minecraft.world.World world,
                                                               net.minecraft.util.math.BlockPos pos,
                                                               net.minecraft.util.EnumFacing direction,
                                                               net.minecraft.util.math.Vec3d vec,
                                                               net.minecraft.util.EnumHand hand)
    ```


  - #### processRightClick



    ```
    net.minecraft.util.EnumActionResult processRightClick(net.minecraft.client.entity.EntityPlayerSP player,
                                                          net.minecraft.world.World world,
                                                          net.minecraft.util.EnumHand hand)
    ```


  - #### clickBlock



    ```
    boolean clickBlock(net.minecraft.util.math.BlockPos loc,
                       net.minecraft.util.EnumFacing face)
    ```


  - #### setHittingBlock



    ```
    void setHittingBlock(boolean hittingBlock)
    ```


  - #### getBlockReachDistance



    ```
    default double getBlockReachDistance()
    ```