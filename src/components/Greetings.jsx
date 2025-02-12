// 1 - komponento pavadinimai prasideda didziaja raide
// 2 - props - yra case-sensitive, turim butinai aprasyti taip kaip paduodame is tevinio elemento

// turime nurodyti cia, kad priimsime atributa, kuris ateis is tevinio elemento:
export const Greetings = ({username}) => {
  const greeting = 'Sveiki';

  return (
    <>
   {/* iskvieciu ta propsa */}
      <h1> {greeting}, {username} </h1>
    </>
  );
};
