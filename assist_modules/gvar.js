let players = {}

function fill_selected_player(ind, id, status){
    players[ind] = {}
    players[ind]['id'] = id
    players[ind]['stat'] = status
}

function retrieve_player_status(){
    return players
}

module.exports.set_player_selected = fill_selected_player;
module.exports.get_player_status = retrieve_player_status;