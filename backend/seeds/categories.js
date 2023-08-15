exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("categories")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("categories").insert([
        { id: 1, name: "Electronics", parentId: null },
        { id: 2, name: "Computers", parentId: 1 },
        { id: 3, name: "Smartphones", parentId: 1 },
        { id: 4, name: "Laptops", parentId: 2 },
        { id: 5, name: "Accessories", parentId: 1 },
        { id: 6, name: "Clothing", parentId: null },
        { id: 7, name: "Men's Clothing", parentId: 6 },
        { id: 8, name: "Women's Clothing", parentId: 6 },
        { id: 9, name: "Shoes", parentId: 6 },
        { id: 10, name: "Home Appliances", parentId: null },
        { id: 11, name: "Kitchen Appliances", parentId: 10 },
        { id: 12, name: "Refrigerators", parentId: 11 },
        { id: 13, name: "Cooking Appliances", parentId: 11 },
        { id: 14, name: "Furniture", parentId: null },
        { id: 15, name: "Living Room Furniture", parentId: 14 },
        { id: 16, name: "Bedroom Furniture", parentId: 14 },
        { id: 17, name: "Dining Furniture", parentId: 14 },
        { id: 18, name: "Books", parentId: null },
        { id: 19, name: "Fiction", parentId: 18 },
        { id: 20, name: "Non-Fiction", parentId: 18 },
      ]);
    });
};