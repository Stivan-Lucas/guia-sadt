import { z } from 'zod'

import type { GuiaSadtFieldDefinition } from './types'

export const nomeField: GuiaSadtFieldDefinition = {
	name: 'nome',
	label: '10. Nome',
	placeholder: 'Nome completo',
	maxLength: 60,
	inputType: 'text',
	normalizeValue: (value) => value.slice(0, 60),
	schema: z
		.string()
		.trim()
		.max(60, 'O Nome deve conter no máximo 60 caracteres.'),
	overlayFields: [
		{
			id: 'nome',
			x: 674,
			y: 221,
			width: 481,
			height: 21,
			fontSize: 14,
			fontWeight: 500,
			align: 'left',
			type: 'text',
		},
	],
	getOverlayValue: (_overlayId, value) => value,
}
