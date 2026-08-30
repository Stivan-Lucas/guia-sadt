import type { ZodString } from 'zod'

import type { SadtFieldConfig } from '@/components/sadt-field'

export type GuiaSadtForm = {
	registroANS: string
	numeroGuiaPrincipal: string
	dataAutorizacao: string
	senha: string
	dataValidadeSenha: string
	numeroGuiaOperadora: string
}

export type GuiaSadtFieldName = keyof GuiaSadtForm

export interface GuiaSadtFieldDefinition {
	name: GuiaSadtFieldName
	label: string
	placeholder: string
	maxLength: number
	schema: ZodString
	overlayFields: SadtFieldConfig[]
	getOverlayValue: (overlayId: string, value: string) => string
}
