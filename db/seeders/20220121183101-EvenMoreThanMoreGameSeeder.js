'use strict';

const rocketLeagueDesc = "Rocket League is a vehicular soccer video game developed and published by Psyonix. The game was first released for Microsoft Windows and PlayStation 4 in July 2015, with ports for Xbox One and Nintendo Switch being released later on";
const rocketLeagueImgLink = "https://theme.zdassets.com/theme_assets/1094427/189dce017fb19e3ca1b94b2095d519cc514df22c.jpg"
const cyberpunkDesc = "Cyberpunk 2077 is an action role-playing video game developed and published by CD Projekt. The story takes place in Night City, an open world set in the Cyberpunk universe."
const cyberpunkImgLink = "https://upload.wikimedia.org/wikipedia/en/9/9f/Cyberpunk_2077_box_art.jpg"
const hZDDesc = "Horizon Zero Dawn is a 2017 action role-playing game developed by Guerrilla Games and published by Sony Interactive Entertainment. The plot follows Aloy, a young hunter in a world overrun by machines, who sets out to uncover her past."
const hZDImgLink = "https://assets-prd.ignimgs.com/2021/12/08/horizonzerodawn-1638924347525.jpg"
const sekiroDesc = "Sekiro: Shadows Die Twice is a 2019 action-adventure game developed by FromSoftware and published by Activision. The game follows a shinobi known as Wolf as he attempts to take revenge on a samurai clan who attacked him and kidnapped his lord.";
const sekiroImgLink = "https://www.powerpyx.com/wp-content/uploads/sekiro-shadows-die-twice-wallpaper.jpg"
const hollowKnightDesc = "Hollow Knight is a 2017 Metroidvania action-adventure game developed and published by Team Cherry. It was released for Microsoft Windows, macOS, and Linux in 2017, and for the Nintendo Switch, PlayStation 4, and Xbox One in 2018. Development was partially funded through a Kickstarter crowdfunding campaign, raising over A$57,000 by the end of 2014."
const hollowKnightImgLink = "https://cdn.akamai.steamstatic.com/steam/apps/367520/capsule_616x353.jpg?t=1625363925";
const minecraftDesc = 'Minecraft is a sandbox video game developed by the Swedish video game developer Mojang Studios. The game was created by Markus "Notch" Persson in the Java programming language.';
const minecraftImgLink = "https://dkofva0t6jnyn.cloudfront.net/sites/default/files/styles/amp_blog_image_large/public/consumer/blog/csm-blog/parentsultimateguide-minecraft-blog.jpeg"
const botwDesc = "The Legend of Zelda: Breath of the Wild is a 2017 action-adventure game developed and published by Nintendo for the Nintendo Switch and Wii U consoles. Breath of the Wild is the nineteenth installment of The Legend of Zelda franchise and is set at the end of the Zelda timeline."
const botwImgLink = "https://assets.nintendo.com/image/upload/c_pad,f_auto,h_613,q_auto,w_1089/ncom/en_US/games/switch/t/the-legend-of-zelda-breath-of-the-wild-switch/hero?v=2021120201"
const goldenEyeDesc = "GoldenEye 007 is a 1997 first-person shooter developed by Rare and published by Nintendo for the Nintendo 64."
const goldenEyeImgLink = "https://assets-prd.ignimgs.com/2021/12/06/goldeneye-rare-1638823499676.jpg"
const overwatchDesc = 'Overwatch is a 2016 team-based multiplayer first-person shooter game developed and published by Blizzard Entertainment. Described as a "hero shooter", Overwatch assigns players into two teams of six, with each player selecting from a large roster of characters, known as "heroes", with unique abilities.';
const overwatchImgLink = "https://overwatch2-static.playoverwatch.com/a38a816d1c18852caa3de8dcee694643f1555d1d/static/images/share.jpg";
// const portalDesc = 'Portal is a 2007 puzzle-platform game developed and published by Valve. It was released in a bundle, The Orange Box, for Windows, Xbox 360 and PlayStation 3, and has been since ported to other systems, including Mac OS X, Linux, and Android.';
// const portalImgLink = 'https://www.gamespot.com/a/uploads/original/gamespot/images/2007/186/806091-934384_20070706_005.jpg';

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
      { title: "Hollow Knight", description: hollowKnightDesc, genre: "Action-adventure", publisher: "Team Cherry", yearOfRelease: 2017, imgLink: hollowKnightImgLink, createdAt: new Date(), updatedAt: new Date() },
      { title: "Minecraft", description: minecraftDesc, genre: "Sandbox", publisher: "Mojang Studios", yearOfRelease: 2011, imgLink: minecraftImgLink, createdAt: new Date(), updatedAt: new Date() },
      { title: "The Legend of Zelda: Breath of the Wild", description: botwDesc, genre: "Action-adventure", publisher: "Nintendo", yearOfRelease: 2017, imgLink: botwImgLink, createdAt: new Date(), updatedAt: new Date() },
      { title: "GoldenEye 007", description: goldenEyeDesc, genre: "First-Person Shooter", publisher: "Rare", yearOfRelease: 1997, imgLink: goldenEyeImgLink, createdAt: new Date(), updatedAt: new Date() },
      { title: "Overwatch", description: overwatchDesc, genre: "First-Person Shooter", publisher: "Blizzard Entertainment", yearOfRelease: 2016, imgLink: overwatchImgLink, createdAt: new Date(), updatedAt: new Date() },
      // { title: "Portal", description: portalDesc, genre: "First-Person Shooter", publisher: "Valve Corporation", yearOfRelease: 2007, imgLink: portalImgLink, createdAt: new Date(), updatedAt: new Date() },
    ], {});
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
