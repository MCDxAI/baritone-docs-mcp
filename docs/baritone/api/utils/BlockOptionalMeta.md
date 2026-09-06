BlockOptionalMeta (baritone 1.2.15 API)

baritone.api.utils

## Class BlockOptionalMeta

- java.lang.Object
  - baritone.api.utils.BlockOptionalMeta

- * * *





```
public final class BlockOptionalMeta
extends java.lang.Object
```


- ### Constructor Summary

ConstructorsConstructor and Description`BlockOptionalMeta(net.minecraft.block.Block block)``BlockOptionalMeta(net.minecraft.block.Block block,
                   java.lang.Integer meta)``BlockOptionalMeta(java.lang.String selector)`

- ### Method Summary

All Methods[Static Methods](javascript:show(1);)[Instance Methods](javascript:show(2);)[Concrete Methods](javascript:show(8);)Modifier and TypeMethod and Description`static net.minecraft.block.state.IBlockState``blockStateFromStack(net.minecraft.item.ItemStack stack)``static <C extends java.lang.Comparable<C>,P extends net.minecraft.block.properties.IProperty<C>>
P``castToIProperty(java.lang.Object value)``static <C extends java.lang.Comparable<C>,P extends net.minecraft.block.properties.IProperty<C>>
C``castToIPropertyValue(P iproperty,
                      java.lang.Object value)``net.minecraft.block.state.IBlockState``getAnyBlockState()``net.minecraft.block.Block``getBlock()``java.lang.Integer``getMeta()``boolean``matches(net.minecraft.block.Block block)``boolean``matches(net.minecraft.block.state.IBlockState blockstate)``boolean``matches(net.minecraft.item.ItemStack stack)``static net.minecraft.block.state.IBlockState``normalize(net.minecraft.block.state.IBlockState state)`

Normalizes the specified blockstate by setting meta-affecting properties which
are not being targeted by the meta parameter to their default values.

`static int``stateMeta(net.minecraft.block.state.IBlockState state)`

Evaluate the target meta value for the specified state.

`java.lang.String``toString()`
  - ### Methods inherited from class java.lang.Object

     `clone, equals, finalize, getClass, hashCode, notify, notifyAll, wait, wait, wait`

- ### Constructor Detail



  - #### BlockOptionalMeta



    ```
    public BlockOptionalMeta(@Nonnull
                             net.minecraft.block.Block block,
                             @Nullable
                             java.lang.Integer meta)
    ```


  - #### BlockOptionalMeta



    ```
    public BlockOptionalMeta(@Nonnull
                             net.minecraft.block.Block block)
    ```


  - #### BlockOptionalMeta



    ```
    public BlockOptionalMeta(@Nonnull
                             java.lang.String selector)
    ```

- ### Method Detail



  - #### castToIProperty



    ```
    public static <C extends java.lang.Comparable<C>,P extends net.minecraft.block.properties.IProperty<C>> P castToIProperty(java.lang.Object value)
    ```


  - #### castToIPropertyValue



    ```
    public static <C extends java.lang.Comparable<C>,P extends net.minecraft.block.properties.IProperty<C>> C castToIPropertyValue(P iproperty,
                                                                                                                                   java.lang.Object value)
    ```


  - #### normalize



    ```
    public static net.minecraft.block.state.IBlockState normalize(net.minecraft.block.state.IBlockState state)
    ```


    Normalizes the specified blockstate by setting meta-affecting properties which
     are not being targeted by the meta parameter to their default values.



    For example, block variant/color is the primary target for the meta value, so properties
    such as rotation/facing direction will be set to default values in order to nullify
    the effect that they have on the state's meta value.


    Parameters:`state` \- The state to normalizeReturns:The normalized block state

  - #### stateMeta



    ```
    public static int stateMeta(net.minecraft.block.state.IBlockState state)
    ```


    Evaluate the target meta value for the specified state. The target meta value is
     most often that which is influenced by the variant/color property of the block state.
    Parameters:`state` \- The state to checkReturns:The target meta of the stateSee Also:[`normalize(IBlockState)`](../../../baritone/api/utils/BlockOptionalMeta.html#normalize-net.minecraft.block.state.IBlockState-)

  - #### getBlock



    ```
    public net.minecraft.block.Block getBlock()
    ```


  - #### getMeta



    ```
    public java.lang.Integer getMeta()
    ```


  - #### matches



    ```
    public boolean matches(@Nonnull
                           net.minecraft.block.Block block)
    ```


  - #### matches



    ```
    public boolean matches(@Nonnull
                           net.minecraft.block.state.IBlockState blockstate)
    ```


  - #### matches



    ```
    public boolean matches(net.minecraft.item.ItemStack stack)
    ```


  - #### toString



    ```
    public java.lang.String toString()
    ```

    Overrides:`toString` in class `java.lang.Object`

  - #### blockStateFromStack



    ```
    public static net.minecraft.block.state.IBlockState blockStateFromStack(net.minecraft.item.ItemStack stack)
    ```


  - #### getAnyBlockState



    ```
    public net.minecraft.block.state.IBlockState getAnyBlockState()
    ```