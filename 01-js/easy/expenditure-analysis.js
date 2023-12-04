/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  const categoryTotals = {};

  // Sum up the prices for each category
  for (const transaction of transactions) {
      const { category, price } = transaction;

      if (!categoryTotals[category]) {
          categoryTotals[category] = 0;
      }

      categoryTotals[category] += price;
  }

  // Convert the totals into the expected output format
  const output = [];
  for (const category in categoryTotals) {
      output.push({ category: category, totalSpent: categoryTotals[category] });
  }

  return output;
}


module.exports = calculateTotalSpentByCategory;
