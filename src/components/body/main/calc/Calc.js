import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';


function Calc() {
  return (
    <Form>
                  <Row className="mb-3">

      <Form.Group className="mb-6" controlId="amount">
        <Form.Label>Amount : </Form.Label>
        <Form.Control type="number" name="amt" id="amt" step="0.01" min="0" />
        <Form.Text className="text-muted">
          Enter the amount to calculat VAT Tax.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-6" controlId="vatper">
        <Form.Label>VAT Percentage</Form.Label>
        <Form.Control type="number" name="vat" id="vat" min="0" step="0.01"  value= "5" />
        <Form.Text className="text-muted">
          Enter the VAT Percentage.
        </Form.Text>
      </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="include">
        <Form.Check type="radio" label="Include VAT" checked />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exclude">
        <Form.Check type="radio" label="Exclude VAT" />
      </Form.Group>
      <Button variant="primary" type="submit" class="calculatebutton" >
      Calculate
      </Button>
    </Form>
  );
}

export default Calc;