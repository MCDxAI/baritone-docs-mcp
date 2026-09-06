SettingsUtil (baritone 1.2.15 API)

baritone.api.utils

## Class SettingsUtil

- java.lang.Object
  - baritone.api.utils.SettingsUtil

- * * *





```
public class SettingsUtil
extends java.lang.Object
```


- ### Constructor Summary

ConstructorsConstructor and Description`SettingsUtil()`

- ### Method Summary

All Methods[Static Methods](javascript:show(1);)[Concrete Methods](javascript:show(8);)Modifier and TypeMethod and Description`static boolean``javaOnlySetting(Settings.Setting setting)`

This should always be the same as whether the setting can be parsed from or serialized to a string

`static java.lang.String``maybeCensor(int coord)``static java.util.List<Settings.Setting>``modifiedSettings(Settings settings)``static void``parseAndApply(Settings settings,
               java.lang.String settingName,
               java.lang.String settingValue)``static void``readAndApply(Settings settings)``static void``save(Settings settings)``static java.lang.String``settingDefaultToString(Settings.Setting setting)``static java.lang.String``settingToString(Settings.Setting setting)``static java.lang.String``settingTypeToString(Settings.Setting setting)`

Gets the type of a setting and returns it as a string, with package names stripped.

`static java.lang.String``settingValueToString(Settings.Setting setting)``static <T> java.lang.String``settingValueToString(Settings.Setting<T> setting,
                      T value)`
  - ### Methods inherited from class java.lang.Object

     `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

- ### Constructor Detail


  - #### SettingsUtil



    ```
    public SettingsUtil()
    ```

- ### Method Detail



  - #### readAndApply



    ```
    public static void readAndApply(Settings settings)
    ```


  - #### save



    ```
    public static void save(Settings settings)
    ```


  - #### modifiedSettings



    ```
    public static java.util.List<Settings.Setting> modifiedSettings(Settings settings)
    ```


  - #### settingTypeToString



    ```
    public static java.lang.String settingTypeToString(Settings.Setting setting)
    ```


    Gets the type of a setting and returns it as a string, with package names stripped.



    For example, if the setting type is `java.util.List<java.lang.String>`, this function returns
    `List<String>`.


    Parameters:`setting` \- The settingReturns:The type

  - #### settingValueToString



    ```
    public static <T> java.lang.String settingValueToString(Settings.Setting<T> setting,
                                                            T value)
                                                     throws java.lang.IllegalArgumentException
    ```

    Throws:`java.lang.IllegalArgumentException`

  - #### settingValueToString



    ```
    public static java.lang.String settingValueToString(Settings.Setting setting)
                                                 throws java.lang.IllegalArgumentException
    ```

    Throws:`java.lang.IllegalArgumentException`

  - #### settingDefaultToString



    ```
    public static java.lang.String settingDefaultToString(Settings.Setting setting)
                                                   throws java.lang.IllegalArgumentException
    ```

    Throws:`java.lang.IllegalArgumentException`

  - #### maybeCensor



    ```
    public static java.lang.String maybeCensor(int coord)
    ```


  - #### settingToString



    ```
    public static java.lang.String settingToString(Settings.Setting setting)
                                            throws java.lang.IllegalStateException
    ```

    Throws:`java.lang.IllegalStateException`

  - #### javaOnlySetting



    ```
    public static boolean javaOnlySetting(Settings.Setting setting)
    ```


    This should always be the same as whether the setting can be parsed from or serialized to a string
    Parameters:`the` \- settingReturns:true if the setting can not be set or read by the user

  - #### parseAndApply



    ```
    public static void parseAndApply(Settings settings,
                                     java.lang.String settingName,
                                     java.lang.String settingValue)
                              throws java.lang.IllegalStateException,
                                     java.lang.NumberFormatException
    ```

    Throws:`java.lang.IllegalStateException``java.lang.NumberFormatException`