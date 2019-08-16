import { handlerIndex } from './controller';
import { advanceTo, clear } from 'jest-date-mock';

describe('Default', () => {
  it('handlerIndex', () => {
    advanceTo(new Date(2019, 8, 16, 0, 0, 0)); // reset to date time.
    let data = {};

    const now = new Date();
    const res = {
      json: d => {
        data = d.data;
      }
    };

    handlerIndex(null, res);

    expect(data.date).toEqual(now);

    clear();
  });
});
