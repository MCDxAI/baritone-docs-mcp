Rotation (baritone 1.2.15 API)

baritone.api.utils

## Class Rotation

- java.lang.Object
  - baritone.api.utils.Rotation

- * * *





```
public class Rotation
extends java.lang.Object
```

Since:9/25/2018

- ### Constructor Summary

ConstructorsConstructor and Description`Rotation(float yaw,
          float pitch)`

- ### Method Summary

All Methods[Static Methods](javascript:show(1);)[Instance Methods](javascript:show(2);)[Concrete Methods](javascript:show(8);)Modifier and TypeMethod and Description`Rotation``add(Rotation other)`

Adds the yaw/pitch of the specified rotations to this
rotation's yaw/pitch, and returns the result.

`Rotation``clamp()``static float``clampPitch(float pitch)`

Clamps the specified pitch value between -90 and 90.

`float``getPitch()``float``getYaw()``boolean``isReallyCloseTo(Rotation other)`

Is really close to

`Rotation``normalize()``Rotation``normalizeAndClamp()``static float``normalizeYaw(float yaw)`

Normalizes the specified yaw value between -180 and 180.

`Rotation``subtract(Rotation other)`

Subtracts the yaw/pitch of the specified rotations from this
rotation's yaw/pitch, and returns the result.

`java.lang.String``toString()``boolean``yawIsReallyClose(Rotation other)`
  - ### Methods inherited from class java.lang.Object

     `clone, equals, finalize, getClass, hashCode, notify, notifyAll, wait, wait, wait`

- ### Constructor Detail


  - #### Rotation



    ```
    public Rotation(float yaw,
                    float pitch)
    ```

- ### Method Detail



  - #### getYaw



    ```
    public float getYaw()
    ```

    Returns:The yaw of this rotation

  - #### getPitch



    ```
    public float getPitch()
    ```

    Returns:The pitch of this rotation

  - #### add



    ```
    public Rotation add(Rotation other)
    ```


    Adds the yaw/pitch of the specified rotations to this
     rotation's yaw/pitch, and returns the result.
    Parameters:`other` \- Another rotationReturns:The result from adding the other rotation to this rotation

  - #### subtract



    ```
    public Rotation subtract(Rotation other)
    ```


    Subtracts the yaw/pitch of the specified rotations from this
     rotation's yaw/pitch, and returns the result.
    Parameters:`other` \- Another rotationReturns:The result from subtracting the other rotation from this rotation

  - #### clamp



    ```
    public Rotation clamp()
    ```

    Returns:A copy of this rotation with the pitch clamped

  - #### normalize



    ```
    public Rotation normalize()
    ```

    Returns:A copy of this rotation with the yaw normalized

  - #### normalizeAndClamp



    ```
    public Rotation normalizeAndClamp()
    ```

    Returns:A copy of this rotation with the pitch clamped and the yaw normalized

  - #### isReallyCloseTo



    ```
    public boolean isReallyCloseTo(Rotation other)
    ```


    Is really close to
    Parameters:`other` \- another rotationReturns:are they really close

  - #### yawIsReallyClose



    ```
    public boolean yawIsReallyClose(Rotation other)
    ```


  - #### clampPitch



    ```
    public static float clampPitch(float pitch)
    ```


    Clamps the specified pitch value between -90 and 90.
    Parameters:`pitch` \- The input pitchReturns:The clamped pitch

  - #### normalizeYaw



    ```
    public static float normalizeYaw(float yaw)
    ```


    Normalizes the specified yaw value between -180 and 180.
    Parameters:`yaw` \- The input yawReturns:The normalized yaw

  - #### toString



    ```
    public java.lang.String toString()
    ```

    Overrides:`toString` in class `java.lang.Object`