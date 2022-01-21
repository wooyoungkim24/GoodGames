'use strict';
const darkSouls3Desc = "'Dark Souls III successfully replicates the winning formula of the Souls series, a wondrous combination of majestic boss battles, incredible layered environments full of secrets, and precise combat that can make other action RPGs difficult to play once you've mastered the art.' 9.25/10 - Game Informer";
const darkSoulsImgLink = "https://upload.wikimedia.org/wikipedia/en/b/bb/Dark_souls_3_cover_art.jpg"
const redDeadDesc = "Winner of over 175 Game of the Year Awards and recipient of over 250 perfect scores, RDR2 is the epic tale of outlaw Arthur Morgan and the infamous Van der Linde gang, on the run across America at the dawn of the modern age. Also includes access to the shared living world of Red Dead Online."
const redDeadImgLink = "https://api.cdkeybay.com/static/bbc99843f82c0212477c258f.jpg"
const mHRDesc = "Rise to the challenge and join the hunt! In Monster Hunter Rise, the latest installment in the award-winning and top-selling Monster Hunter series, you'll become a hunter, explore brand new maps and use a variety of weapons to take down fearsome monsters as part of an all-new storyline."
const mHRImgLink = "https://cdn.cloudflare.steamstatic.com/steam/apps/1446780/ss_f8249da14987e3c2d10fd4024736f28774c713da.1920x1080.jpg?t=1642465111&"
module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Games', [
     {title: "Dark Souls 3", description: darkSouls3Desc, genre:"Souls-Like", publisher: "FromSoftware Inc.", yearOfRelease: 2016, imgLink: darkSoulsImgLink, createdAt: new Date(),updatedAt: new Date()},
     {title: "Red Dead Redemption 2", description: redDeadDesc, genre:"Open World Adventure", publisher: "Rockstar Games", yearOfRelease: 2019, imgLink: redDeadImgLink, createdAt: new Date(),updatedAt: new Date()},
     {title: "Monster Hunter Rise", description: mHRDesc, genre:"Action", publisher: "CAPCOM CO. Ltd.", yearOfRelease: 2022, imgLink: mHRImgLink, createdAt: new Date(),updatedAt: new Date()},
   ],{});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Games', null, {});
  }
};
