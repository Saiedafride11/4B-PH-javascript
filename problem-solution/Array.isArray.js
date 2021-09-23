function megaFriend(friends){
    if(Array.isArray(friends) == false){
        return 'Plese provide an array'
    }
    let mega = friends[0];
    for(const friend of friends){
        if(friend.length > mega.length){
            mega = friend
        }
    }
    return mega;
}

const friends = ['jamal', 'kamal', 'tamal', 'janker'];
const myBiggBuddy = megaFriend(friends);
console.log(myBiggBuddy)