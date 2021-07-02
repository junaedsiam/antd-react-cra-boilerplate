import React from 'react'
import { Layout, Menu, Breadcrumb, Typography, Dropdown } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
const { Header, Content, Sider } = Layout
const { Title } = Typography

const headerStyle = {
    color: 'white',
    margin: 0,
    height: '100%',
    display: 'flex',
    alignItems: 'center'
}

const menu = () => {
    const handleLogout = () => console.log('Loggedout')
    return (
        <Menu>
            <Menu.Item key="1" icon={<UserOutlined />} onClick={handleLogout}>
                Logout
            </Menu.Item>
        </Menu>
    )
}

const AppLayout = ({ children }) => {
    return (
        <Layout>
            <Header className="header" style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Title level={3} style={headerStyle}>
                    App Name
                </Title>

                <Menu theme="dark" mode="horizontal">
                    <Menu.Item key="1">
                        <Dropdown.Button
                            overlay={menu}
                            placement="bottomCenter"
                            icon={<UserOutlined />}>
                            Admin Name
                        </Dropdown.Button>
                    </Menu.Item>
                </Menu>
            </Header>
            <Layout>
                <Sider width={200} className="site-layout-background">
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        style={{ height: '100%', borderRight: 0 }}>
                        <Menu.Item key="1">
                            <Link to="/">Home</Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Link to="/about">About</Link>{' '}
                        </Menu.Item>
                        <Menu.Item key="3">Contact</Menu.Item>
                    </Menu>
                </Sider>
                <Layout style={{ padding: '0 24px 24px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <Content
                        className="site-layout-background"
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280
                        }}>
                        {children}
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    )
}

export default AppLayout
