import { z } from 'zod'

import type { GuiaSadtFieldDefinition } from './types'

export const cartaoSUSField: GuiaSadtFieldDefinition = {
	name: 'cartaoSUS',
	label: '11. Cartão Nacional de Saúde',
	placeholder: '000000000000000',
	maxLength: 15,
	schema: z
		.string()
		.trim()
		.refine(
			(value) => value === '' || /^\d{15}$/.test(value),
			'O Cartão Nacional de Saúde deve conter exatamente 15 dígitos.',
		),
	overlayFields: [
		{
			id: 'cartaoSUS',
			x: 1180,
			y: 221,
			width: 300,
			height: 21,
			length: 15,
			gap: 0,
			fontSize: 14,
			fontWeight: 500,
			align: 'center',
			type: 'number',
		},
	],
	getOverlayValue: (_overlayId, value) => value,
}
