export const getFromLocalStorage = (
	key,
	defaultValue,
	deserialize = JSON.parse
) => {
	if (window.localStorage.getItem(key)) {
		return deserialize(window.localStorage.getItem(key));
	}
	return defaultValue;
};

export const setLocalStorage = (key, value, serialize = JSON.stringify) =>
	window.localStorage.setItem(key, serialize(value));
