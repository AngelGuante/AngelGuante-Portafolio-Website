import { Icon } from '@iconify/react'
require('../../Styles/ComponentsStyles/Buttons/ButtonAction.css')

const ButtonAction = () =>
    <div className="buttonAction"
        style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            fontSize: '26px',
            fontWeight: '900',
            cursor: 'pointer'
        }}>
        <Icon style={{
            fontSize: '30px'
        }}
            icon='ph:read-cv-logo-light' />
        <span>Download</span>
        <span>CV</span>
    </div>

export default ButtonAction