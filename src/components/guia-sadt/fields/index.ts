import { z } from 'zod'
import { registroANSField } from './field-1-registro-ans'
import { numeroGuiaPrincipalField } from './field-3-numero-guia-principal'
import { dataAutorizacaoField } from './field-4-data-autorizacao'
import { senhaField } from './field-5-senha'
import { dataValidadeSenhaField } from './field-6-data-validade-senha'
import { numeroGuiaOperadoraField } from './field-7-numero-guia-operadora'

export const guiaSadtFields = [
	registroANSField,
	numeroGuiaPrincipalField,
	dataAutorizacaoField,
	senhaField,
	dataValidadeSenhaField,
	numeroGuiaOperadoraField,
]

export const guiaSadtSchema = z.object({
	registroANS: registroANSField.schema,
	numeroGuiaPrincipal: numeroGuiaPrincipalField.schema,
	dataAutorizacao: dataAutorizacaoField.schema,
	senha: senhaField.schema,
	dataValidadeSenha: dataValidadeSenhaField.schema,
	numeroGuiaOperadora: numeroGuiaOperadoraField.schema,
})

export type {
	GuiaSadtFieldDefinition,
	GuiaSadtFieldName,
	GuiaSadtForm,
} from './types'
