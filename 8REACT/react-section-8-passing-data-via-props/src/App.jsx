import React, { useState } from 'react'
import Card from './components/Card'

const App = () => {

  const data = [
    {name: 'Sheriyan', profession: 'Coder', src: 'https://images.unsplash.com/photo-1551583899-d3f6258ec7c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNvZGVyfGVufDB8fDB8fHww', isFollow: false},
    {name: 'Shivam', profession: 'Bussiness man', src: 'https://images.unsplash.com/photo-1541535881962-3bb380b08458?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVzaW5lc3MlMjBtYW58ZW58MHx8MHx8fDA%3D', isFollow: false},
    {name: 'Raghav', profession: 'Dancer', src: 'https://plus.unsplash.com/premium_photo-1687294575611-e510edf7f5ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWVuc3xlbnwwfHwwfHx8MA%3D%3D', isFollow: false},
    {name: 'Harry', profession: 'Programmar', src: 'https://images.unsplash.com/photo-1575089976121-8ed7b2a54265?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNvZGVyfGVufDB8fDB8fHww', isFollow: false},
  ]

  const [friendship, setFriendship] = useState(data);


  const handleFrindship = (index) => {

    setFriendship(friendship.map((personData, dataInd) => {
      if(dataInd === index) {
        return {...personData, isFollow: !personData.isFollow};
      }
      return personData;
    }))
  }


  return (
    <>
      <div className='w-full h-screen flex justify-center items-center gap-3'>
        {friendship.map((cardData, ind) => <Card key={ind} obj={cardData} index={ind} handleFrindship={handleFrindship} />)}
      </div>
    </>
  )
}

export default App