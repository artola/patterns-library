## 7.0.0

- BREAKING CHANGE: The Depricated colors `color-validation-error`, `color-validation-valid`, `color-prim-gray-mine-shaft`, `color-prim-gray-scorpion`, `color-sec-blue-logan`, `color-sec-ocean-blue`, `color-sec-green-acid`, `color-sec-orange-apache` and `color-sec-shy-tomato` were removed. The rest of the colors were renamed #1748

## 6.0.0

- BREAKING CHANGE: The icons `arrow-left`, `arrow-right`, `collapse`, `document`, `download`, `email`, `expand`, `mobile`, `phone`, `plus`, `search`, `upload`, `cloud-upload` have been updated and appear a bit smaller. #1725

## 5.0.0

- New icons `key`, `person`, `message` and `power` added.
- BREAKING CHANGE: The icons `add`, `attach-file`, `check-circle`, `clear` and `delete-forever` have changed. They now support setting its color with `currentColor`. #1681.

## 4.0.0

- The implementation of the wrapper to make a component React-ready hasfundamentally changed. In particular, unknown Boolean- orstring-valued properties are now accepted and converted to HTMLattributes. E.g. data-seleniumid="my-id" is now supported.
- All defined attributes attached to a component before componentconstruction time are now taken into account. Conversely, all undefinedcomponent attributes are initialized with type-appropriate defaultvalues at this time. This may amount to a breaking change if thecomponent consumer had previously assumed undefined or uninitializedbehaviour.

## 3.0.0

- no breaking changes here. Release is needed for the other components.

## 2.0.0

- removed Axa logos from `/icons` (please use logos from `/images`)
