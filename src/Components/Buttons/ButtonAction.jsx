import { Icon } from '@iconify/react'
require('../../Styles/ComponentsStyles/Buttons/ButtonAction.css')

const ButtonAction = () =>
    <div className='buttonActionBG'
        style={{
            width: '150px',
            height: '150px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            cursor: 'pointer'
        }}>
        <div className="buttonAction"
        on onClick={() => window.open('https://drive.google.com/uc?export=download&id=18c5hlgw7PBhuwTzZzP0XUbH3uNgVWZB9')}
            style={{
                width: '150px',
                height: '150px',
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
    </div>

export default ButtonAction