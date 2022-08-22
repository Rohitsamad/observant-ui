import UserService from '../../services/UserService';

function Login() {
  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    await UserService.login(email, password);
  };

  return (
    <div>
      <p>Login</p>
      <form onSubmit={handleLogin}>
        Email:
        <input type="text" name="email" />
        <br />
        Password:
        <input type="password" name="password" />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
