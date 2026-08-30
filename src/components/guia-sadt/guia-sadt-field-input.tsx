'use client'

import type { ChangeEvent } from 'react'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

import type { GuiaSadtFieldDefinition } from './fields'

interface GuiaSadtFieldInputProps {
	field: GuiaSadtFieldDefinition
	value: string
	error?: string
	onChange: (value: string) => void
}

export function GuiaSadtFieldInput({
	field,
	value,
	error,
	onChange,
}: GuiaSadtFieldInputProps) {
	const isFilled = value.trim() !== ''
	const hasError = isFilled && Boolean(error)
	const isValid = isFilled && !error

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const nextValue = event.target.value
			.replace(/\D/g, '')
			.slice(0, field.maxLength)
		onChange(nextValue)
	}

	return (
		<div className="space-y-1">
			<Label htmlFor={field.name}>{field.label}</Label>

			<Input
				id={field.name}
				name={field.name}
				inputMode="numeric"
				maxLength={field.maxLength}
				placeholder={field.placeholder}
				value={value}
				aria-describedby={hasError ? `${field.name}-error` : undefined}
				aria-invalid={hasError}
				onChange={handleChange}
				className={
					hasError
						? 'border-red-500 focus-visible:border-red-500 focus-visible:ring-red-500'
						: isValid
							? 'border-green-500 focus-visible:border-green-500 focus-visible:ring-green-500'
							: ''
				}
			/>

			{hasError && (
				<p
					id={`${field.name}-error`}
					className="text-xs font-medium text-red-500"
				>
					{error}
				</p>
			)}
		</div>
	)
}
