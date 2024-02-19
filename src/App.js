
import './App.css';

// src/App.js
import React, { useState } from 'react';
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';
import Header from './components/Header';

const App = () => {
  const [list, setList] = useState([])
  const data= [
  { id: 1, name: 'iPhone 13', price: 999 },
  { id: 2, name: 'Samsung Galaxy S21', price: 899 },
  { id: 3, name: 'Google Pixel 6', price: 799 },
  { id: 4, name: 'OnePlus 9 Pro', price: 899 },
  { id: 5, name: 'Xiaomi Mi 11', price: 699 },
  { id: 6, name: 'Sony Xperia 1 III', price: 1299 },
  { id: 7, name: 'Huawei P40 Pro', price: 899 },
  { id: 8, name: 'LG Velvet', price: 599 },
  { id: 9, name: 'Motorola Edge', price: 699 },
  { id: 10, name: 'Nokia 8.3', price: 699 }]; 

  

  return (
    <div className='App'>
      <Header/>
      <ProductList setList={setList} data={data} list={list}/>
      <ShoppingCart list={list} setList={setList} />
    </div>
  );
};

export default App;
