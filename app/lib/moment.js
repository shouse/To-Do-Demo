//! moment.js
//! version : 2.2.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
(function(a){
/**
 * Description
 * @method b
 * @param {} a
 * @param {} b
 * @return FunctionExpression
 */
function b(a,b){return function(c){return i(a.call(this,c),b)}}
/**
 * Description
 * @method c
 * @param {} a
 * @param {} b
 * @return FunctionExpression
 */
function c(a,b){return function(c){return this.lang().ordinal(a.call(this,c),b)}}
/**
 * Description
 * @method d
 * @return 
 */
function d(){}
/**
 * Description
 * @method e
 * @param {} a
 * @return 
 */
function e(a){g(this,a)}
/**
 * Description
 * @method f
 * @param {} a
 * @return 
 */
function f(a){var b=a.years||a.year||a.y||0,c=a.months||a.month||a.M||0,d=a.weeks||a.week||a.w||0,e=a.days||a.day||a.d||0,f=a.hours||a.hour||a.h||0,g=a.minutes||a.minute||a.m||0,h=a.seconds||a.second||a.s||0,i=a.milliseconds||a.millisecond||a.ms||0;this._input=a,this._milliseconds=+i+1e3*h+6e4*g+36e5*f,this._days=+e+7*d,this._months=+c+12*b,this._data={},this._bubble()}
/**
 * Description
 * @method g
 * @param {} a
 * @param {} b
 * @return a
 */
function g(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c]);return a}
/**
 * Description
 * @method h
 * @param {} a
 * @return ConditionalExpression
 */
function h(a){return 0>a?Math.ceil(a):Math.floor(a)}
/**
 * Description
 * @method i
 * @param {} a
 * @param {} b
 * @return c
 */
function i(a,b){for(var c=a+"";c.length<b;)c="0"+c;return c}
/**
 * Description
 * @method j
 * @param {} a
 * @param {} b
 * @param {} c
 * @param {} d
 * @return 
 */
function j(a,b,c,d){var e,f,g=b._milliseconds,h=b._days,i=b._months;g&&a._d.setTime(+a._d+g*c),(h||i)&&(e=a.minute(),f=a.hour()),h&&a.date(a.date()+h*c),i&&a.month(a.month()+i*c),g&&!d&&L.updateOffset(a),(h||i)&&(a.minute(e),a.hour(f))}
/**
 * Description
 * @method k
 * @param {} a
 * @return BinaryExpression
 */
function k(a){return"[object Array]"===Object.prototype.toString.call(a)}
/**
 * Description
 * @method l
 * @param {} a
 * @param {} b
 * @return BinaryExpression
 */
function l(a,b){var c,d=Math.min(a.length,b.length),e=Math.abs(a.length-b.length),f=0;for(c=0;d>c;c++)~~a[c]!==~~b[c]&&f++;return f+e}
/**
 * Description
 * @method m
 * @param {} a
 * @return ConditionalExpression
 */
function m(a){return a?ib[a]||a.toLowerCase().replace(/(.)s$/,"$1"):a}
/**
 * Description
 * @method n
 * @param {} a
 * @param {} b
 * @return SequenceExpression
 */
function n(a,b){return b.abbr=a,P[a]||(P[a]=new d),P[a].set(b),P[a]}
/**
 * Description
 * @method o
 * @param {} a
 * @return 
 */
function o(a){delete P[a]}
/**
 * Description
 * @method p
 * @param {} a
 * @return LogicalExpression
 */
function p(a){if(!a)return L.fn._lang;if(!P[a]&&Q)try{require("./lang/"+a)}catch(b){return L.fn._lang}return P[a]||L.fn._lang}
/**
 * Description
 * @method q
 * @param {} a
 * @return ConditionalExpression
 */
function q(a){return a.match(/\[.*\]/)?a.replace(/^\[|\]$/g,""):a.replace(/\\/g,"")}
/**
 * Description
 * @method r
 * @param {} a
 * @return FunctionExpression
 */
function r(a){var b,c,d=a.match(T);for(b=0,c=d.length;c>b;b++)d[b]=mb[d[b]]?mb[d[b]]:q(d[b]);return function(e){var f="";for(b=0;c>b;b++)f+=d[b]instanceof Function?d[b].call(e,a):d[b];return f}}
/**
 * Description
 * @method s
 * @param {} a
 * @param {} b
 * @return SequenceExpression
 */
function s(a,b){return b=t(b,a.lang()),jb[b]||(jb[b]=r(b)),jb[b](a)}
/**
 * Description
 * @method t
 * @param {} a
 * @param {} b
 * @return a
 */
function t(a,b){
/**
 * Description
 * @method c
 * @param {} a
 * @return LogicalExpression
 */
function c(a){return b.longDateFormat(a)||a}for(var d=5;d--&&(U.lastIndex=0,U.test(a));)a=a.replace(U,c);return a}
/**
 * Description
 * @method u
 * @param {} a
 * @param {} b
 * @return 
 */
