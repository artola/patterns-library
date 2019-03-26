import { DatePickerAccessor } from './datepicker.accessor';

fixture('Datepicker').page('http://localhost:9999/iframe.html?id=molecules-datepicker--datepicker');

test('Should select february the 13th and then the 14th', async t => {
  const datePickerAccessor = new DatePickerAccessor(t, 'datepicker');

  await datePickerAccessor.chooseFebruary();
  await datePickerAccessor.selectDayOfCurrentMonth(13);
  await datePickerAccessor.selectDayOfCurrentMonth(14);

  await datePickerAccessor.assertYear(2020);
  await datePickerAccessor.assertMonth('Februar');
  await datePickerAccessor.assertDay(14);
});

test('Should select the first of march from within the february view', async t => {
  const datePickerAccessor = new DatePickerAccessor(t, 'datepicker');

  await datePickerAccessor.chooseFebruary();
  await datePickerAccessor.selectDayOfOutsideMonth(1);

  await datePickerAccessor.assertYear(2020);
  await datePickerAccessor.assertMonth('März');
  await datePickerAccessor.assertDay(1);
});

test('Should select the 31th of january from within the february view', async t => {
  const datePickerAccessor = new DatePickerAccessor(t, 'datepicker');

  await datePickerAccessor.chooseFebruary();
  await datePickerAccessor.selectDayOfOutsideMonth(31);

  await datePickerAccessor.assertYear(2020);
  await datePickerAccessor.assertMonth('Januar');
  await datePickerAccessor.assertDay(31);
});

test('Should correctly handle leap year', async t => {
  const datePickerAccessor = new DatePickerAccessor(t, 'datepicker');

  await datePickerAccessor.chooseFebruary();
  await datePickerAccessor.selectDayOfCurrentMonth(29);

  await datePickerAccessor.assertYear(2020);
  await datePickerAccessor.assertMonth('Februar');
  await datePickerAccessor.assertDay(29);
});

fixture('Datepicker').page('http://localhost:9999/iframe.html?id=molecules-datepicker--datepicker-translated');

test('Should display month in english', async t => {
  const datePickerAccessor = new DatePickerAccessor(t, 'datepicker-translated');

  await datePickerAccessor.chooseFebruary();

  await datePickerAccessor.assertMonth('February');
});

fixture('Datepicker').page('http://localhost:9999/iframe.html?id=molecules-datepicker--datepicker-input');

test('Should close calendar as soon as another one is open', async t => {
  const datePickerAccessor2019 = new DatePickerAccessor(t, 'datepicker-input-2019');
  await datePickerAccessor2019.openCalendar();

  const datePickerAccessor2020 = new DatePickerAccessor(t, 'datepicker-input-2020');
  await datePickerAccessor2020.openCalendar();

  await datePickerAccessor2020.assertIsOpen();
  await datePickerAccessor2019.assertIsClosed();
});

test('Should write date into input field for input calendars', async t => {
  const datePickerAccessor2019 = new DatePickerAccessor(t, 'datepicker-input-2019');
  await datePickerAccessor2019.openCalendar();

  await datePickerAccessor2019.chooseFebruary();
  await datePickerAccessor2019.selectDayOfCurrentMonth(14);
  await datePickerAccessor2019.submit();

  // TODO Enable as soon as datepicker is fixed
  // await datePickerAccessor2019.assertDatepickerInput('14.02.2019');
});
