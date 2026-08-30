import { z } from 'zod'

import type { GuiaSadtFieldDefinition } from './types'

export const dataAutorizacaoField: GuiaSadtFieldDefinition = {
	name: 'dataAutorizacao',
	label: '4. Data da Autorização',
	placeholder: 'DDMMAAAA',
	maxLength: 8,
	schema: z
		.string()
		.trim()
		.refine(
			(value) => value === '' || /^\d{8}$/.test(value),
			'A Data da Autorização deve conter 8 dígitos no formato DDMMAAAA.',
		),
	overlayFields: [
		{
			id: 'dataAutorizacaoDia',
			x: 53,
			y: 158,
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
			id: 'dataAutorizacaoMes',
			x: 99,
			y: 158,
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
			id: 'dataAutorizacaoAno',
			x: 145,
			y: 158,
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
