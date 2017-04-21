
// create our angular app and inject ngAnimate and ui-router 
// =============================================================================
angular.module('formApp' , ['ngAnimate', 'ui.router'])

// configuring our routes 
// =============================================================================
.config(function($stateProvider, $urlRouterProvider) {
    
    $stateProvider
    
        // route to show our basic form (/form)
        .state('form', {
            url: '/form',
            templateUrl: 'form.html',
            controller: 'formController'
        })
        
        // nested states 
        // each of these sections will have their own view
        // url will be nested (/form/profile)
        .state('form.mocher', {
            url: '/mocher',
            templateUrl: 'form-mocher.html'
        })
        
        // url will be /form/kone
        .state('form.kone', {
            url: '/kone',
            templateUrl: 'form-kone.html'
        })
        
        // url will be /form/payment
        .state('form.eska', {
            url: '/eska',
            templateUrl: 'form-eska.html'
        })

        // url will be /form/payment
        .state('form.eskaStep1', {
            url: '/eskaStep1',
            templateUrl: 'form-eskaStep1.html'
        })

        // url will be /form/payment
        .state('form.eskaStep2', {
            url: '/eskaStep2',
            templateUrl: 'form-eskaStep2.html'
        })

        // url will be /form/payment
        .state('form.eskaStep3', {
            url: '/eskaStep3',
            templateUrl: 'form-eskaStep3.html'
        })

    // url will be /form/payment
    .state('form.eskaStep4', {
        url: '/eskaStep4',
        templateUrl: 'form-eskaStep4.html'
    });

    // catch all route
    // send users to the form page 
    $urlRouterProvider.otherwise('/form/mocher');
})

// our controller for the form
// =============================================================================
.controller('formController', function($scope,$http) {


    // function to process the form
    $scope.processForm = function() {
        alert('awesome!');  
    };
    $scope.question2 = {
        questionText: "chooseMatzv.",
        choices: [{
            id: 1,
            text: "טאבו",
            isUserAnswer: false
        }, {
            id: 2,
            text: "חברה משכנת",
            isUserAnswer: true
        }, {
            id: 3,
            text: "מנהל מקרקעי ישראל",
            isUserAnswer: false
        }]
    };

    $scope.question33 = {
        "2_15days": "מהיום ה-15 והלאה",
        "1_28days": "מהיום ה-8 ועד היום ה-14",
        "0_17days": "עד 7 ימי איחור (כולל)",
    };

    $scope.Answers3 = {}  ;


    $scope.soghon = {
        question: [{
            id:"formData.honAtsmi",
            text: "הון עצמי",
        }, {
            id:"formData.mascanta",
            text: "משכנתא",
        }, {
            id:"formData.kenagedMashcanta",
            text: "כנגד משכנתא",
        }]
    };

    $scope.setChoiceForQuestion = function (q, c) {
            angular.forEach(q.choices, function (c) {
                c.isUserAnswer = false
            });
            c.isUserAnswer = true;
            if(c.isUserAnswer){
                console.log(c.text);
            }
        };

    $scope.checkstatusNasah = function(){
         var g =  $scope.formData.eskaeskaStep1_gosh;
         var h = $scope.formData.eskaeskaStep1_helaka;
         var th = $scope.formData.eskaeskaStep1_tathelaka;
         if(th.trim().length >1){
          $http.get("//www.israelpost.co.il/tabu.nsf/OrderSubmit1-Ajax?openagent&_=1491429072002&cartid=t7168-005017&nesach_type=F&shita_code=N&gush="+g+"&chelka="+h+"&tat_chelka="+th+"&shem_sefer=&mispar_sefer=&mispar_daf=&kod_shem_sefer=&gush2=&shuma=&tat_chelka2=&uname=Anonymous&signed=")
            .then(function(response) {
                $scope.formData.nesahStatus = response.data.split(/<msg>/)[1].split(/<\/msg>/)[0];
            });   
         }
          
    }    
        
  

    // we will store all of our form data in this object
    $scope.formData = {};

});

