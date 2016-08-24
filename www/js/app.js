//AIzaSyBhbmwGx3yfnyTq_8WN7C4_Ne0TGoH_jnw API_KEY
//AIzaSyAOqrkBo3YG_3RGSO9gCNbr1I1516h16Us ANDROID API
//UCLJ9MNjT7Xzqa7XRiU8IEBg USER ID
$(function(){
	var ytApi = {
	URL_SEARCH 	: 'https://www.googleapis.com/youtube/v3/search',
	queryData 	: {
			key 		: 'AIzaSyAOqrkBo3YG_3RGSO9gCNbr1I1516h16Us',
			channelId 	: 'UCLJ9MNjT7Xzqa7XRiU8IEBg',
			maxResults 	: 20,
			part 		: 'id,snippet',
			order 		: 'date'
		}
	}

	var source   = $("#card-video-template").html();
	var template = Handlebars.compile(source);

	$.ajax({
		url: ytApi.URL_SEARCH,
		type: 'GET',
		dataType: 'json',
		data: ytApi.queryData,
		success: function(data){
			$('.video-list').append(template(data));
		}
	});


})