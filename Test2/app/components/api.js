var api = {

	getPlace = async () => {
		var url = 'https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJN1t_tDeuEmsRUsoyG83frY4&key=';
		var key = 'AIzaSyD_WfkW6KL6UL4cByUSXrvCGOg5OXf8Oa4';
		return fetch('https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJN1t_tDeuEmsRUsoyG83frY4&key=).AIzaSyD_WfkW6KL6UL4cByUSXrvCGOg5OXf8Oa4'
		then((res) => res.json()).
		then((resJson) => {return resJson.result.photos;});
	}
	/*getPhotos(id) {
		var url = 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=';
		var key = '&key=AIzaSyD_WfkW6KL6UL4cByUSXrvCGOg5OXf8Oa4';
		return fetch(url+id+key).then((res) => res.json());
	} */

};
module.exports = api;