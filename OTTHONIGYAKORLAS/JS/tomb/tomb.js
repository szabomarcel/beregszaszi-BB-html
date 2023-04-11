var myFriends = ["Sophia", "John", "Leif", "Winston"];
fill(255, 0, 0);
var friendNum = 0;
while(friendNum < myFriends.length){
    text(myFriends[friendNum], 10, 30 + friendNum * 30); 
    friendNum++;
}
for (var friendNum = 0; friendNum < myFriends.length; friendNum++){
    text(myFriends[friendNum], 87, 30 + friendNum * 30);
}