import { PageContainer } from '@ant-design/pro-layout';
import React from 'react';
import { setup } from '@formily/antd-components';
import { SchemaForm, FormButtonGroup, Submit, Reset } from '@formily/antd'; // 或者 @formily/next
import CustomField from './extensions/CustomField';
import styles from './index.less';

setup();

export default () => {
  // const [loading, setLoading] = useState<boolean>(true);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 3000);
  // }, []);

  // CustomFieldComponent.isFieldComponent = true
  return (
    <PageContainer content="这是一个新页面，从这里进行开发！" className={styles.main}>
      <SchemaForm
        components={{ CustomField }}
        // formComponent={formComponent}
        // formItemComponent = {formItemComponent}
        schema={{
          type: 'object',
          properties: {
            name: {
              type: 'string',
              title: '主表单控件',
            },
            title: {
              type: 'string',
              title: '自定义控件',
              'x-props': {
                name: 'title',
              },
              'x-component': 'CustomField',
            },
          },
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <FormButtonGroup>
          <Submit>查询</Submit>
          <Reset>重置</Reset>
        </FormButtonGroup>
      </SchemaForm>
    </PageContainer>
  );
};
