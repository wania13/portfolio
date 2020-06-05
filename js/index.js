// new fullpage('#fullpage', {
// 	//options here
// 	autoScrolling:true,
// 	scrollHorizontally: true,
// 	navigation:true
// });

// //methods
// fullpage_api.setAllowScrolling(false);

new fullpage('#fullpage', {
	navigation: true,
	autoScrolling:true,
	scrollHorizontally: true,
	keyboardScrolling: true,
	anchors:['part1','part2','part3','part4','part5'],


  afterLoad: function(anchorLink, index, slideAnchor, slideIndex){
  		if(index.index==1)
		{$('#myselfimg').removeClass('display')}
	    if (index.index==2)
	    {$('#can').removeClass('display')} 
		
	},
		

});