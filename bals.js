var kana = "アイウエオカキクケコガギグゲゴサシスセソザジズゼゾタチツテトダヂヅデドナニヌネノハヒフヘホバビブベボパピプペポマミムメモヤユヨラリルレロワヰヱヲン";
var bals = "バルス";
var btime = new Date("2016/1/15 23:22:34");
// var btime = new Date("2016/1/5 15:56:00");
var bCode = 0;
for( var i=0 ; i < bals.length ; i++ ) { bCode = bCode*kana.length + kana.indexOf( bals.substr(i,1)); }
$(document).ready(function(){
    var intervalID = window.setInterval( clocktimer, 1000 );
});

var showLigtning = function( strength ){
    if( strength == 1 ){
	$("#lightning").stop().animate({ "opacity" : "0.7" }, 400 ).animate( {"opacity" : "0" } , 200);
    }
    if( strength == 100 ){
	$("#lightning").stop().animate({ "opacity" : "1" }, 100 ).animate( {"opacity" : "0" }, 100 ).animate({ "opacity" : "1" }, 100 ).animate( {"opacity" : "0" }, 100 ).animate({ "opacity" : "1" }, 100 ).animate( {"opacity" : "0" }, 100 ).animate({ "opacity" : "1" }, 100 ).animate( {"opacity" : "0" }, 100 );
    }
}

var strengthOfText = function( text ){
    if( text == "バルス" ){
	return 100;
    }

    if( text.match( /[バルス]/ ) ){
	return 1;
    }
    return 0;
}

function clocktimer() {
    var t = new Date();
    var n = bCode + Math.floor( ( t.getTime() - btime.getTime() ) / 1000 );
    if( n < 0 ) n = n + Math.pow(kana.length,bals.length)*Math.ceil((-n)/Math.pow(kana.length,bals.length));
    var s = new String("");
    for( var i=0 ; i<bals.length ; i++ ) {
	s = kana.substr( n % kana.length, 1 ) + s;
	n = n / kana.length;
    }
    var strength = strengthOfText(s);
    if( strength != 0 ){
	showLigtning( strength );
    }
    $("#bals").html( s );
};
