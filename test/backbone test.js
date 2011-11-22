var campaignList;

var Campaign = couchModel();
var Campaigns = couchCollection({db:'campaigns'},{model:Campaign});
campaignList = new Campaigns();
campaignList.fetch(
    {
	success:function(model,resp){
	    console.log("all models loaded");
	}});
