import { types } from '@storybook/addons';
import { useParameter } from '@storybook/api';
import { AddonPanel } from '@storybook/components';
import addonAPI, { addons } from '@storybook/addons';
import React from 'react';

const ADDON_ID = 'axa-ch/changelog';
const PANEL_ID = `${ADDON_ID}/panel`;

const MyPanel = () => {
  const value = useParameter('changelog', null);

  const replaceUnneeded = (value) => {
    if (value) {
      return value
        .replace('module.exports = "', '')
        .replace(/\\n";/g, '')
        .replace(/\\n/g, '');
    }
    return 'No Changelog found.';
  };

  return <div style={{ margin: '8px' }}
              dangerouslySetInnerHTML={{ __html: replaceUnneeded(value) }}></div>;
};

addonAPI.register(ADDON_ID, api => {
  const render = ({ active, key }) => (
    <AddonPanel active={active} key={key}>
      <MyPanel/>
    </AddonPanel>
  );
  const title = 'Changelog';

  addons.add(PANEL_ID, {
    type: types.PANEL,
    title: title,
    render: render,
    paramKey: 'changelog'
  });
});
