function extractProperties(arguments, key, string) {
    var properties;
    var keyId = key + "id";
    if ("object" == typeof arguments[key]) properties = arguments[key]; else {
        properties = {};
        arguments[key] ? properties[string] = arguments[key] : arguments[keyId] && (properties[string] = L(arguments[keyId]));
    }
    delete arguments[key];
    delete arguments[keyId];
    return properties;
}

exports.extractProperties = extractProperties;