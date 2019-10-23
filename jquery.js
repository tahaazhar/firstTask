$( document ).ready(function() {
    var api_url = 'http://5d80cc7e99f8a20014cf99a9.mockapi.io/api/v1/room/getRoomMatrix'
    var benchesData = []
    $.ajax({
        url: api_url,
        contentType: "application/json",
        success: function(result){
            benchesData =result;
            console.log(result);
            apiDataResult(benchesData);
        }       
    });
    function apiDataResult(benchesData){
    var select = document.getElementById("api-dropdown");
    var options = benchesData.data.anamolies_benches;
    var i;
    console.log(options, "Options")
    for (i = 0; i < options.length; i++) {
        var opt = options[i].current_strain;
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        select.add(el);
    }
}
});
