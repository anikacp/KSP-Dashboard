// src/components/LoginForm.js
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css';

const LoginForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const { username, password, role } = data;

    // Replace with your actual authentication logic
    if (username === 'admin' && password === 'password' && (role === 'DYSP' || role === 'ACP')) {
      navigate('/frame1');
    } else {
      alert('Login failed. Please check your credentials.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <div className="login-logo">
          <img src="/image-1@2x.png" alt="Karnataka State Police" />
        </div>
        <h2>Karnataka State Police</h2>
        <h3>Welcome back!!</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Enter your station branch"
            {...register('stationBranch', { required: true })}
          />
          {errors.stationBranch && <span>This field is required</span>}

          <input
            type="text"
            placeholder="Enter your username"
            {...register('username', { required: true })}
          />
          {errors.username && <span>This field is required</span>}

          <input
            type="password"
            placeholder="Enter your password"
            {...register('password', { required: true })}
          />
          {errors.password && <span>This field is required</span>}

          <select
            {...register('role', { required: true })}
          >
            <option value="">Select your role</option>
            <option value="DYSP">DYSP/ACP</option>
            
          </select>
          {errors.role && <span>This field is required</span>}

          <button type="submit">Login</button>
          <a href="#" className="forgot-password">Forget Password?</a>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
