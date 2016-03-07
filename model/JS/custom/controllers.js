var menubarStyle = function(top, left, width) {
	return {
		position : 'fixed',
		top : (top + 15) + 'px',
		left : left,
		'max-height' : '10px',
		height : '10px',
		width : width + 'px',
		'background-color' : 'white'
	};

}

var changeAnimation = function(origin2) {
	var origin = origin2;
	console.log(document.styleSheets[2].cssRules);
	document.styleSheets[2].deleteRule(9);
	

	document.styleSheets[2]
			.insertRule(
					" @-webkit-keyframes menubar {  0% { -webkit-transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, "
							+ 0
							+ ", 0, 0, 1); transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, "
							+ origin * -0.015
							+ ", 0, 0, 1); } 2.2% { -webkit-transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, "
							+ origin * -0.0571
							+ ", 0, 0, 1); transform: matrix3d(1., 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0,"
							+ origin * -0.0571
							+ ", 0, 0, 1); } 			 2.55% { -webkit-transform: matrix3d(1.5, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, "
							+ origin * -0.0488
							+ ", 0, 0, 1); transform: matrix3d(1.554, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, "
							+ origin * -0.0488
							+ ", 0, 0, 1); } 			 4.3% { -webkit-transform: matrix3d(1.5, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, "
							+ origin * -0.089
							+ ", 0, 0, 1); transform: matrix3d(1.2, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, "
							+ origin * -0.089
							+ ", 0, 0, 1); } 5.71% { -webkit-transform: matrix3d(1.2, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, "
							+ origin * 0.015
							+ ", 0, 0, 1); transform: matrix3d(1.1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0,"
							+ origin * 0.015
							+ ", 0, 0, 1); } 			 100% { -webkit-transform: matrix3d(1.625, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, "
							+ origin * 0.0015
							+ ", 0, 0, 1); transform: matrix3d(1.1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, "
							+ origin * 0.01 + ", 0, 0, 1); }}", 9);
	$('#menubar').css('animation', 'menubar 2s');
};

var portfolioModule = angular.module('portfolio', [ 'ngAnimate' ]).controller(
		'menuController', function($scope) {
			var menuItems = []
			var initMenu = function(menuItems) {
				var home = $('#home');
				var projects = $('#projects');
				var aboutMe = $('#aboutMe');
				$(projects.selector + "Body").hide();
				$(aboutMe.selector + "Body").hide();
				menuItems.push(home);
				menuItems.push(aboutMe);
				menuItems.push(projects);
			}
		
			initMenu(menuItems);
			$scope.checkActive = function(e) {
				

				$.each(menuItems, function(index, $item) {
					

					if ($item.selector.substring(1) === e.target.id) {
						$($item.selector + "Body").show();
					} else {
						$($item.selector + "Body").hide();
					}
				});
				// var elementTop = $('#'+e.target.id).position().top;
				// var elementLeft = $('#'+e.target.id).position().left;
				// var elementSizeInner = $('#'+e.target.id).innerWidth();
				// var offset = function(){
				//	
				// var x =
				// (parseInt($('#'+e.target.id).css('marginLeft').substring(0,$('#'+e.target.id).css('marginLeft').length-2))+
				// parseInt($('.countainer-fluid').ccs('marginLeft').substring(0,$('.countainer-fluid').ccs('marginLeft').length-2));
				//	
				// return x;
				// }
				//
				// console.log(offset());
				//
				// menubar = $('#menubar');
				// changeAnimation(elementLeft);
				// if(menubar.length === 1){
				//	
				// clone = menubar.clone(true);
				// menubar.before(clone);
				// menubar.remove();
				// }else{
				// $('.navbar-collapse').after('<div id="menubar"></div>');
				// }
				// $('#menubar').css(menubarStyle(elementTop+10,elementLeft+(offset),elementSizeInner));
				//
			}
		});