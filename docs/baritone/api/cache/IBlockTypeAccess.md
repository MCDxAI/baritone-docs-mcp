IBlockTypeAccess (baritone 1.2.15 API)

baritone.api.cache

## Interface IBlockTypeAccess

- All Known Subinterfaces:[ICachedRegion](../../../baritone/api/cache/ICachedRegion.html "interface in baritone.api.cache")

* * *





```
public interface IBlockTypeAccess
```

Since:8/4/2018

- ### Method Summary

All Methods[Instance Methods](javascript:show(2);)[Abstract Methods](javascript:show(4);)[Default Methods](javascript:show(16);)Modifier and TypeMethod and Description`default net.minecraft.block.state.IBlockState``getBlock(net.minecraft.util.math.BlockPos pos)``net.minecraft.block.state.IBlockState``getBlock(int x,
          int y,
          int z)`

- ### Method Detail



  - #### getBlock



    ```
    net.minecraft.block.state.IBlockState getBlock(int x,
                                                   int y,
                                                   int z)
    ```


  - #### getBlock



    ```
    default net.minecraft.block.state.IBlockState getBlock(net.minecraft.util.math.BlockPos pos)
    ```