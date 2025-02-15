// 1 uzduotis: susikurkite komponenta, kuris atvaizduotu jusu megstamiausiu filmu sarasa nerikiuotame sarase.
//Filmu sarasas turi buti aprasytas paciame komponenta.

export const MovieList = () => {
  const movies = ['Harry Potter', 'Avatar', 'Matrix'];

  return (
    <div>
      <h1>Mano megstamiausi filmai:</h1>
      <ul>
        {movies.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
