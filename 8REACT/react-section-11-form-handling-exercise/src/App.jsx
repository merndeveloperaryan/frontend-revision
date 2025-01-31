import React, { useState, useEffect } from 'react';
import Cards from './components/Cards';
import Form from './components/Form';
import { useForm } from 'react-hook-form';

const App = () => {
  // LocalStorage se data retrieve karna
  const [cardData, setCardData] = useState(() => {
    const savedData = localStorage.getItem('cardData');
    return savedData ? JSON.parse(savedData) : [];
  });

  const { register, handleSubmit, reset } = useForm();

  // Jab bhi cardData update ho, ise localStorage me save karna
  useEffect(() => {
    localStorage.setItem('cardData', JSON.stringify(cardData));
  }, [cardData]);

  // Naya data add karne ka function
  const getData = (data) => {
    setCardData([...cardData, data]);
    reset();
  };

  // Item delete karne ka function
  const removeItem = (index) => {
    setCardData(cardData.filter((item, ind) => ind !== index));
  };

  return (
    <div className='w-full h-screen bg-zinc-300'>
      <Cards data={cardData} removeItem={removeItem} />
      <Form register={register} handleSubmit={handleSubmit} getData={getData} />
    </div>
  );
};

export default App;
