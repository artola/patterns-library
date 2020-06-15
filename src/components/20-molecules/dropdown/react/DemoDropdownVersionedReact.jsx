/* eslint-disable react/prop-types */
import React from 'react';
import AXADropdownVersionedReact, {
  numericalVersion,
} from './AXADropdownVersionedReact';

const DemoVersionedDropdown = () => {
  const props = {
    item1: 'item1',
    item2: 'item2',
    item3: 'item3',
    name: 'my-versioned-dropdown',
  };
  const items = [
    {
      name: 'Please Select',
      value: 'Please Select',
      disabled: true,
    },
    { name: props.item1, value: 'Item 1' },
    { name: props.item2, value: 'Item 2', selected: true },
    { name: props.item3, value: 'Item 3' },
  ];

  return (
    <AXADropdownVersionedReact
      data-test-id="versioned-dropdown-react"
      title="Please Select"
      items={items}
      label={props.label}
      defaultTitle={props.defaultTitle}
      name={props.name}
      invalid={props.invalid}
      error={props.error}
      native={props.native}
      required={props.required}
      checkMark={props.checkMark}
      disabled={props.disabled}
      // eslint-disable-next-line no-console
      onChange={value =>
        console.log(
          'axa-dropdown version',
          numericalVersion,
          'new value:',
          JSON.stringify(value)
        )
      }
    />
  );
};

export default DemoVersionedDropdown;
