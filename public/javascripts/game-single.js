// const db = require('../db/models');

document.addEventListener("DOMContentLoaded", async () => {
    try {

        const option = document.querySelector("#remove")
        option.remove();

    } catch (e) {
        console.error(e);
    }
});
