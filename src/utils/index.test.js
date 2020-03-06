import { kToF, kToC, getWeatherDataGroupByDate } from './index';

describe('Utils: kToF', () => {
  test('it should return expected result', () => {
    expect(kToF(260)).toStrictEqual(8);
  });
});

describe('Utils: kToC', () => {
  test('it should return expected result', () => {
    expect(kToC(280)).toStrictEqual(7);
  });
});

describe('Utils: getWeatherDataGroupByDate', () => {
  test('it should return expected result', () => {
    expect(
      getWeatherDataGroupByDate([
        {
          main: {
            temp: 276.69,
          },
          dt_txt: '2020-03-05 18:00:00',
        },
        {
          main: {
            temp: 276.05,
          },
          dt_txt: '2020-03-05 21:00:00',
        },
        {
          main: {
            temp: 275.63,
          },
          dt_txt: '2020-03-06 00:00:00',
        },
      ]),
    ).toStrictEqual({
      '5_date': {
        date: new Date('2020-03-05T12:30:00.000Z'),
        temperatureCSum: 7,
        temperatureFSum: 75,
        list: [
          {
            main: {
              temp: 276.69,
              tempC: 4,
              tempF: 38,
            },
            dt_txt: '2020-03-05 18:00:00',
          },
          {
            main: {
              temp: 276.05,
              tempC: 3,
              tempF: 37,
            },
            dt_txt: '2020-03-05 21:00:00',
          },
        ],
      },
      '6_date': {
        date: new Date('2020-03-05T18:30:00.000Z'),
        temperatureCSum: 2,
        temperatureFSum: 36,
        list: [
          {
            main: {
              temp: 275.63,
              tempC: 2,
              tempF: 36,
            },
            dt_txt: '2020-03-06 00:00:00',
          },
        ],
      },
    });
  });
});
