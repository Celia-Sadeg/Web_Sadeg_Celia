import React, { useState } from 'react';

const Register = ({ setUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique d'inscription ici
    setUser({ username });
  };


};

export default Register;
