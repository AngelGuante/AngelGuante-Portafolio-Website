import { Container, Row, Col } from 'react-grid-system'
import ButtonAction from '../Buttons/ButtonAction'

const SAP = () =>
    <>
        <Container>
            <Row>
                <Col lg={7}>
                    <div style={{
                        fontSize: '32px',
                        fontWeight: '700',
                        letterSpacing: '-1px'
                    }}>
                        <div>
                            <h1>Miguel Ángel</h1>
                        </div>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'flex-end'
                        }}>
                            <h1>Guante Suero</h1>
                        </div>
                    </div>
                </Col>

                <Col lg={5}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <ButtonAction />
                </Col>

            </Row>
        </Container>
    </>

export default SAP