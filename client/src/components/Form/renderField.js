import React from 'react'
import Input from '../Input'
import Textarea from '../Textarea'
import Select from '../Select'
import Option from '../Option'
import FormItem from './FormItem'
import Small from '../Small'

const renderField = (field) => {
    switch(field.type){
        case 'select':
            return (
                <FormItem>
                    <Select 
                        {...field.input}
                        type={field.type}
                    >
                        <Option>{field.placeholder}</Option>
                        {field.options.map(option => (
                            <Option value={option.value}>{option.text}</Option>
                        )) }
                    </Select>
                    { field.meta.touched && field.meta.error && <Small error>{field.meta.error}</Small>}
                </FormItem>
            )
        case 'textarea':
            return (
                <FormItem>
                    <Textarea 
                        {...field.input}
                        type={field.type}
                        placeholder={field.placeholder}
                    >{field.value}</Textarea>
                    { field.meta.touched && field.meta.error && <Small error>{field.meta.error}</Small>}
                </FormItem>
            )
        default:
            return (
                <FormItem>
                    <Input 
                        {...field.input}
                        type={field.type}
                        placeholder={field.placeholder}
                    />
                    { field.meta.touched && field.meta.error && <Small error>{field.meta.error}</Small>}
                </FormItem>
            )
    }
}
    


export default renderField