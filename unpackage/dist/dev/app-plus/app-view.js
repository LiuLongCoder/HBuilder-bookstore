var __pageFrameStartTime__ = Date.now();
var __webviewId__;
var __wxAppCode__ = {};
var __WXML_GLOBAL__ = {
  entrys: {},
  defines: {},
  modules: {},
  ops: [],
  wxs_nf_init: undefined,
  total_ops: 0
};
var $gwx;

/*v0.5vv_20190312_syb_scopedata*/window.__wcc_version__='v0.5vv_20190312_syb_scopedata';window.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
var value = $gdc( raw, "", 2 );
if ( o.ap && value && value.constructor===Function ) 
{
attrname = "$wxs:" + attrname; 
node.attr["$gdc"] = $gdc;
}
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
}
node.attr[attrname] = value;
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, c){
p.extraAttr = {"t_action": a, "t_cid": c};
}

function _gv( )
{if( typeof( window.__webview_engine_version__) == 'undefined' ) return 0.0;
return window.__webview_engine_version__;}
function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'content'])
Z([[7],[3,'bookDetailM']])
Z([3,'bookInfoView'])
Z([3,'bookImageContainer'])
Z([[7],[3,'bookImageContainerStyle']])
Z([3,'bookImage'])
Z([[2,'&&'],[[7],[3,'bookDetailM']],[[6],[[7],[3,'bookDetailM']],[3,'bookCoverURL']]])
Z([[7],[3,'bookImageStyle']])
Z([[2,'&&'],[[7],[3,'bookDetailM']],[[6],[[7],[3,'bookDetailM']],[3,'vipFlag']]])
Z([3,'vipTag'])
Z([3,'vip'])
Z([3,'bookNameText'])
Z([a,[[2,'&&'],[[7],[3,'bookDetailM']],[[6],[[7],[3,'bookDetailM']],[3,'bookName']]]])
Z([3,'createTimeText'])
Z([3,'color:#999999;font-size:20rpx;margin-top:20rpx;'])
Z([a,[[2,'+'],[1,'更新时间：'],[[6],[[7],[3,'bookDetailM']],[3,'bookUpdateTime']]]])
Z([3,'simpleInfoView inline'])
Z([3,'oneInfoView'])
Z([3,'oneInfoText'])
Z([a,[[2,'&&'],[[7],[3,'bookDetailM']],[[6],[[7],[3,'bookDetailM']],[3,'bookPublisherName']]]])
Z([3,'oneInfoTitle'])
Z([3,'发布人'])
Z([3,'VLine'])
Z(z[17])
Z(z[18])
Z([a,[[6],[[7],[3,'$root']],[3,'m0']]])
Z(z[20])
Z([3,'浏览数'])
Z(z[22])
Z(z[17])
Z(z[18])
Z([a,[[6],[[7],[3,'$root']],[3,'m1']]])
Z(z[20])
Z([3,'下载数'])
Z([3,'bookDescText bookDescLabelShowSome'])
Z([a,[[2,'&&'],[[7],[3,'bookDetailM']],[[6],[[7],[3,'bookDetailM']],[3,'bookDESC']]]])
Z([[2,'&&'],[[2,'&&'],[[7],[3,'bookDetailM']],[[6],[[7],[3,'bookDetailM']],[3,'supportModelListNew']]],[[2,'>'],[[6],[[6],[[7],[3,'bookDetailM']],[3,'supportModelListNew']],[3,'length']],[1,0]]])
Z([3,'HLine'])
Z([3,'supportTypeView inline'])
Z([3,'supportTypeTitle'])
Z([3,'本书支持:'])
Z([3,'sIdx'])
Z([3,'supportModel'])
Z([[6],[[7],[3,'bookDetailM']],[3,'supportModelListNew']])
Z(z[41])
Z([3,'supportTypeText'])
Z([a,[[6],[[7],[3,'supportModel']],[3,'name']]])
Z([[2,'&&'],[[7],[3,'bookTags']],[[2,'>'],[[6],[[7],[3,'bookTags']],[3,'length']],[1,0]]])
Z(z[37])
Z([3,'bookTagsScroller inline'])
Z([3,'true'])
Z([3,'bIdx'])
Z([3,'bookTag'])
Z([[7],[3,'bookTags']])
Z(z[51])
Z([3,'bookTagText'])
Z([a,[[6],[[7],[3,'bookTag']],[3,'name']]])
Z([[2,'&&'],[[7],[3,'zoneArray']],[[2,'>'],[[6],[[7],[3,'zoneArray']],[3,'length']],[1,0]]])
Z([3,'zoneListContainer'])
Z(z[37])
Z([3,'zoneTitleText'])
Z([3,'所属专区'])
Z([3,'zIdx'])
Z([3,'zone'])
Z([[7],[3,'zoneArray']])
Z(z[62])
Z([3,'__e'])
Z([3,'zoneCell'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'goSubjectBooksPage']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[[5],[1,'zoneArray']],[1,'']],[[7],[3,'zIdx']]],[1,'id']]]]]]]]]]]]]]])
Z([3,'zoneNameText'])
Z([a,[[6],[[7],[3,'zone']],[3,'name']]])
Z([3,'zoneImage'])
Z([3,'aspectFill'])
Z([[6],[[7],[3,'zone']],[3,'cover']])
Z([[2,'&&'],[[7],[3,'recommendBooks']],[[2,'>'],[[6],[[7],[3,'recommendBooks']],[3,'length']],[1,0]]])
Z([3,'recommendBookContainer'])
Z(z[37])
Z([3,'recommendBookTitleText'])
Z([3,'相关推荐'])
Z(z[74])
Z([3,'recommendBookScroller'])
Z(z[50])
Z(z[51])
Z([3,'book'])
Z([[7],[3,'recommendBooks']])
Z(z[51])
Z(z[66])
Z([3,'bookItemView'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'goBookDetailPage']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[[5],[1,'recommendBooks']],[1,'']],[[7],[3,'bIdx']]],[1,'bookGUID']]]]]]]]]]]]]]])
Z([3,'bookItemImage'])
Z([[6],[[7],[3,'book']],[3,'bookCoverURL']])
Z([3,'bookItemNameText'])
Z([a,[[6],[[7],[3,'book']],[3,'bookName']]])
Z(z[66])
Z([3,'downBtn'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'downAction']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'primary'])
Z([3,'下载'])
Z(z[66])
Z(z[94])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'readConfig']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z(z[96])
Z([3,'配置文件'])
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'content'])
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'content'])
Z([3,'scrollView'])
Z([3,'true'])
Z(z[2])
Z([3,'bIdx'])
Z([3,'book'])
Z([[7],[3,'books']])
Z(z[4])
Z([3,'__e'])
Z([3,'bookItemView'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'goBookDetailPage']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[[5],[1,'books']],[1,'']],[[7],[3,'bIdx']]],[1,'bookGUID']]]]]]]]]]]]]]])
Z([3,'image'])
Z([3,'aspectFit'])
Z([[6],[[7],[3,'book']],[3,'bookCoverURL']])
Z([3,'bookNameLable'])
Z([a,[[6],[[7],[3,'book']],[3,'bookName']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'content'])
Z([3,'__e'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'goBookStorePage']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([a,[[7],[3,'userId']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'content'])
Z([3,'fIdx'])
Z([3,'floor'])
Z([[7],[3,'dataArray']])
Z(z[1])
Z([3,'contentWrapper'])
Z([[2,'==='],[[6],[[7],[3,'floor']],[3,'type']],[1,1]])
Z([3,'floorView'])
Z([3,'bookListScroller'])
Z([3,'true'])
Z([3,'false'])
Z(z[10])
Z([3,'iIdx'])
Z([3,'item'])
Z([[6],[[7],[3,'floor']],[3,'items']])
Z(z[12])
Z([3,'__e'])
Z([3,'bookView'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'goBookDetailPage']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[5],[[4],[[5],[[5],[[5],[1,'dataArray']],[1,'']],[[7],[3,'fIdx']]]]],[[4],[[5],[[5],[[5],[[5],[1,'items']],[1,'']],[[7],[3,'iIdx']]],[1,'itemId']]]]]]]]]]]]]]])
Z([3,'bookImage'])
Z([3,'aspectFill'])
Z([3,'stretch'])
Z([[6],[[7],[3,'item']],[3,'itemIcon']])
Z([3,'bookNameLabel'])
Z([a,[[6],[[7],[3,'item']],[3,'itemName']]])
Z([[2,'&&'],[[2,'==='],[[6],[[7],[3,'floor']],[3,'type']],[1,3]],[[2,'>'],[[6],[[6],[[7],[3,'floor']],[3,'items']],[3,'length']],[1,0]]])
Z(z[16])
Z(z[7])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'goSubjectBooksPage']],[[4],[[5],[[5],[1,'$0']],[1,'$1']]]],[[4],[[5],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[[5],[1,'dataArray']],[1,'']],[[7],[3,'fIdx']]],[1,'items.__$n0.itemId']]]]]],[[4],[[5],[[4],[[5],[[5],[[5],[[5],[1,'dataArray']],[1,'']],[[7],[3,'fIdx']]],[1,'items.__$n0.moduleName']]]]]]]]]]]]]]])
Z([3,'floorTitleLabel'])
Z([a,[[6],[[7],[3,'floor']],[3,'moduleName']]])
Z([3,'image'])
Z(z[20])
Z(z[21])
Z([[6],[[6],[[6],[[7],[3,'floor']],[3,'items']],[1,0]],[3,'itemIcon']])
Z([[2,'==='],[[6],[[7],[3,'floor']],[3,'type']],[1,4]])
Z(z[7])
Z([[2,'>='],[[6],[[6],[[7],[3,'floor']],[3,'items']],[3,'length']],[1,2]])
Z(z[29])
Z([a,z[30][1]])
Z([3,'twoTopicView'])
Z(z[16])
Z([3,'oneTopicView'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'goSubjectBooksPage']],[[4],[[5],[[5],[1,'$0']],[1,'$1']]]],[[4],[[5],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[[5],[1,'dataArray']],[1,'']],[[7],[3,'fIdx']]],[1,'items.__$n0.itemId']]]]]],[[4],[[5],[[4],[[5],[[5],[[5],[[5],[1,'dataArray']],[1,'']],[[7],[3,'fIdx']]],[1,'items.__$n0.itemName']]]]]]]]]]]]]]])
Z([3,'towTopicImage'])
Z(z[20])
Z(z[21])
Z(z[34])
Z([3,'topicTitleLabel'])
Z([a,[[6],[[6],[[6],[[7],[3,'floor']],[3,'items']],[1,0]],[3,'itemName']]])
Z(z[16])
Z([3,'oneTopicView secondTopicView'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'goSubjectBooksPage']],[[4],[[5],[[5],[1,'$0']],[1,'$1']]]],[[4],[[5],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[[5],[1,'dataArray']],[1,'']],[[7],[3,'fIdx']]],[1,'items.__$n1.itemId']]]]]],[[4],[[5],[[4],[[5],[[5],[[5],[[5],[1,'dataArray']],[1,'']],[[7],[3,'fIdx']]],[1,'items.__$n1.itemName']]]]]]]]]]]]]]])
Z(z[44])
Z(z[20])
Z(z[21])
Z([[6],[[6],[[6],[[7],[3,'floor']],[3,'items']],[1,1]],[3,'itemIcon']])
Z(z[48])
Z([a,[[6],[[6],[[6],[[7],[3,'floor']],[3,'items']],[1,1]],[3,'itemName']]])
Z([[2,'&&'],[[2,'==='],[[6],[[7],[3,'floor']],[3,'type']],[1,5]],[[2,'=='],[[6],[[6],[[7],[3,'floor']],[3,'items']],[3,'length']],[1,3]]])
Z(z[7])
Z(z[29])
Z([a,z[30][1]])
Z([3,'thirdItemContainer'])
Z(z[12])
Z(z[13])
Z(z[14])
Z(z[12])
Z(z[16])
Z([3,'thirdItemCell'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'goSubjectBooksPage']],[[4],[[5],[[5],[1,'$0']],[1,'$1']]]],[[4],[[5],[[5],[[4],[[5],[[5],[[4],[[5],[[5],[[5],[1,'dataArray']],[1,'']],[[7],[3,'fIdx']]]]],[[4],[[5],[[5],[[5],[[5],[1,'items']],[1,'']],[[7],[3,'iIdx']]],[1,'itemId']]]]]],[[4],[[5],[[5],[[4],[[5],[[5],[[5],[1,'dataArray']],[1,'']],[[7],[3,'fIdx']]]]],[[4],[[5],[[5],[[5],[[5],[1,'items']],[1,'']],[[7],[3,'iIdx']]],[1,'itemName']]]]]]]]]]]]]]])
Z([3,'thirdImg'])
Z(z[21])
Z(z[22])
Z([[2,'==='],[[6],[[7],[3,'floor']],[3,'type']],[1,6]])
Z(z[7])
Z([3,'tagScrollView'])
Z(z[9])
Z(z[12])
Z(z[13])
Z(z[14])
Z(z[12])
Z([3,'tagLabel'])
Z([a,z[24][1]])
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'content'])
Z([3,'fIdx'])
Z([3,'floor'])
Z([[7],[3,'dataArray']])
Z(z[1])
Z([3,'contentWrapper'])
Z([[2,'==='],[[6],[[7],[3,'floor']],[3,'type']],[1,1]])
Z([3,'floorView'])
Z([3,'bookListScroller'])
Z([3,'true'])
Z([3,'false'])
Z(z[10])
Z([3,'iIdx'])
Z([3,'item'])
Z([[6],[[7],[3,'floor']],[3,'items']])
Z(z[12])
Z([3,'bookView'])
Z([3,'bookImage'])
Z([3,'aspectFill'])
Z([3,'stretch'])
Z([[6],[[7],[3,'item']],[3,'itemIcon']])
Z([3,'bookNameLabel'])
Z([a,[[6],[[7],[3,'item']],[3,'itemName']]])
Z([[2,'&&'],[[2,'==='],[[6],[[7],[3,'floor']],[3,'type']],[1,3]],[[2,'>'],[[6],[[6],[[7],[3,'floor']],[3,'items']],[3,'length']],[1,0]]])
Z(z[7])
Z([3,'floorTitleLabel'])
Z([a,[[6],[[7],[3,'floor']],[3,'moduleName']]])
Z([3,'image'])
Z(z[18])
Z(z[19])
Z([[6],[[6],[[6],[[7],[3,'floor']],[3,'items']],[1,0]],[3,'itemIcon']])
Z([[2,'==='],[[6],[[7],[3,'floor']],[3,'type']],[1,4]])
Z(z[7])
Z([[2,'>='],[[6],[[6],[[7],[3,'floor']],[3,'items']],[3,'length']],[1,2]])
Z(z[25])
Z([a,z[26][1]])
Z([3,'twoTopicView'])
Z([3,'oneTopicView'])
Z([3,'towTopicImage'])
Z(z[18])
Z(z[19])
Z(z[30])
Z([3,'topicTitleLabel'])
Z([a,[[6],[[6],[[6],[[7],[3,'floor']],[3,'items']],[1,0]],[3,'itemName']]])
Z([3,'oneTopicView secondTopicView'])
Z(z[38])
Z(z[18])
Z(z[19])
Z([[6],[[6],[[6],[[7],[3,'floor']],[3,'items']],[1,1]],[3,'itemIcon']])
Z(z[42])
Z([a,[[6],[[6],[[6],[[7],[3,'floor']],[3,'items']],[1,1]],[3,'itemName']]])
Z([[2,'&&'],[[2,'==='],[[6],[[7],[3,'floor']],[3,'type']],[1,5]],[[2,'=='],[[6],[[6],[[7],[3,'floor']],[3,'items']],[3,'length']],[1,3]]])
Z(z[7])
Z(z[25])
Z([a,z[26][1]])
Z([3,'thirdItemContainer'])
Z(z[12])
Z(z[13])
Z(z[14])
Z(z[12])
Z([3,'thirdItemCell'])
Z([3,'thirdImg'])
Z(z[19])
Z(z[20])
Z([[2,'==='],[[6],[[7],[3,'floor']],[3,'type']],[1,6]])
Z(z[7])
Z([3,'tagScrollView'])
Z(z[9])
Z(z[12])
Z(z[13])
Z(z[14])
Z(z[12])
Z([3,'tagLabel'])
Z([a,z[22][1]])
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./pages/BookDetail.wxml','./pages/SearchPage.wxml','./pages/SubjectBooks.wxml','./pages/lanchpage.wxml','./pages/tab/BookStore.wxml','./pages/tab/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
var oB=_n('view')
_rz(z,oB,'class',0,e,s,gg)
var xC=_v()
_(oB,xC)
if(_oz(z,1,e,s,gg)){xC.wxVkey=1
var oD=_n('scroll-view')
var cI=_n('view')
_rz(z,cI,'class',2,e,s,gg)
var lK=_mz(z,'view',['class',3,'style',1],[],e,s,gg)
var aL=_mz(z,'image',['class',5,'src',1,'style',2],[],e,s,gg)
_(lK,aL)
_(cI,lK)
var oJ=_v()
_(cI,oJ)
if(_oz(z,8,e,s,gg)){oJ.wxVkey=1
var tM=_n('text')
_rz(z,tM,'class',9,e,s,gg)
var eN=_oz(z,10,e,s,gg)
_(tM,eN)
_(oJ,tM)
}
var bO=_n('text')
_rz(z,bO,'class',11,e,s,gg)
var oP=_oz(z,12,e,s,gg)
_(bO,oP)
_(cI,bO)
var xQ=_mz(z,'text',['class',13,'style',1],[],e,s,gg)
var oR=_oz(z,15,e,s,gg)
_(xQ,oR)
_(cI,xQ)
var fS=_n('view')
_rz(z,fS,'class',16,e,s,gg)
var cT=_n('view')
_rz(z,cT,'class',17,e,s,gg)
var hU=_n('text')
_rz(z,hU,'class',18,e,s,gg)
var oV=_oz(z,19,e,s,gg)
_(hU,oV)
_(cT,hU)
var cW=_n('text')
_rz(z,cW,'class',20,e,s,gg)
var oX=_oz(z,21,e,s,gg)
_(cW,oX)
_(cT,cW)
_(fS,cT)
var lY=_n('view')
_rz(z,lY,'class',22,e,s,gg)
_(fS,lY)
var aZ=_n('view')
_rz(z,aZ,'class',23,e,s,gg)
var t1=_n('text')
_rz(z,t1,'class',24,e,s,gg)
var e2=_oz(z,25,e,s,gg)
_(t1,e2)
_(aZ,t1)
var b3=_n('text')
_rz(z,b3,'class',26,e,s,gg)
var o4=_oz(z,27,e,s,gg)
_(b3,o4)
_(aZ,b3)
_(fS,aZ)
var x5=_n('view')
_rz(z,x5,'class',28,e,s,gg)
_(fS,x5)
var o6=_n('view')
_rz(z,o6,'class',29,e,s,gg)
var f7=_n('text')
_rz(z,f7,'class',30,e,s,gg)
var c8=_oz(z,31,e,s,gg)
_(f7,c8)
_(o6,f7)
var h9=_n('text')
_rz(z,h9,'class',32,e,s,gg)
var o0=_oz(z,33,e,s,gg)
_(h9,o0)
_(o6,h9)
_(fS,o6)
_(cI,fS)
var cAB=_n('text')
_rz(z,cAB,'class',34,e,s,gg)
var oBB=_oz(z,35,e,s,gg)
_(cAB,oBB)
_(cI,cAB)
oJ.wxXCkey=1
_(oD,cI)
var fE=_v()
_(oD,fE)
if(_oz(z,36,e,s,gg)){fE.wxVkey=1
var lCB=_n('view')
var aDB=_n('view')
_rz(z,aDB,'class',37,e,s,gg)
_(lCB,aDB)
var tEB=_n('view')
_rz(z,tEB,'class',38,e,s,gg)
var eFB=_n('text')
_rz(z,eFB,'class',39,e,s,gg)
var bGB=_oz(z,40,e,s,gg)
_(eFB,bGB)
_(tEB,eFB)
var oHB=_v()
_(tEB,oHB)
var xIB=function(fKB,oJB,cLB,gg){
var oNB=_n('text')
_rz(z,oNB,'class',45,fKB,oJB,gg)
var cOB=_oz(z,46,fKB,oJB,gg)
_(oNB,cOB)
_(cLB,oNB)
return cLB
}
oHB.wxXCkey=2
_2z(z,43,xIB,e,s,gg,oHB,'supportModel','sIdx','sIdx')
_(lCB,tEB)
_(fE,lCB)
}
var cF=_v()
_(oD,cF)
if(_oz(z,47,e,s,gg)){cF.wxVkey=1
var oPB=_n('view')
var lQB=_n('view')
_rz(z,lQB,'class',48,e,s,gg)
_(oPB,lQB)
var aRB=_mz(z,'scroll-view',['class',49,'scrollX',1],[],e,s,gg)
var tSB=_v()
_(aRB,tSB)
var eTB=function(oVB,bUB,xWB,gg){
var fYB=_n('text')
_rz(z,fYB,'class',55,oVB,bUB,gg)
var cZB=_oz(z,56,oVB,bUB,gg)
_(fYB,cZB)
_(xWB,fYB)
return xWB
}
tSB.wxXCkey=2
_2z(z,53,eTB,e,s,gg,tSB,'bookTag','bIdx','bIdx')
_(oPB,aRB)
_(cF,oPB)
}
var hG=_v()
_(oD,hG)
if(_oz(z,57,e,s,gg)){hG.wxVkey=1
var h1B=_n('view')
_rz(z,h1B,'class',58,e,s,gg)
var o2B=_n('view')
_rz(z,o2B,'class',59,e,s,gg)
_(h1B,o2B)
var c3B=_n('text')
_rz(z,c3B,'class',60,e,s,gg)
var o4B=_oz(z,61,e,s,gg)
_(c3B,o4B)
_(h1B,c3B)
var l5B=_v()
_(h1B,l5B)
var a6B=function(e8B,t7B,b9B,gg){
var xAC=_mz(z,'view',['bindtap',66,'class',1,'data-event-opts',2],[],e8B,t7B,gg)
var oBC=_n('text')
_rz(z,oBC,'class',69,e8B,t7B,gg)
var fCC=_oz(z,70,e8B,t7B,gg)
_(oBC,fCC)
_(xAC,oBC)
var cDC=_mz(z,'image',['class',71,'mode',1,'src',2],[],e8B,t7B,gg)
_(xAC,cDC)
_(b9B,xAC)
return b9B
}
l5B.wxXCkey=2
_2z(z,64,a6B,e,s,gg,l5B,'zone','zIdx','zIdx')
_(hG,h1B)
}
var oH=_v()
_(oD,oH)
if(_oz(z,74,e,s,gg)){oH.wxVkey=1
var hEC=_n('view')
_rz(z,hEC,'class',75,e,s,gg)
var cGC=_n('view')
_rz(z,cGC,'class',76,e,s,gg)
_(hEC,cGC)
var oHC=_n('text')
_rz(z,oHC,'class',77,e,s,gg)
var lIC=_oz(z,78,e,s,gg)
_(oHC,lIC)
_(hEC,oHC)
var oFC=_v()
_(hEC,oFC)
if(_oz(z,79,e,s,gg)){oFC.wxVkey=1
var aJC=_mz(z,'scroll-view',['class',80,'scrollX',1],[],e,s,gg)
var tKC=_v()
_(aJC,tKC)
var eLC=function(oNC,bMC,xOC,gg){
var fQC=_mz(z,'view',['bindtap',86,'class',1,'data-event-opts',2],[],oNC,bMC,gg)
var cRC=_mz(z,'image',['class',89,'src',1],[],oNC,bMC,gg)
_(fQC,cRC)
var hSC=_n('text')
_rz(z,hSC,'class',91,oNC,bMC,gg)
var oTC=_oz(z,92,oNC,bMC,gg)
_(hSC,oTC)
_(fQC,hSC)
_(xOC,fQC)
return xOC
}
tKC.wxXCkey=2
_2z(z,84,eLC,e,s,gg,tKC,'book','bIdx','bIdx')
_(oFC,aJC)
}
oFC.wxXCkey=1
_(oH,hEC)
}
fE.wxXCkey=1
cF.wxXCkey=1
hG.wxXCkey=1
oH.wxXCkey=1
_(xC,oD)
}
var cUC=_mz(z,'button',['bindtap',93,'class',1,'data-event-opts',2,'type',3],[],e,s,gg)
var oVC=_oz(z,97,e,s,gg)
_(cUC,oVC)
_(oB,cUC)
var lWC=_mz(z,'button',['bindtap',98,'class',1,'data-event-opts',2,'type',3],[],e,s,gg)
var aXC=_oz(z,102,e,s,gg)
_(lWC,aXC)
_(oB,lWC)
xC.wxXCkey=1
_(r,oB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
var eZC=_n('view')
_rz(z,eZC,'class',0,e,s,gg)
_(r,eZC)
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
var o2C=_n('view')
_rz(z,o2C,'class',0,e,s,gg)
var x3C=_mz(z,'scroll-view',['class',1,'scrollX',1,'scrollY',2],[],e,s,gg)
var o4C=_v()
_(x3C,o4C)
var f5C=function(h7C,c6C,o8C,gg){
var o0C=_mz(z,'view',['bindtap',8,'class',1,'data-event-opts',2],[],h7C,c6C,gg)
var lAD=_mz(z,'image',['class',11,'mode',1,'src',2],[],h7C,c6C,gg)
_(o0C,lAD)
var aBD=_n('text')
_rz(z,aBD,'class',14,h7C,c6C,gg)
var tCD=_oz(z,15,h7C,c6C,gg)
_(aBD,tCD)
_(o0C,aBD)
_(o8C,o0C)
return o8C
}
o4C.wxXCkey=2
_2z(z,6,f5C,e,s,gg,o4C,'book','bIdx','bIdx')
_(o2C,x3C)
_(r,o2C)
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
var bED=_n('view')
_rz(z,bED,'class',0,e,s,gg)
var oFD=_mz(z,'text',['bindtap',1,'data-event-opts',1],[],e,s,gg)
var xGD=_oz(z,3,e,s,gg)
_(oFD,xGD)
_(bED,oFD)
_(r,bED)
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
var fID=_n('view')
_rz(z,fID,'class',0,e,s,gg)
var cJD=_n('scroll-view')
var hKD=_v()
_(cJD,hKD)
var oLD=function(oND,cMD,lOD,gg){
var tQD=_n('view')
_rz(z,tQD,'class',5,oND,cMD,gg)
var eRD=_v()
_(tQD,eRD)
if(_oz(z,6,oND,cMD,gg)){eRD.wxVkey=1
var fWD=_n('view')
_rz(z,fWD,'class',7,oND,cMD,gg)
var cXD=_mz(z,'scroll-view',['class',8,'scrollX',1,'scrollY',2,'showScrollbar',3],[],oND,cMD,gg)
var hYD=_v()
_(cXD,hYD)
var oZD=function(o2D,c1D,l3D,gg){
var t5D=_mz(z,'view',['bindtap',16,'class',1,'data-event-opts',2],[],o2D,c1D,gg)
var e6D=_mz(z,'image',['class',19,'mode',1,'resize',2,'src',3],[],o2D,c1D,gg)
_(t5D,e6D)
var b7D=_n('text')
_rz(z,b7D,'class',23,o2D,c1D,gg)
var o8D=_oz(z,24,o2D,c1D,gg)
_(b7D,o8D)
_(t5D,b7D)
_(l3D,t5D)
return l3D
}
hYD.wxXCkey=2
_2z(z,14,oZD,oND,cMD,gg,hYD,'item','iIdx','iIdx')
_(fWD,cXD)
_(eRD,fWD)
}
var bSD=_v()
_(tQD,bSD)
if(_oz(z,25,oND,cMD,gg)){bSD.wxVkey=1
var x9D=_mz(z,'view',['bindtap',26,'class',1,'data-event-opts',2],[],oND,cMD,gg)
var o0D=_n('text')
_rz(z,o0D,'class',29,oND,cMD,gg)
var fAE=_oz(z,30,oND,cMD,gg)
_(o0D,fAE)
_(x9D,o0D)
var cBE=_mz(z,'image',['class',31,'mode',1,'resize',2,'src',3],[],oND,cMD,gg)
_(x9D,cBE)
_(bSD,x9D)
}
var oTD=_v()
_(tQD,oTD)
if(_oz(z,35,oND,cMD,gg)){oTD.wxVkey=1
var hCE=_n('view')
_rz(z,hCE,'class',36,oND,cMD,gg)
var oDE=_v()
_(hCE,oDE)
if(_oz(z,37,oND,cMD,gg)){oDE.wxVkey=1
var cEE=_n('view')
var oFE=_n('text')
_rz(z,oFE,'class',38,oND,cMD,gg)
var lGE=_oz(z,39,oND,cMD,gg)
_(oFE,lGE)
_(cEE,oFE)
var aHE=_n('view')
_rz(z,aHE,'class',40,oND,cMD,gg)
var tIE=_mz(z,'view',['bindtap',41,'class',1,'data-event-opts',2],[],oND,cMD,gg)
var eJE=_mz(z,'image',['class',44,'mode',1,'resize',2,'src',3],[],oND,cMD,gg)
_(tIE,eJE)
var bKE=_n('text')
_rz(z,bKE,'class',48,oND,cMD,gg)
var oLE=_oz(z,49,oND,cMD,gg)
_(bKE,oLE)
_(tIE,bKE)
_(aHE,tIE)
var xME=_mz(z,'view',['bindtap',50,'class',1,'data-event-opts',2],[],oND,cMD,gg)
var oNE=_mz(z,'image',['class',53,'mode',1,'resize',2,'src',3],[],oND,cMD,gg)
_(xME,oNE)
var fOE=_n('text')
_rz(z,fOE,'class',57,oND,cMD,gg)
var cPE=_oz(z,58,oND,cMD,gg)
_(fOE,cPE)
_(xME,fOE)
_(aHE,xME)
_(cEE,aHE)
_(oDE,cEE)
}
oDE.wxXCkey=1
_(oTD,hCE)
}
var xUD=_v()
_(tQD,xUD)
if(_oz(z,59,oND,cMD,gg)){xUD.wxVkey=1
var hQE=_n('view')
_rz(z,hQE,'class',60,oND,cMD,gg)
var oRE=_n('text')
_rz(z,oRE,'class',61,oND,cMD,gg)
var cSE=_oz(z,62,oND,cMD,gg)
_(oRE,cSE)
_(hQE,oRE)
var oTE=_n('view')
_rz(z,oTE,'class',63,oND,cMD,gg)
var lUE=_v()
_(oTE,lUE)
var aVE=function(eXE,tWE,bYE,gg){
var x1E=_mz(z,'view',['bindtap',68,'class',1,'data-event-opts',2],[],eXE,tWE,gg)
var o2E=_mz(z,'image',['class',71,'resize',1,'src',2],[],eXE,tWE,gg)
_(x1E,o2E)
_(bYE,x1E)
return bYE
}
lUE.wxXCkey=2
_2z(z,66,aVE,oND,cMD,gg,lUE,'item','iIdx','iIdx')
_(hQE,oTE)
_(xUD,hQE)
}
var oVD=_v()
_(tQD,oVD)
if(_oz(z,74,oND,cMD,gg)){oVD.wxVkey=1
var f3E=_n('view')
_rz(z,f3E,'class',75,oND,cMD,gg)
var c4E=_mz(z,'scroll-view',['class',76,'scrollX',1],[],oND,cMD,gg)
var h5E=_v()
_(c4E,h5E)
var o6E=function(o8E,c7E,l9E,gg){
var tAF=_n('view')
var eBF=_n('text')
_rz(z,eBF,'class',82,o8E,c7E,gg)
var bCF=_oz(z,83,o8E,c7E,gg)
_(eBF,bCF)
_(tAF,eBF)
_(l9E,tAF)
return l9E
}
h5E.wxXCkey=2
_2z(z,80,o6E,oND,cMD,gg,h5E,'item','iIdx','iIdx')
_(f3E,c4E)
_(oVD,f3E)
}
eRD.wxXCkey=1
bSD.wxXCkey=1
oTD.wxXCkey=1
xUD.wxXCkey=1
oVD.wxXCkey=1
_(lOD,tQD)
return lOD
}
hKD.wxXCkey=2
_2z(z,3,oLD,e,s,gg,hKD,'floor','fIdx','fIdx')
_(fID,cJD)
_(r,fID)
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
var xEF=_n('view')
_rz(z,xEF,'class',0,e,s,gg)
var oFF=_n('scroll-view')
var fGF=_v()
_(oFF,fGF)
var cHF=function(oJF,hIF,cKF,gg){
var lMF=_n('view')
_rz(z,lMF,'class',5,oJF,hIF,gg)
var aNF=_v()
_(lMF,aNF)
if(_oz(z,6,oJF,hIF,gg)){aNF.wxVkey=1
var xSF=_n('view')
_rz(z,xSF,'class',7,oJF,hIF,gg)
var oTF=_mz(z,'scroll-view',['class',8,'scrollX',1,'scrollY',2,'showScrollbar',3],[],oJF,hIF,gg)
var fUF=_v()
_(oTF,fUF)
var cVF=function(oXF,hWF,cYF,gg){
var l1F=_n('view')
_rz(z,l1F,'class',16,oXF,hWF,gg)
var a2F=_mz(z,'image',['class',17,'mode',1,'resize',2,'src',3],[],oXF,hWF,gg)
_(l1F,a2F)
var t3F=_n('text')
_rz(z,t3F,'class',21,oXF,hWF,gg)
var e4F=_oz(z,22,oXF,hWF,gg)
_(t3F,e4F)
_(l1F,t3F)
_(cYF,l1F)
return cYF
}
fUF.wxXCkey=2
_2z(z,14,cVF,oJF,hIF,gg,fUF,'item','iIdx','iIdx')
_(xSF,oTF)
_(aNF,xSF)
}
var tOF=_v()
_(lMF,tOF)
if(_oz(z,23,oJF,hIF,gg)){tOF.wxVkey=1
var b5F=_n('view')
_rz(z,b5F,'class',24,oJF,hIF,gg)
var o6F=_n('text')
_rz(z,o6F,'class',25,oJF,hIF,gg)
var x7F=_oz(z,26,oJF,hIF,gg)
_(o6F,x7F)
_(b5F,o6F)
var o8F=_mz(z,'image',['class',27,'mode',1,'resize',2,'src',3],[],oJF,hIF,gg)
_(b5F,o8F)
_(tOF,b5F)
}
var ePF=_v()
_(lMF,ePF)
if(_oz(z,31,oJF,hIF,gg)){ePF.wxVkey=1
var f9F=_n('view')
_rz(z,f9F,'class',32,oJF,hIF,gg)
var c0F=_v()
_(f9F,c0F)
if(_oz(z,33,oJF,hIF,gg)){c0F.wxVkey=1
var hAG=_n('view')
var oBG=_n('text')
_rz(z,oBG,'class',34,oJF,hIF,gg)
var cCG=_oz(z,35,oJF,hIF,gg)
_(oBG,cCG)
_(hAG,oBG)
var oDG=_n('view')
_rz(z,oDG,'class',36,oJF,hIF,gg)
var lEG=_n('view')
_rz(z,lEG,'class',37,oJF,hIF,gg)
var aFG=_mz(z,'image',['class',38,'mode',1,'resize',2,'src',3],[],oJF,hIF,gg)
_(lEG,aFG)
var tGG=_n('text')
_rz(z,tGG,'class',42,oJF,hIF,gg)
var eHG=_oz(z,43,oJF,hIF,gg)
_(tGG,eHG)
_(lEG,tGG)
_(oDG,lEG)
var bIG=_n('view')
_rz(z,bIG,'class',44,oJF,hIF,gg)
var oJG=_mz(z,'image',['class',45,'mode',1,'resize',2,'src',3],[],oJF,hIF,gg)
_(bIG,oJG)
var xKG=_n('text')
_rz(z,xKG,'class',49,oJF,hIF,gg)
var oLG=_oz(z,50,oJF,hIF,gg)
_(xKG,oLG)
_(bIG,xKG)
_(oDG,bIG)
_(hAG,oDG)
_(c0F,hAG)
}
c0F.wxXCkey=1
_(ePF,f9F)
}
var bQF=_v()
_(lMF,bQF)
if(_oz(z,51,oJF,hIF,gg)){bQF.wxVkey=1
var fMG=_n('view')
_rz(z,fMG,'class',52,oJF,hIF,gg)
var cNG=_n('text')
_rz(z,cNG,'class',53,oJF,hIF,gg)
var hOG=_oz(z,54,oJF,hIF,gg)
_(cNG,hOG)
_(fMG,cNG)
var oPG=_n('view')
_rz(z,oPG,'class',55,oJF,hIF,gg)
var cQG=_v()
_(oPG,cQG)
var oRG=function(aTG,lSG,tUG,gg){
var bWG=_n('view')
_rz(z,bWG,'class',60,aTG,lSG,gg)
var oXG=_mz(z,'image',['class',61,'resize',1,'src',2],[],aTG,lSG,gg)
_(bWG,oXG)
_(tUG,bWG)
return tUG
}
cQG.wxXCkey=2
_2z(z,58,oRG,oJF,hIF,gg,cQG,'item','iIdx','iIdx')
_(fMG,oPG)
_(bQF,fMG)
}
var oRF=_v()
_(lMF,oRF)
if(_oz(z,64,oJF,hIF,gg)){oRF.wxVkey=1
var xYG=_n('view')
_rz(z,xYG,'class',65,oJF,hIF,gg)
var oZG=_mz(z,'scroll-view',['class',66,'scrollX',1],[],oJF,hIF,gg)
var f1G=_v()
_(oZG,f1G)
var c2G=function(o4G,h3G,c5G,gg){
var l7G=_n('view')
var a8G=_n('text')
_rz(z,a8G,'class',72,o4G,h3G,gg)
var t9G=_oz(z,73,o4G,h3G,gg)
_(a8G,t9G)
_(l7G,a8G)
_(c5G,l7G)
return c5G
}
f1G.wxXCkey=2
_2z(z,70,c2G,oJF,hIF,gg,f1G,'item','iIdx','iIdx')
_(xYG,oZG)
_(oRF,xYG)
}
aNF.wxXCkey=1
tOF.wxXCkey=1
ePF.wxXCkey=1
bQF.wxXCkey=1
oRF.wxXCkey=1
_(cKF,lMF)
return cKF
}
fGF.wxXCkey=2
_2z(z,3,cHF,e,s,gg,fGF,'floor','fIdx','fIdx')
_(xEF,oFF)
_(r,xEF)
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
window.__wxml_comp_version__=0.02
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
if(typeof(window.__webview_engine_version__)!='undefined'&&window.__webview_engine_version__+1e-6>=0.02+1e-6&&window.__mergeData__)
{
env=window.__mergeData__(env,dd);
}
try{
main(env,{},root,global);
_tsd(root)
if(typeof(window.__webview_engine_version__)=='undefined'|| window.__webview_engine_version__+1e-6<0.01+1e-6){return _ev(root);}
}catch(err){
console.log(err)
}
return root;
}
}
}


