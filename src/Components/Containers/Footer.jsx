import { Icon } from '@iconify/react'

const Footer = () =>
    <div style={{
        marginTop: '70px',
        display: 'flex',
        justifyContent: 'center',
        borderTop: '1px solid rgba(0, 255, 149, 0.75)'
    }}>
        <div>
            <div style={{
                color: '#595759'
            }}>
                <span>&lt;</span>
                <span>span</span>
                <span>&gt;</span>
            </div>

            <div style={{
                display: 'flex',
                alignItems: 'center'
            }}>
                <span>EndOfFile</span>
                <Icon style={{
                    fontSize: '20px',
                    marginRight: '16px',
                    marginLeft: '12px'
                }}
                    icon="mdi:code-block-html">
                </Icon>

                <div style={{
                    color: '#595759',
                    direction: 'rtl'
                }}>
                </div>
            </div>
            <div style={{
                color: '#595759',
                direction: 'rtl'
            }}>
                <span>&lt;</span>
                <span>/</span>
                <span>span</span>
                <span>&gt;</span>
            </div>
        </div>
    </div>

export default Footer