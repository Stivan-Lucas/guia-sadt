import { z } from 'zod'

import type { GuiaSadtFieldDefinition } from './types'

export const atendimentoRNField: GuiaSadtFieldDefinition = {
	name: 'atendimentoRN',
	label: '12. Atendimento a RN',
	placeholder: 'S/N',
	maxLength: 1,
	inputType: 'text',
	normalizeValue: (value) =>
		value.toUpperCase().replace(/[^SN]/g, '').slice(0, 1),
	schema: z
		.string()
		.trim()
		.refine(
			(value) => value === '' || /^[SN]$/.test(value.toUpperCase()),
			'Informe S para Sim ou N para Não.',
		),
	overlayFields: [
		{
			id: 'atendimentoRN',
			x: 1556,
			y: 221,
			width: 20,
			height: 21,
			length: 1,
			gap: 0,
			fontSize: 14,
			fontWeight: 500,
			align: 'center',
			type: 'text',
		},
	],
	getOverlayValue: (_overlayId, value) => value.toUpperCase(),
}
