
const isArray = function (value) {
    return Array.isArray(value);
}

const isUndefined = function (value) {
    return typeof value === 'undefined';
}

const isNull = function (value) {
    return value === null;
}

const isString = function (value) {
    return typeof value === "string";
}

const isUndefinedOrNull = function (value) {
    return isUndefined(value) || isNull(value);
};
exports.isUndefinedOrNull = isUndefinedOrNull;

const isNotUndefinedOrNull = function (value) {
    return isUndefinedOrNull(value) === false;
};
exports.isNotUndefinedOrNull = isNotUndefinedOrNull;

const isEmptyString = function (value) {
    return !isUndefined(value) && !isNull(value) && isString(value) && value === '';
};
exports.isEmptyString = isEmptyString;

const isEmpty = function (value) {
    return !isUndefined(value) && !isNull(value) && (isEmptyString(value) || (isArray(value) && value.length === 0));
};
exports.isEmpty = isEmpty;

const isArrayNotEmpty = function (value) {
    if ( isArray(value) ) {
        if ( isEmpty(value) === false ) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
};
exports.isArrayNotEmpty = isArrayNotEmpty;