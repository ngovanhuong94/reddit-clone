import React from 'react'
import Input from '../Input'
import FormItem from './FormItem'

const renderField = (field) => (
    <FormItem>
        <Input 
            {...field.input}
            type={field.type}
            placeholder={field.placeholder}
        />
        { field.touched && field.error && <span>{field.error}</span>}
    </FormItem>
)

export default renderField