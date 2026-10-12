# rage-lua-natives

![TypeScript](https://shields.io/badge/TypeScript-3178C6?logo=TypeScript&logoColor=FFF)
![Bun](https://shields.io/badge/Bun-000?logo=Bun&logoColor=FFF)
![License](https://img.shields.io/github/license/overextended/rage-lua-natives.svg)
![Open Issues](https://img.shields.io/github/issues/overextended/rage-lua-natives.svg?style=flat)

Generates Lua type annotations for FiveM and RedM natives. To use the natives in your editor, install [fivem-lls-addon](https://github.com/overextended/fivem-lls-addon), which ships the generated output as a [Lua Language Server](https://luals.github.io) addon.

Each native becomes an annotated stub with its namespace, side (client/server), description, parameters, return types and a link to its documentation page:

```lua
---**`PLAYER` `client`**
---[Native Documentation](https://docs.fivem.net/natives/?_0xAFAF86043E5874E9)
---@param player integer
---@return boolean
function IsPlayerFlashingStarsAboutToDrop(player) end
```

## Requirements

- [Bun](https://bun.sh)

## Usage

```sh
git clone https://github.com/overextended/rage-lua-natives.git
cd rage-lua-natives
bun install
bun start
```

The natives are downloaded and written to `build/cfx/`, one `.lua` file per namespace:

| Folder                  | Contents                       | Source                                                         |
| ----------------------- | ------------------------------ | -------------------------------------------------------------- |
| `build/cfx/GTAV`        | GTA V natives (FiveM)          | [static.cfx.re](https://static.cfx.re/natives/natives.json)    |
| `build/cfx/RDR3`        | Red Dead Redemption 2 (RedM)   | [VORPCORE/RDR3natives](https://github.com/VORPCORE/RDR3natives) |
| `build/cfx/CFX-NATIVE`  | CitizenFX natives (both games) | [static.cfx.re](https://static.cfx.re/natives/natives_cfx.json) |

Running it again replaces the previous output.

## Credits

- [citizenfx/natives](https://github.com/citizenfx/natives): FiveM and CFX native data
- [VORPCORE/RDR3natives](https://github.com/VORPCORE/RDR3natives): RedM native data
- [alloc8or/rdr3-nativedb-data](https://github.com/alloc8or/rdr3-nativedb-data): RDR3 native research
- This project builds on earlier work, with each one forked from the one before it:
  - [ImBaphomettt/rage-lua-types](https://github.com/ImBaphomettt/rage-lua-types) by Dylan Malandain, the original tool
  - [TasoOneAsia/JetbrainIDE-CFX.RE](https://github.com/TasoOneAsia/JetbrainIDE-CFX.RE)
