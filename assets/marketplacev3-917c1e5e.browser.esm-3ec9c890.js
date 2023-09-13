var g=Object.defineProperty;var l=(a,t,r)=>t in a?g(a,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[t]=r;var o=(a,t,r)=>(l(a,typeof t!="symbol"?t+"":t,r),r);import{al as f,ap as n,t as W,A as m,u as E,am as C,v as A,x as w,H as R,J as I,G as T,K as L,L as O,T as S,aq as c,ar as F,as as _,at as U,au as v,av as D,aw as N}from"./index-d65ebc75.js";const s=class s{get directListings(){return n(this.detectDirectListings(),v)}get englishAuctions(){return n(this.detectEnglishAuctions(),D)}get offers(){return n(this.detectOffers(),N)}get chainId(){return this._chainId}constructor(t,r,e){let h=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},i=arguments.length>4?arguments[4]:void 0,d=arguments.length>5?arguments[5]:void 0,u=arguments.length>6&&arguments[6]!==void 0?arguments[6]:new W(t,r,i,h,e);this._chainId=d,this.abi=m.parse(i||[]),this.contractWrapper=u,this.storage=e,this.metadata=new E(this.contractWrapper,C,this.storage),this.app=new A(this.contractWrapper,this.metadata,this.storage),this.roles=new w(this.contractWrapper,s.contractRoles),this.encoder=new R(this.contractWrapper),this.estimator=new I(this.contractWrapper),this.events=new T(this.contractWrapper),this.platformFees=new L(this.contractWrapper),this.interceptor=new O(this.contractWrapper)}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.readContract.address}async prepare(t,r,e){return S.fromContractWrapper({contractWrapper:this.contractWrapper,method:t,args:r,overrides:e})}async call(t,r,e){return this.contractWrapper.call(t,r,e)}detectDirectListings(){if(c(this.contractWrapper,"DirectListings"))return new F(this.contractWrapper,this.storage)}detectEnglishAuctions(){if(c(this.contractWrapper,"EnglishAuctions"))return new _(this.contractWrapper,this.storage)}detectOffers(){if(c(this.contractWrapper,"Offers"))return new U(this.contractWrapper,this.storage)}};o(s,"contractRoles",f);let p=s;export{p as MarketplaceV3};