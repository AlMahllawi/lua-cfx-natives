export interface ParamOverride {
    name?: string;
    type?: string;
    optional?: boolean;
    defaultValue?: string | number | boolean;
}

export const NativeParamOverrides: Record<string, Record<string, ParamOverride>> = {
    "IsPedInAnyVehicle": {
        "atGetIn": { defaultValue: false }
    },
    "GetVehiclePedIsIn": {
        "lastVehicle": { defaultValue: false }
    },
    "GetResourceMetadata": {
        "index": { defaultValue: 0 }
    }
};

export const GlobalParamOverrides: Record<string, ParamOverride> = {
    "playerSrc": { type: "integer|string" }
};
