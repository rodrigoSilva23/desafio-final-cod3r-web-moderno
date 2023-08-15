exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("articles")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("articles").insert([
        {
          id: 1,
          name: "Introduction to Electronics",
          description: "Learn the basics of electronics",
          imageUrl: "https://example.com/electronics.jpg",
          content: Buffer.from("Content of the article 1"),
          userId: 1,
          categoryId: 1
        },
        {
          id: 2,
          name: "Top Smartphones of the Year",
          description: "Check out the latest smartphones",
          imageUrl: "https://example.com/smartphones.jpg",
          content: Buffer.from("Content of the article 2"),
          userId: 2,
          categoryId: 3
        },
        {
          id: 3,
          name: "Best Laptop Picks",
          description: "Our recommendations for laptops",
          imageUrl: "https://example.com/laptops.jpg",
          content: Buffer.from("Content of the article 3"),
          userId: 1,
          categoryId: 4
        },
        {
          id: 4,
          name: "Fashion Trends for Men",
          description: "Stay stylish with the latest trends",
          imageUrl: "https://example.com/mens-fashion.jpg",
          content: Buffer.from("Content of the article 4"),
          userId: 2,
          categoryId: 7
        },
        {
          id: 5,
          name: "Cooking Appliances Buying Guide",
          description: "Choose the right appliances for your kitchen",
          imageUrl: "https://example.com/appliances.jpg",
          content: Buffer.from("Content of the article 5"),
          userId: 1,
          categoryId: 13
        },
        {
          id: 6,
          name: "The Art of Interior Design",
          description: "Transform your living space with these tips",
          imageUrl: "https://example.com/interior-design.jpg",
          content: Buffer.from("Content of the article 6"),
          userId: 2,
          categoryId: 14
        },
        {
          id: 7,
          name: "Health and Wellness Tips",
          description: "Stay fit and healthy with these suggestions",
          imageUrl: "https://example.com/health.jpg",
          content: Buffer.from("Content of the article 7"),
          userId: 1,
          categoryId: null
        },
        {
          id: 8,
          name: "Exploring Fiction Genres",
          description: "Dive into the world of fiction literature",
          imageUrl: "https://example.com/fiction.jpg",
          content: Buffer.from("Content of the article 8"),
          userId: 2,
          categoryId: 19
        },
        {
          id: 9,
          name: "Home Workout Ideas",
          description: "Stay active with these home exercise routines",
          imageUrl: "https://example.com/workout.jpg",
          content: Buffer.from("Content of the article 9"),
          userId: 1,
          categoryId: 2
        },
        {
          id: 10,
          name: "Guide to Outdoor Photography",
          description: "Capture stunning outdoor scenes with your camera",
          imageUrl: "https://example.com/photography.jpg",
          content: Buffer.from("Content of the article 10"),
          userId: 2,
          categoryId: 4
        },
      ]);
    });
};
