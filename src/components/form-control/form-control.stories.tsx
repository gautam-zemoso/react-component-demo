import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta } from '@storybook/react/types-6-0';

import FormControl from '.';
import TextInput from '../text-input';
import { validate as validateEmail } from 'email-validator';

export default {
  title: 'Components/FormControl',
  component: FormControl,
} as Meta;

export const FormInput = () => {
    const [value, setValue] = React.useState('');
    const [isValid, setIsValid] = React.useState(false);
    const [isVisited, setIsVisited] = React.useState(false);
    const shouldShowError = !isValid && isVisited;
    const onChange = (event: React.FormEvent<HTMLInputElement>) => {
        const {value} = event.currentTarget;
        setIsValid(validateEmail(value));
        setValue(value);
    };

    return (
        <FormControl
            label='Email'
            htmlFor='email'
            error={
                shouldShowError
                ? 'Please type a valid email address'
                : undefined
            }
            hint="You won't be able to change it later"
            onBlur={() => setIsVisited(true) }
        >
            <TextInput
                id='email'
                width='250px'
                value={value}
                placeholder='Enter your email'
                onChange={onChange}
                error={shouldShowError}
            />
        </FormControl>
    )
}

export const DisabledFormInput = () => {
    
    return (
        <FormControl
            label='Username'
            htmlFor='username'
            hint="You can't change this field"
            disabled
        >
            <TextInput
                id='username'
                width='250px'
                value='john_doe'
                disabled
            />
        </FormControl>
    )
}
