export const UserStatus = ({ isUserLoggedIn }) => {
  return (
    <div>
        {/* tikriname su ternary operator */}
      <p>{isUserLoggedIn ? 'Esate Prisijunges' : 'Esate Neprisijunges'}</p>
    </div>
  );
};
