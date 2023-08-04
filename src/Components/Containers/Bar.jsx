import ButtonBar from '../Buttons/ButtonBar'
require('../../Styles/ComponentsStyles/Bar.css')

const Bar = () =>
    <div className='bar'
        style={{
            width: '480px',
            position: 'fixed',
            top: '3rem',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: '100',
            display: 'flex',
            justifyContent: 'space-between'
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
    </div>

export default Bar