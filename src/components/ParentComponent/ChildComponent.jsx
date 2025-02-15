export const ChildComponent = ({ handleButtonClick }) => {
  return (
    <div>
      <h3>Vaikinis komponentas</h3>
      <button onClick={handleButtonClick}>Paspausk mane!</button>
    </div>
  );
};
