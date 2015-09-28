

- Immutability
	- only rerender if state changes -> `if (oldState == newState) reRenderView(); `
	- but all objects are by reference, so `oldState` will always be equal to `newState`
