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
  { label: 'Dashboard', icon: IconGauge },
  {
    label: 'Análisis',
    icon: IconNotes,
    initiallyOpened: true,
    links: [
      { label: 'Toma de muestra', link: '/dashboard/samples' },
      { label: 'Identificación de genes', link: '/' },
    ],
  },
  {
    label: 'Evaluación',
    icon: IconCalendarStats,
    links: [
      { label: 'Upcoming releases', link: '/' },
      { label: 'Previous releases', link: '/' },
      { label: 'Releases schedule', link: '/' },
    ],
  },
  {
    label: 'Visualización',
    icon: IconLock,
    links: [
      { label: 'Enable 2FA', link: '/' },
      { label: 'Change password', link: '/' },
      { label: 'Recovery codes', link: '/' },
    ],
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