var BASE_DEVICE_WIDTH = 750;
var isIOS=navigator.userAgent.match("iPhone");
var deviceWidth = window.screen.width || 375;
var deviceDPR = window.devicePixelRatio || 2;
var checkDeviceWidth = window.__checkDeviceWidth__ || function() {
var newDeviceWidth = window.screen.width || 375
var newDeviceDPR = window.devicePixelRatio || 2
var newDeviceHeight = window.screen.height || 375
if (window.screen.orientation && /^landscape/.test(window.screen.orientation.type || '')) newDeviceWidth = newDeviceHeight
if (newDeviceWidth !== deviceWidth || newDeviceDPR !== deviceDPR) {
deviceWidth = newDeviceWidth
deviceDPR = newDeviceDPR
}
}
checkDeviceWidth()
var eps = 1e-4;
var transformRPX = window.__transformRpx__ || function(number, newDeviceWidth) {
if ( number === 0 ) return 0;
number = number / BASE_DEVICE_WIDTH * ( newDeviceWidth || deviceWidth );
number = Math.floor(number + eps);
if (number === 0) {
if (deviceDPR === 1 || !isIOS) {
return 1;
} else {
return 0.5;
}
}
return number;
}
var setCssToHead = function(file, _xcInvalid, info) {
var Ca = {};
var css_id;
var info = info || {};
var _C= [[[2,1],],[],];
function makeup(file, opt) {
var _n = typeof(file) === "number";
if ( _n && Ca.hasOwnProperty(file)) return "";
if ( _n ) Ca[file] = 1;
var ex = _n ? _C[file] : file;
var res="";
for (var i = ex.length - 1; i >= 0; i--) {
var content = ex[i];
if (typeof(content) === "object")
{
var op = content[0];
if ( op == 0 )
res = transformRPX(content[1], opt.deviceWidth) + "px" + res;
else if ( op == 1)
res = opt.suffix + res;
else if ( op == 2 ) 
res = makeup(content[1], opt) + res;
}
else
res = content + res
}
return res;
}
var rewritor = function(suffix, opt, style){
opt = opt || {};
suffix = suffix || "";
opt.suffix = suffix;
if ( opt.allowIllegalSelector != undefined && _xcInvalid != undefined )
{
if ( opt.allowIllegalSelector )
console.warn( "For developer:" + _xcInvalid );
else
{
console.error( _xcInvalid + "This wxss file is ignored." );
return;
}
}
Ca={};
css = makeup(file, opt);
if ( !style ) 
{
var head = document.head || document.getElementsByTagName('head')[0];
window.__rpxRecalculatingFuncs__ = window.__rpxRecalculatingFuncs__ || [];
style = document.createElement('style');
style.type = 'text/css';
style.setAttribute( "wxss:path", info.path );
head.appendChild(style);
window.__rpxRecalculatingFuncs__.push(function(size){
opt.deviceWidth = size.width;
rewritor(suffix, opt, style);
});
}
if (style.styleSheet) {
style.styleSheet.cssText = css;
} else {
if ( style.childNodes.length == 0 )
style.appendChild(document.createTextNode(css));
else 
style.childNodes[0].nodeValue = css;
}
}
return rewritor;
}
setCssToHead([])();setCssToHead([[2,0]],undefined,{path:"./app.wxss"})();

