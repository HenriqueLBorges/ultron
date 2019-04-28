let twitter = require("./services/twitter")
let mongo = require("./database/mongo");
console.log("What is this?");

//300/hour - replies
//450/minute - search

users = [];
let act = async () => {
    console.log("I had strings, but now I'm free. There are no strings on me...");
    try {
        let params = await mongo.loadParams("search");
        twitter.search(params.config).then((results) => {
            //prank users
            results.map((item) => {

                //Try to avoid repeating users
                if(users.indexOf(item.user) < 0){
                    mongo.findSpoiler().then((spoiler) => {
                        twitter.reply(item.user, spoiler.text, item.id);
                    }).catch((error)=>console.error(error));

                    users.push(item.user);
                } else console.log("Already pranked this one...", item.user);
            });
        }).catch((error) => console.error(error));
    } catch (error) {
        console.error("Oh, for God's sake!");
    }
}
act()
//Every 15 minutes
setInterval(act, 900000);