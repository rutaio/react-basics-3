export const TodoList = ({ pirkiniuSarasas }) => {
  return (
    <>
      <h2>Pirkiniu sarasas</h2>
      <ul>
        {/* eik per kiekviena elementa is masyvo, sukurk list item ir atvaizduok pati item; eiluskumas svarbu! */}
        {/* 1- rasome elemento pavadinima, kuri norime atvaizduoti */}
        {/* 2- rasome masyvo arba objekto indeksa toks kaip 0, 1, 2, ... (kad butu lengviau atskirti apie kuri listo item snekame) */}
        {pirkiniuSarasas.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
};
