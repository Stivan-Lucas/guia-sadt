import { z } from 'zod'

import type { GuiaSadtFieldDefinition } from './types'

export const numeroGuiaOperadoraField: GuiaSadtFieldDefinition = {
	name: 'numeroGuiaOperadora',
	label: '7. Número da Guia Atribuído pela Operadora',
	placeholder: '00000000000000000000',
	maxLength: 20,
	schema: z
		.string()
		.trim()
		.refine(
			(value) => value === '' || /^\d{20}$/.test(value),
			'O Número da Guia Atribuído pela Operadora deve conter exatamente 20 dígitos.',
		),
	overlayFields: [
		{
			id: 'numeroGuiaOperadora',
			x: 867,
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
