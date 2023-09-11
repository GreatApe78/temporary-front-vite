var C=Object.defineProperty;var f=(p,s,t)=>s in p?C(p,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):p[s]=t;var n=(p,s,t)=>(f(p,typeof s!="symbol"?s+"":s,t),t);import{N as w,t as W,A,u as T,aC as y,v as b,x as E,y as S,z as R,aD as k,H as v,J as N,G as x,K as I,aE as O,aF as U,L as F,M,B as i,an as d,O as _,P as L,Q as c,T as u}from"./index-463be5f5.js";import{S as B}from"./erc-721-standard-7b47bd46.browser.esm-d1ab5252.js";import{P as D}from"./thirdweb-checkout-39011b2a.browser.esm-76f520e9.js";const l=class l extends B{constructor(t,r,a){let e=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},o=arguments.length>4?arguments[4]:void 0,h=arguments.length>5?arguments[5]:void 0,g=arguments.length>6&&arguments[6]!==void 0?arguments[6]:new W(t,r,o,e,a);super(g,a,h);n(this,"createBatch",c(async(t,r)=>this.erc721.lazyMint.prepare(t,r)));n(this,"claimTo",c((()=>{var t=this;return async function(r,a){let e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;return t.erc721.claimTo.prepare(r,a,{checkERC20Allowance:e})}})()));n(this,"claim",c((()=>{var t=this;return async function(r){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.claimTo.prepare(await t.contractWrapper.getSignerAddress(),r,a)}})()));n(this,"burn",c(async t=>this.erc721.burn.prepare(t)));n(this,"transfer",c(async(t,r)=>this.erc721.transfer.prepare(t,r)));n(this,"setApprovalForAll",c(async(t,r)=>this.erc721.setApprovalForAll.prepare(t,r)));n(this,"setApprovalForToken",c(async(t,r)=>u.fromContractWrapper({contractWrapper:this.contractWrapper,method:"approve",args:[t,r]})));this.abi=A.parse(o||[]),this.metadata=new T(this.contractWrapper,y,this.storage),this.app=new b(this.contractWrapper,this.metadata,this.storage),this.roles=new E(this.contractWrapper,l.contractRoles),this.royalties=new S(this.contractWrapper,this.metadata),this.sales=new R(this.contractWrapper),this.claimConditions=new k(this.contractWrapper,this.metadata,this.storage),this.encoder=new v(this.contractWrapper),this.estimator=new N(this.contractWrapper),this.events=new x(this.contractWrapper),this.platformFees=new I(this.contractWrapper),this.revealer=new O(this.contractWrapper,this.storage,U.name,()=>this.erc721.nextTokenIdToMint()),this.interceptor=new F(this.contractWrapper),this.owner=new M(this.contractWrapper),this.checkout=new D(this.contractWrapper)}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.readContract.address}async totalSupply(){const t=await this.totalClaimedSupply(),r=await this.totalUnclaimedSupply();return t.add(r)}async getAllClaimed(t){const r=i.from((t==null?void 0:t.start)||0).toNumber(),a=i.from((t==null?void 0:t.count)||d).toNumber(),e=Math.min((await this.contractWrapper.readContract.nextTokenIdToClaim()).toNumber(),r+a);return await Promise.all(Array.from(Array(e).keys()).map(o=>this.get(o.toString())))}async getAllUnclaimed(t){const r=i.from((t==null?void 0:t.start)||0).toNumber(),a=i.from((t==null?void 0:t.count)||d).toNumber(),e=i.from(Math.max((await this.contractWrapper.readContract.nextTokenIdToClaim()).toNumber(),r)),o=i.from(Math.min((await this.contractWrapper.readContract.nextTokenIdToMint()).toNumber(),e.toNumber()+a));return await Promise.all(Array.from(Array(o.sub(e).toNumber()).keys()).map(h=>this.erc721.getTokenMetadata(e.add(h).toString())))}async totalClaimedSupply(){return this.erc721.totalClaimedSupply()}async totalUnclaimedSupply(){return this.erc721.totalUnclaimedSupply()}async isTransferRestricted(){return!await this.contractWrapper.readContract.hasRole(_("transfer"),L)}async getClaimTransaction(t,r){let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;return this.erc721.getClaimTransaction(t,r,{checkERC20Allowance:a})}async get(t){return this.erc721.get(t)}async ownerOf(t){return this.erc721.ownerOf(t)}async balanceOf(t){return this.erc721.balanceOf(t)}async balance(){return this.erc721.balance()}async isApproved(t,r){return this.erc721.isApproved(t,r)}async prepare(t,r,a){return u.fromContractWrapper({contractWrapper:this.contractWrapper,method:t,args:r,overrides:a})}async call(t,r,a){return this.contractWrapper.call(t,r,a)}};n(l,"contractRoles",w);let m=l;export{m as NFTDrop};
