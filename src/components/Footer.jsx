import { Container, Row, Col } from 'react-bootstrap';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#000', color: '#fff', padding: '10px 0', textAlign: 'center', borderTop: '5px solid #882d2dff' }}>
      <Container>
        <Row>
          <Col>
            <p>© 2025 Twisted Beauty. proyecto desarrollado con fines educativos.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
