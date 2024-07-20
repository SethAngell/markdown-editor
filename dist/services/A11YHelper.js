export function validateKeyboardEvents(anEvent, keyCodes = ['enter', 'space']) {
    if (anEvent instanceof KeyboardEvent) {
        keyCodes.includes(anEvent.code.toLowerCase());
    }
    return true;
}
