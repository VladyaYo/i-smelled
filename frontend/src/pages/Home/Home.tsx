import React from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { useGetContentsQuery } from '../../app/services/api'

const { Header, Content, Footer } = Layout;

const items = new Array(5).fill(null).map((_, index) => ({
  key: index + 1,
  label: `nav ${index + 1}`,
}));

const Home: React.FC = () => {
  // @ts-ignore
    const { data } = useGetContentsQuery();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  console.log(data,"data")
  return (
    <Layout>
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={items}
          style={{ flex: 1, minWidth: 0 }}
        />
      </Header>
      <Content style={{ padding: '0 48px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div
          style={{
            background: colorBgContainer,
            minHeight: 280,
            padding: 24,
            borderRadius: borderRadiusLG,
          }}
        >
            {data?.map((item:any) => {
              return  (
                <p key={item.id}>{item.name}</p>
              );
            })}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default Home;