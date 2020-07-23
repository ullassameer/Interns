
// fotter
       var secondApp = angular.module('secondApp', []);
       secondApp.controller('SecondController', function($scope) {

              $scope.EIDKname = "Company";
              $scope.EIDKname2 = "Our Team";
                   $scope.EIDKname3 = "Mission";
                   $scope.EIDKname4 = "Careers";
                   $scope.EIDKname5 = "Contact";
                   $scope.EIDKname6 = "Products";
                   $scope.EIDKname7 = "AndroidTutorials";
                   $scope.EIDKname8 = "Python Tutorials";
                   $scope.EIDKname9 = "Android Classes";
                   $scope.EIDKname10 = "Python Classes ";
                   $scope.EIDKname11 = "Links ";
                   $scope.EIDKname12 = "Donate Us";
                   $scope.EIDKname13= "Site Map";
                   $scope.EIDKname14= "Privacy";
                   $scope.EIDKname15= "Terms";
                   $scope.EIDKname16= "Support";
                   $scope.EIDKname17= "Social";
                   $scope.EIDKname18="facebook-EIDK-fotter.png";
                   $scope.EIDKname19="twitter-EIDK-fotter.png";
                   $scope.EIDKname20="instagram-EIDK-fotter.png";
                   $scope.EIDKname21="github-EIDK-fotter.png";


            $scope.urlfotter2 ="Evenidontknow-eidk-team.html";
            $scope.urlfotter3 ="eidk-mission.html";
            $scope.urlfotter4 ="https://angel.co/evenidontknow_com";
            $scope.urlfotter5 ="contactus.html";
            // $scope.urlfotter6 ="index.html";
            $scope.urlfotter7 ="Android-Tutorials-Eidk.html";
            $scope.urlfotter8 ="Python-tutorials-eidk.html";
            $scope.urlfotter9 ="Eidk-online-classes.html";
            $scope.urlfotter10 ="Eidk-online-classes.html";
            // $scope.urlfotter11 ="";
            $scope.urlfotter12 ="donate-us-evenidontknow.html";
            $scope.urlfotter13 ="SiteMap.html";
            $scope.urlfotter14 ="privacy.html";
            $scope.urlfotter15 ="Terms.html";
            $scope.urlfotter16 = "https://www.facebook.com/Evenidontknow";
             $scope.urlfotter17 = "https://twitter.com/evenidontknw";
              $scope.urlfotter18 = "https://www.instagram.com/evenidontknow_com/";
               $scope.urlfotter19 = "https://github.com/evenidontknow";
       });

       // manually boostrapping the second app
       var secondDiv = document.getElementById('secondApp');

       angular.element(document).ready(function() {
              angular.bootstrap(secondDiv, [ 'secondApp' ]);
       });



// nav
var thirdApp = angular.module('thirdApp',[]);
thirdApp.controller('ThirdController', function($scope){
$scope.navname = "Home";
$scope.navname2 = "Android Tutorials";
$scope.navname3 = "Python Tutorials";
$scope.navname4 = "Articles";
$scope.navname5 = "Online Classes";
$scope.navname6 = "Contribute";
$scope.navname7 = "About Us";
$scope.navname8 = "Our Mission";
$scope.navname9= "Privacy Policy";
$scope.navname10 = "Our Team";
$scope.navname11 = "Dark Theme";
$scope.navname12 = "Day Theme";

$scope.navurl = "index.html";
$scope.navurl2 = "Android-Tutorials-Eidk.html";
$scope.navurl3 = "Python-tutorials-eidk.html";
$scope.navurl4 = "Articles-Eidk.html";
$scope.navurl5 = "Eidk-online-classes.html";
$scope.navurl6 = "guest-articles-evenidontknow.html";
$scope.navurl7 = "about.html";
$scope.navurl8 = "eidk-mission.html";
$scope.navurl9= "privacy.html";
$scope.navurl10 = "Evenidontknow-eidk-team.html";
$scope.navurl11 = "#";
$scope.navurl12 = "#";
});

var thirdDiv = document.getElementById('thirdApp');
angular.element(document).ready(function(){

  angular.bootstrap(thirdDiv,['thirdApp']);
});




// aside
var fourApp = angular.module('fourApp',[]);
fourApp.controller('fourController', function($scope){
$scope.asidename = "Book Your Online Slot ";
$scope.asidename2 = "Book a slot for Online Android Sections";
$scope.asidename3 = "Book a Slot";
$scope.asidename4 = "Learn More";
$scope.asidename5 = "Book a slot for Online Python Sections";
$scope.asidename6 = "Book a Slot";
$scope.asidename7 = "Few Seats Left";
$scope.asidename8 = "Learn More";
});

var fourdDiv = document.getElementById('fourApp');
angular.element(document).ready(function(){

  angular.bootstrap(fourdDiv,['fourApp']);
});