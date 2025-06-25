import { useState } from 'react';
import {
  Box,
  Collapse,
  Group,
  Text,
  ThemeIcon,
  UnstyledButton,
} from '@mantine/core';
import { IconChevronRight } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import classes from './NavbarLinksGroup.module.css';

interface LinksGroupProps {
  icon: React.FC<any>;
  label: string;
  initiallyOpened?: boolean;
  links?: { label: string; link: string }[];
  link?: string;
}

export function LinksGroup({
  icon: Icon,
  label,
  initiallyOpened,
  links,
  link,
}: LinksGroupProps) {
  const hasLinks = Array.isArray(links);
  const [opened, setOpened] = useState(initiallyOpened || false);

  const items = hasLinks
    ? links!.map((subItem) => (
        <Text
          component={Link}
          to={subItem.link}
          className={classes.link}
          key={subItem.label}
        >
          {subItem.label}
        </Text>
      ))
    : null;

  const buttonContent = (
    <Group justify="space-between" gap={0}>
      <Box style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <ThemeIcon variant="light" size={30}>
          <Icon size="1.1rem" />
        </ThemeIcon>
        <Box ml="sm">{label}</Box>
      </Box>
      {hasLinks && (
        <IconChevronRight
          className={classes.chevron}
          style={{ transform: opened ? 'rotate(90deg)' : 'none' }}
          stroke={1.5}
        />
      )}
    </Group>
  );

  if (!hasLinks && link) {
    // 👉 Ítem sin sublinks, se comporta como enlace
    return (
      <UnstyledButton component={Link} to={link} className={classes.control}>
        {buttonContent}
      </UnstyledButton>
    );
  }

  // 👉 Ítem con sublinks, se comporta como acordeón
  return (
    <>
      <UnstyledButton
        onClick={() => setOpened((o) => !o)}
        className={classes.control}
      >
        {buttonContent}
      </UnstyledButton>
      <Collapse in={opened}>{items}</Collapse>
    </>
  );
}
