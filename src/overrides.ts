import { NativeSet } from "./enum/NativeSet";

// TODO: Replace with a union of supported Lua types
export type LuaType = string;

export interface ParamOverride {
    name?: string;
    type?: LuaType;
    defaultValue?: string | number | boolean | null;
}

export const NativeParamOverrides: Record<string, Record<number, ParamOverride>> = {
    "IsPedInAnyVehicle": {
        1: { defaultValue: false } // atGetIn
    },
    "GetVehiclePedIsIn": {
        1: { defaultValue: false } // lastVehicle
    },
    "GetResourceMetadata": {
        2: { defaultValue: 0 } // index
    }
};

export type GlobalParamOverride = Pick<ParamOverride, "type" | "defaultValue">;

export const GlobalParamOverrides: Partial<Record<NativeSet, Record<string, GlobalParamOverride>>> = {
    [NativeSet.Cfx]: {
        "playerSrc": { type: "integer|string" }
    }
};
