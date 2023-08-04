import { Icon } from '@iconify/react'
import { Container, Row } from 'react-grid-system'
import SpanOpen from '../Elements/Tags/Span/SpanOpen'
import SpanClose from '../Elements/Tags/Span/SpanClose'
require('../../Styles/ComponentsStyles/Pages/SPA.css')

const ProjectDiv = (props) => {
    props = props['props']

    return (
        <div className='projectsDiv'
            style={{
                height: '350px',
                width: '100%',
                backgroundColor: '#414044',
                borderRadius: '14px 14px 0px 14px',
                margin: '10px'
            }}>

            < Container >
                <Row>
                    <div style={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center'
                    }}>
                        <span style={{
                            fontSize: '16px',
                            textAlign: 'center',
                            marginTop: '16px'
                        }}>{props['nameProject']}</span>
                    </div>
                </Row>
                <Row>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        width: '100%',
                        margin: '4px 6px'
                    }}>
                        <span>{props['type']}</span>
                        <div>
                            <Icon style={{
                                fontSize: '40px'
                            }}
                                icon={props['icon']}>
                            </Icon>
                        </div>
                    </div>
                </Row>
                <Row>
                    <span style={{
                        fontSize: '16px',
                        lineHeight: '20px',
                        textAlign: 'justify',
                        margin: '8px 8px'
                    }}>
                        <SpanOpen />
                        {props['text']}
                        <SpanClose />
                    </span>
                </Row>
                <Row>

                </Row>
            </Container >

            <div style={{
                position: 'absolute',
                width: '100%',
                bottom: '1rem'
            }}>
                <div style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center'
                }}>
                    <Icon style={{
                        fontSize: '26px',
                        marginRight: '3px'
                    }}
                        icon="carbon:executable-program">
                    </Icon>
                    <Icon style={{
                        fontSize: '26px',
                        marginLeft: '3px'
                    }}
                        icon="raphael:githubalt">
                    </Icon>
                </div>
            </div>
        </div>
    )
}

export default ProjectDiv