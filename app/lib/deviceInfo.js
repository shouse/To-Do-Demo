/**
 * This function returns information about the mobile device to include:
 * username, model, osname, version, network type, mac address, processor cournt,
 * address, ostype, battery state, battery percent, and available memory
 *
 * @class Util.deviceInfo
 * @author steven.m.house@gmail.com
 * @ver 0.5
 */
 
/**
 * @method getDeviceInfo
 * @return deviceInfo
 */
exports.getDeviceInfo = function() {
	
	var batteryPercent = Titanium.Platform.batteryLevel;
	
	if (batteryPercent > 1000) {
		batteryPercent = batteryPercent / 1000;
	}
	
	var deviceInfo = {
		username : Titanium.Platform.username,
		model : Titanium.Platform.model,
		osname : Titanium.Platform.osname,
		version : Titanium.Platform.version,
		networkType : Ti.Network.getNetworkTypeName(),
		macAddress : Titanium.Platform.macaddress,
		processorCount : Titanium.Platform.processorCount,
		address : Titanium.Platform.address,
		ostype : Titanium.Platform.ostype,
		batteryState : batteryStateToString(Titanium.Platform.batteryState),
		batteryPercent : batteryPercent,
		availMem : availableMemoryToString(Titanium.Platform.availableMemory)
	};
	
	return deviceInfo;
};




/**
 * Helper functions for device info
 * @method availableMemoryToString
 * @param {Object} ram
 * @return ramString
 */
function availableMemoryToString(ram) {
	var ramString = ram;

	if (isNaN(ramString)) {
		ramString = 'Unknown';
	} else {
		if (OS_ANDROID){
			// For Android, convert bytes to MB's
			ramString = ramString / 1024 / 1024;
		}
		ramString = parseInt(ramString);
		ramString += ' MB';
	}

	return ramString;
}

/**
 * Description
 * @method batteryPercentToString
 * @param {} percent
 * @return percentString
 */
function batteryPercentToString(percent) {
	var percentString = '';

	if (isNaN(percent)) {
		percentString = 'Unknown';
	} else {
		percentString = Math.abs(percent) * 100;
		percentString = parseInt(percentString);
		percentString += '%';
	}

	return percentString;
}

/**
 * Get text describing battery state
 * // @TODO Get better battery life stats
 * @method batteryStateToString
 * @param {} state
 * @return 
 */
function batteryStateToString(state) {
	switch (state) {
		case Titanium.Platform.BATTERY_STATE_UNKNOWN:
			return 'Unknown';
		case Titanium.Platform.BATTERY_STATE_FULL:
			return 'Full';
		case Titanium.Platform.BATTERY_STATE_UNPLUGGED:
			return 'Unplugged';
		case Titanium.Platform.BATTERY_STATE_CHARGING:
			return 'Charging';
		default:
			return false;
	}
}

/**
 * Get the user location
 * @method getUserLocation
 * @return 
 */
function getUserLocation() { 
	Titanium.API.info("Current Phone Locale is " + Titanium.Platform.locale);
	Titanium.API.info("OS name is " + Titanium.Platform.osname);
	Titanium.API.info("Runtime: " + Titanium.Platform.runtime);
	
	if (Titanium.Platform.osname == 'iphone' || Titanium.Platform.osname == 'ipad') {
		Titanium.API.info("Data network: " + Titanium.Platform.dataAddress);
		Titanium.API.info("Netmask: " + Titanium.Platform.netmask);
	}

}
