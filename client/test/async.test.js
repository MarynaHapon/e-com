const fetch = require('node-fetch');
const swapi = require('./async');

describe('calls swapi to get people', () => {
  it('fetch people', (done) => {
    expect.assertions(1);

    swapi.fetchPeople(fetch).then((data) => {
      expect(data.count)
        .toEqual(87);
      done();
    })
  });

  it('await people', (done) => {
    expect.assertions(2);

    swapi.awaitPeople(fetch).then((data) => {
      expect(data.count)
        .toEqual(87);
      expect(data.results.length)
        .toBeGreaterThan(5);
      done();
    })
  });

  it('is returned count and results', () => {
    expect.assertions(4);

    const mockFetch = jest
      .fn()
      .mockReturnValue(Promise.resolve({
        json: () => Promise.resolve({
          count: 85,
          results: [ 0, 1, 2, 3, 4, 5 ],
        })
      }));

    return swapi
      .fetchPeople(mockFetch)
      .then((data) => {
        expect(mockFetch.mock.calls.length)
          .toBe(1);
        expect(mockFetch)
          .toBeCalledWith('https://swapi.py4e.com/api/people');
        expect(data.count)
          .toEqual(85);
        expect(data.results.length)
          .toBeGreaterThan(5);
      })
  });
});
