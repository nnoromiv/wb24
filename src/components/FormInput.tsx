import React, { FC, useState } from 'react';
import { Icon } from '@iconify/react';
import { Input } from '@nextui-org/input';
import { FormInputProps } from '@/types';

const FormInput: FC<FormInputProps> = ({ endContentIcon, type, label, name, onChange, defaultValue, onBlur, maxLength, value, isDisabled, isInvalid, errorMessage }) => {
    
    return (
        <Input
            className={`w-full my-2 ${isInvalid && isInvalid && 'animate-shake'}`}
            type={'text'}
            label={label}
            name={name}
            value={value}
            onValueChange={onChange}
            maxLength={maxLength}
            defaultValue={defaultValue}
            onBlur={onBlur}
            isDisabled={isDisabled}
            isInvalid={isInvalid ? isInvalid : false}
            errorMessage={errorMessage}
            endContent={
                <Icon
                    icon={endContentIcon!}
                    className={`w-4 h-4 opacity-7 cursor-pointer`}
                />
            }
        />
    );
}

export default FormInput;
