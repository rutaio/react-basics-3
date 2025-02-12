// Uzduotis: Sukuriame komponenta, kuris atvaizduos teksta: ar turiu neperskaitytu pranesimu paprastame paragrafe.
// Turim panaudoti Props.

export const Notification = ({ hasMessages }) => {
  return (
    <>
      {/* tikriname su ternary operator */}
      <p>{hasMessages ? 'Turite Nauju Pranesimu' : 'Nauju Pranesimu Nera'}</p>
    </>
  );
};
