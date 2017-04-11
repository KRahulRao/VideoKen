var app = angular.module("play",[]);

app.controller("playcontrol",function($scope){

count = 0;
var myList = function(object){

 listArray = [];
 listArray.push(object);
 count++;
};

$scope.addToList = function(){
  var object = {};
  object.strt=$scope.startTime;
  object.end=$scope.endTime;
  object.url=$scope.url;
  object.title =$scope.title;
  alert("The following values willbe added-> "+ object.title);
  myList(object);
  $scope.startTime=null;
  $scope.endTime=null;
  $scope.url=null;
  //alert("Object has been addded");
};
  $scope.dispCache = function(){
    var i;
    for(i=1;i<=listArray.length;i++){

    $scope.dispLst = [{ title:listArray[i].title}];
}
$scope.dispVid(){
  for(i=1;i<=listArray.length;i++){

  $scope.dispLst = [{ title:listArray[i].url}];
}
}
/*
  var i;
  for(i=0;i<=listArray.length;i++){
    $scope.dispLst = listArray[i];
  } */
};

});
