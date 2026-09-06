BetterBlockPos (baritone 1.2.15 API)

baritone.api.utils

## Class BetterBlockPos

- java.lang.Object
  - net.minecraft.util.math.Vec3i
    - net.minecraft.util.math.BlockPos
      - baritone.api.utils.BetterBlockPos

- All Implemented Interfaces:java.lang.Comparable<net.minecraft.util.math.Vec3i>

* * *





```
public final class BetterBlockPos
extends net.minecraft.util.math.BlockPos
```


A better BlockPos that has fewer hash collisions (and slightly more performant offsets)



Is it really faster to subclass BlockPos and calculate a hash in the constructor like this, taking everything into account?
Yes. 20% faster actually. It's called BETTER BlockPos for a reason. Source:
[Benchmark Spreadsheet](https://docs.google.com/spreadsheets/d/1GWjOjOZINkg_0MkRgKRPH1kUzxjsnEROD9u3UFh_DJc)


- ### Nested Class Summary


  - ### Nested classes/interfaces inherited from class net.minecraft.util.math.BlockPos

     `net.minecraft.util.math.BlockPos.MutableBlockPos, net.minecraft.util.math.BlockPos.PooledMutableBlockPos`

- ### Field Summary

FieldsModifier and TypeField and Description`static BetterBlockPos``ORIGIN``int``x``int``y``int``z`
  - ### Fields inherited from class net.minecraft.util.math.Vec3i

     `NULL_VECTOR`

- ### Constructor Summary

ConstructorsConstructor and Description`BetterBlockPos(net.minecraft.util.math.BlockPos pos)``BetterBlockPos(double x,
                double y,
                double z)``BetterBlockPos(int x,
                int y,
                int z)`

- ### Method Summary

All Methods[Static Methods](javascript:show(1);)[Instance Methods](javascript:show(2);)[Concrete Methods](javascript:show(8);)Modifier and TypeMethod and Description`BetterBlockPos``down()``BetterBlockPos``down(int amt)``BetterBlockPos``east()``BetterBlockPos``east(int amt)``boolean``equals(java.lang.Object o)``static BetterBlockPos``from(net.minecraft.util.math.BlockPos pos)`

Like constructor but returns null if pos is null, good if you just need to possibly censor coordinates

`int``hashCode()``static long``longHash(BetterBlockPos pos)``static long``longHash(int x,
          int y,
          int z)``BetterBlockPos``north()``BetterBlockPos``north(int amt)``BetterBlockPos``offset(net.minecraft.util.EnumFacing dir)``BetterBlockPos``offset(net.minecraft.util.EnumFacing dir,
        int dist)``BetterBlockPos``south()``BetterBlockPos``south(int amt)``java.lang.String``toString()``BetterBlockPos``up()``BetterBlockPos``up(int amt)``BetterBlockPos``west()``BetterBlockPos``west(int amt)`

  - ### Methods inherited from class net.minecraft.util.math.BlockPos

     `add, add, add, crossProduct, fromLong, getAllInBox, getAllInBox, getAllInBoxMutable, getAllInBoxMutable, rotate, subtract, toImmutable, toLong`

  - ### Methods inherited from class net.minecraft.util.math.Vec3i

     `compareTo, distanceSq, distanceSq, distanceSqToCenter, getDistance, getX, getY, getZ`

  - ### Methods inherited from class java.lang.Object

     `clone, finalize, getClass, notify, notifyAll, wait, wait, wait`

- ### Field Detail



  - #### ORIGIN



    ```
    public static final BetterBlockPos ORIGIN
    ```


  - #### x



    ```
    public final int x
    ```


  - #### y



    ```
    public final int y
    ```


  - #### z



    ```
    public final int z
    ```

- ### Constructor Detail



  - #### BetterBlockPos



    ```
    public BetterBlockPos(int x,
                          int y,
                          int z)
    ```


  - #### BetterBlockPos



    ```
    public BetterBlockPos(double x,
                          double y,
                          double z)
    ```


  - #### BetterBlockPos



    ```
    public BetterBlockPos(net.minecraft.util.math.BlockPos pos)
    ```

- ### Method Detail



  - #### from



    ```
    public static BetterBlockPos from(net.minecraft.util.math.BlockPos pos)
    ```


    Like constructor but returns null if pos is null, good if you just need to possibly censor coordinates
    Parameters:`pos` \- The BlockPos, possibly null, to convertReturns:A BetterBlockPos or null if pos was null

  - #### hashCode



    ```
    public int hashCode()
    ```

    Overrides:`hashCode` in class `net.minecraft.util.math.Vec3i`

  - #### longHash



    ```
    public static long longHash(BetterBlockPos pos)
    ```


  - #### longHash



    ```
    public static long longHash(int x,
                                int y,
                                int z)
    ```


  - #### equals



    ```
    public boolean equals(java.lang.Object o)
    ```

    Overrides:`equals` in class `net.minecraft.util.math.Vec3i`

  - #### up



    ```
    public BetterBlockPos up()
    ```

    Overrides:`up` in class `net.minecraft.util.math.BlockPos`

  - #### up



    ```
    public BetterBlockPos up(int amt)
    ```

    Overrides:`up` in class `net.minecraft.util.math.BlockPos`

  - #### down



    ```
    public BetterBlockPos down()
    ```

    Overrides:`down` in class `net.minecraft.util.math.BlockPos`

  - #### down



    ```
    public BetterBlockPos down(int amt)
    ```

    Overrides:`down` in class `net.minecraft.util.math.BlockPos`

  - #### offset



    ```
    public BetterBlockPos offset(net.minecraft.util.EnumFacing dir)
    ```

    Overrides:`offset` in class `net.minecraft.util.math.BlockPos`

  - #### offset



    ```
    public BetterBlockPos offset(net.minecraft.util.EnumFacing dir,
                                 int dist)
    ```

    Overrides:`offset` in class `net.minecraft.util.math.BlockPos`

  - #### north



    ```
    public BetterBlockPos north()
    ```

    Overrides:`north` in class `net.minecraft.util.math.BlockPos`

  - #### north



    ```
    public BetterBlockPos north(int amt)
    ```

    Overrides:`north` in class `net.minecraft.util.math.BlockPos`

  - #### south



    ```
    public BetterBlockPos south()
    ```

    Overrides:`south` in class `net.minecraft.util.math.BlockPos`

  - #### south



    ```
    public BetterBlockPos south(int amt)
    ```

    Overrides:`south` in class `net.minecraft.util.math.BlockPos`

  - #### east



    ```
    public BetterBlockPos east()
    ```

    Overrides:`east` in class `net.minecraft.util.math.BlockPos`

  - #### east



    ```
    public BetterBlockPos east(int amt)
    ```

    Overrides:`east` in class `net.minecraft.util.math.BlockPos`

  - #### west



    ```
    public BetterBlockPos west()
    ```

    Overrides:`west` in class `net.minecraft.util.math.BlockPos`

  - #### west



    ```
    public BetterBlockPos west(int amt)
    ```

    Overrides:`west` in class `net.minecraft.util.math.BlockPos`

  - #### toString



    ```
    @Nonnull
    public java.lang.String toString()
    ```

    Overrides:`toString` in class `net.minecraft.util.math.Vec3i`