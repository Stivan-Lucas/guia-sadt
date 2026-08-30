'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import Image from 'next/image'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import {
	type GuiaSadtFieldName,
	type GuiaSadtForm,
	guiaSadtFields,
	guiaSadtSchema,
} from '@/components/guia-sadt/fields'
import { GuiaSadtFieldInput } from '@/components/guia-sadt/guia-sadt-field-input'
import { ModeToggle } from '@/components/mode-toggle'
import { SadtField } from '@/components/sadt-field'
import { Button } from '@/components/ui/button'

const IMAGE_WIDTH = 1683
const IMAGE_HEIGHT = 1190

export default function Home() {
	const [debugEnabled, setDebugEnabled] = useState(false)
	const {
		watch,
		setValue,
		reset,
		formState: { errors },
	} = useForm<GuiaSadtForm>({
		resolver: zodResolver(guiaSadtSchema),
		mode: 'onChange',
		defaultValues: {
			registroANS: '',
			numeroGuiaPrincipal: '',
			dataAutorizacao: '',
			senha: '',
			dataValidadeSenha: '',
			numeroGuiaOperadora: '',
			numeroCarteira: '',
			validadeCarteira: '',
			nome: '',
			cartaoSUS: '',
			atendimentoRN: '',
		},
	})

	const formValues = watch()

	const handleFieldChange = (name: GuiaSadtFieldName, value: string) => {
		setValue(name, value, {
			shouldValidate: true,
			shouldDirty: true,
			shouldTouch: true,
		})
	}

	const fieldsWithValues = guiaSadtFields.flatMap((field) => {
		const fieldValue = formValues[field.name] ?? ''

		return field.overlayFields.map((overlayField) => ({
			...overlayField,
			value: field.getOverlayValue(overlayField.id, fieldValue),
		}))
	})

	const handlePrint = () => window.print()

	return (
		<main className="flex h-screen flex-col overflow-hidden print:block print:h-auto">
			<header className="flex h-14 shrink-0 items-center justify-between border-b bg-background px-4 print:hidden">
				<div className="flex items-center gap-2">
					<h1 className="text-sm font-semibold">Guia SADT</h1>
				</div>

				<div className="flex items-center gap-2">
					<ModeToggle />
					<Button
						variant={debugEnabled ? 'secondary' : 'outline'}
						type="button"
						aria-pressed={debugEnabled}
						onClick={() => setDebugEnabled((enabled) => !enabled)}
					>
						Debug: {debugEnabled ? 'ativo' : 'inativo'}
					</Button>
					<Button type="button" variant="outline" onClick={() => reset()}>
						Limpar
					</Button>
					<Button type="button" onClick={handlePrint}>
						Salvar PDF
					</Button>
					<Button type="button" variant="outline" onClick={handlePrint}>
						Imprimir
					</Button>
				</div>
			</header>

			<section className="flex min-h-0 flex-1 print:block print:min-h-0">
				<aside className="w-80 shrink-0 overflow-y-auto border-r bg-background p-4 print:hidden">
					<div className="space-y-4">
						<div>
							<h2 className="text-sm font-semibold">Dados da guia</h2>
							<p className="text-xs text-muted-foreground">
								Preencha os campos da ficha.
							</p>
						</div>

						<form
							id="guia-sadt-form"
							className="space-y-4"
							onSubmit={(event) => event.preventDefault()}
						>
							{guiaSadtFields.map((field) => (
								<GuiaSadtFieldInput
									key={field.name}
									field={field}
									value={formValues[field.name] ?? ''}
									error={errors[field.name]?.message?.toString()}
									onChange={(value) => handleFieldChange(field.name, value)}
								/>
							))}
						</form>
					</div>
				</aside>

				<section className="min-w-0 flex-1 overflow-auto bg-zinc-100 p-6 print:overflow-visible print:bg-white print:p-0">
					<div
						className="relative mx-auto w-full max-w-[1683px] print:max-w-none"
						style={{
							aspectRatio: `${IMAGE_WIDTH} / ${IMAGE_HEIGHT}`,
							containerType: 'size',
						}}
					>
						<Image
							src="/assets/images/fichas/sadt/guia-sadt-original.jpg"
							alt="Guia SADT Oficial"
							width={IMAGE_WIDTH}
							height={IMAGE_HEIGHT}
							priority
							className="absolute inset-0 block h-full w-full"
						/>

						{fieldsWithValues.map((field) => (
							<SadtField
								key={field.id}
								field={field}
								imageWidth={IMAGE_WIDTH}
								imageHeight={IMAGE_HEIGHT}
								debug={debugEnabled}
							/>
						))}
					</div>
				</section>
			</section>
		</main>
	)
}
