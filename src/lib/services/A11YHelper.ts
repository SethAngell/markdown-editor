export function validateKeyboardEvents(
	anEvent: Event,
	keyCodes: Array<Lowercase<string>> = ['enter', 'space']
): Boolean {
	if (anEvent instanceof KeyboardEvent) {
		keyCodes.includes(<Lowercase<string>>anEvent.code.toLowerCase());
	}

	return true;
}
