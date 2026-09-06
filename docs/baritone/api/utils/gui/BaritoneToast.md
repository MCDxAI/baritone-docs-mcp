BaritoneToast (baritone 1.2.15 API)

baritone.api.utils.gui

## Class BaritoneToast

- java.lang.Object
  - baritone.api.utils.gui.BaritoneToast

- All Implemented Interfaces:net.minecraft.client.gui.toasts.IToast

* * *





```
public class BaritoneToast
extends java.lang.Object
implements net.minecraft.client.gui.toasts.IToast
```


- ### Nested Class Summary


  - ### Nested classes/interfaces inherited from interface net.minecraft.client.gui.toasts.IToast

     `net.minecraft.client.gui.toasts.IToast.Visibility`

- ### Field Summary


  - ### Fields inherited from interface net.minecraft.client.gui.toasts.IToast

     `NO_TOKEN, TEXTURE_TOASTS`

- ### Constructor Summary

ConstructorsConstructor and Description`BaritoneToast(net.minecraft.util.text.ITextComponent titleComponent,
               net.minecraft.util.text.ITextComponent subtitleComponent,
               long totalShowTime)`

- ### Method Summary

All Methods[Static Methods](javascript:show(1);)[Instance Methods](javascript:show(2);)[Concrete Methods](javascript:show(8);)Modifier and TypeMethod and Description`static void``addOrUpdate(net.minecraft.client.gui.toasts.GuiToast toast,
             net.minecraft.util.text.ITextComponent title,
             net.minecraft.util.text.ITextComponent subtitle,
             long totalShowTime)``static void``addOrUpdate(net.minecraft.util.text.ITextComponent title,
             net.minecraft.util.text.ITextComponent subtitle)``net.minecraft.client.gui.toasts.IToast.Visibility``draw(net.minecraft.client.gui.toasts.GuiToast toastGui,
      long delta)``void``setDisplayedText(net.minecraft.util.text.ITextComponent titleComponent,
                  net.minecraft.util.text.ITextComponent subtitleComponent)`

  - ### Methods inherited from class java.lang.Object

     `clone, equals, finalize, getClass, hashCode, notify, notifyAll, toString, wait, wait, wait`

  - ### Methods inherited from interface net.minecraft.client.gui.toasts.IToast

     `getType`

- ### Constructor Detail


  - #### BaritoneToast



    ```
    public BaritoneToast(net.minecraft.util.text.ITextComponent titleComponent,
                         net.minecraft.util.text.ITextComponent subtitleComponent,
                         long totalShowTime)
    ```

- ### Method Detail



  - #### draw



    ```
    public net.minecraft.client.gui.toasts.IToast.Visibility draw(net.minecraft.client.gui.toasts.GuiToast toastGui,
                                                                  long delta)
    ```

    Specified by:`draw` in interface `net.minecraft.client.gui.toasts.IToast`

  - #### setDisplayedText



    ```
    public void setDisplayedText(net.minecraft.util.text.ITextComponent titleComponent,
                                 net.minecraft.util.text.ITextComponent subtitleComponent)
    ```


  - #### addOrUpdate



    ```
    public static void addOrUpdate(net.minecraft.client.gui.toasts.GuiToast toast,
                                   net.minecraft.util.text.ITextComponent title,
                                   net.minecraft.util.text.ITextComponent subtitle,
                                   long totalShowTime)
    ```


  - #### addOrUpdate



    ```
    public static void addOrUpdate(net.minecraft.util.text.ITextComponent title,
                                   net.minecraft.util.text.ITextComponent subtitle)
    ```