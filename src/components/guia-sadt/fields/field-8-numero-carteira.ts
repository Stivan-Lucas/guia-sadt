import { z } from 'zod'

import type { GuiaSadtFieldDefinition } from './types'

export const numeroCarteiraField: GuiaSadtFieldDefinition = {
	name: 'numeroCarteira',
	label: '8. Número da Carteira',
	placeholder: '00000000000000000000',
	maxLength: 20,
	schema: z
		.string()
		.trim()
		.refine(
			(value) => value === '' || /^\d{20}$/.test(value),
			'O Número da Carteira deve conter exatamente 20 dígitos.',
		),
	overlayFields: [
		{
			id: 'numeroCarteira',
			x: 53,
			y: 221,
			width: 400,
			height: 21,
			length: 20,
			gap: 0,
			fontSize: 14,
			fontWeight: 500,
			align: 'center',
			type: 'number',
		},
	],
	getOverlayValue: (_overlayId, value) => value,
}
