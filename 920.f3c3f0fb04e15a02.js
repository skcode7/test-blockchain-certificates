"use strict";(self.webpackChunkgenexus_web_application=self.webpackChunkgenexus_web_application||[]).push([[920],{1920:(h,s,d)=>{d.r(s),d.d(s,{gx_video:()=>t});var e=d(4570);let t=class{constructor(i){(0,e.r)(this,i),this.gxClick=(0,e.c)(this,"gxClick",7),this.disabled=!1,this.invisibleMode="collapse",this.handleClick=this.handleClick.bind(this)}handleClick(i){this.gxClick.emit(i),i.preventDefault()}parseYoutubeSrc(i){const l=i.split("watch?v=");return`${l[0]}embed/${l[1]}`}render(){return(0,e.h)("div",{class:"gxVideoContainer",onClick:this.disabled?null:this.handleClick},(0,e.h)("iframe",{src:this.parseYoutubeSrc(this.src)}))}get element(){return(0,e.g)(this)}};t.style="gx-video{--gx-video-height:100%;--gx-video-width:100%;display:flex;width:100%}gx-video[hidden]{display:none !important}gx-video[hidden][invisible-mode=keep-space]{display:flex !important;visibility:hidden}gx-video>div{height:var(--gx-video-height);width:var(--gx-video-width);display:flex;flex:1}gx-video>div iframe{flex:1;border:none}"}}]);