import { useState } from 'react';
import { ChildComponent } from './ChildComponent';

export const ParentComponent = () => {
  const [message, setMessage] = useState('Paspaudimas dar neivyko');

  const handleButtonClick = () => {
    setMessage('Mygtukas buvo paspaustas!');
  };

  return (
    <>
      <h2>Tevinis komponentas</h2>
      <p>{message}</p>
      <ChildComponent handleButtonClick={handleButtonClick} />
    </>
  );
};
