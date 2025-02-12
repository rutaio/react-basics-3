import { Greetings } from './components/Greetings';
import { InputWithState } from './components/InputWithState';
import { UserStatus } from './components/UserStatus';
import { Notification, Notifications } from './components/Notification';
import { Counter } from './components/Counter';
import { ToggleButton } from './components/ToggleButton';

function App() {
  const user = {
    userName: 'ruta',
    isLoggedIn: true,
    unreadMessages: true,
  };

  return (
    <>
      <Greetings username={user.userName} />
      <UserStatus isUserLoggedIn={user.isLoggedIn} />
      <InputWithState />
      <Notification hasMessages={user.unreadMessages} />
      <Counter />
      <ToggleButton />
    </>
  );
}

export default App;
