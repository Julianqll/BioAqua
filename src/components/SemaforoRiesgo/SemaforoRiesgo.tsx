import { Card, Group, Text, ThemeIcon, Title } from '@mantine/core';
import { IconAlertCircle, IconCheck, IconExclamationMark } from '@tabler/icons-react';

interface SemaforoRiesgoProps {
  nivel: 'Bajo' | 'Moderado' | 'Alto';
  criterio: string;
}

const colores = {
  Bajo: 'green.6',
  Moderado: 'yellow.6',
  Alto: 'red.6',
};

const iconos = {
  Bajo: IconCheck,
  Moderado: IconExclamationMark,
  Alto: IconAlertCircle,
};

export function SemaforoRiesgo({ nivel, criterio }: SemaforoRiesgoProps) {
  const Icon = iconos[nivel];

  return (
    <Card shadow="md" radius="md" withBorder>
      <Group>
        <ThemeIcon size="xl" color={colores[nivel]} variant="light">
          <Icon size={28} />
        </ThemeIcon>
        <div>
          <Title order={4}>{`Nivel de riesgo: ${nivel}`}</Title>
          <Text size="sm" c="dimmed">
            {criterio}
          </Text>
        </div>
      </Group>
    </Card>
  );
}