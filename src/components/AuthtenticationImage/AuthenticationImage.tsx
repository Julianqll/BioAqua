import {
  Anchor,
  Button,
  Checkbox,
  Paper,
  PasswordInput,
  Text,
  TextInput,
  Title,
  Notification,
} from '@mantine/core';
import { useState } from 'react';
import classes from './AuthenticationImage.module.css';

export function AuthenticationImage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async () => {
    setLoading(true);
    setError('');

    try {
      const res = await fetch('http://127.0.0.1:8000/api/users/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || 'Credenciales incorrectas');
      }

      // Guardar token y usuario en localStorage
      localStorage.setItem('token', data.access_token);
      localStorage.setItem('user', JSON.stringify(data.user));

      // Redirigir a dashboard (o setear auth context)
      window.location.href = '/dashboard';
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={classes.wrapper}>
      <Paper className={classes.form}>
        <Title order={2} className={classes.title}>
          Bienvenido de nuevo
        </Title>

        <TextInput
          label="Correo electrónico"
          placeholder="correo@ejemplo.com"
          value={username}
          onChange={(e) => setUsername(e.currentTarget.value)}
          size="md"
          radius="md"
        />
        <PasswordInput
          label="Contraseña"
          placeholder="Tu contraseña"
          mt="md"
          value={password}
          onChange={(e) => setPassword(e.currentTarget.value)}
          size="md"
          radius="md"
        />
        <Checkbox label="Mantener sesión activa" mt="xl" size="md" />

        <Button fullWidth mt="xl" size="md" radius="md" onClick={handleLogin} loading={loading}>
          Iniciar sesión
        </Button>

        {error && (
          <Notification color="red" mt="md" title="Error">
            {error}
          </Notification>
        )}

        <Text ta="center" mt="md">
          ¿No tienes una cuenta?{' '}
          <Anchor href="#" fw={500} onClick={(event) => event.preventDefault()}>
            Regístrate
          </Anchor>
        </Text>
      </Paper>
    </div>
  );
}
