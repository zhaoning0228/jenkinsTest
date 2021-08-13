import { PageContainer } from '@ant-design/pro-layout';
import React from 'react';
// import { Spin } from 'antd';
import styles from './index.less';
import { useLego } from '@lnpm/lamp-utils'
import { history } from 'umi';
export default () => {
  // const [loading, setLoading] = useState<boolean>(true);
  useLego({
    history,
    // 容器的id, 尽量唯一
    id: 'legaoApp',
    // 需要局部渲染的页面uuid
    schema: 'S6a6Qqnjt'
  });
  return (
    <PageContainer content="这是一个可视化页面！" className={styles.main}>
      <div id="legaoApp">legaoApp</div>
    </PageContainer>
  );
};
