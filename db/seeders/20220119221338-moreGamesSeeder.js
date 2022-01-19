'use strict';
const skyrimDesc = "Winner of more than 200 Game of the Year Awards, Skyrim Special Edition brings the epic fantasy to life in stunning detail. The Special Edition includes the critically acclaimed game and add-ons with all-new features like remastered art and effects, volumetric god rays, dynamic depth of field, screen-space reflections, and more. Skyrim Special Edition also brings the full power of mods to the PC and consoles. New quests, environments, characters, dialogue, armor, weapons and more with Mods, there are no limits to what you can experience."
const skyrimLink ="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ign.com%2Fgames%2Fthe-elder-scrolls-v-skyrim&psig=AOvVaw1biCmOm8BxYsHdZH9Q-Bs7&ust=1642717104186000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCKC3q57svvUCFQAAAAAdAAAAABAD"
const godOfWarDesc = "His vengeance against the Gods of Olympus years behind him, Kratos now lives as a man in the realm of Norse Gods and monsters. It is in this harsh, unforgiving world that he must fight to survive… and teach his son to do the same."


module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Games', [
     {title: Skyrim, description: skyrimDesc, genre:RPG, publisher: "Bethesda Softworks", yearOfRelease: 2016, imgLink: skyrimLink, createdAt: new Date(),updatedAt: new Date()},
     {title: Skyrim, description: skyrimDesc, genre:RPG, publisher: "Bethesda Softworks", yearOfRelease: 2016, imgLink: skyrimLink, createdAt: new Date(),updatedAt: new Date()},
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
