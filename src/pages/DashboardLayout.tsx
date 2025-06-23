import {
  AppShell,
  Group,
  Burger,
  Text,
  Code,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Outlet } from 'react-router-dom';
import { NavbarNested } from '../components/NavbarNested/NavBarNested';

export default function DashboardLayout() {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          {/* Botón para colapsar en móvil y desktop */}
          <Burger
            opened={mobileOpened}
            onClick={toggleMobile}
            hiddenFrom="sm"
            size="sm"
          />
          <Burger
            opened={desktopOpened}
            onClick={toggleDesktop}
            visibleFrom="sm"
            size="sm"
          />
          <div >
            <Group justify="space-between">
              <Text style={{ width: 50 }}>BioAqua</Text>
              <Code fw={700}>v3.1.2</Code>
            </Group>
          </div>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar>
        <NavbarNested />
      </AppShell.Navbar>

      <AppShell.Main>
        <Outlet /> {/* Aquí se renderizan las páginas del dashboard */}
      </AppShell.Main>
    </AppShell>
  );
}
