"use strict";(self.webpackChunkgenexus_web_application=self.webpackChunkgenexus_web_application||[]).push([[123],{2123:(l,i,n)=>{n.r(i),n.d(i,{gx_map_line:()=>a});var e=n(4570),s=n(1810);let a=class{constructor(t){(0,e.r)(this,t),this.gxMapLineDidLoad=(0,e.c)(this,"gxMapLineDidLoad",7),this.gxMapLineDeleted=(0,e.c)(this,"gxMapLineDeleted",7),this.coords="0, 0"}setupLine(t){this.lineInstance=(0,s.a)(t,{color:"red",weight:3})}componentDidLoad(){const t=(0,s.p)(this.coords);null!==t?this.setupLine(t):(console.warn("GX warning: Cannot read 'coords' attribute, default coords set (gx-map-line)",this.element),this.setupLine([0,0])),this.gxMapLineDidLoad.emit(this.lineInstance)}disconnectedCallback(){this.gxMapLineDeleted.emit(this.lineInstance)}render(){return(0,e.h)("div",null,(0,e.h)("slot",null))}get element(){return(0,e.g)(this)}}}}]);