import { useState } from 'react';

export const InputWithState = () => {
  // kaip padaryti input reaktyviu (t.y. kad klausytu musu pokyciu)? susikurti konstanta:
  // 1. inputValue - konstantos reiksme
  // 2. setInputValue - funkcija, kuri nustato konstantos reiksme (kai norime nustatyti ta reiksme, tada noresime iskviesti sia funkcija)
  // 3. useState yra funkcija, kuri yra aprasyta react failuose...
  const [name, setName] = useState(' ');
  const [surname, setSurname] = useState(' ');

  return (
    <div>
      <input
        type="text"
        placeholder="Iveskite savo varda!"
        // zmogus veda i input, ant kiekvieno mygtuko paspaudimo mes norime, kad ta info butu issaugota kaip konstanta (inputValue)
        onChange={(event) => setName(event.target.value)}
      />
      <input
        type="text"
        placeholder="Iveskite savo pavarde!"
        onChange={(event) => setSurname(event.target.value)}
      />
      <p>Vardas: {name}</p>
      <p>Pavarde: {surname}</p>
    </div>
  );
};
