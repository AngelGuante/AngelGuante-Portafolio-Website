import { Tooltip } from 'react-tooltip'
import { Icon } from '@iconify/react'

const SkillIcon = (props) => {
    props = props['props']

    return (
        <>
            <Icon id={props['id']}
                style={{
                    fontSize: '60px',
                    marginRight: '16px',
                    marginLeft: '12px'
                }}
                icon={props['icon']}>
            </Icon>
            <Tooltip anchorSelect={'#' + props['id']} place="top">
                {props['tooltip']}
            </Tooltip>
        </>
    )
}
export default SkillIcon