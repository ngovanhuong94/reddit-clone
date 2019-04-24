import React from 'react'
import Input from '../Input'
import FormItem from './FormItem'
import Small from '../Small'

const renderField = (field) => (
    <FormItem>
        <Input 
            {...field.input}
            type={field.type}
            placeholder={field.placeholder}
        />
        { field.meta.touched && field.meta.error && <Small error>{field.meta.error}</Small>}
    </FormItem>
)

export default renderField