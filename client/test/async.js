const fetch = require('node-fetch');

const fetchPeople = fetch => {
  return fetch('https://swapi.py4e.com/api/people')
    .then(res => res.json())
    .then(data => ({
      count: data.count,
      results: data.results,
    }));
};

const awaitPeople = async (fetch) => {
  const request = await fetch('https://swapi.py4e.com/api/people');
  const data = await request.json();

  return ({
    count: data.count,
    results: data.results,
  })
};

module.exports = {
  fetchPeople,
  awaitPeople,
};
