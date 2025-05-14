import { Outlet } from 'react-router-dom';
import { Suspense, useEffect, useRef } from 'react';
import { LayoutWrap, MainStyled, SectionApp } from './styled';
import { Box, useToggle } from 'shared';
import { AppBar, Header } from '..';

export const Layout = () => {
  const { isOpen, toggle } = useToggle();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        toggle();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, toggle]);

  return (
    <LayoutWrap>
      <Box $alignItems="flex-start" $position="relative">
        <SectionApp $isOpen={isOpen} ref={menuRef}>
          <AppBar toggleMenu={toggle} />
        </SectionApp>
        <Header toggle={toggle} />
        <MainStyled $isOpen={isOpen}>
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </MainStyled>
      </Box>
    </LayoutWrap>
  );
};
