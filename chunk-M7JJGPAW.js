import{e as B}from"./chunk-3UQGAUGZ.js";import{a as V}from"./chunk-AQFHPPLW.js";import{a as E,b}from"./chunk-QX6N3CTR.js";import{m as $,z as I}from"./chunk-EENBXHUI.js";import{$a as _,Bb as g,Cb as x,Db as T,Kb as w,Mb as A,Nb as D,ab as F,oa as l,pb as C,qc as M,rb as a,t as c,u as d,ub as u,vb as h,wb as y,xb as S,ya as v,yb as s,za as f,zb as m}from"./chunk-SFY7KE4I.js";function j(t,e){if(t&1){let r=g();s(0,"app-cart-card",2),x("remove",function(){let i=v(r).$implicit,n=T(2);return f(n.removeFromFavorites(i))}),m()}if(t&2){let r=e.$implicit;a("item",r)}}function k(t,e){t&1&&(s(0,"app-cart-and-favorites",0),y(1,j,1,1,"app-cart-card",1,h),m()),t&2&&(a("title","Favorites"),_(),S(e.favorites))}var O=(()=>{let e=class e{constructor(o){this.store=o,this.vm$=d([this.store.select(V)]).pipe(c(([i])=>({favorites:i})))}removeFromFavorites(o){this.store.dispatch(B({id:o.id}))}};e.\u0275fac=function(i){return new(i||e)(F($))},e.\u0275cmp=l({type:e,selectors:[["app-favorites"]],standalone:!0,features:[w],decls:2,vars:3,consts:[[3,"title"],[3,"item"],[3,"remove","item"]],template:function(i,n){if(i&1&&(C(0,k,3,1,"app-cart-and-favorites",0),A(1,"async")),i&2){let p;u(0,(p=D(1,1,n.vm$))?0:-1,p)}},dependencies:[M,I,E,b],changeDetection:0});let t=e;return t})();export{O as FavoritesComponent};
