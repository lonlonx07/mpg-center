let room_ids_arr = {}

function random_string(len){
	let string_set = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	let rnd = "";
	let ctr=10;
	let valid = false;
	
	while(ctr>0 && valid==false){
		for(let i=0; i<len; i++){
			rnd += string_set[Math.floor(Math.random() * string_set.length)];
		}
		
		if(room_ids_arr[rnd] == undefined){
			valid = true;
		}
		
		ctr--;
	}
	
	return rnd;
}

module.exports.generate_room_id = random_string;