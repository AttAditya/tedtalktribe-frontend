export function useStorage() {
    const STORAGE_TOKEN_PREFIX = "TTT";

    function tokenify(item) {
        return `${STORAGE_TOKEN_PREFIX}_${item}`;
    }

    function packValue(value) {
        let valueType = typeof value;
        let packageValue = {
            type: valueType,
            value: value
        };

        return JSON.stringify(packageValue);
    }

    function unpackValue(value) {
        if (value === null) return null;

        let packageValue = JSON.parse(value);
        
        let valueType = packageValue.type;
        let unpackedValue = packageValue.value;
        
        if (valueType === "number") {
            unpackedValue = Number(unpackedValue);
        }

        if (valueType === "boolean") {
            unpackedValue = Boolean(unpackedValue);
        }

        return unpackedValue;
    }

    return {
        has: (item) => {
            let token = tokenify(item);
            return token in localStorage;
        },
        get: (item) => {
            let token = tokenify(item);
            let value = localStorage.getItem(token);
            return unpackValue(value);
        },
        set: (item, value) => {
            let token = tokenify(item);
            let packedValue = packValue(value);
            localStorage.setItem(token, packedValue);
        },
        remove: (item) => {
            let token = tokenify(item);
            localStorage.removeItem(token);
        }
    }
}