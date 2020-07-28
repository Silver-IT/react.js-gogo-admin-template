import React, { useState, useEffect } from 'react';
import Switch from 'rc-switch';
import 'rc-switch/assets/index.css';
import { Tooltip } from 'reactstrap';

import {
  defaultColor,
  themeColorStorageKey,
} from '../../constants/defaultValues';

const getColor = () => {
  return localStorage.getItem(themeColorStorageKey)
    ? localStorage.getItem(themeColorStorageKey)
    : defaultColor;
};

const TopnavDarkSwitch = () => {
  const [switchChecked, setSwitchChecked] = useState(false);
  const [tooltipOpen, setTooltipOpen] = useState(false);

  useEffect(() => {
    const color = getColor();
    setSwitchChecked(color.indexOf('dark') > -1);
  }, []);

  const changeMode = () => {
    let color = getColor();

    if (color.indexOf('dark') > -1) {
      color = color.replace('dark', 'light');
    } else if (color.indexOf('light') > -1) {
      color = color.replace('light', 'dark');
    }
    localStorage.setItem(themeColorStorageKey, color);
    setSwitchChecked(color.indexOf('dark') > -1);
    setTimeout(() => {
      window.location.reload();
    }, 500);
  };

  return (
    <div className="d-none d-md-inline-block align-middle mr-3">
      <Switch
        id="tooltip_switch"
        className="custom-switch custom-switch-primary custom-switch-small"
        checked={switchChecked}
        onChange={changeMode}
      />
      <Tooltip
        placement="left"
        isOpen={tooltipOpen}
        target="tooltip_switch"
        toggle={() => setTooltipOpen(!tooltipOpen)}
      >
        Dark Mode
      </Tooltip>
    </div>
  );
};
export default TopnavDarkSwitch;
