let socket = io();
let player_data = {}
player_data['ryu'] = 0
player_data['guile'] = 1
player_data['ehonda'] = 2
player_data['bianka'] = 3
player_data['ken'] = 4
player_data['chunli'] = 5
player_data['zangief'] = 6
player_data['dhalsim'] = 7
player_data['balrog'] = 8
player_data['vega'] = 9
player_data['sagat'] = 10
player_data['mbison'] = 11
$(".select-player").on("click", obj => {
	//alert($(obj.currentTarget).attr("id"));
    player_id = $(obj.currentTarget).attr("id")
    socket.emit("set_selected_player", player_data[player_id]+"-"+player_id+"-1");
    location.reload()
});

window.onload = function(){
    socket.emit("get_lobby_status", 0);

    socket.on("set_lobby_status", function(id) {
        ind = Object.keys(id);
        for (let i=0; i<ind.length; i++){
            if(id[ind[i]]['stat'] == '1'){
                $("#"+id[ind[i]]['id']).removeClass("btn-primary")
                $("#"+id[ind[i]]['id']).addClass("btn-success disabled")
                $("#"+id[ind[i]]['id']).text("ACTIVE")
            }
        }
	});
};