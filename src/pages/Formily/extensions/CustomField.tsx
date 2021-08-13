import { setup } from '@formily/antd-components';
import React from 'react';
import {
  useSchemaProps,
  SchemaField,
  // useFormEffects,
  // createFormActions,
  // FormEffectHooks,
  ISchema
} from '@formily/antd' // 或者 @formily/next

setup();
interface ICustomFieldProps {
  name: string
}

// const { onFieldValueChange$ } = FormEffectHooks
// 自定义hook
// const useLinkageVisible = (source: string, target: string) => {
//   const { setFieldState } = createFormActions()
//   // console.log('useLinkageVisible')
//   onFieldValueChange$(source).subscribe(fieldState => {
//     // console.log("fieldState", fieldState)
//     setFieldState(target, state => {
//       // console.log("set fieldState", fieldState)
//       // state.visible = fieldState.value
//     })
//   })
// }

const CustomFieldComponent = ({name}: ICustomFieldProps) => {
  const schemaProps = useSchemaProps()
  console.log("schemaProps", schemaProps)
  // useFormEffects(({ setFieldState }) => {
  //   setFieldState(`${name}.*(dynamic-1,dynamic-2)`, state => {
  //     state.required = true
  //   })
  //   useLinkageVisible(`dynamic-1`, `${name}.*(dynamic-2,date)`)
  // })

  const schema: ISchema = {
    type: 'object',
    properties: {
      'dynamic-1': {
        type: 'string',
        // 'x-component': 'Select',
        enum: [
          { label: 'visible', value: true },
          { label: 'hidden', value: false }
        ],
        default: false,
        title: '字段1'
      },
      [`${name}.dynamic-2`]: {
        type: 'string',
        // 'x-component': 'input',
        title: '字段2',
      },
      [`${name}.date`]: {
        type: 'daterange',
        title: "时间",
        // 'x-component-props': {
        //     format: 'YYYY-MM-DD HH:mm:ss'
        // }
      }
    }
  }
  return (
        <SchemaField schema={schema as any} />
  )
}

export default CustomFieldComponent;
