/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useRef, useEffect } from 'react';
import { FormGroup, Label, CustomInput } from 'reactstrap';
import {
  colors,
  themeColorStorageKey,
  themeRadiusStorageKey,
} from '../../constants/defaultValues';

const ColorSwitcher = () => {
  const containerRef = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedColor] = useState(localStorage.getItem(themeColorStorageKey));
  const [radius, setRadius] = useState(
    localStorage.getItem(themeRadiusStorageKey) || 'rounded'
  );

  useEffect(() => {
    if (radius === 'flat') {
      document.body.classList.remove('rounded');
    } else {
      document.body.classList.add('rounded');
    }
    localStorage.setItem(themeRadiusStorageKey, radius);
    if (isOpen) setIsOpen(false);
  }, [radius]);

  const handleDocumentClick = (e) => {
    if (isOpen) {
      const container = containerRef.current;
      if (container.contains(e.target) || container === e.target) {
        return;
      }
      setIsOpen(false);
    }
  };

  useEffect(() => {
    ['click', 'touchstart'].forEach((event) =>
      document.addEventListener(event, handleDocumentClick, false)
    );

    return () => {
      ['click', 'touchstart'].forEach((event) =>
        document.removeEventListener(event, handleDocumentClick, false)
      );
    };
  }, [isOpen]);

  const changeThemeColor = (e, color) => {
    e.preventDefault();
    localStorage.setItem(themeColorStorageKey, color);
    setIsOpen(false);
    setTimeout(() => {
      window.location.reload();
    }, 500);
  };

  return (
    <div ref={containerRef} className={`theme-colors ${isOpen ? 'shown' : ''}`}>
      <div className="p-4">
        <p className="text-muted mb-2">Light Theme</p>
        <div className="d-flex flex-row justify-content-between mb-3">
          {colors.slice(0, 5).map((color) => (
            <a
              key={`light.${color}`}
              href={`#light.${color}`}
              className={`theme-color theme-color-${color} ${
                selectedColor === `light.${color}` ? 'active' : ''
              }`}
              onClick={(e) => changeThemeColor(e, `light.${color}`)}
            >
              <span>{` `}</span>
            </a>
          ))}
        </div>
        <div className="d-flex flex-row justify-content-between mb-4">
          {colors.slice(5, 10).map((color) => (
            <a
              key={`light.${color}`}
              href={`#light.${color}`}
              className={`theme-color theme-color-${color} ${
                selectedColor === `light.${color}` ? 'active' : ''
              }`}
              onClick={(e) => changeThemeColor(e, `light.${color}`)}
            >
              <span>{` `}</span>
            </a>
          ))}
        </div>
        <p className="text-muted mb-2">Dark Theme</p>
        <div className="d-flex flex-row justify-content-between mb-3">
          {colors.slice(0, 5).map((color) => (
            <a
              key={`dark.${color}`}
              href={`#dark.${color}`}
              className={`theme-color theme-color-${color} ${
                selectedColor === `dark.${color}` ? 'active' : ''
              }`}
              onClick={(e) => changeThemeColor(e, `dark.${color}`)}
            >
              <span>{` `}</span>
            </a>
          ))}
        </div>
        <div className="d-flex flex-row justify-content-between">
          {colors.slice(5, 10).map((color) => (
            <a
              key={`dark.${color}`}
              href={`#dark.${color}`}
              className={`theme-color theme-color-${color} ${
                selectedColor === `dark.${color}` ? 'active' : ''
              }`}
              onClick={(e) => changeThemeColor(e, `dark.${color}`)}
            >
              <span>{` `}</span>
            </a>
          ))}
        </div>
      </div>
      <div className=" pb-0 pl-4 pt-4">
        <FormGroup>
          <Label for="radiusRadio">Border Radius </Label>
          <div>
            <CustomInput
              type="radio"
              name="radiusRadio"
              id="rounded"
              label="Rounded"
              inline
              defaultChecked={radius === 'rounded'}
              onChange={() => setRadius('rounded')}
            />
            <CustomInput
              type="radio"
              name="radiusRadio"
              id="flat"
              label="Flat"
              inline
              defaultChecked={radius === 'flat'}
              onChange={() => setRadius('flat')}
            />
          </div>
        </FormGroup>
      </div>

      <a
        href="#section"
        className="theme-button"
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(!isOpen);
        }}
      >
        {' '}
        <i className="simple-icon-magic-wand" />{' '}
      </a>
    </div>
  );
};

export default ColorSwitcher;
