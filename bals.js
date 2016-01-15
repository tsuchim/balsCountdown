var kana = "アイウエオカキクケコガギグゲゴサシスセソザジズゼゾタチツテトダヂヅデドナニヌネノハヒフヘホバビブベボパピプペポマミムメモヤユヨラリルレロワヰヱヲン";
var bals = "バルス";
var btime = new Date("2016/1/15 23:22:34");
// var btime = new Date("2016/1/5 15:56:00");
var bCode = 0;
for( var i=0 ; i < bals.length ; i++ ) { bCode = bCode*kana.length + kana.indexOf( bals.substr(i,1)); }
$(document).ready(function(){
    var intervalID = window.setInterval( clocktimer, 1000 );
});

function clocktimer() {
    var t = new Date();
    var n = bCode + Math.floor( ( t.getTime() - btime.getTime() ) / 1000 );
    if( n < 0 ) n = n + Math.pow(kana.length,bals.length)*Math.ceil((-n)/Math.pow(kana.length,bals.length));
    var s = new String("");
    for( var i=0 ; i<bals.length ; i++ ) {
	s = kana.substr( n % kana.length, 1 ) + s;
	n = n / kana.length;
    }


    $("#bals").html( s );
};
