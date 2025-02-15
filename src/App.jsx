import { Greetings } from './components/Greetings';
import { InputWithState } from './components/InputWithState';
import { UserStatus } from './components/UserStatus';
import { Notification } from './components/Notification';
import { Counter } from './components/Counter';
import { ToggleButton } from './components/ToggleButton';
import { Product } from './components/Product';
import { TodoList } from './components/TodoList';
import { PhoneList } from './components/PhoneList/PhoneList';
import { MovieList } from './components/MoviesList/MovieList';
import { AutoList } from './components/AutoList/AutoList';
import { ParentComponent } from './components/ParentComponent/ParentComponent';

function App() {
  const user = {
    // API grazins user duomenis:
    userName: 'ruta',
    isLoggedIn: true,
    unreadMessages: true,
  };

  const product = {
    name: 'Iphone 15',
    isOnSale: true,
  };

  const pirkiniuSarasas = ['reikia nupirkti pieno', 'reikia nupirkti duonos'];

  const cars = [
    {
      id: 1,
      name: 'Jeep',
      model: 'something',
      year: 2000,
    },
    {
      id: 2,
      name: 'Nissan',
      model: 'Pathfinder',
      year: 2010,
    },
    {
      id: 3,
      name: 'Bmw',
      model: 'some name',
      year: 2020,
    },
  ];

  return (
    <>
      <Greetings username={user.userName} />
      <UserStatus isUserLoggedIn={user.isLoggedIn} />
      <InputWithState />
      <Notification hasMessages={user.unreadMessages} />
      <Counter />
      <ToggleButton />
      <Product product={product} />
      <TodoList pirkiniuSarasas={pirkiniuSarasas} />
      <PhoneList />
      <MovieList />
      <AutoList autoList={cars} />
      <ParentComponent />
    </>
  );
}

export default App;
