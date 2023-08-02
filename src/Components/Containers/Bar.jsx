import ButtonBar from '../Buttons/ButtonBar'
require('../../Styles/ComponentsStyles/Bar.css')

const Bar = () =>
    <div className='bar'
        style={{ display: 'flex', justifyContent: 'space-between' }}>
        <ButtonBar props={{
            label: 'Home',
            icon: 'solar:home-broken',
            ml: true
        }} />
        <ButtonBar props={{
            label: 'About',
            icon: 'cib:about-me',
            ml: false
        }} />
        <ButtonBar props={{
            label: 'Projects',
            icon: 'octicon:project-roadmap-24',
            ml: false
        }} />
        <ButtonBar props={{
            label: 'Contact',
            icon: 'mdi:contact-mail-outline',
            mr: true
        }} />
    </div>

export default Bar