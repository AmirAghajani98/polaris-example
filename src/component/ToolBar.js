/** @format */

import React, { useCallback, useState } from 'react';
import { AppProvider, Button, Frame, TopBar } from '@shopify/polaris';
import { ArrowLeftMinor } from '@shopify/polaris-icons';

export function ToolBar() {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isSecondaryMenuOpen, setIsSecondaryMenuOpen] = useState(false);

  const toggleIsUserMenuOpen = useCallback(
    () => setIsUserMenuOpen((isUserMenuOpen) => !isUserMenuOpen),
    []
  );

  const toggleIsSecondaryMenuOpen = useCallback(
    () => setIsSecondaryMenuOpen((isSecondaryMenuOpen) => !isSecondaryMenuOpen),
    []
  );

  const handleNavigationToggle = useCallback(() => {
    console.log('toggle navigation visibility');
  }, []);

  const theme = {
    logo: {
      width: 124,
      topBarSource:
        'https://cdn.shopify.com/s/files/1/0446/6937/files/jaded-pixel-logo-color.svg?6215648040070010999',
      url: 'http://jadedpixel.com',
      accessibilityLabel: 'Jaded Pixel',
    },
  };

  const userMenuMarkup = (
    <TopBar.UserMenu
      actions={[
        {
          items: [{ content: 'exit', icon: ArrowLeftMinor }],
        },
        {
          items: [{ content: 'Community forums' }],
        },
      ]}
      name='karjoo'
      detail='karjoo plus'
      initials='K'
      open={isUserMenuOpen}
      onToggle={toggleIsUserMenuOpen}
    />
  );

  const secondaryMenuMarkup = (
    <TopBar.Menu
      open={isSecondaryMenuOpen}
      onOpen={toggleIsSecondaryMenuOpen}
      onClose={toggleIsSecondaryMenuOpen}
      actions={[
        {
          items: [{ content: 'Community forums' }],
        },
      ]}
    />
  );

  const topBarMarkup = (
    <TopBar
      showNavigationToggle
      userMenu={userMenuMarkup}
      secondaryMenu={secondaryMenuMarkup}
      onNavigationToggle={handleNavigationToggle}
    />
  );

  return (
    <div style={{ height: '250px' }}>
      <AppProvider
        theme={theme}
        i18n={{
          Polaris: {
            Avatar: {
              label: 'Avatar',
              labelWithInitials: 'Avatar with initials {initials}',
            },
            Frame: { skipToContent: 'Skip to content' },
            TopBar: {
              toggleMenuLabel: 'Toggle menu',
            },
          },
        }}>
        <Frame topBar={topBarMarkup} />
      </AppProvider>
    </div>
  );
}