function u(a,b){switch(a){case"DDDD":return X;case"YYYY":return Y;case"YYYYY":return Z;case"S":case"SS":case"SSS":case"DDD":return W;case"MMM":case"MMMM":case"dd":case"ddd":case"dddd":return $;case"a":case"A":return p(b._l)._meridiemParse;case"X":return bb;case"Z":case"ZZ":return _;case"T":return ab;case"MM":case"DD":case"YY":case"HH":case"hh":case"mm":case"ss":case"M":case"D":case"d":case"H":case"h":case"m":case"s":return V;default:return new RegExp(a.replace("\\",""))}}
/**
 * Description
 * @method v
 * @param {} a
 * @return ConditionalExpression
 */
function v(a){var b=(_.exec(a)||[])[0],c=(b+"").match(fb)||["-",0,0],d=+(60*c[1])+~~c[2];return"+"===c[0]?-d:d}
/**
 * Description
 * @method w
 * @param {} a
 * @param {} b
 * @param {} c
 * @return 
 */
function w(a,b,c){var d,e=c._a;switch(a){case"M":case"MM":null!=b&&(e[1]=~~b-1);break;case"MMM":case"MMMM":d=p(c._l).monthsParse(b),null!=d?e[1]=d:c._isValid=!1;break;case"D":case"DD":null!=b&&(e[2]=~~b);break;case"DDD":case"DDDD":null!=b&&(e[1]=0,e[2]=~~b);break;case"YY":e[0]=~~b+(~~b>68?1900:2e3);break;case"YYYY":case"YYYYY":e[0]=~~b;break;case"a":case"A":c._isPm=p(c._l).isPM(b);break;case"H":case"HH":case"h":case"hh":e[3]=~~b;break;case"m":case"mm":e[4]=~~b;break;case"s":case"ss":e[5]=~~b;break;case"S":case"SS":case"SSS":e[6]=~~(1e3*("0."+b));break;case"X":c._d=new Date(1e3*parseFloat(b));break;case"Z":case"ZZ":c._useUTC=!0,c._tzm=v(b)}null==b&&(c._isValid=!1)}
/**
 * Description
 * @method x
 * @param {} a
 * @return 
 */
function x(a){var b,c,d,e=[];if(!a._d){for(d=z(a),b=0;3>b&&null==a._a[b];++b)a._a[b]=e[b]=d[b];for(;7>b;b++)a._a[b]=e[b]=null==a._a[b]?2===b?1:0:a._a[b];e[3]+=~~((a._tzm||0)/60),e[4]+=~~((a._tzm||0)%60),c=new Date(0),a._useUTC?(c.setUTCFullYear(e[0],e[1],e[2]),c.setUTCHours(e[3],e[4],e[5],e[6])):(c.setFullYear(e[0],e[1],e[2]),c.setHours(e[3],e[4],e[5],e[6])),a._d=c}}
/**
 * Description
 * @method y
 * @param {} a
 * @return 
 */
function y(a){var b=a._i;a._d||(a._a=[b.years||b.year||b.y,b.months||b.month||b.M,b.days||b.day||b.d,b.hours||b.hour||b.h,b.minutes||b.minute||b.m,b.seconds||b.second||b.s,b.milliseconds||b.millisecond||b.ms],x(a))}
/**
 * Description
 * @method z
 * @param {} a
 * @return ConditionalExpression
 */
function z(a){var b=new Date;return a._useUTC?[b.getUTCFullYear(),b.getUTCMonth(),b.getUTCDate()]:[b.getFullYear(),b.getMonth(),b.getDate()]}
/**
 * Description
 * @method A
 * @param {} a
 * @return 
 */
function A(a){var b,c,d,e=p(a._l),f=""+a._i;for(d=t(a._f,e).match(T),a._a=[],b=0;b<d.length;b++)c=(u(d[b],a).exec(f)||[])[0],c&&(f=f.slice(f.indexOf(c)+c.length)),mb[d[b]]&&w(d[b],c,a);f&&(a._il=f),a._isPm&&a._a[3]<12&&(a._a[3]+=12),a._isPm===!1&&12===a._a[3]&&(a._a[3]=0),x(a)}
/**
 * Description
 * @method B
 * @param {} a
 * @return 
 */
function B(a){var b,c,d,f,h,i=99;for(f=0;f<a._f.length;f++)b=g({},a),b._f=a._f[f],A(b),c=new e(b),h=l(b._a,c.toArray()),c._il&&(h+=c._il.length),i>h&&(i=h,d=c);g(a,d)}
/**
 * Description
 * @method C
 * @param {} a
 * @return 
 */
function C(a){var b,c=a._i,d=cb.exec(c);if(d){for(a._f="YYYY-MM-DD"+(d[2]||" "),b=0;4>b;b++)if(eb[b][1].exec(c)){a._f+=eb[b][0];break}_.exec(c)&&(a._f+=" Z"),A(a)}else a._d=new Date(c)}
/**
 * Description
 * @method D
 * @param {} b
 * @return 
 */
