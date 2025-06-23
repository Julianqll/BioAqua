import {
  Button,
  Group,
  SimpleGrid,
  TextInput,
  Title,
  FileInput,
  Select,
} from '@mantine/core';
import { DatePickerInput } from '@mantine/dates';
import { useForm } from '@mantine/form';
import { IconUpload, IconPhoto } from '@tabler/icons-react';

export function SimpleForm() {
  const form = useForm({
    initialValues: {
      location: '',
      river: '',
      community: '',
      date: null,
      photo: null,
      fastqFile: null,
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

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
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
        locale="es"
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
          leftSection={<IconPhoto size={16} />}
          accept="image/*"
          {...form.getInputProps('photo')}
        />
        <FileInput
          label="Archivo FASTQ (.fastq)"
          placeholder="Subir archivo"
          leftSection={<IconUpload size={16} />}
          accept=".fastq"
          required
          {...form.getInputProps('fastqFile')}
        />
      </SimpleGrid>

      <Group justify="center" mt="xl">
        <Button type="submit" size="md">
          Enviar muestra
        </Button>
      </Group>
    </form>
  );
}
