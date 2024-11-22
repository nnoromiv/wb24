import { IconifyIcon } from "@iconify/react/dist/iconify.js"
import { ChangeEventHandler, FocusEventHandler, HTMLInputTypeAttribute } from "react"

export interface FormInputProps {
    endContentIcon?: string | IconifyIcon
    type?: HTMLInputTypeAttribute
    label?: string
    name?: string
    onChange?: ((value: string) => void) | undefined
    onBlur?: FocusEventHandler
    maxLength?: number
    value?: string
    isDisabled?: boolean
    isInvalid?: boolean
    errorMessage?: string
    defaultValue?: string
}

export interface EmptyTableProps{
    emptyText: string
}