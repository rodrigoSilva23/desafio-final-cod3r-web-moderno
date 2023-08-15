exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        {
          name: "admin",
          email: "admin@email.com",
          admin: true,
          status: "active",
          password: "123456",
        },
        {
          name: "ana",
          email: "ana@email.com",
          admin: false,
          status: "active",
          password: "123456",
        },
      ]);
    });


    
};
