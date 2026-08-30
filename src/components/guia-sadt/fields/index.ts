import { z } from 'zod'
import { registroANSField } from './field-1-registro-ans'
import { numeroGuiaPrincipalField } from './field-3-numero-guia-principal'
import { dataAutorizacaoField } from './field-4-data-autorizacao'
import { senhaField } from './field-5-senha'
import { dataValidadeSenhaField } from './field-6-data-validade-senha'
import { numeroGuiaOperadoraField } from './field-7-numero-guia-operadora'
import { numeroCarteiraField } from './field-8-numero-carteira'
import { validadeCarteiraField } from './field-9-validade-carteira'
import { nomeField } from './field-10-nome'
import { cartaoSUSField } from './field-11-cartao-sus'
import { atendimentoRNField } from './field-12-atendimento-rn'

export const guiaSadtFields = [
	registroANSField,
	numeroGuiaPrincipalField,
	dataAutorizacaoField,
	senhaField,
	dataValidadeSenhaField,
	numeroGuiaOperadoraField,
	numeroCarteiraField,
	validadeCarteiraField,
	nomeField,
	cartaoSUSField,
	atendimentoRNField,
]

export const guiaSadtSchema = z.object({
	registroANS: registroANSField.schema,
	numeroGuiaPrincipal: numeroGuiaPrincipalField.schema,
	dataAutorizacao: dataAutorizacaoField.schema,
	senha: senhaField.schema,
	dataValidadeSenha: dataValidadeSenhaField.schema,
	numeroGuiaOperadora: numeroGuiaOperadoraField.schema,
	numeroCarteira: numeroCarteiraField.schema,
	validadeCarteira: validadeCarteiraField.schema,
	nome: nomeField.schema,
	cartaoSUS: cartaoSUSField.schema,
	atendimentoRN: atendimentoRNField.schema,
})

export type {
	GuiaSadtFieldDefinition,
	GuiaSadtFieldName,
	GuiaSadtForm,
} from './types'
