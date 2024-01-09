import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useSelector,useDispatch } from 'react-redux';
import {remove} from '../store/cartSlice';
const Cart = () => {
const productCart = useSelector(state => state.cart);
const dispatch = useDispatch();
 

  const removetocart = (id) => {
    alert("removed successfully")
    console.log("hello", id);
    dispatch(remove(id));
    
  }
   
   const Cards = productCart.map(product => (
    <div className="col-md-3" key={product.id} style={{ marginBottom: '20px' }}>
      <Card className='h-100' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div className='text-center mt-3'>
          <Card.Img variant="top" src={product.image} alt={product.title} style={{ width: '100px', height: '130px', margin: 'auto' }} />
        </div>
        <Card.Body className='text-center'>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>
            INR: {product.price}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <div className='text-center mb-3'>
            <Button variant="primary" onClick={() => removetocart(product.id)}>Remove Item</Button>
          </div>
        </Card.Footer>
      </Card>
    </div>
  ));

  return (
    <div className="row">
      {Cards}
    </div>
  );
}

export default Cart;
