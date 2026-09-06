TabCompleteHelper (baritone 1.2.15 API)

baritone.api.command.helpers

## Class TabCompleteHelper

- java.lang.Object
  - baritone.api.command.helpers.TabCompleteHelper

- * * *





```
public class TabCompleteHelper
extends java.lang.Object
```


The [`TabCompleteHelper`](../../../../baritone/api/command/helpers/TabCompleteHelper.html "class in baritone.api.command.helpers") is a **single-use** object that helps you handle tab completion. It includes helper
methods for appending and prepending streams, sorting, filtering by prefix, and so on.



The recommended way to use this class is:




- Create a new instance with the empty constructor
- Use `append`, `prepend` or `add<something>` methods to add completions
- Sort using [`sort(Comparator)`](../../../../baritone/api/command/helpers/TabCompleteHelper.html#sort-java.util.Comparator-) or [`sortAlphabetically()`](../../../../baritone/api/command/helpers/TabCompleteHelper.html#sortAlphabetically--) and then filter by prefix using
[`filterPrefix(String)`](../../../../baritone/api/command/helpers/TabCompleteHelper.html#filterPrefix-java.lang.String-)
- Get the stream using [`stream()`](../../../../baritone/api/command/helpers/TabCompleteHelper.html#stream--)
- Pass it up to whatever's calling your tab complete function (i.e.
[`ICommandManager.tabComplete(String)`](../../../../baritone/api/command/manager/ICommandManager.html#tabComplete-java.lang.String-) or [`IArgConsumer`](../../../../baritone/api/command/argument/IArgConsumer.html "interface in baritone.api.command.argument")#tabCompleteDatatype(IDatatype)})

For advanced users: if you're intercepting [`TabCompleteEvent`](../../../../baritone/api/event/events/TabCompleteEvent.html "class in baritone.api.event.events") s directly, use [`build()`](../../../../baritone/api/command/helpers/TabCompleteHelper.html#build--) instead for an
array.

- ### Constructor Summary

ConstructorsConstructor and Description`TabCompleteHelper()``TabCompleteHelper(java.util.List<java.lang.String> base)``TabCompleteHelper(java.lang.String[] base)`

- ### Method Summary

All Methods[Instance Methods](javascript:show(2);)[Concrete Methods](javascript:show(8);)Modifier and TypeMethod and Description`TabCompleteHelper``addCommands(ICommandManager manager)`

Appends every command in the specified [`ICommandManager`](../../../../baritone/api/command/manager/ICommandManager.html "interface in baritone.api.command.manager") to this [`TabCompleteHelper`](../../../../baritone/api/command/helpers/TabCompleteHelper.html "class in baritone.api.command.helpers")

`TabCompleteHelper``addModifiedSettings()`

Appends every modified setting in the [`Settings`](../../../../baritone/api/Settings.html "class in baritone.api") to this [`TabCompleteHelper`](../../../../baritone/api/command/helpers/TabCompleteHelper.html "class in baritone.api.command.helpers")

`TabCompleteHelper``addSettings()`

Appends every setting in the [`Settings`](../../../../baritone/api/Settings.html "class in baritone.api") to this [`TabCompleteHelper`](../../../../baritone/api/command/helpers/TabCompleteHelper.html "class in baritone.api.command.helpers")

`TabCompleteHelper``addToggleableSettings()`

Appends every `Boolean` setting in the [`Settings`](../../../../baritone/api/Settings.html "class in baritone.api") to this [`TabCompleteHelper`](../../../../baritone/api/command/helpers/TabCompleteHelper.html "class in baritone.api.command.helpers")

`TabCompleteHelper``append(java.lang.Class<? extends java.lang.Enum<?>> num)`

Appends all values of the specified enum to this [`TabCompleteHelper`](../../../../baritone/api/command/helpers/TabCompleteHelper.html "class in baritone.api.command.helpers") and returns it for chaining

`TabCompleteHelper``append(java.util.stream.Stream<java.lang.String> source)`

Appends the specified stream to this [`TabCompleteHelper`](../../../../baritone/api/command/helpers/TabCompleteHelper.html "class in baritone.api.command.helpers") and returns it for chaining

`TabCompleteHelper``append(java.lang.String... source)`

Appends the specified strings to this [`TabCompleteHelper`](../../../../baritone/api/command/helpers/TabCompleteHelper.html "class in baritone.api.command.helpers") and returns it for chaining

`java.lang.String[]``build()``TabCompleteHelper``filter(java.util.function.Predicate<java.lang.String> filter)`

Apply the specified `filter` to every element **currently** in this [`TabCompleteHelper`](../../../../baritone/api/command/helpers/TabCompleteHelper.html "class in baritone.api.command.helpers") and return
this object for chaining

`TabCompleteHelper``filterPrefix(java.lang.String prefix)`

Filter out any element that doesn't start with `prefix` and return this object for chaining

`TabCompleteHelper``filterPrefixNamespaced(java.lang.String prefix)`

Filter out any element that doesn't start with `prefix` and return this object for chaining

`TabCompleteHelper``map(java.util.function.Function<java.lang.String,java.lang.String> transform)`

Apply the specified `transform` to every element **currently** in this [`TabCompleteHelper`](../../../../baritone/api/command/helpers/TabCompleteHelper.html "class in baritone.api.command.helpers") and
return this object for chaining

`TabCompleteHelper``prepend(java.lang.Class<? extends java.lang.Enum<?>> num)`

Prepends all values of the specified enum to this [`TabCompleteHelper`](../../../../baritone/api/command/helpers/TabCompleteHelper.html "class in baritone.api.command.helpers") and returns it for chaining

`TabCompleteHelper``prepend(java.util.stream.Stream<java.lang.String> source)`

Prepends the specified stream to this [`TabCompleteHelper`](../../../../baritone/api/command/helpers/TabCompleteHelper.html "class in baritone.api.command.helpers") and returns it for chaining

`TabCompleteHelper``prepend(java.lang.String... source)`

Prepends the specified strings to this [`TabCompleteHelper`](../../../../baritone/api/command/helpers/TabCompleteHelper.html "class in baritone.api.command.helpers") and returns it for chaining

`TabCompleteHelper``sort(java.util.Comparator<java.lang.String> comparator)`

Apply the specified `sort` to every element **currently** in this [`TabCompleteHelper`](../../../../baritone/api/command/helpers/TabCompleteHelper.html "class in baritone.api.command.helpers") and return
this object for chaining

`TabCompleteHelper``sortAlphabetically()`

Sort every element **currently** in this [`TabCompleteHelper`](../../../../baritone/api/command/helpers/TabCompleteHelper.html "class in baritone.api.command.helpers") alphabetically and return this object for
chaining

`java.util.stream.Stream<java.lang.String>``stream()`
  - ### Methods inherited from class java.lang.Object

     `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

- ### Constructor Detail



  - #### TabCompleteHelper



    ```
    public TabCompleteHelper(java.lang.String[] base)
    ```


  - #### TabCompleteHelper



    ```
    public TabCompleteHelper(java.util.List<java.lang.String> base)
    ```


  - #### TabCompleteHelper



    ```
    public TabCompleteHelper()
    ```

- ### Method Detail



  - #### append



    ```
    public TabCompleteHelper append(java.util.stream.Stream<java.lang.String> source)
    ```


    Appends the specified stream to this [`TabCompleteHelper`](../../../../baritone/api/command/helpers/TabCompleteHelper.html "class in baritone.api.command.helpers") and returns it for chaining
    Parameters:`source` \- The stream to appendReturns:This [`TabCompleteHelper`](../../../../baritone/api/command/helpers/TabCompleteHelper.html "class in baritone.api.command.helpers") after having appended the streamSee Also:[`append(String...)`](../../../../baritone/api/command/helpers/TabCompleteHelper.html#append-java.lang.String...-),
    [`append(Class)`](../../../../baritone/api/command/helpers/TabCompleteHelper.html#append-java.lang.Class-)

  - #### append



    ```
    public TabCompleteHelper append(java.lang.String... source)
    ```


    Appends the specified strings to this [`TabCompleteHelper`](../../../../baritone/api/command/helpers/TabCompleteHelper.html "class in baritone.api.command.helpers") and returns it for chaining
    Parameters:`source` \- The stream to appendReturns:This [`TabCompleteHelper`](../../../../baritone/api/command/helpers/TabCompleteHelper.html "class in baritone.api.command.helpers") after having appended the stringsSee Also:[`append(Stream)`](../../../../baritone/api/command/helpers/TabCompleteHelper.html#append-java.util.stream.Stream-),
    [`append(Class)`](../../../../baritone/api/command/helpers/TabCompleteHelper.html#append-java.lang.Class-)

  - #### append



    ```
    public TabCompleteHelper append(java.lang.Class<? extends java.lang.Enum<?>> num)
    ```


    Appends all values of the specified enum to this [`TabCompleteHelper`](../../../../baritone/api/command/helpers/TabCompleteHelper.html "class in baritone.api.command.helpers") and returns it for chaining
    Parameters:`num` \- The enum to append the values ofReturns:This [`TabCompleteHelper`](../../../../baritone/api/command/helpers/TabCompleteHelper.html "class in baritone.api.command.helpers") after having appended the valuesSee Also:[`append(Stream)`](../../../../baritone/api/command/helpers/TabCompleteHelper.html#append-java.util.stream.Stream-),
    [`append(String...)`](../../../../baritone/api/command/helpers/TabCompleteHelper.html#append-java.lang.String...-)

  - #### prepend



    ```
    public TabCompleteHelper prepend(java.util.stream.Stream<java.lang.String> source)
    ```


    Prepends the specified stream to this [`TabCompleteHelper`](../../../../baritone/api/command/helpers/TabCompleteHelper.html "class in baritone.api.command.helpers") and returns it for chaining
    Parameters:`source` \- The stream to prependReturns:This [`TabCompleteHelper`](../../../../baritone/api/command/helpers/TabCompleteHelper.html "class in baritone.api.command.helpers") after having prepended the streamSee Also:[`prepend(String...)`](../../../../baritone/api/command/helpers/TabCompleteHelper.html#prepend-java.lang.String...-),
    [`prepend(Class)`](../../../../baritone/api/command/helpers/TabCompleteHelper.html#prepend-java.lang.Class-)

  - #### prepend



    ```
    public TabCompleteHelper prepend(java.lang.String... source)
    ```


    Prepends the specified strings to this [`TabCompleteHelper`](../../../../baritone/api/command/helpers/TabCompleteHelper.html "class in baritone.api.command.helpers") and returns it for chaining
    Parameters:`source` \- The stream to prependReturns:This [`TabCompleteHelper`](../../../../baritone/api/command/helpers/TabCompleteHelper.html "class in baritone.api.command.helpers") after having prepended the stringsSee Also:[`prepend(Stream)`](../../../../baritone/api/command/helpers/TabCompleteHelper.html#prepend-java.util.stream.Stream-),
    [`prepend(Class)`](../../../../baritone/api/command/helpers/TabCompleteHelper.html#prepend-java.lang.Class-)

  - #### prepend



    ```
    public TabCompleteHelper prepend(java.lang.Class<? extends java.lang.Enum<?>> num)
    ```


    Prepends all values of the specified enum to this [`TabCompleteHelper`](../../../../baritone/api/command/helpers/TabCompleteHelper.html "class in baritone.api.command.helpers") and returns it for chaining
    Parameters:`num` \- The enum to prepend the values ofReturns:This [`TabCompleteHelper`](../../../../baritone/api/command/helpers/TabCompleteHelper.html "class in baritone.api.command.helpers") after having prepended the valuesSee Also:[`prepend(Stream)`](../../../../baritone/api/command/helpers/TabCompleteHelper.html#prepend-java.util.stream.Stream-),
    [`prepend(String...)`](../../../../baritone/api/command/helpers/TabCompleteHelper.html#prepend-java.lang.String...-)

  - #### map



    ```
    public TabCompleteHelper map(java.util.function.Function<java.lang.String,java.lang.String> transform)
    ```


    Apply the specified `transform` to every element **currently** in this [`TabCompleteHelper`](../../../../baritone/api/command/helpers/TabCompleteHelper.html "class in baritone.api.command.helpers") and
     return this object for chaining
    Parameters:`transform` \- The transform to applyReturns:This [`TabCompleteHelper`](../../../../baritone/api/command/helpers/TabCompleteHelper.html "class in baritone.api.command.helpers")

  - #### filter



    ```
    public TabCompleteHelper filter(java.util.function.Predicate<java.lang.String> filter)
    ```


    Apply the specified `filter` to every element **currently** in this [`TabCompleteHelper`](../../../../baritone/api/command/helpers/TabCompleteHelper.html "class in baritone.api.command.helpers") and return
     this object for chaining
    Parameters:`filter` \- The filter to applyReturns:This [`TabCompleteHelper`](../../../../baritone/api/command/helpers/TabCompleteHelper.html "class in baritone.api.command.helpers")

  - #### sort



    ```
    public TabCompleteHelper sort(java.util.Comparator<java.lang.String> comparator)
    ```


    Apply the specified `sort` to every element **currently** in this [`TabCompleteHelper`](../../../../baritone/api/command/helpers/TabCompleteHelper.html "class in baritone.api.command.helpers") and return
     this object for chaining
    Parameters:`comparator` \- The comparator to useReturns:This [`TabCompleteHelper`](../../../../baritone/api/command/helpers/TabCompleteHelper.html "class in baritone.api.command.helpers")

  - #### sortAlphabetically



    ```
    public TabCompleteHelper sortAlphabetically()
    ```


    Sort every element **currently** in this [`TabCompleteHelper`](../../../../baritone/api/command/helpers/TabCompleteHelper.html "class in baritone.api.command.helpers") alphabetically and return this object for
     chaining
    Returns:This [`TabCompleteHelper`](../../../../baritone/api/command/helpers/TabCompleteHelper.html "class in baritone.api.command.helpers")

  - #### filterPrefix



    ```
    public TabCompleteHelper filterPrefix(java.lang.String prefix)
    ```


    Filter out any element that doesn't start with `prefix` and return this object for chaining
    Parameters:`prefix` \- The prefix to filter forReturns:This [`TabCompleteHelper`](../../../../baritone/api/command/helpers/TabCompleteHelper.html "class in baritone.api.command.helpers")

  - #### filterPrefixNamespaced



    ```
    public TabCompleteHelper filterPrefixNamespaced(java.lang.String prefix)
    ```


    Filter out any element that doesn't start with `prefix` and return this object for chaining



    Assumes every element in this [`TabCompleteHelper`](../../../../baritone/api/command/helpers/TabCompleteHelper.html "class in baritone.api.command.helpers") is a `ResourceLocation`


    Parameters:`prefix` \- The prefix to filter forReturns:This [`TabCompleteHelper`](../../../../baritone/api/command/helpers/TabCompleteHelper.html "class in baritone.api.command.helpers")

  - #### build



    ```
    public java.lang.String[] build()
    ```

    Returns:An array containing every element in this [`TabCompleteHelper`](../../../../baritone/api/command/helpers/TabCompleteHelper.html "class in baritone.api.command.helpers")See Also:[`stream()`](../../../../baritone/api/command/helpers/TabCompleteHelper.html#stream--)

  - #### stream



    ```
    public java.util.stream.Stream<java.lang.String> stream()
    ```

    Returns:A stream containing every element in this [`TabCompleteHelper`](../../../../baritone/api/command/helpers/TabCompleteHelper.html "class in baritone.api.command.helpers")See Also:[`build()`](../../../../baritone/api/command/helpers/TabCompleteHelper.html#build--)

  - #### addCommands



    ```
    public TabCompleteHelper addCommands(ICommandManager manager)
    ```


    Appends every command in the specified [`ICommandManager`](../../../../baritone/api/command/manager/ICommandManager.html "interface in baritone.api.command.manager") to this [`TabCompleteHelper`](../../../../baritone/api/command/helpers/TabCompleteHelper.html "class in baritone.api.command.helpers")
    Parameters:`manager` \- A command managerReturns:This [`TabCompleteHelper`](../../../../baritone/api/command/helpers/TabCompleteHelper.html "class in baritone.api.command.helpers")

  - #### addSettings



    ```
    public TabCompleteHelper addSettings()
    ```


    Appends every setting in the [`Settings`](../../../../baritone/api/Settings.html "class in baritone.api") to this [`TabCompleteHelper`](../../../../baritone/api/command/helpers/TabCompleteHelper.html "class in baritone.api.command.helpers")
    Returns:This [`TabCompleteHelper`](../../../../baritone/api/command/helpers/TabCompleteHelper.html "class in baritone.api.command.helpers")

  - #### addModifiedSettings



    ```
    public TabCompleteHelper addModifiedSettings()
    ```


    Appends every modified setting in the [`Settings`](../../../../baritone/api/Settings.html "class in baritone.api") to this [`TabCompleteHelper`](../../../../baritone/api/command/helpers/TabCompleteHelper.html "class in baritone.api.command.helpers")
    Returns:This [`TabCompleteHelper`](../../../../baritone/api/command/helpers/TabCompleteHelper.html "class in baritone.api.command.helpers")

  - #### addToggleableSettings



    ```
    public TabCompleteHelper addToggleableSettings()
    ```


    Appends every `Boolean` setting in the [`Settings`](../../../../baritone/api/Settings.html "class in baritone.api") to this [`TabCompleteHelper`](../../../../baritone/api/command/helpers/TabCompleteHelper.html "class in baritone.api.command.helpers")
    Returns:This [`TabCompleteHelper`](../../../../baritone/api/command/helpers/TabCompleteHelper.html "class in baritone.api.command.helpers")