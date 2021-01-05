'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        /*
          Add altering commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
          return queryInterface.bulkInsert('People', [{
            name: 'John Doe',
            isBetaMember: false
          }], {});
        */

        return queryInterface.bulkInsert('Reviews', [{
                userId: 1,
                recipeId: 1,
                revContent: "Absolute garbage. I literally threw up and it tasted better than the dish did.",
                rating: 0,
            },
            {
                userId: 1,
                recipeId: 2,
                revContent: "MMMMMPH.",
                rating: 5,
            },
            {
                userId: 2,
                recipeId: 3,
                revContent: "Flippin yummy, but had to add extra salt.",
                rating: 4,
            },
            {
                userId: 3,
                recipeId: 1,
                revContent: "Eh.",
                rating: 2,
            },
            {
                userId: 4,
                recipeId: 4,
                revContent: "WHOOP WHOOP FLAVOR IN THE HOUSE.",
                rating: 5,
            },
            {
                userId: 5,
                recipeId: 5,
                revContent: "I can't.",
                rating: 0,
            },
            {
                userId: 2,
                recipeId: 2,
                revContent: "Worse than garbage. I live in a trash can and this still doesn't belong in my house.",
                rating: 0,
            },
            {
                userId: 2,
                recipeId: 3,
                revContent: "VERY VERY DISAPPOINTING. I made this for my best friend's wedding because she loves this type of stuff. But the cook time was off and everyone ended up eating it raw. The wedding was in the mountains so there were no toilets for hours, and now I am paying for cleaning the interiors of EVERY VEHICLE IN ATTENDANCE. I am traumatized and heartbroken. But it looked good.",
                rating: 1,
            },
            {
                userId: 3,
                recipeId: 4,
                revContent: "Why anyone would ever make this is beyond me.",
                rating: 0,
            },
            {
                userId: 4,
                recipeId: 2,
                revContent: "Pretty gosh dang tasty! 10x better than roadkill stew!!!",
                rating: 4,
            },
            {
                userId: 5,
                recipeId: 5,
                revContent: "ak;lsjdf;lkajsd;lfkjasd;lfkj having a siezure becuase this food is nearly deadly lk;asjdlfas.",
                rating: 0,
            },
            {
                userId: 1,
                recipeId: 1,
                revContent: "I still can't.",
                rating: 2,
            },
            {
                userId: 1,
                recipeId: 6,
                revContent: "Absolute garbage. I literally threw up and it tasted better than the dish did.",
                rating: 0,
            },
            {
                userId: 2,
                recipeId: 7,
                revContent: "MMMMMPH.",
                rating: 5,
            },
            {
                userId: 3,
                recipeId: 8,
                revContent: "Flippin yummy, but had to add extra salt.",
                rating: 4,
            },
            {
                userId: 4,
                recipeId: 1,
                revContent: "Eh.",
                rating: 2,
            },
            {
                userId: 9,
                recipeId: 4,
                revContent: "WHOOP WHOOP FLAVOR IN THE HOUSE.",
                rating: 5,
            },
            {
                userId: 6,
                recipeId: 5,
                revContent: "I can't.",
                rating: 0,
            },
            {
                userId: 7,
                recipeId: 2,
                revContent: "Worse than garbage. I live in a trash can and this still doesn't belong in my house.",
                rating: 0,
            },
            {
                userId: 3,
                recipeId: 8,
                revContent: "IF I HAD A DOLLAR FOR EVERY TIME I SAID 'WOW THIS IS SO GDANG GOOD', WHILE EATING THIS, I WOULD BE BROKE. THE ONLY REASON THIS GOT ABOVE A ZERO IS BECAUSE I GOT TO IGNORE MY WIFE AND KIDS WHILE MAKING IT. SWEET RELIEF.",
                rating: 1,
            },
            {
                userId: 1,
                recipeId: 9,
                revContent: "Why anyone would ever make this is beyond me.",
                rating: 0,
            },
            {
                userId: 5,
                recipeId: 7,
                revContent: "Pretty gosh dang tasty! 10x better than roadkill stew!!!",
                rating: 4,
            },
            {
                userId: 6,
                recipeId: 10,
                revContent: "ak;lsjdf;lkajsd;lfkjasd;lfkj having a siezure becuase this food is nearly deadly lk;asjdlfas.",
                rating: 0,
            },
            {
                userId: 2,
                recipeId: 6,
                revContent: "I still can't.",
                rating: 2,
            },
        ], {});

    },

    down: (queryInterface, Sequelize) => {
        /*
          Add reverting commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
          return queryInterface.bulkDelete('People', null, {});
        */

        return queryInterface.bulkDelete('Reviews', null, {});

    }
};