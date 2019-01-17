import { EVENTS, AXA_EVENTS } from '../../../js/ui-events';
import on from '../../../js/on';
import fire from '../../../js/fire';

export const OK = 'ok';

export default class Datepicker {
  constructor(wcNode) {
    this.wcNode = wcNode;
  }

  init() {
    this.datepickerBody = this.wcNode.querySelector('.js-datepicker__datepicker-body');
    this.dropdownMonth = this.wcNode.querySelector('.js-datepicker__dropdown-month');
    this.dropdownYear = this.wcNode.querySelector('.js-datepicker__dropdown-year');
    this.okButton = this.wcNode.querySelector('.js-datepicker__button-ok');
    this.cancelButton = this.wcNode.querySelector('.js-datepicker__button-cancel');

    this.onHandleChangeDropdownMonth =
      on(this.dropdownMonth, AXA_EVENTS.AXA_CHANGE, '', e => this.handleChangeDropdownMonth(e), { capture: true, passive: false });
    this.onListenToDropdownYear =
      on(this.dropdownYear, AXA_EVENTS.AXA_CHANGE, '', e => this.handleChangeDropdownYear(e), { capture: true, passive: false });

    this.onListenDatepickerBodyDateChange =
      on(this.datepickerBody, AXA_EVENTS.AXA_CHANGE, '', e => this.handleChangeDatepickerBody(e), { capture: true, passive: false });

    this.onCancelButtonListenerEnd = on(this.cancelButton, EVENTS.CLICK, () => {
      fire(this.wcNode, 'cancel', {}, { bubbles: true, cancelable: true, composed: true });
    });

    this.onOkButtonListenerEnd = on(this.okButton, EVENTS.CLICK, () => {
      let out = '';
      const value = this.datepickerBody.getAttribute('date');
      if (value) {
        out = new Date(Date.parse(value));
        fire(this.wcNode, 'date-changed', { value: out }, { bubbles: true, cancelable: true, composed: true });
      }
    });
  }

  handleChangeDropdownMonth(e) {
    e.preventDefault();
    const month = e.detail;
    if (month) {
      const newDate = this.datepickerBody.getAttribute('date');
      const parsedDate = new Date(Date.parse(newDate));
      parsedDate.setMonth(month);

      this.datepickerBody.setAttribute('date', parsedDate.toISOString());
    }
  }

  handleChangeDropdownYear(e) {
    e.preventDefault();
    const year = e.detail;
    if (year) {
      const newDate = this.datepickerBody.getAttribute('date');
      const parsedDate = new Date(Date.parse(newDate));
      parsedDate.setFullYear(year);
      this.datepickerBody.setAttribute('date', parsedDate.toISOString());
    }
  }

  handleChangeDatepickerBody(e) {
    e.preventDefault();
    e.stopPropagation();
    if (e.detail) {
      const parsedDate = new Date(Date.parse(e.detail));
      this.dropdownMonth.setAttribute('value', parsedDate.getMonth());
      this.dropdownYear.setAttribute('value', parsedDate.getFullYear());
    }
  }

  destroy() {
    this.onHandleChangeDropdownMonth();
    this.onListenToDropdownYear();
    this.onListenDatepickerBodyDateChange();
    this.onCancelButtonListenerEnd();
    this.onOkButtonListenerEnd();
  }
}
