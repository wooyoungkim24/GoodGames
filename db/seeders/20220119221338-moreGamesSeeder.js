'use strict';
const skyrimDesc = "Winner of more than 200 Game of the Year Awards, Skyrim Special Edition brings the epic fantasy to life in stunning detail. The Special Edition includes the critically acclaimed game and add-ons with all-new features like remastered art and effects, volumetric god rays, dynamic depth of field, screen-space reflections, and more. Skyrim Special Edition also brings the full power of mods to the PC and consoles. New quests, environments, characters, dialogue, armor, weapons and more with Mods, there are no limits to what you can experience."
const skyrimLink ="https://assets-prd.ignimgs.com/2021/08/19/elder-scrolls-skyrim-button-2017-1629409446732.jpg?width=300"
const godOfWarDesc = "His vengeance against the Gods of Olympus years behind him, Kratos now lives as a man in the realm of Norse Gods and monsters. It is in this harsh, unforgiving world that he must fight to survive… and teach his son to do the same."
const godOfWarLink = "https://cdn.cloudflare.steamstatic.com/steam/apps/1593500/header.jpg?t=1642526157"
const valorantDesc = "Blend your style and experience on a global, competitive stage. You have 13 rounds to attack and defend your side using sharp gunplay and tactical abilities. And, with one life per-round, you'll need to think faster than your opponent if you want to survive. Take on foes across Competitive and Unranked modes as well as Deathmatch and Spike Rush."
const valorantLink = "https://cdn.mos.cms.futurecdn.net/E56FpaSWYShMwByomeiN43-970-80.png.webp"

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Games', [
     {title: "Skyrim", description: skyrimDesc, genre:"RPG", publisher: "Bethesda Softworks", yearOfRelease: 2016, imgLink: skyrimLink, createdAt: new Date(),updatedAt: new Date()},
     {title: "God of War 4", description: godOfWarDesc, genre:"Adventure", publisher: "Santa Monica Studio", yearOfRelease: 2022, imgLink: godOfWarLink, createdAt: new Date(),updatedAt: new Date()},
     {title: "Valorant", description: valorantDesc, genre:"Tactical Shooter", publisher: "RIOT Games", yearOfRelease: 2020, imgLink: valorantLink, createdAt: new Date(),updatedAt: new Date()},
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
