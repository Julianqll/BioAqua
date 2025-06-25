import { Container, Stack, Title } from '@mantine/core';
import { SemaforoRiesgo } from '../components/SemaforoRiesgo/SemaforoRiesgo';
import { MapaRiesgo } from '../components/MapaRiesgo/MapaRiesgo';
import { LineaTiempoRiesgo } from '../components/LineaTiempoRiesgo/LineaTiempoRiesgo';


export default function Fase4Riesgo() {
  return (
    <Container size="md" my="xl">
      <Title order={2} mb="lg">
        Fase 4 – Riesgo Ambiental
      </Title>

      <Stack gap="md">
        <SemaforoRiesgo
          nivel="Bajo"
          criterio="Sin genes peligrosos detectados."
        />
        <SemaforoRiesgo
          nivel="Moderado"
          criterio="Presencia de genes fecales como uidA o 16S."
        />
        <SemaforoRiesgo
          nivel="Alto"
          criterio="Genes de resistencia detectados junto con SNPs críticos (mecA, blaTEM, etc.)."
        />
        <MapaRiesgo />
        <LineaTiempoRiesgo />
      </Stack>
    </Container>
  );
}