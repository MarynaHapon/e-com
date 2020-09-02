const search = (input, db) => {
  const includeInputSearch = websites => websites.includes(input);
  const matches = db.filter(includeInputSearch);

  return matches.length > 3 ? matches.slice(0, 3) : matches;
};

module.exports = search;
