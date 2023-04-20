import React from 'react'
import Button from './Button';
import Card from './Card';
import Product from './Product';
import Welcome from './Welcome'

function Props() {
    let user = {
        name: 'Bob',
        email: 'Bob@gmail.com',
    }

    const handleClick = () => {
        alert('clicked');
    }

    const handleAddToCart = (product) => {
        console.log(product);
    }
  return (
    <div>
        <h1>Props</h1>
        <Welcome name='John' email = 'John@gmail.com' />
        <Welcome name='Alice' email ='Alice@gmail.com' />
        <Welcome name={user.name} email={user.email} />

        {/*{children} */}
        <Card>
            <h3>user</h3>
            <Welcome name='Alice' email ='Alice@gmail.com' />
        </Card>

        {/* Button */}
        <Button onClick={handleClick} >
            Click
        </Button>

        <Product name='Iphone' price={1500} onAddToCart ={handleAddToCart} />

    </div>
  )
}

export default Props;

