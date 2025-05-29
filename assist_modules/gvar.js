let players = {}

function fill_selected_player(ind, id, status){
    players[ind] = {}
    players[ind]['id'] = id
    players[ind]['stat'] = status
}

function retrieve_player_status(){
    return players
}

function reset_data(){
    players = {}
}


module.exports.set_player_selected = fill_selected_player;
module.exports.get_player_status = retrieve_player_status;
module.exports.reset_player_status = reset_data;