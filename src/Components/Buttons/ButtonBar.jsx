import { Icon } from '@iconify/react'

const ButtonBar = (props) => {
    props = props['props']

    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            margin: '6px 0px',
            marginLeft: `${props['ml'] ? '16px' : '0'}`,
            marginRight: `${props['mr'] ? '16px' : '0'}`,
            cursor: 'pointer'
        }}>
            <Icon style={{
                fontSize: '18px',
                marginRight: '4px'
            }}
                icon={props['icon']} />
            <span style={{
                fontSize: '18px',
                fontWeight: '800'
            }}
            >{props['label']}</span>
        </div>
    )
}

export default ButtonBar