// Uzduotis: Sukuriame komponenta, kuris tures paragrafa ir mygtuka. Paragrafe atvaizduosime skaiciu, su mygtuku galime padidinti skaiciu.
// Nereikia Props.

import { useState } from 'react';

export const Counter = () => {
  // ar tai kis? TAIP. reiskia reaktyvus. rasome konstanta ir naudojama hooks!
  const [number, setNumber] = useState(0);

  // paimk pradine reiksme ir pridek viena
  // (bet taip issikelti funkcija geriau kai ta funkcija bus naudojama kelis kartus)
  const handleClick = () => {
    setNumber(number + 1);
  };

  return (
    <>
      <p>Paspaudimu skaicius: {number}</p>
      <button onClick={handleClick}>Counter</button>
    </>
  );
};
