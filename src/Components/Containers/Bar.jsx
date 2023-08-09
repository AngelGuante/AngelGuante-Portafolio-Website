require('../../Styles/ComponentsStyles/Bar.css')
import ButtonBar from '../Buttons/ButtonBar'
import { Icon } from '@iconify/react'
import { Tooltip } from 'react-tooltip'

const Bar = () =>
    <div className='bar'
        style={{
            width: '490px',
            position: 'fixed',
            top: '3rem',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: '100',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        }}>
        <ButtonBar props={{
            label: 'Home',
            icon: 'solar:home-broken',
            ml: true,
            href: '#Home'
        }} />
        <ButtonBar props={{
            label: 'About',
            icon: 'cib:about-me',
            ml: false,
            href: '#About'
        }} />
        <ButtonBar props={{
            label: 'Skills',
            icon: 'gridicons:stats-down',
            ml: false,
            href: '#Skills'
        }} />
        <ButtonBar props={{
            label: 'Projects',
            icon: 'octicon:project-roadmap-24',
            ml: false,
            href: '#Projects'
        }} />
        <ButtonBar props={{
            label: 'Contact',
            icon: 'mdi:contact-mail-outline',
            mr: true,
            href: '#Contact'
        }} />
        <Icon id='gotoGithubProjecty'
            style={{
                fontSize: '20px',
                marginRight: '10px',
            }}
            icon="pajamas:github"
            onClick={() => window.open('https://github.com/AngelGuante/AngelGuante-Portfolio-Website', '_blank')}>
        </Icon>
        <Tooltip anchorSelect='#gotoGithubProjecty' place="top">
            <span>Go to this website GitHub repository</span>
        </Tooltip>
    </div>

export default Bar