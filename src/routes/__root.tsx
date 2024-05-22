import { QueryClient } from '@tanstack/react-query';
import { Link, Outlet, createRootRouteWithContext } from '@tanstack/react-router';
import { Layout, Menu } from 'antd';

const { Header, Content, Footer } = Layout;

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
    component: () => (
        <Layout className='layout'>
            <Header>
                <div className='logo' />
                <Menu
                    theme='dark'
                    mode='horizontal'
                    style={{
                        position: 'relative',
                        display: 'flex',
                        justifyContent: 'center'
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
        </Layout>
    ),
});