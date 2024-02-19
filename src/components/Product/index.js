import React from 'react';

const Product = ({ id, name, price, setList, list }) => {
  const handleClick = (e, datos) => {
    e.preventDefault();
    const encontrado = list.find(item => item.id === datos.id);
    if (!encontrado) {
        setList(prevList => [...prevList, datos]);
    }
};



  return ( 
    <article className='p-4 rounded-xl m-2 bg-gray-400 shadow-xl flex justify-center items-center w-56 gap-2'>
      <h2>{name}</h2>
      <h6>${price}</h6>
      <button 
        onClick={(e) => handleClick(e, { id: id, name: name, price: price, count:1})}
        className='rounded-xl bg-blue-500 shadow-sm w-10 h-10 flex items-center justify-center hover:bg-blue-800'
      >
        Add
      </button>
    </article>
  );
}
 
export default Product;
