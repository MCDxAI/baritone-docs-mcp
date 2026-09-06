Paginator (baritone 1.2.15 API)

baritone.api.command.helpers

## Class Paginator<E>

- java.lang.Object
  - baritone.api.command.helpers.Paginator<E>

- All Implemented Interfaces:[Helper](../../../../baritone/api/utils/Helper.html "interface in baritone.api.utils")

* * *





```
public class Paginator<E>
extends java.lang.Object
implements Helper
```


- ### Field Summary

FieldsModifier and TypeField and Description`java.util.List<E>``entries``int``page``int``pageSize`
  - ### Fields inherited from interface baritone.api.utils. [Helper](../../../../baritone/api/utils/Helper.html "interface in baritone.api.utils")

     `HELPER, mc`

- ### Constructor Summary

ConstructorsConstructor and Description`Paginator(E... entries)``Paginator(java.util.List<E> entries)`

- ### Method Summary

All Methods[Static Methods](javascript:show(1);)[Instance Methods](javascript:show(2);)[Concrete Methods](javascript:show(8);)Modifier and TypeMethod and Description`void``display(java.util.function.Function<E,net.minecraft.util.text.ITextComponent> transform)``void``display(java.util.function.Function<E,net.minecraft.util.text.ITextComponent> transform,
         java.lang.String commandPrefix)``int``getMaxPage()``static <T> void``paginate(IArgConsumer consumer,
          java.util.List<T> elems,
          java.util.function.Function<T,net.minecraft.util.text.ITextComponent> transform)``static <T> void``paginate(IArgConsumer consumer,
          java.util.List<T> elems,
          java.util.function.Function<T,net.minecraft.util.text.ITextComponent> transform,
          java.lang.String commandPrefix)``static <T> void``paginate(IArgConsumer consumer,
          java.util.List<T> elems,
          java.lang.Runnable pre,
          java.util.function.Function<T,net.minecraft.util.text.ITextComponent> transform)``static <T> void``paginate(IArgConsumer consumer,
          java.util.List<T> elems,
          java.lang.Runnable pre,
          java.util.function.Function<T,net.minecraft.util.text.ITextComponent> transform,
          java.lang.String commandPrefix)``static <T> void``paginate(IArgConsumer consumer,
          Paginator<T> pagi,
          java.util.function.Function<T,net.minecraft.util.text.ITextComponent> transform)``static <T> void``paginate(IArgConsumer consumer,
          Paginator<T> pagi,
          java.util.function.Function<T,net.minecraft.util.text.ITextComponent> transform,
          java.lang.String commandPrefix)``static <T> void``paginate(IArgConsumer consumer,
          Paginator<T> pagi,
          java.lang.Runnable pre,
          java.util.function.Function<T,net.minecraft.util.text.ITextComponent> transform)``static <T> void``paginate(IArgConsumer consumer,
          Paginator<T> pagi,
          java.lang.Runnable pre,
          java.util.function.Function<T,net.minecraft.util.text.ITextComponent> transform,
          java.lang.String commandPrefix)``static <T> void``paginate(IArgConsumer consumer,
          T[] elems,
          java.util.function.Function<T,net.minecraft.util.text.ITextComponent> transform)``static <T> void``paginate(IArgConsumer consumer,
          T[] elems,
          java.util.function.Function<T,net.minecraft.util.text.ITextComponent> transform,
          java.lang.String commandPrefix)``static <T> void``paginate(IArgConsumer consumer,
          T[] elems,
          java.lang.Runnable pre,
          java.util.function.Function<T,net.minecraft.util.text.ITextComponent> transform)``static <T> void``paginate(IArgConsumer consumer,
          T[] elems,
          java.lang.Runnable pre,
          java.util.function.Function<T,net.minecraft.util.text.ITextComponent> transform,
          java.lang.String commandPrefix)``Paginator<E>``setPageSize(int pageSize)``Paginator<E>``skipPages(int pages)``boolean``validPage(int page)`

  - ### Methods inherited from class java.lang.Object

     `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

  - ### Methods inherited from interface baritone.api.utils. [Helper](../../../../baritone/api/utils/Helper.html "interface in baritone.api.utils")

     `getPrefix, logDebug, logDirect, logDirect, logDirect, logDirect, logDirect, logDirect, logNotification, logNotification, logNotificationDirect, logNotificationDirect, logToast, logToast, logToast`

- ### Field Detail



  - #### entries



    ```
    public final java.util.List<E> entries
    ```


  - #### pageSize



    ```
    public int pageSize
    ```


  - #### page



    ```
    public int page
    ```

- ### Constructor Detail



  - #### Paginator



    ```
    public Paginator(java.util.List<E> entries)
    ```


  - #### Paginator



    ```
    public Paginator(E... entries)
    ```

- ### Method Detail



  - #### setPageSize



    ```
    public Paginator<E> setPageSize(int pageSize)
    ```


  - #### getMaxPage



    ```
    public int getMaxPage()
    ```


  - #### validPage



    ```
    public boolean validPage(int page)
    ```


  - #### skipPages



    ```
    public Paginator<E> skipPages(int pages)
    ```


  - #### display



    ```
    public void display(java.util.function.Function<E,net.minecraft.util.text.ITextComponent> transform,
                        java.lang.String commandPrefix)
    ```


  - #### display



    ```
    public void display(java.util.function.Function<E,net.minecraft.util.text.ITextComponent> transform)
    ```


  - #### paginate



    ```
    public static <T> void paginate(IArgConsumer consumer,
                                    Paginator<T> pagi,
                                    java.lang.Runnable pre,
                                    java.util.function.Function<T,net.minecraft.util.text.ITextComponent> transform,
                                    java.lang.String commandPrefix)
                             throws CommandException
    ```

    Throws:`CommandException`

  - #### paginate



    ```
    public static <T> void paginate(IArgConsumer consumer,
                                    java.util.List<T> elems,
                                    java.lang.Runnable pre,
                                    java.util.function.Function<T,net.minecraft.util.text.ITextComponent> transform,
                                    java.lang.String commandPrefix)
                             throws CommandException
    ```

    Throws:`CommandException`

  - #### paginate



    ```
    public static <T> void paginate(IArgConsumer consumer,
                                    T[] elems,
                                    java.lang.Runnable pre,
                                    java.util.function.Function<T,net.minecraft.util.text.ITextComponent> transform,
                                    java.lang.String commandPrefix)
                             throws CommandException
    ```

    Throws:`CommandException`

  - #### paginate



    ```
    public static <T> void paginate(IArgConsumer consumer,
                                    Paginator<T> pagi,
                                    java.util.function.Function<T,net.minecraft.util.text.ITextComponent> transform,
                                    java.lang.String commandPrefix)
                             throws CommandException
    ```

    Throws:`CommandException`

  - #### paginate



    ```
    public static <T> void paginate(IArgConsumer consumer,
                                    java.util.List<T> elems,
                                    java.util.function.Function<T,net.minecraft.util.text.ITextComponent> transform,
                                    java.lang.String commandPrefix)
                             throws CommandException
    ```

    Throws:`CommandException`

  - #### paginate



    ```
    public static <T> void paginate(IArgConsumer consumer,
                                    T[] elems,
                                    java.util.function.Function<T,net.minecraft.util.text.ITextComponent> transform,
                                    java.lang.String commandPrefix)
                             throws CommandException
    ```

    Throws:`CommandException`

  - #### paginate



    ```
    public static <T> void paginate(IArgConsumer consumer,
                                    Paginator<T> pagi,
                                    java.lang.Runnable pre,
                                    java.util.function.Function<T,net.minecraft.util.text.ITextComponent> transform)
                             throws CommandException
    ```

    Throws:`CommandException`

  - #### paginate



    ```
    public static <T> void paginate(IArgConsumer consumer,
                                    java.util.List<T> elems,
                                    java.lang.Runnable pre,
                                    java.util.function.Function<T,net.minecraft.util.text.ITextComponent> transform)
                             throws CommandException
    ```

    Throws:`CommandException`

  - #### paginate



    ```
    public static <T> void paginate(IArgConsumer consumer,
                                    T[] elems,
                                    java.lang.Runnable pre,
                                    java.util.function.Function<T,net.minecraft.util.text.ITextComponent> transform)
                             throws CommandException
    ```

    Throws:`CommandException`

  - #### paginate



    ```
    public static <T> void paginate(IArgConsumer consumer,
                                    Paginator<T> pagi,
                                    java.util.function.Function<T,net.minecraft.util.text.ITextComponent> transform)
                             throws CommandException
    ```

    Throws:`CommandException`

  - #### paginate



    ```
    public static <T> void paginate(IArgConsumer consumer,
                                    java.util.List<T> elems,
                                    java.util.function.Function<T,net.minecraft.util.text.ITextComponent> transform)
                             throws CommandException
    ```

    Throws:`CommandException`

  - #### paginate



    ```
    public static <T> void paginate(IArgConsumer consumer,
                                    T[] elems,
                                    java.util.function.Function<T,net.minecraft.util.text.ITextComponent> transform)
                             throws CommandException
    ```

    Throws:`CommandException`