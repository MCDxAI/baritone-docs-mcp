ISchematicSystem (baritone 1.2.15 API)

baritone.api.schematic

## Interface ISchematicSystem

- * * *





```
public interface ISchematicSystem
```

Since:12/23/2019

- ### Method Summary

All Methods[Instance Methods](javascript:show(2);)[Abstract Methods](javascript:show(4);)Modifier and TypeMethod and Description`java.util.Optional<ISchematicFormat>``getByFile(java.io.File file)`

Attempts to find an [`ISchematicFormat`](../../../baritone/api/schematic/format/ISchematicFormat.html "interface in baritone.api.schematic.format") that supports the specified schematic file.

`Registry<ISchematicFormat>``getRegistry()`

- ### Method Detail



  - #### getRegistry



    ```
    Registry<ISchematicFormat> getRegistry()
    ```

    Returns:The registry of supported schematic formats

  - #### getByFile



    ```
    java.util.Optional<ISchematicFormat> getByFile(java.io.File file)
    ```


    Attempts to find an [`ISchematicFormat`](../../../baritone/api/schematic/format/ISchematicFormat.html "interface in baritone.api.schematic.format") that supports the specified schematic file.
    Parameters:`file` \- A schematic fileReturns:The corresponding format for the file, `Optional.empty()` if no candidates were found.