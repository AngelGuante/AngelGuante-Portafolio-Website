import { Container, Row, Col } from 'react-grid-system'
import { Icon } from '@iconify/react'
import ButtonAction from '../Buttons/ButtonAction'
import SpanOpen from '../Elements/Tags/Span/SpanOpen'
import SpanClose from '../Elements/Tags/Span/SpanClose'
import Foorter from '../Containers/Footer'
import ProjectDiv from '../Containers/ProjectDiv'
import SkillIcon from '../SkillIcon'
import { Tooltip } from 'react-tooltip'

const SPA = () => {

    const OpenPage = (url) =>
        window.open(url, '_blank')

    return (
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
                                <h1 id='Home'>Miguel Angel</h1>
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
                        icon="gridicons:stats-down">
                    </Icon>
                    <h1 id='Skills'>Skills</h1>
                </div>
                <Container>
                    <Row>
                        <Container style={{ textAlign: 'justify' }}>
                            <SpanOpen />
                            <Container style={{
                                borderLeft: '1px solid rgba(0, 255, 149, 0.75)'
                            }}>
                                <span className='text' >
                                    I have worked on several technologies, with some on personal projects others on professional projects, these are some of theses technologies:
                                </span>
                            </Container>
                            <SpanClose />
                        </Container>

                        <Container style={{ textAlign: 'justify' }}>
                            <Container>
                                <div style={{
                                    display: 'flex'
                                }}>
                                    <SkillIcon props={{
                                        id: 'csharpIcon',
                                        icon: 'devicon:csharp',
                                        tooltip: 'C#'
                                    }} />

                                    <SkillIcon props={{
                                        id: 'javascriptIcon',
                                        icon: 'skill-icons:javascript',
                                        tooltip: 'JavaScript'
                                    }} />

                                    <SkillIcon props={{
                                        id: 'nodeIcon',
                                        icon: 'logos:nodejs',
                                        tooltip: 'NodeJs'
                                    }} />

                                    <SkillIcon props={{
                                        id: 'vueIcon',
                                        icon: 'logos:vue',
                                        tooltip: 'VueJs'
                                    }} />

                                    <SkillIcon props={{
                                        id: 'reactIcon',
                                        icon: 'skill-icons:react-dark',
                                        tooltip: 'ReactJs'
                                    }} />

                                    <SkillIcon props={{
                                        id: 'mysqlIcon',
                                        icon: 'logos:mysql',
                                        tooltip: 'MySQL'
                                    }} />

                                    <SkillIcon props={{
                                        id: 'postgressIcon',
                                        icon: 'logos:postgresql',
                                        tooltip: 'PostgreSQL'
                                    }} />

                                    <SkillIcon props={{
                                        id: 'webpackIcon',
                                        icon: 'devicon:webpack',
                                        tooltip: 'Webpack'
                                    }} />
                                </div>
                            </Container>
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
                                    💡 I've worked on a variety of projects over the time and I'm proud of the progress I've made. Many of these projects are open-source and available for others to explore and contribute to. More Projects in my GitHub, check it out!
                                </span>
                            </Container>
                            <SpanClose />
                        </Container>

                        <Container>
                            <Row>
                                <Col>
                                    <div style={{
                                        display: 'flex'
                                    }}>
                                        <Container>
                                            <Row>
                                                <Col md={4}>
                                                    <ProjectDiv props={{
                                                        nameProject: 'Google Finance Scrapping',
                                                        type: 'NodeJS',
                                                        icon: 'akar-icons:node-fill',
                                                        text: "API created with Node and Express. It makes scraping of a web page using the Puppeter Node.js library to Google Finance currency and gets a currency conversion of selected currencies.",
                                                        id: 'nodeProject',
                                                        tooltip: 'Live Preview',
                                                        cursor: true,
                                                        page: () => OpenPage('https://github.com/AngelGuante/Google_Finance_Scrapping-API')
                                                    }} />
                                                </Col>
                                                <Col md={4}>
                                                    <ProjectDiv props={{
                                                        nameProject: 'Git Console Copy',
                                                        type: 'JavaScript',
                                                        icon: 'fa6-brands:js',
                                                        text: "Git console copy made with pure Javascript and CSS, it was my portfolio website.",
                                                        id: 'jsProject',
                                                        tooltip: 'Live Preview',
                                                        cursor: true,
                                                        page: () => OpenPage('https://github.com/AngelGuante/AngelGuante-Console-Presentation')
                                                    }} />
                                                </Col>
                                                <Col md={4}>
                                                    <ProjectDiv
                                                        props={{
                                                            nameProject: 'Maria',
                                                            type: 'Java',
                                                            icon: 'fa6-brands:java',
                                                            text: "Store application to make buy, sells, administrate employees, items and inventory.",
                                                            id: 'MariaProject',
                                                            tooltip: 'Live Preview Not Available',
                                                            page: () => OpenPage('https://github.com/AngelGuante/Maria')
                                                        }} />
                                                </Col>
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
                                        <Icon id='sendmeEmail'
                                            style={{
                                                fontSize: '70px',
                                                marginRight: '16px',
                                                marginLeft: '12px'
                                            }}
                                            icon="mingcute:mail-fill">
                                        </Icon>
                                        <Tooltip anchorSelect='#sendmeEmail' place="top">
                                            <span>Send me an email</span>
                                        </Tooltip>
                                    </div>
                                </Col>

                                <Col>
                                    <div className='buttonActionBG'
                                        onClick={() => OpenPage('https://www.linkedin.com/in/miguel-angel-guante-suero/')}
                                        style={{
                                            width: '100px',
                                            height: '100px',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            flexDirection: 'column',
                                            cursor: 'pointer'
                                        }}>
                                        <Icon id='gotoLinkedIn'
                                            style={{
                                                fontSize: '54px',
                                                marginRight: '16px',
                                                marginLeft: '12px'
                                            }}
                                            icon="uiw:linkedin">
                                        </Icon>
                                        <Tooltip anchorSelect='#gotoLinkedIn' place="top">
                                            <span>Go to my LinkedIn</span>
                                        </Tooltip>
                                    </div>
                                </Col>

                                <Col>
                                    <div className='buttonActionBG'
                                        onClick={() => OpenPage('https://github.com/AngelGuante')}
                                        style={{
                                            width: '100px',
                                            height: '100px',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            flexDirection: 'column',
                                            cursor: 'pointer'
                                        }}>
                                        <Icon id='gotoGithub'
                                            style={{
                                                fontSize: '70px',
                                                marginRight: '16px',
                                                marginLeft: '12px'
                                            }}
                                            icon="pajamas:github">
                                        </Icon>
                                        <Tooltip anchorSelect='#gotoGithub' place="top">
                                            <span>Go to my GitHub</span>
                                        </Tooltip>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </Row>
                </Container>
            </div>

            <Foorter />
        </>
    )
}

export default SPA