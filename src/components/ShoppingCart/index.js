import React from 'react';

const ShoppingCart = ({list, setList}) => {
  const handleDelete =(id)=>{
    setList(prevList => prevList.filter(item => item.id !== id));
  }

  return (  
    <section className="shoppingcart mx-3 my-auto bg-blue-200 rounded-xl w-[300px] min-h-96 shadow-lg gap-2">
        <h3>Lista de compras</h3>
          {
            list ? list.map(item => (
              <article key={item.id} className='flex content-center items-center bg-blue-600 shadow-2xl p-3 rounded gap-2'>
                <p>{item.name}</p>
                <p>${item.price}</p>
                <button onClick={()=> handleDelete(item.id)} className='rounded-md p-2 bg-red-500 hover:bg-red-800'>Eliminar</button>
              </article>
            )): ""
          }
        
    </section>
  );
}
 
export default ShoppingCart;