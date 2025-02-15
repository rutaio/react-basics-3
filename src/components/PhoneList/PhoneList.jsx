import { PhoneCard } from './PhoneCard';

export const PhoneList = () => {
  const phones = [
    {
      id: 1,
      name: 'Samsung Galaxy S8',
      description: 'Puikus Samsung telefonas',
      price: 300,
      isOnSale: true,
    },
    {
      id: 1,
      name: 'iPhone 15',
      description: 'Puikus IPhone telefonas',
      price: 400,
      isOnSale: false,
    },
  ];

  return (
    <div>
      <h1>Mano megstamiausiu telefonu sarasas</h1>
      {phones.map((phone, index) => (
        <PhoneCard key={index} phone={phone} />
      ))}
      <h2>Is viso turiu: {phones.length} telefonu!</h2>
    </div>
  );
};
