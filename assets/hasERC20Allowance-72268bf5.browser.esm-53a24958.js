import{t as d,aL as i}from"./index-ce1aab06.js";async function c(a,e,s){const n=a.getProvider(),r=new d(n,e,i,{},a.storage),t=await a.getSignerAddress(),o=a.address;return(await r.read("allowance",[t,o])).gte(s)}export{c as h};