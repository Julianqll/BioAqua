import {
  IconAdjustments,
  IconCalendarStats,
  IconFileAnalytics,
  IconGauge,
  IconLock,
  IconNotes,
  IconPresentationAnalytics,
} from '@tabler/icons-react';
import { ScrollArea } from '@mantine/core';
import { UserButton } from '../UserButton/UserButton';
import classes from './NavbarNested.module.css';
import { LinksGroup } from '../NavbarLinksGroup/NavbarLinksGroup';

const mockdata = [
  { label: 'Dashboard', icon: IconGauge, link: '/dashboard' },
  {
    label: 'Análisis',
    icon: IconNotes,
    initiallyOpened: true,
    links: [
      { label: 'Toma de muestra', link: '/dashboard/samples' },
      { label: 'Identificación de genes', link: '/dashboard/filtered' },
    ],
  },
  {
    label: 'Evaluación',
    icon: IconCalendarStats,
    link: '/dashboard/fase3',
  },
  {
    label: 'Visualización',
    icon: IconLock,
    link: '/dashboard/fase4',
  },
];

export function NavbarNested() {
  const links = mockdata.map((item) => <LinksGroup {...item} key={item.label} />);

  return (
    <nav className={classes.navbar}>
      <ScrollArea className={classes.links}>
        <div className={classes.linksInner}>{links}</div>
      </ScrollArea>

      <div className={classes.footer}>
        <UserButton />
      </div>
    </nav>
  );
}