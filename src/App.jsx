import React from 'react';

// Components
import Nav from './components/Nav';
import Card from './components/Card';
import data from './data';

// Styles
import './styles/index.css';

const App = () => {
  const cardData = data.map((cards) => {
    return <Card key={cards.id} {...cards} />;
  });

  return (
    <div>
      <Nav />
      {cardData}
    </div>
  );
};

export default App;
