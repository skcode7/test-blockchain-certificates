"use strict";(self.webpackChunkgenexus_web_application=self.webpackChunkgenexus_web_application||[]).push([[291],{3291:(d,a,n)=>{n.r(a),n.d(a,{gx_interactive_image:()=>c});var h=n(4570);let c=class{constructor(t){(0,h.r)(this,t),this.enableZoom=!1,this.zoom=100,this.src="",this.mouseOver=!1,this.handleMouseMove=e=>{e.preventDefault(),this.mouseOver=!0,this.zoomedPositionX=this.calculateZoomedPosition(e.offsetX,e.target.offsetWidth),this.zoomedPositionY=this.calculateZoomedPosition(e.offsetY,e.target.offsetHeight)},this.handleTouchMove=e=>{e.preventDefault(),this.mouseOver=!0;const i={height:e.target.offsetHeight,width:e.target.offsetWidth},o={X:e.changedTouches[0].clientX-e.target.x,Y:e.changedTouches[0].clientY-e.target.parentNode.getBoundingClientRect().top};o.X<=0?o.X=0:o.X>=i.width&&(o.X=i.width),o.Y<=0?o.Y=0:o.Y>=i.height&&(o.Y=i.height);const s={X:this.calculateZoomTouch(this.calculateZoomedPosition(o.X,e.target.offsetWidth),this.zoom),Y:this.calculateZoomTouch(this.calculateZoomedPosition(o.Y,i.height),this.zoom)};this.zoomedPositionX=s.X,this.zoomedPositionY=s.Y},this.handleOverEnd=()=>{this.mouseOver=!1}}calculateZoomedPosition(t,e){return-(t-50*e/100)*(this.zoom/100-1)}calculateZoomTouch(t,e){return t/(e/100)}checkZoomFeature(){if(this.enableZoom){const t=this.element.querySelector("img");t.addEventListener("mousemove",this.handleMouseMove),t.addEventListener("touchmove",this.handleTouchMove),t.addEventListener("mouseout",this.handleOverEnd),t.addEventListener("touchend",this.handleOverEnd)}else{const t=this.element.querySelector("img");t.removeEventListener("mousemove",this.handleMouseMove),t.removeEventListener("touchmove",this.handleTouchMove),t.removeEventListener("mouseout",this.handleOverEnd),t.removeEventListener("touchend",this.handleOverEnd)}}fixZoomValue(){this.zoom<100&&(console.warn("Zoom value cannot be lower than 100"),this.zoom=100)}componentWillLoad(){this.fixZoomValue()}componentDidLoad(){this.checkZoomFeature()}componentDidUpdate(){this.checkZoomFeature()}render(){return this.fixZoomValue(),(0,h.h)("img",{style:this.mouseOver?{"object-position":`${this.zoomedPositionX}px ${this.zoomedPositionY}px`,transform:`scale(${this.zoom/100})`}:{},src:this.src})}get element(){return(0,h.g)(this)}};c.style="gx-interactive-image{height:auto;width:auto;display:flex;overflow:hidden}gx-interactive-image[hidden]{display:none !important}gx-interactive-image[hidden][invisible-mode=keep-space]{display:flex !important;visibility:hidden}gx-interactive-image img{height:100%;width:100%}"}}]);