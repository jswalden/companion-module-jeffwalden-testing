import type { JsonValue } from '@companion-module/base'
import type { ModuleInstance } from './main.js'

export type ModuleActions = {
	sample_action: {
		options: {
			num: number
		}
	}
	return_value: {
		options: {
			'val-to-return': string
		}
		result: JsonValue
	}
}

export function UpdateActions(self: ModuleInstance): void {
	self.setActionDefinitions({
		sample_action: {
			name: 'My First Action',
			options: [
				{
					id: 'num',
					type: 'number',
					label: 'Test',
					default: 5,
					min: 0,
					max: 100,
				},
			],
			callback: async (event) => {
				console.log('Hello world!', event.options.num)
			},
		},
		return_value: {
			name: 'Return a value',
			options: [
				{
					id: 'val-to-return',
					type: 'textinput',
					label: 'Enter a JSON string to return its parsed value',
					default: 'null',
					useVariables: true,
				},
			],
			hasResult: true,
			callback: ({ options }): JsonValue => {
				return JSON.parse(options['val-to-return'])
			},
		},
	})
}
