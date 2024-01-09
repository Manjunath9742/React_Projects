import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../store/cartSlice';
import { getProducts } from '../store/product_Slice';

const Products = () => {
  const dispatch = useDispatch();
  const { data: products } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const addtocart = (product) => {
    dispatch(add(product));
  };

  // Check for existence of products before mapping
  const Cards = products && products.map((product) => (
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
            <Button variant="primary" onClick={() => addtocart(product)}>Add to cart</Button>
          </div>
        </Card.Footer>
      </Card>
    </div>
  ));

  return (
    <div className="row">
      <h1 className="text-center">Hello</h1>
      {products ? Cards : <p>Loading...</p>}
    </div>
  );
};

export default Products;
