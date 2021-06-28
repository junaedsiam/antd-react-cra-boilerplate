import React from 'react'
import PageHeader from 'component/common/pageHeader'
import { Row, Col } from 'antd'
import { Button } from 'antd'
import Container from 'component/layout/container'
import useHttp from 'hook/useHttp'

const Home = () => {
    const { http } = useHttp()
    const [users, setUsers] = React.useState()
    const [error, setError] = React.useState()

    React.useEffect(() => {
        const getUsers = () => {
            http.get('/users')
                .then((res) => {
                    setUsers(res.data)
                })
                .catch((err) => {
                    setError(err?.response?.status)
                })
        }
        getUsers()
    }, [])
    return (
        <Container style={{ padding: '32px 0' }}>
            <PageHeader>Home Page</PageHeader>
            <Row gutter={24}>
                <Col span={18}>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora ab facere
                        accusamus debitis praesentium vero dolorum. Adipisci accusamus voluptatibus
                        delectus? Officiis dicta veniam quae voluptas voluptates pariatur ea
                        voluptatum perferendis!
                    </p>
                    <Button type="primary">Click Me</Button>
                </Col>
                <Col span={6}>
                    <h3>Data from API</h3>
                    {users && users.length && <pre>{JSON.stringify(users[0], null, 2)}</pre>}
                    {error && <p>{error}</p>}
                </Col>
            </Row>
        </Container>
    )
}

export default Home
