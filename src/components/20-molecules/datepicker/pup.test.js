/* eslint-disable */

const puppeteer = require('puppeteer');

let browser;
let page;

jest.setTimeout(300000);

const config = {
  // headless: false,
  executablePath:
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  // devtools: true,
  // slowMo: 1000,
};

beforeAll(async () => {
  browser = await puppeteer.launch(config);
  page = await browser.newPage();
});

const chooseMonthByIndex = async monthIndex => {
  await page.click('.js-datepicker__dropdown-month .js-dropdown__toggle');
  await page.click(
    `.js-datepicker__dropdown-month .js-dropdown__content .js-dropdown__button[data-index="${monthIndex}"]`
  );
};

const getSelectedMonth = async () => {
  return await page.evaluate(
    () =>
      document.querySelector(
        '.js-datepicker__dropdown-month .js-dropdown__title'
      ).textContent
  );
};

const clickCalendarDayOfCurrentMonth = async day => {
  await page.evaluate(day => {
    document
      .querySelector(
        `button[class*="m-datepicker__calendar-current-month"][data-day="${day}"]`
      )
      .click();
  }, day);
};

const clickCalendarDayOutsideMonth = async day => {
  await page.evaluate(day => {
    debugger;
    document
      .querySelector(
        `button[class*="m-datepicker__calendar-not-current-month"][data-day="${day}"]`
      )
      .click();
  }, day);
};

const isDaySelected = async day => {
  return await page.evaluate(day => {
    return Object.values(
      document.querySelector(
        `button[class*="m-datepicker__calendar-current-month"][data-day="${day}"]`
      ).classList
    ).includes('m-datepicker__calendar-selected-day');
  }, day);
};

const assertDayIsSelected = async day => {
  return await page.waitFor(
    `button[data-day="${day}"][class*="m-datepicker__calendar-current-month"][class*="m-datepicker__calendar-selected-day"]`
  );
};

const assertDayIsDeselected = async day => {
  return await page.waitFor(
    `button[data-day="${day}"][class*="m-datepicker__calendar-current-month"]:not([class*="m-datepicker__calendar-selected-day"])`
  );
};

const getSelectedYear = async () =>
  await page.evaluate(
    () =>
      document.querySelector(
        '.js-datepicker__dropdown-year .js-dropdown__title'
      ).textContent
  );

