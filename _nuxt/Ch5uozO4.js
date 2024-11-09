import{d as x,J as H,K as O,P as K,h as l,a as A,r as N,L as _,M as j,u as S,E as T,R as B,N as y,O as R,Q as L,S as I,T as C,U as E,V,W as w,X as F,Y as q,Z as z,_ as J,v as M,z as Q,t as U}from"./BFi4qa1F.js";const W=x({props:{vnode:{type:Object,required:!0},route:{type:Object,required:!0},vnodeRef:Object,renderKey:String,trackRootNodes:Boolean},setup(e){const o=e.renderKey,n=e.route,i={};for(const a in e.route)Object.defineProperty(i,a,{get:()=>o===e.renderKey?e.route[a]:n[a],enumerable:!0});return H(K,O(i)),()=>l(e.vnode,{ref:e.vnodeRef})}}),X=x({name:"NuxtPage",inheritAttrs:!1,props:{name:{type:String},transition:{type:[Boolean,Object],default:void 0},keepalive:{type:[Boolean,Object],default:void 0},route:{type:Object},pageKey:{type:[Function,String],default:null}},setup(e,{attrs:o,slots:n,expose:i}){const a=A(),r=N(),s=_(K,null);let c;i({pageRef:r});const d=_(j,null);let u;const g=a.deferHydration();if(a.isHydrating){const t=a.hooks.hookOnce("app:error",g);S().beforeEach(t)}return e.pageKey&&T(()=>e.pageKey,(t,v)=>{t!==v&&a.callHook("page:loading:start")}),()=>l(B,{name:e.name,route:e.route,...o},{default:t=>{const v=Z(s,t.route,t.Component),h=s&&s.matched.length===t.route.matched.length;if(!t.Component){if(u&&!h)return u;g();return}if(u&&d&&!d.isCurrent(t.route))return u;if(v&&s&&(!d||d!=null&&d.isCurrent(s)))return h?u:null;const f=y(t,e.pageKey);!a.isHydrating&&!D(s,t.route,t.Component)&&c===f&&a.callHook("page:loading:end"),c=f;const m=!!(e.transition??t.route.meta.pageTransition??R),b=m&&Y([e.transition,t.route.meta.pageTransition,R,{onAfterLeave:()=>{a.callHook("page:transition:finish",t.Component)}}].filter(Boolean)),p=e.keepalive??t.route.meta.keepalive??L;return u=I(F,m&&b,C(p,l(E,{suspensible:!0,onPending:()=>a.callHook("page:start",t.Component),onResolve:()=>{V(()=>a.callHook("page:finish",t.Component).then(()=>a.callHook("page:loading:end")).finally(g))}},{default:()=>{const k=l(W,{key:f||void 0,vnode:n.default?l(w,void 0,n.default(t)):t.Component,route:t.route,renderKey:f||void 0,trackRootNodes:m,vnodeRef:r});return p&&(k.type.name=t.Component.type.name||t.Component.type.__name||"RouteProvider"),k}}))).default(),u}})}});function Y(e){const o=e.map(n=>({...n,onAfterLeave:n.onAfterLeave?q(n.onAfterLeave):void 0}));return z(...o)}function Z(e,o,n){if(!e)return!1;const i=o.matched.findIndex(a=>{var r;return((r=a.components)==null?void 0:r.default)===(n==null?void 0:n.type)});return!i||i===-1?!1:o.matched.slice(0,i).some((a,r)=>{var s,c,d;return((s=a.components)==null?void 0:s.default)!==((d=(c=e.matched[r])==null?void 0:c.components)==null?void 0:d.default)})||n&&y({route:o,Component:n})!==y({route:e,Component:n})}function D(e,o,n){return e?o.matched.findIndex(a=>{var r;return((r=a.components)==null?void 0:r.default)===(n==null?void 0:n.type)})<o.matched.length-1:!1}const G={};function $(e,o){const n=X;return U(),M("div",null,[Q(n)])}const ee=J(G,[["render",$]]);export{ee as default};
