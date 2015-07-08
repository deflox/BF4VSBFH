// Variables data is stored in
var bfhpc,
    bf4pc,
    bfhps3,
    bf4ps3,
    bfhxbox,
    bf4xbox,
    bfhxone,
    bf4xone,
    bfhps4,
    bf4ps4;

// Callback functions
var callbackBfh = function (plattform, values) {

    switch (plattform) {
        case "pc":
            bfhpc = values["pc"];
            check();
        case "ps3":
            bfhps3 = values["ps3"];
            check();
        case "ps4":
            bfhps4 = values["ps4"];
            check();
        case "xone":
            bfhxone = values["xone"];
            check();
        case "xbox":
            bfhxbox = values["xbox"];
            check();
        default:
            check();
    }

};

var callbackBf4 = function (plattform, values) {

    switch (plattform) {
        case "pc":
            bf4pc = values["pc"];
            check();
        case "ps3":
            bf4ps3 = values["ps3"];
            check();
        case "ps4":
            bf4ps4 = values["ps4"];
            check();
        case "xone":
            bf4xone = values["xone"];
            check();
        case "xbox":
            bf4xbox = values["xbox"];
            check();
        default:
            check();
    }

};

$( document ).ready(function() {

    refresh();

    $(".refresh").click(function(){
        $(".item").html("<i class='fa fa-spinner fa-pulse' title='Loading... Please wait'></i>");
        refresh();
    });

});

function getStatsForBf4(plattform, callback) {
     $.ajax({
     type:'GET',
     url:"http://api.bf4stats.com/api/onlinePlayers",
     data:"output=json",
     success:function(feed) {
		 var values = [];
		 values["pc"] = feed.pc.count;
		 values["ps4"] = feed.ps4.count;
		 values["ps3"] = feed.ps3.count;
		 values["xone"] = feed.xone.count;
		 values["xbox"] = feed.xbox.count;
		 callback(plattform,values);
     },
     dataType:'json'
     });
}

function getStatsForBfh(plattform, callback) {
    $.ajax({
        type:'GET',
        url:"http://api.bfhstats.com/api/onlinePlayers",
        data:"output=json",
        success:function(feed) {
            var values = [];
            values["pc"] = feed.pc.count;
            values["ps4"] = feed.ps4.count;
            values["ps3"] = feed.ps3.count;
            values["xone"] = feed.xone.count;
            values["xbox"] = feed.xbox.count;
            callback(plattform,values);
        },
        dataType:'json'
    });
}

function check() {

    if ( bfhpc   != undefined &&
        bf4pc   != undefined ) {
        if(parseInt(bfhpc) > parseInt(bf4pc)) {
            $(".pc").html(
                    "<div class='item red'>" + bf4pc + "</div><div class='item green'>" + bfhpc + "</div"
            )
        } else {
            $(".pc").html(
                    "<div class='item green'>" + bf4pc + "</div><div class='item red'>" + bfhpc + "</div"
            )
        }
    }

    if ( bfhps3  != undefined &&
        bf4ps3  != undefined ) {
        if(parseInt(bfhps3) > parseInt(bf4ps3)) {
            $(".ps3").html(
                    "<div class='item red'>" + bf4ps3 + "</div><div class='item green'>" + bfhps3 + "</div"
            )
        } else {
            $(".ps3").html(
                    "<div class='item green'>" + bf4ps3 + "</div><div class='item red'>" + bfhps3 + "</div"
            )
        }
    }

    if ( bfhxbox != undefined &&
        bf4xbox != undefined ) {
        if(parseInt(bfhxbox) > parseInt(bf4xbox)) {
            $(".xbox").html(
                    "<div class='item red'>" + bf4xbox + "</div><div class='item green'>" + bfhxbox + "</div"
            )
        } else {
            $(".xbox").html(
                    "<div class='item green'>" + bf4xbox + "</div><div class='item red'>" + bfhxbox + "</div"
            )
        }
    }

    if ( bfhxone != undefined &&
        bf4xone != undefined ) {
        if(parseInt(bfhxone) > parseInt(bf4xone)) {
            $(".xone").html(
                    "<div class='item red'>" + bf4xone + "</div><div class='item green'>" + bfhxone + "</div"
            )
        } else {
            $(".xone").html(
                    "<div class='item green'>" + bf4xone + "</div><div class='item red'>" + bfhxone + "</div"
            )
        }
    }

    if ( bfhps4  != undefined &&
        bf4ps4  != undefined ) {
        if(parseInt(bfhps4) > parseInt(bf4ps4)) {
            $(".ps4").html(
                    "<div class='item red'>" + bf4ps4 + "</div><div class='item green'>" + bfhps4 + "</div"
            )
        } else {
            $(".ps4").html(
                    "<div class='item green'>" + bf4ps4 + "</div><div class='item red'>" + bfhps4 + "</div"
            )
        }
    }

}

function refresh() {

    // Call Functions
    getStatsForBf4("pc", callbackBf4);
    getStatsForBf4("ps3", callbackBf4);
    getStatsForBf4("xbox", callbackBf4);
    getStatsForBf4("ps4", callbackBf4);
    getStatsForBf4("xone", callbackBf4);

    getStatsForBfh("pc", callbackBfh);
    getStatsForBfh("ps3", callbackBfh);
    getStatsForBfh("xbox", callbackBfh);
    getStatsForBfh("ps4", callbackBfh);
    getStatsForBfh("xone", callbackBfh);

}
