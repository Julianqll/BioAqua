import {
  Button,
  Group,
  SimpleGrid,
  TextInput,
  Title,
  FileInput,
  Select,
  Loader,
  Center,
  Text,
  Modal,
} from '@mantine/core';
import { DatePickerInput } from '@mantine/dates';
import { useForm } from '@mantine/form';
import { useState } from 'react';

export function SimpleForm() {
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(0);
  const [modalOpened, setModalOpened] = useState(false);

  const form = useForm({
    initialValues: {
      location: '',
      river: '',
      community: '',
      date: null as Date | null,
      photo: null as File | null,
      fastqFile: null as File | null,
    },

    validate: {
      location: (value) => (value ? null : 'Selecciona una ubicación'),
      river: (value) =>
        value.trim().length > 1 ? null : 'Nombre del río inválido',
      community: (value) =>
        value.trim().length > 1 ? null : 'Nombre de la comunidad inválido',
      date: (value) => (value ? null : 'Selecciona una fecha'),
      fastqFile: (value) => (value ? null : 'El archivo FASTQ es obligatorio'),
    },
  });

const handleSubmit = async (values: typeof form.values) => {
  setModalOpened(true);
  setLoading(true);
  setStep(1); // Analizando...

  // Simular proceso de análisis
  setTimeout(() => setStep(2), 3000); // Filtrando...
  setTimeout(() => setLoading(false), 6000);

  // 🔐 Token (guárdalo antes en localStorage o context)
  const token = localStorage.getItem('token'); // o de un contexto

  // 🔁 Construir FormData
  const formData = new FormData();
  formData.append('ubicacion', values.location);
  const fechaRecoleccion = new Date(values.date!).toISOString().split('T')[0];
  formData.append('fecha_recoleccion', fechaRecoleccion);

  formData.append('rio_fuente', values.river);
  formData.append('comunidad', values.community);
  if (values.photo) formData.append('foto', values.photo);
  formData.append('archivo_fastq', values.fastqFile!);

  try {
    const response = await fetch('http://localhost:8000/api/muestras/', {
      method: 'POST',
      headers: {
        Authorization: `Token ${token}`,
      },
      body: formData,
    });

    if (response.ok) {
      console.log('✅ Muestra enviada con éxito');
    } else {
      const error = await response.json();
      console.error('❌ Error al enviar:', error);
    }
  } catch (err) {
    console.error('❌ Error de red:', err);
  } finally {
    setModalOpened(false);
  }
};


  return (
    <>
      <Modal opened={modalOpened} onClose={() => {}} withCloseButton={false} centered>
        <Center style={{ flexDirection: 'column', padding: '2rem' }}>
          <Loader size="xl" />
          <Text mt="md" fw={500}>
            {step === 1 && 'Analizando en la plataforma...'}
            {step === 2 && 'Filtrando secuencias...'}
          </Text>
        </Center>
      </Modal>

      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Title
          order={2}
          size="h1"
          style={{ fontFamily: 'Outfit, var(--mantine-font-family)' }}
          fw={900}
          ta="center"
        >
          Toma de Muestra y Secuenciación
        </Title>

        <SimpleGrid cols={{ base: 1, sm: 2 }} mt="xl">
          <Select
            label="Ubicación"
            placeholder="Selecciona la ubicación"
            data={['Lima', 'Cusco', 'Loreto', 'Puno']}
            {...form.getInputProps('location')}
          />

          <DatePickerInput
            label="Fecha de recolección"
            placeholder="Selecciona una fecha"
            valueFormat="DD/MM/YYYY"
            {...form.getInputProps('date')}
          />
        </SimpleGrid>

        <SimpleGrid cols={{ base: 1, sm: 2 }} mt="md">
          <TextInput
            label="Nombre del río o fuente"
            placeholder="Ej. Río Ucayali"
            {...form.getInputProps('river')}
          />
          <TextInput
            label="Comunidad recolectora"
            placeholder="Nombre de la comunidad"
            {...form.getInputProps('community')}
          />
        </SimpleGrid>

        <SimpleGrid cols={{ base: 1, sm: 2 }} mt="md">
          <FileInput
            label="Foto de muestra (opcional)"
            placeholder="Subir imagen"
            accept="image/*"
            {...form.getInputProps('photo')}
          />
          <FileInput
            label="Archivo FASTQ (.fastq)"
            placeholder="Subir archivo"
            accept=".fastq"
            required
            {...form.getInputProps('fastqFile')}
          />
        </SimpleGrid>

        <Group justify="center" mt="xl">
          <Button type="submit" size="md" disabled={loading}>
            Enviar muestra
          </Button>
        </Group>
      </form>
    </>
  );
}