function D(b){var c=b._i,d=R.exec(c);c===a?b._d=new Date:d?b._d=new Date(+d[1]):"string"==typeof c?C(b):k(c)?(b._a=c.slice(0),x(b)):c instanceof Date?b._d=new Date(+c):"object"==typeof c?y(b):b._d=new Date(c)}
/**
 * Description
 * @method E
 * @param {} a
 * @param {} b
 * @param {} c
 * @param {} d
 * @param {} e
 * @return CallExpression
 */
function E(a,b,c,d,e){return e.relativeTime(b||1,!!c,a,d)}
/**
 * Description
 * @method F
 * @param {} a
 * @param {} b
 * @param {} c
 * @return SequenceExpression
 */
function F(a,b,c){var d=O(Math.abs(a)/1e3),e=O(d/60),f=O(e/60),g=O(f/24),h=O(g/365),i=45>d&&["s",d]||1===e&&["m"]||45>e&&["mm",e]||1===f&&["h"]||22>f&&["hh",f]||1===g&&["d"]||25>=g&&["dd",g]||45>=g&&["M"]||345>g&&["MM",O(g/30)]||1===h&&["y"]||["yy",h];return i[2]=b,i[3]=a>0,i[4]=c,E.apply({},i)}
/**
 * Description
 * @method G
 * @param {} a
 * @param {} b
 * @param {} c
 * @return SequenceExpression
 */
function G(a,b,c){var d,e=c-b,f=c-a.day();return f>e&&(f-=7),e-7>f&&(f+=7),d=L(a).add("d",f),{week:Math.ceil(d.dayOfYear()/7),year:d.year()}}
/**
 * Description
 * @method H
 * @param {} a
 * @return ConditionalExpression
 */
function H(a){var b=a._i,c=a._f;return null===b||""===b?null:("string"==typeof b&&(a._i=b=p().preparse(b)),L.isMoment(b)?(a=g({},b),a._d=new Date(+b._d)):c?k(c)?B(a):A(a):D(a),new e(a))}
/**
 * Description
 * @method I
 * @param {} a
 * @param {} b
 * @return 
 */
function I(a,b){L.fn[a]=
/**
 * Description
 * @param {} a
 * @return ConditionalExpression
 */
L.fn[a+"s"]=function(a){var c=this._isUTC?"UTC":"";return null!=a?(this._d["set"+c+b](a),L.updateOffset(this),this):this._d["get"+c+b]()}}
/**
 * Description
 * @method J
 * @param {} a
 * @return 
 */
function J(a){
/**
 * Description
 * @method a
 * @return MemberExpression
 */
L.duration.fn[a]=function(){return this._data[a]}}
/**
 * Description
 * @method K
 * @param {} a
 * @param {} b
 * @return 
 */
