"use strict";(self.webpackChunkgenexus_web_application=self.webpackChunkgenexus_web_application||[]).push([[897],{5897:(h,s,n)=>{n.r(s),n.d(s,{gx_password_edit:()=>i});var r=n(5861),t=n(4570);class d{constructor(e){this.component=e,this.handleChange=this.handleChange.bind(this),this.handleInput=this.handleInput.bind(this)}getNativeInputId(){return this.innerEdit.getNativeInputId()}getValueFromEvent(e){return e.target&&e.target.value}handleChange(e){this.component.value=this.getValueFromEvent(e),this.component.change.emit(e)}handleInput(e){this.component.value=this.getValueFromEvent(e),this.component.input.emit(e)}valueChanged(){const e=this.innerEdit;e&&e.value!==this.component.value&&(e.value=this.component.value)}disconnectedCallback(){this.innerEdit=null}render(){const e=this.component;return(0,t.h)("gx-edit",{ref:o=>this.innerEdit=o,area:"field","css-class":e.cssClass,disabled:e.disabled,placeholder:e.placeholder,readonly:e.readonly,"show-trigger":!e.readonly&&e.showRevealButton,"trigger-class":e.revealed?"active":"","trigger-text":e.revealed?e.revealButtonTextOff:e.revealButtonTextOn,type:e.revealed?"text":"password",value:e.value,onChange:this.handleChange,onInput:this.handleInput},(0,t.h)("i",{class:"icon icon-eye"+(e.revealed?"-slash":""),slot:"trigger-content"}))}}let i=class{constructor(a){(0,t.r)(this,a),this.change=(0,t.c)(this,"change",7),this.input=(0,t.c)(this,"input",7),this.invisibleMode="collapse",this.disabled=!1,this.revealed=!1,this.renderer=new d(this)}getNativeInputId(){var a=this;return(0,r.Z)(function*(){return a.renderer.getNativeInputId()})()}valueChanged(){this.renderer.valueChanged()}handleTriggerClick(){this.revealed=!this.revealed}render(){return this.renderer.render()}disconnectedCallback(){this.renderer.disconnectedCallback()}get element(){return(0,t.g)(this)}static get watchers(){return{value:["valueChanged"]}}};i.style='gx-password-edit{display:flex;flex:1}gx-password-edit[hidden]{display:none !important}gx-password-edit[hidden][invisible-mode=keep-space]{display:flex !important;visibility:hidden}gx-password-edit .icon{display:inline-block;height:1em;font-size:clamp(12.8px, 1em, 25.6px);background-repeat:no-repeat;background-size:contain;filter:opacity(0.9);transform:translateY(1px)}gx-password-edit .trigger-button:hover .icon{filter:invert(1)}gx-password-edit .icon-eye{width:1em;background-image:url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M288 144a110.94 110.94 0 0 0-31.24 5 55.4 55.4 0 0 1 7.24 27 56 56 0 0 1-56 56 55.4 55.4 0 0 1-27-7.24A111.71 111.71 0 1 0 288 144zm284.52 97.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400c-98.65 0-189.09-55-237.93-144C98.91 167 189.34 112 288 112s189.09 55 237.93 144C477.1 345 386.66 400 288 400z"/></svg>\')}gx-password-edit .icon-eye-slash{width:1.11em;background-image:url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M634 471L36 3.51A16 16 0 0 0 13.51 6l-10 12.49A16 16 0 0 0 6 41l598 467.49a16 16 0 0 0 22.49-2.49l10-12.49A16 16 0 0 0 634 471zM296.79 146.47l134.79 105.38C429.36 191.91 380.48 144 320 144a112.26 112.26 0 0 0-23.21 2.47zm46.42 219.07L208.42 260.16C210.65 320.09 259.53 368 320 368a113 113 0 0 0 23.21-2.46zM320 112c98.65 0 189.09 55 237.93 144a285.53 285.53 0 0 1-44 60.2l37.74 29.5a333.7 333.7 0 0 0 52.9-75.11 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64c-36.7 0-71.71 7-104.63 18.81l46.41 36.29c18.94-4.3 38.34-7.1 58.22-7.1zm0 288c-98.65 0-189.08-55-237.93-144a285.47 285.47 0 0 1 44.05-60.19l-37.74-29.5a333.6 333.6 0 0 0-52.89 75.1 32.35 32.35 0 0 0 0 29.19C89.72 376.41 197.08 448 320 448c36.7 0 71.71-7.05 104.63-18.81l-46.41-36.28C359.28 397.2 339.89 400 320 400z"/></svg>\')}'}}]);