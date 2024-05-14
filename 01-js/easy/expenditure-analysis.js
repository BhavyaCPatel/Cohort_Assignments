/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  let categoryMap = {}; // Create an empty object to store the total expenditure for each category
  transactions.forEach(element => {
    if (element.category) {
      if (categoryMap[element.category]) {
        categoryMap[element.category] += element.price; // If the category already exists in the object, add the price to the existing total
      } else {
        categoryMap[element.category] = element.price; // If the category doesn't exist in the object, initialize it with the price
      }
    }
  });

  let result = []; 
  for (let category in categoryMap) {
    result.push({ category: category, totalSpent: categoryMap[category] }); // Create an object with the category and total spent, and push it to the result array
  }
  console.log(result);
  return result; // Return the result array
}

module.exports = calculateTotalSpentByCategory;
