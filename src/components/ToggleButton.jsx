// Uzduotis: Sukuriame komponenta, kuris tures p ir button. Kai bus paspaustas button, p dingsta.
// Nereikia props

import { useState } from 'react';

export const ToggleButton = () => {
  // ar tai kis? TAIP. reiskia reaktyvus. rasome konstanta ir naudojama hooks!
  const [isVisible, setIsVisible] = useState(true);

  return (
    <>
      <p>{isVisible ? 'Si teksta matot' : ''}</p>
      {/*Paspaudus padarys atvirkstini varianta del to rasome su sauktuku */}
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? 'Paslepk' : 'Rodyti'}
      </button>
    </>
  );
};
