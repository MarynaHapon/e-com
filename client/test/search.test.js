const search = require('./search');

const dbMock = [
  'dog.com',
  'disney.com',
  'cats.com',
  'flowers.com',
  'animals.com',
];

describe('search func', () => {
  it('is error searching', () => {
    expect(search('test', dbMock)).toEqual([]);
  });

  it('is success searching', () => {
    expect(search('cats', dbMock)).toEqual(['cats.com']);
  });

  it('is undefined searching', () => {
    expect(search(undefined, dbMock)).toEqual([]);
  });

  it('is null searching', () => {
    expect(search(null, dbMock)).toEqual([]);
  });

  it('is returned 3 items', () => {
    expect(search('.com', dbMock).length).toEqual(3);
  });
});

