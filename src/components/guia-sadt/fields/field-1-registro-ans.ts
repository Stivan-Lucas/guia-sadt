import { z } from 'zod'

import type { GuiaSadtFieldDefinition } from './types'

export const registroANSField: GuiaSadtFieldDefinition = {
	name: 'registroANS',
	label: '1. Registro ANS',
	placeholder: '000000',
	maxLength: 6,
	schema: z
		.string()
		.trim()
		.refine(
			(value) => value === '' || /^\d{6}$/.test(value),
			'O Registro ANS deve conter exatamente 6 dígitos.',
		),
	overlayFields: [
		{
			id: 'registroANS',
			x: 53,
			y: 115,
			width: 120,
			height: 21,
			length: 6,
			gap: 0,
			fontSize: 14,
			fontWeight: 500,
			align: 'center',
			type: 'number',
		},
	],
	getOverlayValue: (_overlayId, value) => value,
}
