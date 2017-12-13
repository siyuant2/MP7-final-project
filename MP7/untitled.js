function convertCharacterToNumber(character){
  return character.charCodeAt(0);
}

function isInTheShiftRange(shift) {
	var maxShift = 1024;
	var minShift = -1024;
	if (shift >= minShift && shift <= maxShift) {
		return true;
	}
	return false;
}
function isInSpaceRange(code) {
	if (code >= 32 && code <= 126) {
		return true;
	}
	return false;
}

function encodeSingleLetter(code, shift) {
	var key = code;
	key = code + shift;
	while (key > 126) {
		key = key - 95;
	}
	while (key < 32) {
		key = key + 95;
	}
	return key;
}

function decodeSingleLetter(code, shift) {
	var key = code;
	key = code - shift;
	while (key > 126) {
		key = key - 95;
	}
	while (key < 32) {
		key = key + 95;
	}
	return key;
}

function encrypt(message, shift) {
	var outputArray = [];
	for (var i = 0; i < message.length; i++) {
		var character = message[i];
		var code  = convertCharacterToNumber(character);
		if (isInSpaceRange(code) === true && isInTheShiftRange(shift) === true) {
			shift = shift % 95
			code  = encodeSingleLetter(code, shift);
		}
		outputArray[i] = String.fromCharCode(code);
	}
	return outputArray.join("");
}

function decrypt(message, shift) {
	var outputArray = [];
	for (var i = 0; i < message.length; i++) {
		var char = message[i];
		var code  = convertCharacterToNumber(char);
		if (isInSpaceRange(code) === true && isInTheShiftRange(shift) === true) {
			shift = shift % 95
			code  = decodeSingleLetter(code, shift);
		}
		outputArray[i] = String.fromCharCode(code);
	}
	return outputArray.join("");
}

