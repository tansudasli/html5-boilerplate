console.log('loading main.js from bundle.js');

/*
for material components
- install material component - no need in our case cause we installed for all material-web-components
- import - such as - import { MDCRipple } from '@material/ripple/index';
- assosiate w/ DOM element - such as - const ripple = new MDCRipple(document.querySelector('.foo-button'));
 */
import {MDCRipple} from '@material/ripple/index';
const actionButtonRipple = new MDCRipple(document.querySelector('.actionButtonRipple'));

import {} from '@material/textfield/index';

const textFields = document.querySelectorAll('.mdc-text-field');

for (const textField of textFields) {
  console.log(textField);
  mdc.textField.MDCTextField.attachTo(textField);
}