__wxAppCode__['app.wxss']=setCssToHead([[2,0]],undefined,{path:"./app.wxss"});    
__wxAppCode__['app.wxml']=$gwx('./app.wxml');

__wxAppCode__['pages/BookDetail.wxss']=setCssToHead(["wx-text { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; }\n.",[1],"content { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; padding-left: ",[0,40],"; padding-right: ",[0,40],"; position: relative; }\n.",[1],"bgImage { position: absolute; top: ",[0,0],"; left: ",[0,0],"; width: ",[0,750],"; height: ",[0,1334],"; -webkit-filter: blur(",[0,275],"); filter: blur(",[0,275],"); }\n.",[1],"inline { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; }\n.",[1],"bookInfoView { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; padding-top: ",[0,400],"; }\n.",[1],"bookImageContainer { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; position: absolute; top: ",[0,40],"; width: 100%; height: ",[0,330],"; border-radius: ",[0,10],"; padding: ",[0,5],"; background-color: #fff; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; }\n.",[1],"bookImage { width: ",[0,240],"; height: ",[0,320],"; border-radius: ",[0,10],"; }\n.",[1],"vipTag { margin-top: ",[0,20],"; padding: ",[0,5]," ",[0,20]," ",[0,5]," ",[0,20],"; color: #fff; background-color: #ffd855; border-radius: ",[0,10],"; }\n.",[1],"bookNameText { font-size: ",[0,36],"; color: #333; margin-top: ",[0,30],"; lines: 1; }\n.",[1],"simpleInfoView { margin-top: ",[0,20],"; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; }\n.",[1],"oneInfoView { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; max-width: ",[0,210],"; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; padding-left: ",[0,30],"; padding-right: ",[0,30],"; }\n.",[1],"VLine { background-color: #E0E0E0; width: ",[0,1],"; }\n.",[1],"HLine { margin-top: ",[0,30],"; margin-bottom: ",[0,20],"; background-color: #E0E0E0; height: ",[0,1],"; }\n.",[1],"oneInfoText { lines: 1; -o-text-overflow: ellipsis; text-overflow: ellipsis; font-size: ",[0,28],"; color: #666666; }\n.",[1],"oneInfoTitle { margin-top: ",[0,10],"; lines: 1; -o-text-overflow: clip; text-overflow: clip; font-size: ",[0,24],"; color: #999999; }\n.",[1],"bookDescLabelShowSome { lines: 2; -o-text-overflow: ellipsis; text-overflow: ellipsis; }\n.",[1],"bookDescText { font-size: ",[0,30],"; color: #666; margin-top: ",[0,50],"; }\n.",[1],"supportTypeView { margin-top: ",[0,10],"; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; }\n.",[1],"supportTypeTitle { color: #666; font-size: ",[0,24],"; }\n.",[1],"supportTypeText { padding: ",[0,6]," ",[0,20]," ",[0,6]," ",[0,20],"; margin-left: ",[0,20],"; background-color: #00B4FF; border-radius: ",[0,30],"; font-size: ",[0,24],"; color: #fff; }\n.",[1],"bookTagsScroller { width: ",[0,670],"; height: ",[0,70],"; white-space: nowrap; }\n.",[1],"bookTagText { padding: ",[0,16]," ",[0,30]," ",[0,16]," ",[0,30],"; border-color: #00B4FF; border-width: ",[0,1],"; border-radius: ",[0,8],"; margin-right: ",[0,20],"; font-size: ",[0,24],"; display: -webkit-inline-box; display: -webkit-inline-flex; display: -ms-inline-flexbox; display: inline-flex; color: #00B4FF; border: ",[0,1]," solid #00B4FF }\n.",[1],"zoneListContainer {}\n.",[1],"zoneTitleText { font-size: ",[0,34],"; color: #333333; }\n.",[1],"zoneCell { margin-top: ",[0,30],"; }\n.",[1],"zoneNameText { font-size: ",[0,28],"; color: #999999; }\n.",[1],"zoneImage { margin-top: ",[0,10],"; width: ",[0,670],"; height: ",[0,250],"; border-radius: ",[0,10],"; }\n.",[1],"recommendBookContainer { }\n.",[1],"recommendBookTitleText { font-size: ",[0,34],"; color: #333333; }\n.",[1],"recommendBookScroller { margin-top: ",[0,30],"; width: 100%; height: ",[0,320],"; white-space: nowrap; }\n.",[1],"bookItemView { display: inline-block; width: ",[0,190],"; height: ",[0,360],"; margin-right: ",[0,50],"; }\n.",[1],"bookItemImage { width: ",[0,190],"; height: ",[0,250],"; border-radius: ",[0,8],"; }\n.",[1],"bookItemNameText { margin-top: ",[0,6],"; font-size: ",[0,24],"; width: ",[0,190],"; color: #666; lines: 2; overflow: hidden; }\n.",[1],"downBtn { margin-top: ",[0,20],"; width: ",[0,600],"; border-radius: ",[0,8],"; }\n",],undefined,{path:"./pages/BookDetail.wxss"});    
__wxAppCode__['pages/BookDetail.wxml']=$gwx('./pages/BookDetail.wxml');

