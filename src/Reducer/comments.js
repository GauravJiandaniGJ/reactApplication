import * as actionType from '../actions/ActionType';

var comment_data = [
{
	"pfcmid": "11466",
	"pfpid": "31968",
	"pfid": "12664201",
	"comment": "\n\n\nd\n\n\n\n\n\n\n\n\n\n\nm\n\n\n\n\n\n\n",
	"createdon": "2017-12-11 20:44:39",
	"modifiedon": "2017-12-11 20:44:39",
	"prid": null,
	"name": "Dr. Ashish Sharma",
	"profilephoto": "Images/Default/male.png",
	"gender": "male",
	"prof_specialty": "Paediatrics",
	"prof_sid": "79",
	"commentLikes": "0",
	"isCommentLike": "0"
},
{
	"pfcmid": "11450",
	"pfpid": "31968",
	"pfid": "12448554",
	"comment": "but in routine practice  if it come positive then we do screening by 3 different kits like tridot retriquic span signal or quadro kit & report as a hiv positive   & dispatch report with remarks : how ever it' s advisable to confirm by western blott method to confirm diagnosis is  it OK??",
	"createdon": "2017-12-10 22:28:52",
	"modifiedon": "2017-12-10 22:28:52",
	"prid": null,
	"name": "Dr. Uday Shah",
	"profilephoto": "Images/ProfilePicture/12448554/new1498400542439.JPEG",
	"gender": "male",
	"prof_specialty": "Pathology",
	"prof_sid": "81",
	"commentLikes": "3",
	"isCommentLike": "0"
},
{
	"pfcmid": "11418",
	"pfpid": "31968",
	"pfid": "12360991",
	"comment": "if card test is positive\ntwo technicians are supposed to issue the report as per NACO Guidelines\nHowever \nELISA becomes mandatory\nit has to be confirmed by Western blot before final issuance of the report.",
	"createdon": "2017-12-08 22:46:40",
	"modifiedon": "2017-12-08 22:46:40",
	"prid": null,
	"name": "Dr. Javaid Iqbal Khan",
	"profilephoto": "Images/ProfilePicture/12360991/new1512043940118.JPEG",
	"gender": "male",
	"prof_specialty": "Haematology",
	"prof_sid": "28",
	"commentLikes": "2",
	"isCommentLike": "0"
}
]

let sortData = (data) => {
	console.log('sorting data')
	console.log(data)
	var temp = data;
	temp.sort(function(a,b){
	  return a.pfid - b.pfid;
	});
	comment_data = temp;
	return temp;
}


var count = 1234567891;

const comments = (state = comment_data, action) => {
	let newState;
	sortData(state)
	switch (action.type) {
		case actionType.ADD_COMMENT:
			var current_time = new Date();
			var temp = {
				"pfcmid": "11419",
				"pfpid": "31969",
				"pfid": count + 1,
				"comment": action.text,
				"createdon": current_time.getFullYear() +'-' + current_time.getMonth() + '-' + current_time.getDate() + ' ' + current_time.getHours() + ':' + current_time.getMinutes(),
				"name": "Gaurav Jiandani",
				"profilephoto": "../../../mahadev_contributor.jpg",
				"gender": "male",
				"prof_specialty": "ReactJS Specialist",
				"commentLikes": 0,
				"isCommentLike": 0
			}
			let tempObj = state;
			tempObj.push(temp);
			newState = sortData(tempObj);
			comment_data = newState;
			console.log(newState)
			return newState;
		default:
			return state
	}
}

export default comments;