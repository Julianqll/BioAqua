import { Title, Text, Container, Button, Overlay } from '@mantine/core';
import classes from './HeroImageBackground.module.css';
import { Link } from 'react-router-dom';

export function HeroImageBackground() {
  return (
    <div className={classes.wrapper}>
      <Overlay color="#000" opacity={0.65} zIndex={1} />

      <div className={classes.inner}>
        <Title className={classes.title}>
          BioAqua
        </Title>

        <Container size={640}>
          <Text size="lg" className={classes.description}>
            BioAqua es una plataforma diseñada para facilitar el análisis y visualización de datos ambientales y biológicos, enfocándose en la calidad del agua y su impacto en los ecosistemas.
          </Text>
        </Container>

        <div className={classes.controls}>
          <Button component={Link} to="/login" className={classes.control} variant="white" size="lg">
            Iniciar sesión
          </Button>
        </div>
      </div>
    </div>
  );
}