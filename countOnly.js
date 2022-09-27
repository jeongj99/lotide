const countOnly = function(allItems, itemsToCount) {
  if (!Array.isArray(allItems) ||
    (typeof itemsToCount !== 'object' &&
      itemsToCount !== 'null' &&
      !Array.isArray(itemsToCount))) {
    throw new Error('Invalid inputs');
  }
  const results = {};
  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (!results[item]) {
        results[item] = 0;
      }
      results[item]++;
    }
  }
  return results;
};

module.exports = countOnly;