export interface ParamOverride {
    name?: string;
    type?: string;
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

export const GlobalParamOverrides: Record<string, ParamOverride> = {
    "playerSrc": { type: "integer|string" }
};
