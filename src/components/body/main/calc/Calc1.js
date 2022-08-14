import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
// import Alert from 'react-bootstrap/Alert';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Calc1.css'

function xParseFloat(x)
        {var amount=x.replace(',','.');
             amount=amount.replace(/[^0-9.]/,'');
             if(amount==='')
               {return false;}
             else
               {return parseFloat(amount);}
        };
function getAmount()
        {var amount=document.getElementById('amount').value;
             return xParseFloat(amount);};

function getVat()
        {var amount=document.getElementById('vatper').value;
             return xParseFloat(amount);};

function getOperation()
        {return document.getElementById('inc').checked?'Include':'Exclude';};

function calculatorSubmit()
        {var amount=getAmount();
          if(amount===false||isNaN(amount)||!isFinite(amount)){return false;}

        var vat=getVat();
          if(vat===false||isNaN(vat)||!isFinite(vat)){return false;}

        var operation=getOperation();
        
        var result;
          if(operation==='Include'){result=amount-amount/(1+vat/100);}
          else 
          if(operation==='Exclude'){result=amount*(1+vat/100);}
             addResults(amount,vat,operation,result);};

function toCurrencyString(x)
         {return(Math.round(x*100)/100).toFixed(2)}
         
function resultBlock(caption,value)
         {return '<div className="result-block">'+ caption+'<br/>'+value+ '</div>'}

function addResults(amount,vat,operation,result)
      {amount=toCurrencyString(amount);vat=toCurrencyString(vat);result=toCurrencyString(result);
        var 
        
        html='<div className="result alert-primary" >'+
        resultBlock('Amount:',amount)+ resultBlock('VAT %:',vat) + 
        resultBlock('Operation:',operation)+
        (operation==='Exclude'?resultBlock('VAT Excluded:',toCurrencyString(parseFloat(result)-parseFloat(amount)))+resultBlock('Gross amount:',result):resultBlock('VAT Included:',result) + 
        resultBlock('Net amount:',toCurrencyString(parseFloat(amount)-parseFloat(result)))) +
        '</div>';
        
        var innerHTML=document.getElementById('results').innerHTML;
        innerHTML=html+innerHTML;
        document.getElementById('results').innerHTML=innerHTML;
        return true;}


function Calc1() {
  const handleSubmit = (event) => {
    event.preventDefault();
    calculatorSubmit()

  }
  return (
    <>
    <Form onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="8" controlId="validationCustom01">
          <Form.Label>Amount :</Form.Label>
          <Form.Control
            required
            type="number"
            name = "amount"
            id ="amount"
            step = "0.01"
            min = "0"
            defaultValue="100"
          />
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>VAT Percentage</Form.Label>
          <Form.Control
            required
            type="number"
            name = "vatper"
            id ="vatper"
            step = "0.01"
            min = "0"
            defaultValue="5"
          />
          
        </Form.Group>
        
      </Row>
      <Row className="mb-3" mt="3">
        <Form.Group as={Col} md="3" >
        <Form.Check type="radio" name = "action" checked value="i" id="inc" label = "Include VAT"/>
        </Form.Group>
        <Form.Group as={Col} md="3" >
        <Form.Check type="radio" name = "action" value="e" id="exc" label = "Exclude VAT"/>
        </Form.Group>
        <Form.Group as={Col} md="3" mt="3" >
        <Button type="submit" class="calculatebutton" value="Calculate">Submit form</Button>
        </Form.Group>
      </Row >

    </Form>
    <div className='container'>
      <Row className="mb-2">
     
      <section id="results"> </section>
    
      </Row></div>
    
    </>
  );
}

export default Calc1;