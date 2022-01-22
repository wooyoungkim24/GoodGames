// const db = require('../db/models');

document.addEventListener("DOMContentLoaded", async () => {
    try {

        const option = document.querySelector("#remove")
        if(option){
            option.remove();
        }


    } catch (e) {
        console.error(e);
    }
});
