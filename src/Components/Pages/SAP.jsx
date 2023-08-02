import { Container, Row, Col } from 'react-grid-system'
import { Icon } from '@iconify/react'
import ButtonAction from '../Buttons/ButtonAction'
import SpanOpen from '../Elements/Tags/Span/SpanOpen'
import SpanClose from '../Elements/Tags/Span/SpanClose'

const SAP = () =>
    <>
        <Container>
            <Row>
                <Col lg={7}>
                    <div style={{
                        fontSize: '32px',
                        fontWeight: '700',
                        letterSpacing: '-1px'
                    }}>
                        <div>
                            <h1>Miguel Ángel</h1>
                        </div>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'flex-end',
                            marginTop: '40px'
                        }}>
                            <h1>Guante Suero</h1>
                        </div>
                    </div>
                </Col>

                <Col lg={5}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                    <ButtonAction />
                </Col>
            </Row>
        </Container>

        <div style={{
            borderLeft: '1px solid rgba(0, 255, 149, 0.75)'
        }}>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                marginTop: '16px',
            }}>
                <Icon style={{
                    fontSize: '30px',
                    marginRight: '16px',
                    marginLeft: '12px'
                }}
                    icon="cib:about-me">
                </Icon>
                <h1>About</h1>
            </div>
            <Container>
                <Row>
                    <Container style={{ textAlign: 'justify' }}>
                        <SpanOpen />
                        <Container>
                            <span className='text' >
                                I am a skilled full-stack software developer with over three years of industry experience, possessing a deep knowledge of C#, JavaScript, and SQL Server. In my present role as a Web Developer at SIUBEN, my primary responsibilities include the development of high-performance web applications and providing technical assistance to my colleagues whenever required.
                            </span>
                        </Container>
                        <SpanClose />
                    </Container>

                    <Container style={{
                        textAlign: 'justify',
                        marginTop: '40px'
                    }}>
                        <SpanOpen />
                        <Container>
                            <span className='text'>
                                As a dedicated professional, I remain committed to continuously challenging myself, seeking out novel opportunities to apply my problem-solving abilities. I am highly motivated to remain informed of emerging technologies and tools that can augment my capabilities and further enhance my contributions to the organization.
                            </span>
                        </Container>
                        <SpanClose />
                    </Container>
                </Row>
            </Container>
        </div>

    </>

export default SAP