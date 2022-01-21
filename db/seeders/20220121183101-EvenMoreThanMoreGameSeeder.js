'use strict';

const rocketleagueDesc = "Rocket League is a vehicular soccer video game developed and published by Psyonix. The game was first released for Microsoft Windows and PlayStation 4 in July 2015, with ports for Xbox One and Nintendo Switch being released later on";
const rocketLeagueImgLink = "https://theme.zdassets.com/theme_assets/1094427/189dce017fb19e3ca1b94b2095d519cc514df22c.jpg"
const cyberPunkdDesc = "Cyberpunk 2077 is an action role-playing video game developed and published by CD Projekt. The story takes place in Night City, an open world set in the Cyberpunk universe."
const cyberpunkImgLink = "https://upload.wikimedia.org/wikipedia/en/9/9f/Cyberpunk_2077_box_art.jpg"
const hZDDesc = "Horizon Zero Dawn is a 2017 action role-playing game developed by Guerrilla Games and published by Sony Interactive Entertainment. The plot follows Aloy, a young hunter in a world overrun by machines, who sets out to uncover her past."
const hZDImgLink = "https://assets-prd.ignimgs.com/2021/12/08/horizonzerodawn-1638924347525.jpg"
const sekiroDesc = "Sekiro: Shadows Die Twice is a 2019 action-adventure game developed by FromSoftware and published by Activision. The game follows a shinobi known as Wolf as he attempts to take revenge on a samurai clan who attacked him and kidnapped his lord.";
const skiroImgLink = "https://www.powerpyx.com/wp-content/uploads/sekiro-shadows-die-twice-wallpaper.jpg"

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
    return queryInterface.bulkInsert('Games', [
      { title: "Rocket League", description: rocketLeagueDesc, genre: "Sports", publisher: "Psyonix", yearOfRelease: 2015, imgLink: rocketLeagueImgLink, createdAt: new Date(), updatedAt: new Date() },
      { title: "Cyberpunk 2077", description: cyberpunkDesc, genre: "Action RPG", publisher: "CD Projekt RED", yearOfRelease: 2020, imgLink: cyberpunkImgLink, createdAt: new Date(), updatedAt: new Date() },
      { title: "Horizon Zero Dawn", description: hZDDesc, genre: "Action RPG", publisher: "Guerilla Games", yearOfRelease: 2017, imgLink: hZDImgLink, createdAt: new Date(), updatedAt: new Date() },
      { title: "Sekiro: Shadows Die Twice", description: sekiroDesc, genre: "Action-adventure", publisher: "FromSoftware Inc.", yearOfRelease: 2017, imgLink: sekiroImgLink, createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
