function availableMemoryToString(ram) {
    var ramString = ram;
    if (isNaN(ramString)) ramString = "Unknown"; else {
        ramString = parseInt(ramString);
        ramString += " MB";
    }
    return ramString;
}

function batteryPercentToString(percent) {
    var percentString = "";
    if (isNaN(percent)) percentString = "Unknown"; else {
        percentString = 100 * Math.abs(percent);
        percentString = parseInt(percentString);
        percentString += "%";
    }
    return percentString;
}

function batteryStateToString(state) {
    switch (state) {
      case Titanium.Platform.BATTERY_STATE_UNKNOWN:
        return "Unknown";

      case Titanium.Platform.BATTERY_STATE_FULL:
        return "Full";

      case Titanium.Platform.BATTERY_STATE_UNPLUGGED:
        return "Unplugged";

      case Titanium.Platform.BATTERY_STATE_CHARGING:
        return "Charging";

      default:
        return false;
    }
}

function getUserLocation() {
    Titanium.API.info("Current Phone Locale is " + Titanium.Platform.locale);
    Titanium.API.info("OS name is " + Titanium.Platform.osname);
    Titanium.API.info("Runtime: " + Titanium.Platform.runtime);
    if ("iphone" == Titanium.Platform.osname || "ipad" == Titanium.Platform.osname) {
        Titanium.API.info("Data network: " + Titanium.Platform.dataAddress);
        Titanium.API.info("Netmask: " + Titanium.Platform.netmask);
    }
}

exports.getDeviceInfo = function() {
    var batteryPercent = Titanium.Platform.batteryLevel;
    batteryPercent > 1e3 && (batteryPercent /= 1e3);
    var deviceInfo = {
        username: Titanium.Platform.username,
        model: Titanium.Platform.model,
        osname: Titanium.Platform.osname,
        version: Titanium.Platform.version,
        networkType: Ti.Network.getNetworkTypeName(),
        macAddress: Titanium.Platform.macaddress,
        processorCount: Titanium.Platform.processorCount,
        address: Titanium.Platform.address,
        ostype: Titanium.Platform.ostype,
        batteryState: batteryStateToString(Titanium.Platform.batteryState),
        batteryPercent: batteryPercent,
        availMem: availableMemoryToString(Titanium.Platform.availableMemory)
    };
    return deviceInfo;
};