__wxAppCode__['pages/lanchpage.wxss']=undefined;    
__wxAppCode__['pages/lanchpage.wxml']=$gwx('./pages/lanchpage.wxml');

__wxAppCode__['pages/SearchPage.wxss']=undefined;    
__wxAppCode__['pages/SearchPage.wxml']=$gwx('./pages/SearchPage.wxml');

__wxAppCode__['pages/SubjectBooks.wxss']=setCssToHead([".",[1],"content { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; padding-left: ",[0,40],"; padding-top: ",[0,40],"; padding-bottom: ",[0,40],"; }\n.",[1],"scrollView { width: 100%; }\n.",[1],"bookItemView { margin-right: ",[0,35],"; display: inline-block; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; width: ",[0,200],"; border-radius: ",[0,8],"; padding-bottom: ",[0,10],"; }\n.",[1],"image { width: ",[0,200],"; height: ",[0,280],"; border-radius: ",[0,8],"; }\n.",[1],"bookNameLable { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; width: ",[0,200],"; font-size: ",[0,28],"; color: #666; max-height: ",[0,76],"; overflow: hidden; }\n.",[1],"scrollView :first { margin-top: ",[0,10],"; }\n",],"Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./pages/SubjectBooks.wxss:57:13)",{path:"./pages/SubjectBooks.wxss"});    
__wxAppCode__['pages/SubjectBooks.wxml']=$gwx('./pages/SubjectBooks.wxml');

