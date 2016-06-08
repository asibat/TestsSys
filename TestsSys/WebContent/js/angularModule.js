var app = angular.module('TestsApp',[])
		.controller('TestsController', ['$scope','$sce','$http','$interval', function($scope,$sce,$http,$interval) {
		
			
			/*var teachersArray,getURL;
			$http.get("/TestsSys/user/GetAllTeachers")
			
			.success(function(response){
				teachersArray = response;

			});
*/
	$scope.hideLoading = function() {
		
		// will fade out LoadingDiv and show Messages in 3 seconds.
		setTimeout(function(){$('#LoadingViewDiv').fadeOut(1000);
		$('#QestionDiv').delay(1000).fadeIn(500);
	 
	 },2000);
	
	};

	
	$scope.show_question_form = function() {
 		$('#PageHeader').html($('#show_question_form').html()); // change page header
		
		$('#LoadingViewDiv').height($('#QuestionDiv').height()).show(); // set LoadingViewDiv height to overly the same area of Questions
		
		$('#QuestionDiv').show(); // show QUESTIONS
		

		
		$scope.hideLoading(); // call hideLoading fun.
		
	};
	
	
 //DISPLAY QUESTIONS TABLE IN ORDER TO CREATE A NEW EXAM
	$scope.show_questions_table = function() {
 		$('#PageHeader').html($('#show_questions_table').html()); // change page header
		
		$('#LoadingViewDiv').height($('#listQuestionsDiv').height()).show(); // set LoadingViewDiv height to overly the same area of Questions
		
		$('#listQuestionsDiv').show(); // show QUESTIONS

		
		$scope.hideLoading(); // call hideLoading fun.
		
	};
	
	
	
	// create new Question func
	$scope.btn_create_quest = function() {
		
		if(($('#txtQuest').val().trim().length > 0 ) && ($('#firstAnswer').val().trim().length > 0) 
        		&& ($('#secondAnswer').val().trim().length > 0) 
        		&& ($('#thirdAsnwer').val().trim().length > 0) 
        		&& ($('#fourthAnswer').val().trim().length > 0) ){
        	
        	//create js object
    		var Quest = new Object();
    	    Quest.QuestionText = $scope.txtQuest;
    	    Quest.CorrectAnswer = $scope.correctAnswer;
    	    /* Quest.TeacherID = ""; */
    	    Quest.QuestionOptions1 = $scope.firstAnswer;
    	    Quest.QuestionOptions2 = $scope.secondAnswer;
    	    Quest.QuestionOptions3 = $scope.thirdAnswer;
    	    Quest.QuestionOptions4 = $scope.fourthAnswer;
    	    Quest.CoursesList = $scope.relatedCourses ; 
    	    
    	    
    	    //Make and http call to the server
        	var req = $http({
                method: "post",
                url: "/TestsSys/question/CreateQuestion",
                dataType: 'json',
                contentType: "application/json; charset=utf-8",
    	        data: JSON.stringify(Quest)
            });
            var data = JSON.stringify(Quest);
    	    req.success(function(response) {
    	    	$('.alertPostQuestSuc').show(1000).delay(3000).hide(1000); // show for 3 seconds and hide
    	    	//clear form
    	    	$scope.QuestionText = "";
    	    	$scope.CorrectAnswer = "";
    	    	$scope.QuestionOptions1 = "";
    	    	$scope.QuestionOptions2 = "";
    	    	$scope.QuestionOptions3 = "";
    	    	$scope.QuestionOptions4 = "";
    		});	
        }
        else{
        	$('.alertPostQuestEmpty').show(1000).delay(3000).hide(1000); // show for 3 seconds and hide
        }
    };

    
    
	
 // add username to link
	$scope.getUsernameAsLink = function(username)
	{
	return "profile.html?name="+username;
	};



	
	}]);