export type Topic = {
	readonly name: string
	selected: boolean
}

export function isTopic(obj: unknown): obj is Topic {
	return (
		typeof obj === 'object' &&
		obj !== null &&
		'name' in obj &&
		'selected' in obj &&
		typeof obj.name === 'string' &&
		typeof obj.selected === 'boolean'
	)
}