describe('Datepicker', () => {
  test('should select February the 13th and then the 14th ', async () => {
    await page.goto(
      'https://patterns.axa.ch/iframe.html?id=components-molecules-datepicker--datepicker',
      { waitUntil: 'networkidle0' }
    );
    await chooseMonthByIndex(10);
    const monthValue = await getSelectedMonth(10);
    expect(monthValue).toBe('Oktober');

    await clickCalendarDayOfCurrentMonth(13);

    await assertDayIsSelected(13);

    const is13thDaySelected = await isDaySelected(13);
    expect(is13thDaySelected).toBe(true);

    const is22thNowDeselected = await isDaySelected(22);
    expect(is22thNowDeselected).toBe(false);

    await clickCalendarDayOfCurrentMonth(14);
    await assertDayIsDeselected(13);

    const isOldDayStillSelected = await isDaySelected(13);
    expect(isOldDayStillSelected).toBe(false);

    const isNewDaySelected = await isDaySelected(14);
    expect(isNewDaySelected).toBe(true);

    const yearValue = await getSelectedYear();
    expect(yearValue).toBe('2020');
  });

  test('should convert the mixed input values (numbers and ranges) from allowedyears prop correctly', async () => {
    await page.goto(
      'https://patterns.axa.ch/iframe.html?id=components-molecules-datepicker--datepicker',
      { waitUntil: 'networkidle0' }
    );
    const dropdownItems = await page.evaluate(() => {
      return document
        .querySelector('.js-datepicker__dropdown-year')
        .getAttribute('items');
    });

    const range = (start, end) =>
      new Array(end - start + 1).fill(undefined).map((_, i) => i + start);

    const expected = range(1971, 2000)
      .concat([2012, 2014])
      .concat(range(2018, 2022))
      .map(year => ({
        selected: year === 2020,
        name: `${year}`,
        value: `${year}`,
      }));

    expect(dropdownItems).toEqual(JSON.stringify(expected));
  });

  test('should select the 31th of january from within the February view', async () => {
    await page.goto(
      'https://patterns.axa.ch/iframe.html?id=components-molecules-datepicker--datepicker',
      { waitUntil: 'networkidle0' }
    );
    await chooseMonthByIndex(2);

    await page.waitFor(
      `button[data-day="31"][class*="m-datepicker__calendar-not-current-month"]`
    );

    await clickCalendarDayOutsideMonth(31);

    const year = await getSelectedYear();
    expect(year).toEqual('2020');

    // Wait until dropdown updated to proper month
    await page.waitFor(
      () =>
        document.querySelector(
          '.js-datepicker__dropdown-month .js-dropdown__title'
        ).textContent === 'Januar'
    );

    const currentMonth = await getSelectedMonth();
    expect(currentMonth).toEqual('Januar');

    const is31thSelected = await isDaySelected(31);
    expect(is31thSelected).toEqual(true);
  });

  test('should select the first of march from within the February view', async () => {
    await page.goto(
      'https://patterns.axa.ch/iframe.html?id=components-molecules-datepicker--datepicker',
      { waitUntil: 'networkidle0' }
    );
    await chooseMonthByIndex(2);

    await page.waitFor(
      `button[data-day="1"][class*="m-datepicker__calendar-not-current-month"]`
    );

    await clickCalendarDayOutsideMonth(1);

    const year = await getSelectedYear();
    expect(year).toEqual('2020');

    // Wait until dropdown updated to proper month
    await page.waitFor(
      () =>
        document.querySelector(
          '.js-datepicker__dropdown-month .js-dropdown__title'
        ).textContent === 'März'
    );

    const currentMonth = await getSelectedMonth();
    expect(currentMonth).toEqual('März');

    const isFirstSelected = await isDaySelected(1);
    expect(isFirstSelected).toEqual(true);
  });

  test('should have a 29th of February in 2020 - should correctly handle leap year', async () => {
    await page.goto(
      'https://patterns.axa.ch/iframe.html?id=components-molecules-datepicker--datepicker',
      { waitUntil: 'networkidle0' }
    );
    // await chooseMonthByIndex(2);

    // await page.waitFor(
    //   `button[data-day="1"][class*="m-datepicker__calendar-not-current-month"]`
    // );

    // await clickCalendarDayOutsideMonth(1);

    // const year = await getSelectedYear();
    // expect(year).toEqual('2020');

    // // Wait until dropdown updated to proper month
    // await page.waitFor(
    //   () =>
    //     document.querySelector(
    //       '.js-datepicker__dropdown-month .js-dropdown__title'
    //     ).textContent === 'März'
    // );

    // const currentMonth = await getSelectedMonth();
    // expect(currentMonth).toEqual('März');

    // const isFirstSelected = await isDaySelected(1);
    // expect(isFirstSelected).toEqual(true);

    await chooseMonthByIndex(2);
    await clickCalendarDayOfCurrentMonth(29);

    const selectedYear = await getSelectedYear();
    expect(selectedYear).toEqual('2020');

    const selectedMonth = await getSelectedMonth();
    expect(selectedMonth).toEqual('Februar');

    await page.waitFor(() =>
      Object.values(
        document.querySelector(
          `button[class*="m-datepicker__calendar-current-month"][data-day="29"]`
        ).classList
      ).includes('m-datepicker__calendar-selected-day')
    );

    const is29thSelected = await isDaySelected(29);
    expect(is29thSelected).toBe(true);
  });

  afterAll(async () => {
    await browser.close();
  });
});
