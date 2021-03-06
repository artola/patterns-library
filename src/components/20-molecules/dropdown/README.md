# AXA Dropdown

## Usage

**Important:** If this component needs to run in Internet Explorer 11, [you need to use our polyfill](https://github.com/axa-ch/patterns-library/tree/develop/src/components/05-utils/polyfill).

`npm install @axa-ch/dropdown`

### Native Example

```
<axa-dropdown defaulttitle="Please Select" valid
    items='[
    {"name": "Item A", "value": "Item 1" },
    {"name": "Item B", "value": "Item 2" },
    {"name": "Item C", "value": "Item 3" }
    ]'></axa-dropdown>
```

### React Example

Create a React-ified Dropdown with the createElement function from your React version and then use it like this:

```js
import { createElement } from 'react';
import createAXADropdownReact from '@axa-ch/dropdown/lib/index.react';

const AXADropdownReact = createAXADropdownReact(createElement);

export default AXADropdownReact;
```

```js
<AXADropdownReact
  items={[
    {
      name: 'Please Select',
      value: 'Please Select',
      selected: true,
      disabled: true,
    },
    { name: 'Item 1', value: 'Item 1' },
    { name: 'Item 2', value: 'Item 2' },
    { name: 'Item 3', value: 'Item 3' },
  ]}
  onChange={event => console.log(`value changed ${event.target.value}`)}
/>
```

[Controlled-Component](https://reactjs.org/docs/forms.html#the-select-tag) behaviour is supported.

## Properties

### defaulttitle

The String-valued attribute `defaulttitle` sets the initial title of the closed dropdown (default: first selected item).

Its intended use is primarily for native-HTML situations where server-generated `items` describe the choices proper,
and a separate title like `defaulttitle="Please select"` prompts the user to make a choice.

See the above React example for an alternative parametrization strategy that relies on using `items` only.

### value

The String-valued attribute `value` sets the selected dropdown option to the one with matching value.
When reading `value`, it returns the currently selected value.

### native

When true, the Boolean attribute `native` enforces native &lt;select&gt; UI look-and-feel for open dropdowns irrespective of
window widths.

### checkMark

When true, the Boolean attribute `checkmark` shows an animated checkmark to the right of the dropdown.

### invalid

The boolean attribute `invalid` serves to indicate the validity of the element (default: `false`). If `true`, it sets the element into a visual error state.

### error

The string-valued `error` provides error text as HTML. It sets the element into a visual error state, if `invalid` is true.

### disabled

The Boolean attribute `disabled` disables the underlying element, both visually and functionally.

Note that a disabled dropdown will not participate in form submission.

### maxHeight

When set to empty string (or used as boolean attribute), the String attribute `maxHeight` limits the height of an active dropdown to a sensible default and allows scrolling through its options.

When a number is given, the maxheight of the options will be limited to that value.

If you do not set this attribute, all the options will be displayed without any scrolling mechanism.

This property is most useful in space-constrained scenarios or with many options, e.g. in a country selector.

## Callback Properties

### onChange

The function-valued attribute `onChange` can be used as a callback prop for React and other frameworks. The callback is invoked whenever
the selected dropdown option changes. Its only parameter is an event-like object with `{target:{value,index,name}` structure, where `value` is
the currently selected value, `index` is its 0-based index and `name` is the visible text corresponding to `value`. If a defaulttitle is set, the first element has index 1, because the title receives index 0 internally.

_Important_: This attribute can also be used natively. However, in this case the event parameter passed conforms to the **change** event described below.

### onFocus, onBlur

The function-valued attributes `onFocus, onBlur` can be used as a callback prop for React and other frameworks. The respective callback is invoked when the element receives or loses focus, respectively. Its only parameter is the original native event.

## Events

### axa-change, change

If not in controlled-component mode, two custom events `axa-change` and `change` are fired on &lt;axa-dropdown&gt; itself whenever the `onChange` callback from above gets invoked.

`axa-change`'s event `detail` is the currently selected value (a string).

`change`'s event `detail` is an object `{value,index,name}`,where `value` is the currently selected value, `index` is its 0-based index and `name` is the visible text corresponding to `value`.

Both events do _not_ bubble up through the DOM.
