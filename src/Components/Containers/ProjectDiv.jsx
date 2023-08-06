import { Icon } from '@iconify/react'
import { Container, Row } from 'react-grid-system'
import SpanOpen from '../Elements/Tags/Span/SpanOpen'
import SpanClose from '../Elements/Tags/Span/SpanClose'
import { Tooltip } from 'react-tooltip'
require('../../Styles/ComponentsStyles/Pages/SPA.css')

const ProjectDiv = (props) => {
    props = props['props']

    return (
        <div onClick={() => props['page']()} 
        className='projectsDiv'
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
                    <Icon id={props['id']}
                        style={{
                            fontSize: '26px',
                            marginRight: '3px',
                            cursor: props['cursor'] ? 'pointer' : 'not-allowed'
                        }}
                        icon="carbon:executable-program">
                    </Icon>
                    <Tooltip anchorSelect={'#' + props['id']} place="top">
                        {props['tooltip']}
                    </Tooltip>

                    <Icon id={'_' + props['id']}
                        style={{
                            fontSize: '26px',
                            marginLeft: '3px',
                            cursor: 'pointer'
                        }}
                        icon="raphael:githubalt">
                    </Icon>
                    <Tooltip anchorSelect={'#_' + props['id']} place="top">
                        <span>Go to GitHub Project</span>
                    </Tooltip>
                </div>
            </div>
        </div>
    )
}

export default ProjectDiv