function K(a,b){
/**
 * Description
 * @return BinaryExpression
 */
L.duration.fn["as"+a]=function(){return+this/b}}for(var L,M,N="2.2.1",O=Math.round,P={},Q="undefined"!=typeof module&&module.exports,R=/^\/?Date\((\-?\d+)/i,S=/(\-)?(?:(\d*)\.)?(\d+)\:(\d+)\:(\d+)\.?(\d{3})?/,T=/(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|SS?S?|X|zz?|ZZ?|.)/g,U=/(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g,V=/\d\d?/,W=/\d{1,3}/,X=/\d{3}/,Y=/\d{1,4}/,Z=/[+\-]?\d{1,6}/,$=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,_=/Z|[\+\-]\d\d:?\d\d/i,ab=/T/i,bb=/[\+\-]?\d+(\.\d{1,3})?/,cb=/^\s*\d{4}-\d\d-\d\d((T| )(\d\d(:\d\d(:\d\d(\.\d\d?\d?)?)?)?)?([\+\-]\d\d:?\d\d)?)?/,db="YYYY-MM-DDTHH:mm:ssZ",eb=[["HH:mm:ss.S",/(T| )\d\d:\d\d:\d\d\.\d{1,3}/],["HH:mm:ss",/(T| )\d\d:\d\d:\d\d/],["HH:mm",/(T| )\d\d:\d\d/],["HH",/(T| )\d\d/]],fb=/([\+\-]|\d\d)/gi,gb="Date|Hours|Minutes|Seconds|Milliseconds".split("|"),hb={Milliseconds:1,Seconds:1e3,Minutes:6e4,Hours:36e5,Days:864e5,Months:2592e6,Years:31536e6},ib={ms:"millisecond",s:"second",m:"minute",h:"hour",d:"day",w:"week",W:"isoweek",M:"month",y:"year"},jb={},kb="DDD w W M D d".split(" "),lb="M D H h m s w W".split(" "),mb={
/**
 * Description
 * @method M
 * @return BinaryExpression
 */
M:function(){return this.month()+1},
/**
 * Description
 * @method MMM
 * @param {} a
 * @return CallExpression
 */
MMM:function(a){return this.lang().monthsShort(this,a)},
/**
 * Description
 * @method MMMM
 * @param {} a
 * @return CallExpression
 */
MMMM:function(a){return this.lang().months(this,a)},
/**
 * Description
 * @method D
 * @return CallExpression
 */
D:function(){return this.date()},
/**
 * Description
 * @method DDD
 * @return CallExpression
 */
DDD:function(){return this.dayOfYear()},
/**
 * Description
 * @method d
 * @return CallExpression
 */
d:function(){return this.day()},
/**
 * Description
 * @method dd
 * @param {} a
 * @return CallExpression
 */
dd:function(a){return this.lang().weekdaysMin(this,a)},
/**
 * Description
 * @method ddd
 * @param {} a
 * @return CallExpression
 */
ddd:function(a){return this.lang().weekdaysShort(this,a)},
/**
 * Description
 * @method dddd
 * @param {} a
 * @return CallExpression
 */
dddd:function(a){return this.lang().weekdays(this,a)},
/**
 * Description
 * @method w
 * @return CallExpression
 */
w:function(){return this.week()},
/**
 * Description
 * @method W
 * @return CallExpression
 */
W:function(){return this.isoWeek()},
/**
 * Description
 * @method YY
 * @return CallExpression
 */
YY:function(){return i(this.year()%100,2)},
/**
 * Description
 * @method YYYY
 * @return CallExpression
 */
YYYY:function(){return i(this.year(),4)},
/**
 * Description
 * @method YYYYY
 * @return CallExpression
 */
YYYYY:function(){return i(this.year(),5)},
/**
 * Description
 * @method gg
 * @return CallExpression
 */
gg:function(){return i(this.weekYear()%100,2)},
/**
 * Description
 * @method gggg
 * @return CallExpression
 */
gggg:function(){return this.weekYear()},
/**
 * Description
 * @method ggggg
 * @return CallExpression
 */
ggggg:function(){return i(this.weekYear(),5)},
/**
 * Description
 * @method GG
 * @return CallExpression
 */
GG:function(){return i(this.isoWeekYear()%100,2)},
/**
 * Description
 * @method GGGG
 * @return CallExpression
 */
GGGG:function(){return this.isoWeekYear()},
/**
 * Description
 * @method GGGGG
 * @return CallExpression
 */
GGGGG:function(){return i(this.isoWeekYear(),5)},
/**
 * Description
 * @method e
 * @return CallExpression
 */
e:function(){return this.weekday()},
/**
 * Description
 * @method E
 * @return CallExpression
 */
E:function(){return this.isoWeekday()},
/**
 * Description
 * @method a
 * @return CallExpression
 */
a:function(){return this.lang().meridiem(this.hours(),this.minutes(),!0)},
/**
 * Description
 * @method A
 * @return CallExpression
 */
A:function(){return this.lang().meridiem(this.hours(),this.minutes(),!1)},
/**
 * Description
 * @method H
 * @return CallExpression
 */
H:function(){return this.hours()},
/**
 * Description
 * @method h
 * @return LogicalExpression
 */
h:function(){return this.hours()%12||12},
/**
 * Description
 * @method m
 * @return CallExpression
 */
m:function(){return this.minutes()},
/**
 * Description
 * @method s
 * @return CallExpression
 */
s:function(){return this.seconds()},
/**
 * Description
 * @method S
 * @return UnaryExpression
 */
S:function(){return~~(this.milliseconds()/100)},
/**
 * Description
 * @method SS
 * @return CallExpression
 */
SS:function(){return i(~~(this.milliseconds()/10),2)},
/**
 * Description
 * @method SSS
 * @return CallExpression
 */
SSS:function(){return i(this.milliseconds(),3)},
/**
 * Description
 * @method Z
 * @return SequenceExpression
 */
Z:function(){var a=-this.zone(),b="+";return 0>a&&(a=-a,b="-"),b+i(~~(a/60),2)+":"+i(~~a%60,2)},
/**
 * Description
 * @method ZZ
 * @return SequenceExpression
 */
ZZ:function(){var a=-this.zone(),b="+";return 0>a&&(a=-a,b="-"),b+i(~~(10*a/6),4)},
/**
 * Description
 * @method z
 * @return CallExpression
 */
z:function(){return this.zoneAbbr()},
/**
 * Description
 * @method zz
 * @return CallExpression
 */
zz:function(){return this.zoneName()},
/**
 * Description
 * @method X
 * @return CallExpression
 */
X:function(){return this.unix()}};kb.length;)M=kb.pop(),mb[M+"o"]=c(mb[M],M);for(;lb.length;)M=lb.pop(),mb[M+M]=b(mb[M],2);for(mb.DDDD=b(mb.DDD,3),g(d.prototype,{
/**
 * Description
 * @method set
 * @param {} a
 * @return 
 */
set:function(a){var b,c;for(c in a)b=a[c],"function"==typeof b?this[c]=b:this["_"+c]=b},_months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
/**
 * Description
 * @method months
 * @param {} a
 * @return MemberExpression
 */
months:function(a){return this._months[a.month()]},_monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
/**
 * Description
 * @method monthsShort
 * @param {} a
 * @return MemberExpression
 */
monthsShort:function(a){return this._monthsShort[a.month()]},
/**
 * Description
 * @method monthsParse
 * @param {} a
 * @return 
 */
monthsParse:function(a){var b,c,d;for(this._monthsParse||(this._monthsParse=[]),b=0;12>b;b++)if(this._monthsParse[b]||(c=L.utc([2e3,b]),d="^"+this.months(c,"")+"|^"+this.monthsShort(c,""),this._monthsParse[b]=new RegExp(d.replace(".",""),"i")),this._monthsParse[b].test(a))return b},_weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
/**
 * Description
 * @method weekdays
 * @param {} a
 * @return MemberExpression
 */
weekdays:function(a){return this._weekdays[a.day()]},_weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
/**
 * Description
 * @method weekdaysShort
 * @param {} a
 * @return MemberExpression
 */
weekdaysShort:function(a){return this._weekdaysShort[a.day()]},_weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
/**
 * Description
 * @method weekdaysMin
 * @param {} a
 * @return MemberExpression
 */
weekdaysMin:function(a){return this._weekdaysMin[a.day()]},
/**
 * Description
 * @method weekdaysParse
 * @param {} a
 * @return 
 */
weekdaysParse:function(a){var b,c,d;for(this._weekdaysParse||(this._weekdaysParse=[]),b=0;7>b;b++)if(this._weekdaysParse[b]||(c=L([2e3,1]).day(b),d="^"+this.weekdays(c,"")+"|^"+this.weekdaysShort(c,"")+"|^"+this.weekdaysMin(c,""),this._weekdaysParse[b]=new RegExp(d.replace(".",""),"i")),this._weekdaysParse[b].test(a))return b},_longDateFormat:{LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D YYYY",LLL:"MMMM D YYYY LT",LLLL:"dddd, MMMM D YYYY LT"},
/**
 * Description
 * @method longDateFormat
 * @param {} a
 * @return SequenceExpression
 */
longDateFormat:function(a){var b=this._longDateFormat[a];return!b&&this._longDateFormat[a.toUpperCase()]&&(b=this._longDateFormat[a.toUpperCase()].replace(/MMMM|MM|DD|dddd/g,function(a){return a.slice(1)}),this._longDateFormat[a]=b),b},
/**
 * Description
 * @method isPM
 * @param {} a
 * @return BinaryExpression
 */
isPM:function(a){return"p"===(a+"").toLowerCase().charAt(0)},_meridiemParse:/[ap]\.?m?\.?/i,
/**
 * Description
 * @method meridiem
 * @param {} a
 * @param {} b
 * @param {} c
 * @return ConditionalExpression
 */
meridiem:function(a,b,c){return a>11?c?"pm":"PM":c?"am":"AM"},_calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},
/**
 * Description
 * @method calendar
 * @param {} a
 * @param {} b
 * @return ConditionalExpression
 */
calendar:function(a,b){var c=this._calendar[a];return"function"==typeof c?c.apply(b):c},_relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},
/**
 * Description
 * @method relativeTime
 * @param {} a
 * @param {} b
 * @param {} c
 * @param {} d
 * @return ConditionalExpression
 */
relativeTime:function(a,b,c,d){var e=this._relativeTime[c];return"function"==typeof e?e(a,b,c,d):e.replace(/%d/i,a)},
/**
 * Description
 * @method pastFuture
 * @param {} a
 * @param {} b
 * @return ConditionalExpression
 */
pastFuture:function(a,b){var c=this._relativeTime[a>0?"future":"past"];return"function"==typeof c?c(b):c.replace(/%s/i,b)},
/**
 * Description
 * @method ordinal
 * @param {} a
 * @return CallExpression
 */
ordinal:function(a){return this._ordinal.replace("%d",a)},_ordinal:"%d",
/**
 * Description
 * @method preparse
 * @param {} a
 * @return a
 */
preparse:function(a){return a},
/**
 * Description
 * @method postformat
 * @param {} a
 * @return a
 */
postformat:function(a){return a},
/**
 * Description
 * @method week
 * @param {} a
 * @return MemberExpression
 */
week:function(a){return G(a,this._week.dow,this._week.doy).week},_week:{dow:0,doy:6}}),
/**
 * Description
 * @param {} a
 * @param {} b
 * @param {} c
 * @return CallExpression
 */
L=function(a,b,c){return H({_i:a,_f:b,_l:c,_isUTC:!1})},
/**
 * Description
 * @method utc
 * @param {} a
 * @param {} b
 * @param {} c
 * @return CallExpression
 */
L.utc=function(a,b,c){return H({_useUTC:!0,_isUTC:!0,_l:c,_i:a,_f:b}).utc()},
/**
 * Description
 * @method unix
 * @param {} a
 * @return CallExpression
 */
L.unix=function(a){return L(1e3*a)},
/**
 * Description
 * @method duration
 * @param {} a
 * @param {} b
 * @return SequenceExpression
 */
L.duration=function(a,b){var c,d,e=L.isDuration(a),g="number"==typeof a,h=e?a._input:g?{}:a,i=S.exec(a);return g?b?h[b]=a:h.milliseconds=a:i&&(c="-"===i[1]?-1:1,h={y:0,d:~~i[2]*c,h:~~i[3]*c,m:~~i[4]*c,s:~~i[5]*c,ms:~~i[6]*c}),d=new f(h),e&&a.hasOwnProperty("_lang")&&(d._lang=a._lang),d},L.version=N,L.defaultFormat=db,
/**
 * Description
 * @method updateOffset
 * @return 
 */
L.updateOffset=function(){},
/**
 * Description
 * @method lang
 * @param {} a
 * @param {} b
 * @return ConditionalExpression
 */
L.lang=function(a,b){return a?(a=a.toLowerCase(),a=a.replace("_","-"),b?n(a,b):null===b?(o(a),a="en"):P[a]||p(a),L.duration.fn._lang=L.fn._lang=p(a),void 0):L.fn._lang._abbr},
/**
 * Description
 * @method langData
 * @param {} a
 * @return SequenceExpression
 */
L.langData=function(a){return a&&a._lang&&a._lang._abbr&&(a=a._lang._abbr),p(a)},
/**
 * Description
 * @method isMoment
 * @param {} a
 * @return BinaryExpression
 */
L.isMoment=function(a){return a instanceof e},
/**
 * Description
 * @method isDuration
 * @param {} a
 * @return BinaryExpression
 */
L.isDuration=function(a){return a instanceof f},g(L.fn=e.prototype,{
/**
 * Description
 * @method clone
 * @return CallExpression
 */
clone:function(){return L(this)},
/**
 * Description
 * @method valueOf
 * @return BinaryExpression
 */
valueOf:function(){return+this._d+6e4*(this._offset||0)},
/**
 * Description
 * @method unix
 * @return CallExpression
 */
unix:function(){return Math.floor(+this/1e3)},
/**
 * Description
 * @method toString
 * @return CallExpression
 */
toString:function(){return this.format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")},
/**
 * Description
 * @method toDate
 * @return ConditionalExpression
 */
toDate:function(){return this._offset?new Date(+this):this._d},
/**
 * Description
 * @method toISOString
 * @return CallExpression
 */
toISOString:function(){return s(L(this).utc(),"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]")},
/**
 * Description
 * @method toArray
 * @return ArrayExpression
 */
toArray:function(){var a=this;return[a.year(),a.month(),a.date(),a.hours(),a.minutes(),a.seconds(),a.milliseconds()]},
/**
 * Description
 * @method isValid
 * @return SequenceExpression
 */
isValid:function(){return null==this._isValid&&(this._isValid=this._a?!l(this._a,(this._isUTC?L.utc(this._a):L(this._a)).toArray()):!isNaN(this._d.getTime())),!!this._isValid},
/**
 * Description
 * @method invalidAt
 * @return a
 */
invalidAt:function(){var a,b=this._a,c=(this._isUTC?L.utc(this._a):L(this._a)).toArray();for(a=6;a>=0&&b[a]===c[a];--a);return a},
/**
 * Description
 * @method utc
 * @return CallExpression
 */
utc:function(){return this.zone(0)},
/**
 * Description
 * @method local
 * @return SequenceExpression
 */
local:function(){return this.zone(0),this._isUTC=!1,this},
/**
 * Description
 * @method format
 * @param {} a
 * @return CallExpression
 */
format:function(a){var b=s(this,a||L.defaultFormat);return this.lang().postformat(b)},
/**
 * Description
 * @method add
 * @param {} a
 * @param {} b
 * @return SequenceExpression
 */
add:function(a,b){var c;return c="string"==typeof a?L.duration(+b,a):L.duration(a,b),j(this,c,1),this},
/**
 * Description
 * @method subtract
 * @param {} a
 * @param {} b
 * @return SequenceExpression
 */
subtract:function(a,b){var c;return c="string"==typeof a?L.duration(+b,a):L.duration(a,b),j(this,c,-1),this},
/**
 * Description
 * @method diff
 * @param {} a
 * @param {} b
 * @param {} c
 * @return SequenceExpression
 */
diff:function(a,b,c){var d,e,f=this._isUTC?L(a).zone(this._offset||0):L(a).local(),g=6e4*(this.zone()-f.zone());return b=m(b),"year"===b||"month"===b?(d=432e5*(this.daysInMonth()+f.daysInMonth()),e=12*(this.year()-f.year())+(this.month()-f.month()),e+=(this-L(this).startOf("month")-(f-L(f).startOf("month")))/d,e-=6e4*(this.zone()-L(this).startOf("month").zone()-(f.zone()-L(f).startOf("month").zone()))/d,"year"===b&&(e/=12)):(d=this-f,e="second"===b?d/1e3:"minute"===b?d/6e4:"hour"===b?d/36e5:"day"===b?(d-g)/864e5:"week"===b?(d-g)/6048e5:d),c?e:h(e)},
/**
 * Description
 * @method from
 * @param {} a
 * @param {} b
 * @return CallExpression
 */
from:function(a,b){return L.duration(this.diff(a)).lang(this.lang()._abbr).humanize(!b)},
/**
 * Description
 * @method fromNow
 * @param {} a
 * @return CallExpression
 */
fromNow:function(a){return this.from(L(),a)},
/**
 * Description
 * @method calendar
 * @return CallExpression
 */
calendar:function(){var a=this.diff(L().zone(this.zone()).startOf("day"),"days",!0),b=-6>a?"sameElse":-1>a?"lastWeek":0>a?"lastDay":1>a?"sameDay":2>a?"nextDay":7>a?"nextWeek":"sameElse";return this.format(this.lang().calendar(b,this))},
/**
 * Description
 * @method isLeapYear
 * @return LogicalExpression
 */
isLeapYear:function(){var a=this.year();return 0===a%4&&0!==a%100||0===a%400},
/**
 * Description
 * @method isDST
 * @return LogicalExpression
 */
isDST:function(){return this.zone()<this.clone().month(0).zone()||this.zone()<this.clone().month(5).zone()},
/**
 * Description
 * @method day
 * @param {} a
 * @return ConditionalExpression
 */
day:function(a){var b=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=a?"string"==typeof a&&(a=this.lang().weekdaysParse(a),"number"!=typeof a)?this:this.add({d:a-b}):b},
/**
 * Description
 * @method month
 * @param {} a
 * @return ConditionalExpression
 */
month:function(a){var b,c=this._isUTC?"UTC":"";return null!=a?"string"==typeof a&&(a=this.lang().monthsParse(a),"number"!=typeof a)?this:(b=this.date(),this.date(1),this._d["set"+c+"Month"](a),this.date(Math.min(b,this.daysInMonth())),L.updateOffset(this),this):this._d["get"+c+"Month"]()},
/**
 * Description
 * @method startOf
 * @param {} a
 * @return SequenceExpression
 */
startOf:function(a){switch(a=m(a)){case"year":this.month(0);case"month":this.date(1);case"week":case"isoweek":case"day":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return"week"===a?this.weekday(0):"isoweek"===a&&this.isoWeekday(1),this},
/**
 * Description
 * @method endOf
 * @param {} a
 * @return SequenceExpression
 */
endOf:function(a){return a=m(a),this.startOf(a).add("isoweek"===a?"week":a,1).subtract("ms",1)},
/**
 * Description
 * @method isAfter
 * @param {} a
 * @param {} b
 * @return SequenceExpression
 */
isAfter:function(a,b){return b="undefined"!=typeof b?b:"millisecond",+this.clone().startOf(b)>+L(a).startOf(b)},
/**
 * Description
 * @method isBefore
 * @param {} a
 * @param {} b
 * @return SequenceExpression
 */
isBefore:function(a,b){return b="undefined"!=typeof b?b:"millisecond",+this.clone().startOf(b)<+L(a).startOf(b)},
/**
 * Description
 * @method isSame
 * @param {} a
 * @param {} b
 * @return SequenceExpression
 */
isSame:function(a,b){return b="undefined"!=typeof b?b:"millisecond",+this.clone().startOf(b)===+L(a).startOf(b)},
/**
 * Description
 * @method min
 * @param {} a
 * @return SequenceExpression
 */
min:function(a){return a=L.apply(null,arguments),this>a?this:a},
/**
 * Description
 * @method max
 * @param {} a
 * @return SequenceExpression
 */
max:function(a){return a=L.apply(null,arguments),a>this?this:a},
/**
 * Description
 * @method zone
 * @param {} a
 * @return ConditionalExpression
 */
zone:function(a){var b=this._offset||0;return null==a?this._isUTC?b:this._d.getTimezoneOffset():("string"==typeof a&&(a=v(a)),Math.abs(a)<16&&(a=60*a),this._offset=a,this._isUTC=!0,b!==a&&j(this,L.duration(b-a,"m"),1,!0),this)},
/**
 * Description
 * @method zoneAbbr
 * @return ConditionalExpression
 */
zoneAbbr:function(){return this._isUTC?"UTC":""},
/**
 * Description
 * @method zoneName
 * @return ConditionalExpression
 */
zoneName:function(){return this._isUTC?"Coordinated Universal Time":""},
/**
 * Description
 * @method hasAlignedHourOffset
 * @param {} a
 * @return SequenceExpression
 */
hasAlignedHourOffset:function(a){return a=a?L(a).zone():0,0===(this.zone()-a)%60},
/**
 * Description
 * @method daysInMonth
 * @return CallExpression
 */
daysInMonth:function(){return L.utc([this.year(),this.month()+1,0]).date()},
/**
 * Description
 * @method dayOfYear
 * @param {} a
 * @return ConditionalExpression
 */
dayOfYear:function(a){var b=O((L(this).startOf("day")-L(this).startOf("year"))/864e5)+1;return null==a?b:this.add("d",a-b)},
/**
 * Description
 * @method weekYear
 * @param {} a
 * @return ConditionalExpression
 */
weekYear:function(a){var b=G(this,this.lang()._week.dow,this.lang()._week.doy).year;return null==a?b:this.add("y",a-b)},
/**
 * Description
 * @method isoWeekYear
 * @param {} a
 * @return ConditionalExpression
 */
isoWeekYear:function(a){var b=G(this,1,4).year;return null==a?b:this.add("y",a-b)},
/**
 * Description
 * @method week
 * @param {} a
 * @return ConditionalExpression
 */
week:function(a){var b=this.lang().week(this);return null==a?b:this.add("d",7*(a-b))},
/**
 * Description
 * @method isoWeek
 * @param {} a
 * @return ConditionalExpression
 */
isoWeek:function(a){var b=G(this,1,4).week;return null==a?b:this.add("d",7*(a-b))},
/**
 * Description
 * @method weekday
 * @param {} a
 * @return ConditionalExpression
 */
weekday:function(a){var b=(this._d.getDay()+7-this.lang()._week.dow)%7;return null==a?b:this.add("d",a-b)},
/**
 * Description
 * @method isoWeekday
 * @param {} a
 * @return ConditionalExpression
 */
isoWeekday:function(a){return null==a?this.day()||7:this.day(this.day()%7?a:a-7)},
/**
 * Description
 * @method get
 * @param {} a
 * @return SequenceExpression
 */
get:function(a){return a=m(a),this[a.toLowerCase()]()},
/**
 * Description
 * @method set
 * @param {} a
 * @param {} b
 * @return 
 */
set:function(a,b){a=m(a),this[a.toLowerCase()](b)},
/**
 * Description
 * @method lang
 * @param {} b
 * @return ConditionalExpression
 */
lang:function(b){return b===a?this._lang:(this._lang=p(b),this)}}),M=0;M<gb.length;M++)I(gb[M].toLowerCase().replace(/s$/,""),gb[M]);I("year","FullYear"),L.fn.days=L.fn.day,L.fn.months=L.fn.month,L.fn.weeks=L.fn.week,L.fn.isoWeeks=L.fn.isoWeek,L.fn.toJSON=L.fn.toISOString,g(L.duration.fn=f.prototype,{_bubble:function(){var a,b,c,d,e=this._milliseconds,f=this._days,g=this._months,i=this._data;i.milliseconds=e%1e3,a=h(e/1e3),i.seconds=a%60,b=h(a/60),i.minutes=b%60,c=h(b/60),i.hours=c%24,f+=h(c/24),i.days=f%30,g+=h(f/30),i.months=g%12,d=h(g/12),i.years=d},
/**
 * Description
 * @method weeks
 * @return CallExpression
 */
weeks:function(){return h(this.days()/7)},
/**
 * Description
 * @method valueOf
 * @return BinaryExpression
 */
valueOf:function(){return this._milliseconds+864e5*this._days+2592e6*(this._months%12)+31536e6*~~(this._months/12)},
/**
 * Description
 * @method humanize
 * @param {} a
 * @return SequenceExpression
 */
humanize:function(a){var b=+this,c=F(b,!a,this.lang());return a&&(c=this.lang().pastFuture(b,c)),this.lang().postformat(c)},
/**
 * Description
 * @method add
 * @param {} a
 * @param {} b
 * @return SequenceExpression
 */
add:function(a,b){var c=L.duration(a,b);return this._milliseconds+=c._milliseconds,this._days+=c._days,this._months+=c._months,this._bubble(),this},
/**
 * Description
 * @method subtract
 * @param {} a
 * @param {} b
 * @return SequenceExpression
 */
subtract:function(a,b){var c=L.duration(a,b);return this._milliseconds-=c._milliseconds,this._days-=c._days,this._months-=c._months,this._bubble(),this},
/**
 * Description
 * @method get
 * @param {} a
 * @return SequenceExpression
 */
get:function(a){return a=m(a),this[a.toLowerCase()+"s"]()},
/**
 * Description
 * @method as
 * @param {} a
 * @return SequenceExpression
 */
as:function(a){return a=m(a),this["as"+a.charAt(0).toUpperCase()+a.slice(1)+"s"]()},lang:L.fn.lang});for(M in hb)hb.hasOwnProperty(M)&&(K(M,hb[M]),J(M.toLowerCase()));K("Weeks",6048e5),
/**
 * Description
 * @method asMonths
 * @return BinaryExpression
 */
L.duration.fn.asMonths=function(){return(+this-31536e6*this.years())/2592e6+12*this.years()},L.lang("en",{
/**
 * Description
 * @method ordinal
 * @param {} a
 * @return BinaryExpression
 */
ordinal:function(a){var b=a%10,c=1===~~(a%100/10)?"th":1===b?"st":2===b?"nd":3===b?"rd":"th";return a+c}}),Q&&(module.exports=L),"undefined"==typeof ender&&(this.moment=L),"function"==typeof define&&define.amd&&define("moment",[],function(){return L})}).call(this);