//feetToMile

function feetToMile(mile){
    var feet = mile * 5280;
    return feet;
}
var result = feetToMile(4);
console.log(result);

//woodCalculator

function woodCalculator(chair, table, bed){
    var chairCount = chair * 1;
    var tableCount = table * 3;
    var bedCount = bed * 5;
    var totalWood = chairCount + tableCount + bedCount;
    return totalWood;
} 
var woodResult = woodCalculator(2, 5, 6);
console.log(woodResult);

//brickCalculator

function brickCalculator(floor){
    if (floor < 0){
        var brickResult = "Error ! Negetive Value is not accepted";
    }
    else if (floor > 0 && floor <= 10){
        var firstTenFloor = 1000 * 15 * floor;
        var brickResult = firstTenFloor; 
    }
    else if (floor >= 11 && floor <= 20){
        var nextTenFloor = (1000 * 15 * 10) +(1000 *12 * (floor - 10));
        var brickResult = nextTenFloor;
    }
    else{
        var finalFloors = (1000 * 15 * 10) + (1000 * 12 * 10) + (1000 * 10 * (floor - 20));
        var brickResult = finalFloors;
    }
    
    return brickResult;

}
var result = brickCalculator(20);
console.log(result);


//tinyFriend

function tinyFriend(friendsName) {
    var min = friendsName[0].length;
    var shortesname = friendsName[0];
    for (var i = 0; i < friendsName.length; i++){
        if (friendsName[i].length < min && friendsName[i]!=="" ) {
            min = friendsName[i].length;
            shortesname = friendsName[i];
        }
    }
    return shortesname;
}
var allFriends = tinyFriend(["jomipoti", "san", "pinky", "piku", "mono"]);
console.log(allFriends);