import React from 'react';
import Product from '../Product';

const ProductList = ({setList, data, list}) => {
  return (
    <section className='flex flex-wrap m-3' >
      {
        data.map(item => (
          <Product key={item.id} id={item.id} name={item.name} price={item.price} setList={setList} list={list}/>
        )
          )
      }
    </section>
   );
}
 
export default ProductList;
