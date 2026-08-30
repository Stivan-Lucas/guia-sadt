import { z } from 'zod'

import type { GuiaSadtFieldDefinition } from './types'

export const validadeCarteiraField: GuiaSadtFieldDefinition = {
	name: 'validadeCarteira',
	label: '9. Validade da Carteira',
	placeholder: 'DDMMAAAA',
	maxLength: 8,
	schema: z
		.string()
		.trim()
		.refine(
			(value) => value === '' || /^\d{8}$/.test(value),
			'A Validade da Carteira deve conter 8 dígitos no formato DDMMAAAA.',
		),
	overlayFields: [
		{
			id: 'validadeCarteiraDia',
			x: 478,
			y: 221,
			width: 40,
			height: 21,
			length: 2,
			gap: 0,
			fontSize: 14,
			fontWeight: 500,
			align: 'center',
			type: 'number',
		},
		{
			id: 'validadeCarteiraMes',
			x: 524,
			y: 221,
			width: 40,
			height: 21,
			length: 2,
			gap: 0,
			fontSize: 14,
			fontWeight: 500,
			align: 'center',
			type: 'number',
		},
		{
			id: 'validadeCarteiraAno',
			x: 570,
			y: 221,
			width: 80,
			height: 21,
			length: 4,
			gap: 0,
			fontSize: 14,
			fontWeight: 500,
			align: 'center',
			type: 'number',
		},
	],
	getOverlayValue: (overlayId, value) => {
		if (overlayId.endsWith('Dia')) return value.slice(0, 2)
		if (overlayId.endsWith('Mes')) return value.slice(2, 4)
		return value.slice(4, 8)
	},
}
