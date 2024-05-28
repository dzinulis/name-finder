import { QueryClient } from '@tanstack/react-query';
import { Link, Outlet, createRootRouteWithContext } from '@tanstack/react-router';
import { ConfigProvider, Layout, Menu } from 'antd';

const { Header, Content, Footer } = Layout;

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
    component: () => (
        <Layout>
            <ConfigProvider
                theme={{
                    token: {
                        // Seed Token
                        colorPrimary: '#0088b9',
                        borderRadius: 2,

                        // Alias Token
                        colorBgContainer: '#edf6ff',
                    },
                }}
            >
                <Header style={{display: 'flex', alignItems: 'center'}}>
                    {/* <div className='logo' /> */}
                    <Menu
                        mode='horizontal'
                        theme='dark'
                        defaultSelectedKeys={['1']}
                        style={{
                            position: 'relative',
                            display: 'flex',
                            justifyContent: 'center',
                            flex: 1
                        }}
                    >
                        <Menu.Item key='1'><Link to='/'>Atrodi vārdu</Link></Menu.Item>
                        <Menu.Item key='2'><Link to='/nameToday'>Šodienas vārdadiena</Link></Menu.Item>
                        <Menu.Item key='3'><Link to='/about'>Par lapu</Link></Menu.Item>
                    </Menu>
                </Header>
                <Content style={{
                    padding: '0 50px',
                    maxWidth: 600,
                    alignSelf: 'center'
                }}>
                    <div className='site-layout-content' style={{ margin: '16px 0' }} />
                    <Outlet />
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    (note to self) TODO: fix footer to the bottom of the page
                </Footer>
            </ConfigProvider >
        </Layout>
    ),
});