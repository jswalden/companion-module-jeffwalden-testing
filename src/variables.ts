import type { JsonObject } from '@companion-module/base'
import type { ModuleInstance } from './main.js'

export type ModuleVariables = {
	variable1: string
	variable2: number
	variable3: JsonObject
}

export function UpdateVariableDefinitions(self: ModuleInstance): void {
	self.setVariableDefinitions({
		variable1: { name: 'My first variable' },
		variable2: { name: 'My second variable' },
		variable3: { name: 'Another variable' },
	})
}