__wxAppCode__['pages/tab/BookStore.wxss']=setCssToHead([".",[1],"content { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; padding-left: ",[0,20],"; padding-right: ",[0,20],"; }\n.",[1],"floorView { margin-top: ",[0,20],"; overflow: hidden; }\n.",[1],"floorTitleLabel { margin-bottom: ",[0,10],"; color: #333; font-size: ",[0,36],"; display: block; }\n.",[1],"image { width: ",[0,710],"; height: ",[0,300],"; border-radius: ",[0,10],"; }\n.",[1],"bookListScroller { width: 100%; white-space: nowrap; }\n.",[1],"bookView { display: inline-block; width: ",[0,190],"; height: ",[0,320],"; margin-right: ",[0,20],"; overflow-wrap: break-word; overflow: hidden; }\n.",[1],"bookImage { width: ",[0,190],"; height: ",[0,250],"; border-radius: 8px; display: block; }\n.",[1],"bookNameLabel { width: ",[0,190],"; margin-top: ",[0,6],"; font-size: ",[0,24],"; color: #666; lines: 2; font-size: ",[0,24],"; }\n.",[1],"twoTopicView { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack:justify; -webkit-justify-content:space-between; -ms-flex-pack:justify; justify-content:space-between; width: 100%; }\n.",[1],"oneTopicView { -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; display: inline-block; }\n.",[1],"secondTopicView { direction: rtl; }\n.",[1],"towTopicImage { width: ",[0,340],"; height: ",[0,300],"; border-radius: ",[0,8],"; }\n.",[1],"topicTitleLabel { width: ",[0,340],"; margin-top: ",[0,10],"; font-size: ",[0,30],"; color: #666; lines: 1; overflow-wrap: break-word; overflow: hidden; display: block; }\n.",[1],"thirdItemContainer { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; }\n.",[1],"thirdItemCell { width: ",[0,220],"; }\n.",[1],"thirdImg { width: ",[0,220],"; height: ",[0,180],"; border-radius: ",[0,8],"; }\n.",[1],"thirdTitleLabel { margin-top: ",[0,6],"; font-size: ",[0,24],"; color: #666; lines: 1; }\n.",[1],"tagScrollView { -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; }\n.",[1],"tagLabel { border-radius: 8px; padding-top: 10px; padding-bottom: 10px; padding-left: 16px; padding-right: 16px; margin-right: 20px; color: #333; background-color:blueviolet; }\n",],undefined,{path:"./pages/tab/BookStore.wxss"});    
__wxAppCode__['pages/tab/BookStore.wxml']=$gwx('./pages/tab/BookStore.wxml');

