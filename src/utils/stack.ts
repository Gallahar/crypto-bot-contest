export function stack<T>(arr: T[]) {
	const copy = [...arr]
	const lastItem = copy.pop()
	if (lastItem) {
		copy.unshift(lastItem)
	}
	return copy
}
