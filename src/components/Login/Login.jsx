import Logo from '../Logo/Logo';
import { useNavigate } from 'react-router-dom'
import {useForm} from 'react-hook-form'
import { useState } from 'react';

const Login = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const [errorMessage, setErrorMessage] = useState('');

  const onSubmit = async (data) => {
    const user = {
      email: data.email,
      password: data.password,
    };

    const userService = new UserService();
    try {
      const response = await userService.loginUser(user);
      const result = response.data.status;

      if (result === 'success') {
        navigate('/home');
      }

      if (result === 'error') {
        setErrorMessage(response.data.error);
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <>
      <div className="divContainerForms">
        <div className="forms">
          <form onSubmit={handleSubmit(onSubmit)} className="forms">
            <input
              type="text"
              placeholder="correo@..."
              {...register('email', { required: true })}
              className="inputs"
            />
            <input
              type="password"
              placeholder="Contraseña"
              {...register('password', { required: true })}
              className="inputs"
            />
            <input type="submit" value="Entrar" className="btns" />
          </form>
          {errorMessage && <span className="error-message">{errorMessage}</span>}
          <Link to="/restorePassword" className="btns-links">
            ¿Olvidaste tu contraseña?{' '}
          </Link>
          <Link to="/register" className="btns">
            CREAR CUENTA
          </Link>
        </div>
      </div>
    </>
  );
};

export default Login;