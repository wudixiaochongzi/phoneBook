
var ch=document.documentElement.clientHeight;
var leader=document.querySelector('.leader');
leader.style.height=ch+'px';
var contactSearch=document.querySelector(".contactSearch");
contactSearch.style.cssText+="min-height:"+ch+"px";
var searchInput=document.querySelector("input.search");
var contact=[
    {id:0,name:'张学友',phone:13476933067},
    {id:1,name:'秦始皇',phone:18232155165},
    {id:2,name:'曹操',phone:15935166153},
    {id:3,name:'习近平',phone:13643689685},
    {id:4,name:'金三胖',phone:15234379527},
    {id:5,name:'库里',phone:18234096162},
    {id:6,name:'吴彦祖',phone:18435145300},
    {id:7,name:'刘德华',phone:18335164970},
    {id:8,name:'爱新觉罗 皇太极',phone:18235140422},
    {id:9,name:'奥巴马',phone:15856546829},
    {id:10,name:'a.韦德',phone:18289224566},
    {id:11,name:'李冰冰',phone:15246765255},
    {id:12,name:'张家辉',phone:17702657954}
];
contact.forEach(function(o,i){
    o.enName=pinyin.getFullChars(o.name);
});
//console.log(contact);
var phoneBook=angular.module('phoneBook',[]);
phoneBook.filter('isFirst',function(){
    return function (obj,f) {
        var arr=[];
        angular.forEach(obj,function(o,i){
            if (o.enName.charAt(0).toUpperCase()==f){
                arr.push(o);
            }
        });
        return arr;
    }
});
phoneBook.controller('contCtrl',['$scope',function($scope){
    $scope.contacts=contact;
    //console.log($scope.contacts);
    $scope.num= $scope.contacts.length;
    $scope.first=[];
    angular.forEach( $scope.contacts,function(o,i){
        $scope.first.push(o.enName.charAt(0).toUpperCase());
        function unique(arr) {
            var result = [], hash = {};
            for (var i = 0, elem; (elem = arr[i]) != null; i++) {
                if (!hash[elem]) {
                    result.push(elem);
                    hash[elem] = true;
                }
            }
            //console.log(hash);
            return result;
        }
        $scope.first=unique($scope.first);
    });
    //console.log($scope.first);
    searchInput.placeholder="搜索"+$scope.num+"位联系人";
    $scope.search=null;
    $scope.searchchange=function(){
        if ($scope.search==""){
            $scope.search=null;
        }
    };
    $scope.flag=false;
    $scope.searchOn=function(){
        $scope.flag=true;
    };
    $scope.searchNone=function(){
        if ($scope.search==null) {
            $scope.flag=false;
        }
    }
}]);


