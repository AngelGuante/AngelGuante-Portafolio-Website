import { Container, Row, Col } from 'react-grid-system'
import { Icon } from '@iconify/react'
import ButtonAction from '../Buttons/ButtonAction'
import SpanOpen from '../Elements/Tags/Span/SpanOpen'
import SpanClose from '../Elements/Tags/Span/SpanClose'
import Foorter from '../Containers/Footer'
require('../../Styles/ComponentsStyles/Pages/SPA.css')

const SPA = () =>
    <>
        <Container style={{
            paddingBottom: '60px',
            borderBottom: '1px solid rgba(0, 255, 149, 0.75)'
        }}>
            <Row>
                <Col lg={7}>
                    <div style={{
                        fontSize: '32px',
                        fontWeight: '700',
                        letterSpacing: '-1px'
                    }}>
                        <div>
                            <h1 id='Home'>Miguel Ángel</h1>
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

        {/* ***** */}
        {/* ABOUT */}
        {/* ***** */}
        <div style={{
            marginTop: '100px',
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
                <h1 id='About'>About</h1>
            </div>
            <Container>
                <Row>
                    <Container style={{ textAlign: 'justify' }}>
                        <SpanOpen />
                        <Container style={{
                            borderLeft: '1px solid rgba(0, 255, 149, 0.75)'
                        }}>
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
                        <Container style={{
                            borderLeft: '1px solid rgba(0, 255, 149, 0.75)'
                        }}>
                            <span className='text'>
                                As a dedicated professional, I remain committed to continuously challenging myself, seeking out novel opportunities to apply my problem-solving abilities. I am highly motivated to remain informed of emerging technologies and tools that can augment my capabilities and further enhance my contributions to the organization.
                            </span>
                        </Container>
                        <SpanClose />
                    </Container>
                </Row>
            </Container>
        </div>

        {/* ******** */}
        {/* Projects */}
        {/* ******** */}
        <div style={{
            marginTop: '100px',
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
                    icon="octicon:project-roadmap-24">
                </Icon>
                <h1 id='Projects'>Projects</h1>
            </div>
            <Container>
                <Row>
                    <Container style={{ textAlign: 'justify' }}>
                        <SpanOpen />
                        <Container style={{
                            borderLeft: '1px solid rgba(0, 255, 149, 0.75)'
                        }}>
                            <span className='text' >
                                💡 I've worked on a variety of projects over the time and I'm proud of the progress I've made. Many of these projects are open-source and available for others to explore and contribute to.
                            </span>
                        </Container>
                        <SpanClose />
                    </Container>

                    <Container>
                        <Row>
                            <Col>
                                <div className='projectsDiv'
                                    style={{
                                        height: '280px',
                                        width: '200px',
                                        backgroundColor: '#414044',
                                        borderRadius: '14px 14px 0px 14px'
                                    }}>
                                    <Container>
                                        <Row>
                                            <div style={{
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                alignItems: 'center',
                                                width: '100%',
                                                margin: '8px 10px'
                                            }}>
                                                <span>API</span>
                                                <div>
                                                    <Icon style={{
                                                        fontSize: '40px'
                                                    }}
                                                        icon="akar-icons:node-fill">
                                                    </Icon>
                                                </div>
                                            </div>
                                        </Row>
                                        <Row>
                                            <span style={{
                                                fontSize: '16px',
                                                lineHeight: '16px',
                                                textAlign: 'justify',
                                                margin: '8px 8px'
                                            }}>
                                                <SpanOpen />
                                                API created with Node and Express. It makes scraping of a web page using the <a href='https://pptr.dev/'>Puppeter</a> Node.js library to Google Finance currency and gets a currency conversion of selected currencies.
                                                <SpanClose />
                                            </span>
                                        </Row>
                                        <Row>
                                            <div style={{
                                                width: '100%',
                                                display: 'flex',
                                                alignItems: 'center'
                                            }}>
                                                <Icon style={{
                                                    fontSize: '20px'
                                                }}
                                                    icon="carbon:executable-program">
                                                </Icon>
                                            </div>
                                        </Row>
                                    </Container>
                                </div>

                            </Col>
                        </Row>
                    </Container>
                </Row>
            </Container>
        </div>

        {/* ***** */}
        {/* CONTACT */}
        {/* ***** */}
        <div style={{
            marginTop: '100px',
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
                    icon="mdi:contact-mail-outline">
                </Icon>
                <h1 id="Contact">Contact</h1>
            </div>
            <Container>
                <Row>
                    <Container style={{ textAlign: 'justify' }}>
                        <SpanOpen />
                        <Container style={{
                            borderLeft: '1px solid rgba(0, 255, 149, 0.75)'
                        }}>
                            <span className='text' >
                                👋 Thank you for your interest in getting in touch with me. I welcome your feedback, questions, and suggestions. If you have a specific question or comment, please feel free to email me directly.
                            </span>
                        </Container>
                        <SpanClose />
                    </Container>

                    <Container>
                        <Row>
                            <Col>
                                <div className='buttonActionBG'
                                    style={{
                                        width: '100px',
                                        height: '100px',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        flexDirection: 'column',
                                        cursor: 'pointer'
                                    }}>
                                    <Icon style={{
                                        fontSize: '70px',
                                        marginRight: '16px',
                                        marginLeft: '12px'
                                    }}
                                        icon="mingcute:mail-fill">
                                    </Icon>
                                </div>
                            </Col>

                            <Col>
                                <div className='buttonActionBG'
                                    style={{
                                        width: '100px',
                                        height: '100px',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        flexDirection: 'column',
                                        cursor: 'pointer'
                                    }}>
                                    <Icon style={{
                                        fontSize: '54px',
                                        marginRight: '16px',
                                        marginLeft: '12px'
                                    }}
                                        icon="uiw:linkedin">
                                    </Icon>
                                </div>
                            </Col>

                            <Col>
                                <div className='buttonActionBG'
                                    style={{
                                        width: '100px',
                                        height: '100px',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        flexDirection: 'column',
                                        cursor: 'pointer'
                                    }}>
                                    <Icon style={{
                                        fontSize: '70px',
                                        marginRight: '16px',
                                        marginLeft: '12px'
                                    }}
                                        icon="pajamas:github">
                                    </Icon>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Row>
            </Container>
        </div>

        <Foorter />
    </>

export default SPA