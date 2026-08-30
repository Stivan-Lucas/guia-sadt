import { z } from 'zod'

import type { GuiaSadtFieldDefinition } from './types'

export const numeroGuiaPrincipalField: GuiaSadtFieldDefinition = {
	name: 'numeroGuiaPrincipal',
	label: '3. Número da guia principal',
	placeholder: '00000000000000000000',
	maxLength: 20,
	schema: z
		.string()
		.trim()
		.refine(
			(value) => value === '' || /^\d{20}$/.test(value),
			'O Número da guia principal deve conter exatamente 20 dígitos.',
		),
	overlayFields: [
		{
			id: 'numeroGuiaPrincipal',
			x: 198,
			y: 115,
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
