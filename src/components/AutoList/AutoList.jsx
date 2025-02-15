// 2 uzduotis: Sukurkite komponenta, kuris atvaizduoja automobiliu markes, modelius ir metus lenteles pavidalu.
// Naudokite .map() metoda, kad atvaizduotumete kiekviena automobili kaip lenteles eilute
// Automobiliu duomenys turi buti perduodami per komponento props is tevinio komponento.

export const AutoList = ({ autoList }) => {
  return (
    <div>
      <h1>Automobiliu Lentele</h1>
      <table className="table-container">
        <thead>
          <tr>
            <th>Car name</th>
            <th>Car model</th>
            <th>Car year</th>
          </tr>
        </thead>
        <tbody>
          {autoList.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.model}</td>
              <td>{item.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
