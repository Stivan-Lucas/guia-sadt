import { z } from 'zod'

import type { GuiaSadtFieldDefinition } from './types'

export const senhaField: GuiaSadtFieldDefinition = {
	name: 'senha',
	label: '5. Senha',
	placeholder: '00000000000000000000',
	maxLength: 20,
	schema: z
		.string()
		.trim()
		.refine(
			(value) => value === '' || /^\d{20}$/.test(value),
			'A Senha deve conter exatamente 20 dígitos.',
		),
	overlayFields: [
		{
			id: 'senha',
			x: 248,
			y: 158,
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