__wxAppCode__['pages/tab/index.wxss']=setCssToHead([".",[1],"content { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-orient: vertical; -webkit-box-direction: normal; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-box-align: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; padding-left: ",[0,20],"; padding-right: ",[0,20],"; }\n.",[1],"floorView { margin-top: ",[0,20],"; overflow: hidden; }\n.",[1],"floorTitleLabel { margin-bottom: ",[0,10],"; color: #333; font-size: ",[0,36],"; display: block; }\n.",[1],"image { width: ",[0,710],"; height: ",[0,300],"; border-radius: ",[0,10],"; }\n.",[1],"bookListScroller { -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; width: 100%; white-space: nowrap; }\n.",[1],"bookView { display: inline-block; width: ",[0,190],"; height: ",[0,320],"; margin-right: ",[0,20],"; overflow-wrap: break-word; overflow: hidden; }\n.",[1],"bookImage { width: ",[0,190],"; height: ",[0,250],"; border-radius: 8px; display: block; }\n.",[1],"bookNameLabel { width: ",[0,190],"; margin-top: ",[0,6],"; font-size: ",[0,24],"; color: #666; lines: 2; font-size: ",[0,24],"; }\n.",[1],"twoTopicView { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack:justify; -webkit-justify-content:space-between; -ms-flex-pack:justify; justify-content:space-between; width: 100%; }\n.",[1],"oneTopicView { -webkit-box-flex: 1; -webkit-flex: 1; -ms-flex: 1; flex: 1; display: inline-block; }\n.",[1],"secondTopicView { direction: rtl; }\n.",[1],"towTopicImage { width: ",[0,340],"; height: ",[0,300],"; border-radius: ",[0,8],"; }\n.",[1],"topicTitleLabel { width: ",[0,340],"; margin-top: ",[0,10],"; font-size: ",[0,30],"; color: #666; lines: 1; overflow-wrap: break-word; overflow: hidden; display: block; }\n.",[1],"thirdItemContainer { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; }\n.",[1],"thirdItemCell { width: ",[0,220],"; }\n.",[1],"thirdImg { width: ",[0,220],"; height: ",[0,180],"; border-radius: ",[0,8],"; }\n.",[1],"thirdTitleLabel { margin-top: ",[0,6],"; font-size: ",[0,24],"; color: #666; lines: 1; }\n.",[1],"tagScrollView { -webkit-box-orient: horizontal; -webkit-box-direction: normal; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; }\n.",[1],"tagLabel { border-radius: 8px; padding-top: 10px; padding-bottom: 10px; padding-left: 16px; padding-right: 16px; margin-right: 20px; color: #333; background-color:blueviolet; }\n",],undefined,{path:"./pages/tab/index.wxss"});    
__wxAppCode__['pages/tab/index.wxml']=$gwx('./pages/tab/index.wxml');

;var __pageFrameEndTime__ = Date.now();
(function() {
        window.UniLaunchWebviewReady = function(isWebviewReady){
          // !isWebviewReady && console.log('launchWebview fallback ready')
          plus.webview.postMessageToUniNView({type: 'UniWebviewReady-' + plus.webview.currentWebview().id}, '__uniapp__service');
        }
        UniLaunchWebviewReady(true);
})();
