import type { ModuleInstance } from './main.js'
import { combineRgb } from '@companion-module/base'

export function UpdatePresets(self: ModuleInstance): void {
	self.setPresetDefinitions(
		[
			{
				id: 'group-one',
				name: 'Group One',
				definitions: ['first'],
			},
		],
		{
			first: {
				type: 'simple',
				name: 'First Preset',
				style: {
					text: 'My first Preset button',
					size: 'auto',
					color: combineRgb(255, 255, 255),
					bgcolor: combineRgb(0, 0, 0),
					show_topbar: false,
				},
				steps: [],
				feedbacks: [],
			},
		},
	)
}
