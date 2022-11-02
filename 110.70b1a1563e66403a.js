"use strict";(self.webpackChunkgenexus_web_application=self.webpackChunkgenexus_web_application||[]).push([[110],{1110:(y,b,o)=>{o.r(b),o.d(b,{gx_tab:()=>p,gx_tab_caption:()=>h,gx_tab_page:()=>x});var t=o(4570),d=o(7926),s=o(9788),r=o(7944);const g=":scope > [role='tablist']";let p=class{constructor(a){(0,t.r)(this,a),this.tabChange=(0,t.c)(this,"tabChange",7),this.invisibleMode="collapse",this.highlightable=!1,this.tabsDistribution="scroll"}tabClickHandler(a){const i=a.target;if(i.closest("gx-tab")!==this.element)return;const n=this.lastSelectedTab;this.setSelectedTab(i),n!==this.lastSelectedTab&&this.tabChange.emit(a)}setSelectedTab(a){this.lastSelectedTab=a,this.getCaptionSlots().forEach((i,n)=>{i.selected=i===a;const e=n+1,l=this.element.querySelector(`:scope > gx-tab-page:nth-child(${e}), \n        ${g} > .gx-tab-content > gx-tab-page:nth-child(${e})`);this.mapPageToCaptionSelection(i,l)})}getCaptionSlots(){return Array.from(this.element.querySelectorAll(`:scope > [slot='caption'], \n         ${g} > .gx-nav-tabs > .gx-nav-tabs-table > [slot='caption']`))}mapPageToCaptionSelection(a,i){null==i||i.classList.toggle("gx-tab-page--active",!!a.selected)}componentDidLoad(){(0,d.m)(this),this.linkTabs(!0)}componentDidUpdate(){this.linkTabs()}disconnectedCallback(){this.lastSelectedTab=null}linkTabs(a=!1){const i=this.getCaptionSlots(),n=this.getPageSlots();i.length===n.length&&i.forEach((e,l)=>{const c=n[l];e.setAttribute("aria-controls",c.id),c.setAttribute("aria-labelledby",e.id),a&&(this.mapPageToCaptionSelection(e,c),e.selected&&(this.lastSelectedTab=e))})}render(){this.setCaptionSlotsClass(),this.setPageSlotsClass();const a=(0,s.g)(this.cssClass),i=this.cssClass?this.cssClass.split(" ").map(s.f).join(" "):"";return(0,t.h)(t.H,{class:{[this.cssClass]:!!this.cssClass,[a.vars]:!0}},(0,t.h)("div",{role:"tablist",class:i},(0,t.h)("div",{class:"gx-nav-tabs"},(0,t.h)("div",{class:"gx-nav-tabs-table"},(0,t.h)("slot",{name:"caption"}),"scroll"===this.tabsDistribution&&(0,t.h)("div",{"aria-hidden":"true",class:"gx-nav-tabs-table-filler"}))),(0,t.h)("div",{class:"gx-tab-content"},(0,t.h)("slot",{name:"page"}))))}setCaptionSlotsClass(){this.getCaptionSlots().forEach(a=>{a.classList.contains("gx-nav-item")||a.classList.add("gx-nav-item")})}setPageSlotsClass(){this.getPageSlots().forEach(a=>{a.classList.contains("gx-tab-page")||a.classList.add("gx-tab-page")})}getPageSlots(){return Array.from(this.element.querySelectorAll(`:scope > [slot='page'], \n         ${g} > .gx-tab-content > [slot='page']`))}get element(){return(0,t.g)(this)}};p.style="gx-tab{--elevation:0;--tab-strip-elevation:0;--tab-strip-indicator-color:transparent;--tab-strip-separator-color:#ffffff80;--tab-strip-background-color:transparent;--tab-strip-height:auto;--tab-caption-vertical-padding:calc(2px + 0.125em);--tab-caption-horizontal-padding:23px;--tab-caption-image-vertical-margin:6px;--tab-caption-image-horizontal-margin:2px;box-shadow:0 calc(var(--elevation) * 0.125rem) calc(var(--elevation) * 0.25rem) rgba(0, 0, 0, calc(var(--elevation) * 0.075));transition-property:background-color, border-color, box-shadow, color, filter, opacity, transform;transition-duration:0.25s;display:flex;flex:1;width:100%;overflow:hidden}gx-tab[hidden]{display:none !important}gx-tab[hidden][invisible-mode=keep-space]{display:flex !important;visibility:hidden}gx-tab[tabs-distribution=fixed-size]>div .gx-nav-tabs .gx-nav-tabs-table{table-layout:fixed;width:100%}gx-tab[tabs-distribution=fixed-size]>div .gx-nav-tabs .gx-nav-tabs-table gx-tab-caption.gx-tab-caption .image-and-link-container span{overflow:hidden}gx-tab>div{display:grid;flex:1;height:100%;--tab-scrollbar-background-color:var(\n    --gx-scrollbar-background-color,\n    #f5f5f5\n  );--tab-scrollbar-thumb-color:var(--gx-scrollbar-thumb-color, #555)}gx-tab>div .gx-nav-tabs{--elevation:var(--tab-strip-elevation);height:var(--tab-strip-height);overflow-x:hidden;overflow-y:auto;overflow-y:overlay;white-space:nowrap;transition:box-shadow 0.25s;scrollbar-width:thin;scrollbar-color:var(--tab-scrollbar-thumb-color) var(--tab-scrollbar-background-color)}gx-tab>div .gx-nav-tabs:hover{overflow-x:auto;overflow-x:overlay}gx-tab>div .gx-nav-tabs::-webkit-scrollbar{width:5px;height:5px}gx-tab>div .gx-nav-tabs::-webkit-scrollbar-track{background:var(--tab-scrollbar-background-color)}gx-tab>div .gx-nav-tabs::-webkit-scrollbar-thumb{background-color:var(--tab-scrollbar-thumb-color);border-radius:6px;border:1px solid var(--tab-scrollbar-background-color)}gx-tab>div .gx-nav-tabs .gx-nav-tabs-table{display:table;height:100%}gx-tab>div .gx-nav-tabs .gx-nav-tabs-table-filler{display:table-cell;width:100%;background-color:var(--tab-strip-background-color);border-top:1px solid transparent;border-bottom:1px solid transparent;transition:background-color 0.25s, border-color 0.25s}gx-tab>div .gx-tab-content{display:flex;height:100%;overflow:auto}";let f=0,h=class{constructor(a){(0,t.r)(this,a),this.tabSelect=(0,t.c)(this,"tabSelect",7),this.hasDisabledImage=!1,this.disabled=!1,this.imagePosition="above",this.selected=!1,this.highlightable=!0,this.clickHandler=this.clickHandler.bind(this)}selectedHandler(){this.selected&&this.tabSelect.emit(event)}componentWillLoad(){this.element.id||(this.element.id="gx-tab-caption-auto-id-"+f++),this.hasDisabledImage=null!==this.element.querySelector("[slot='disabled-image']")}componentDidLoad(){(0,d.m)(this)}render(){const a=(0,s.i)(this.tabCssClass),i=(0,s.j)(this.tabCssClass),n=(0,s.g)(a),e=(0,s.g)(i),l=(0,s.g)(this.selectedCssClass),c=(0,s.g)(this.cssClass),k=this.tabCssClass?this.tabCssClass.split(" ").map(s.h).join(" "):"";return(0,t.h)(t.H,{"aria-selected":(!!this.selected).toString(),role:"tab",class:{"gx-tab-caption":!0,"gx-tab-caption--active":this.selected,"gx-tab-caption--disabled":this.disabled,[a]:this.selected,[n.vars]:this.selected,[this.selectedCssClass]:!!this.selectedCssClass&&this.selected,[l.vars]:this.selected,[i]:!this.selected,[e.vars]:!this.selected,[this.cssClass]:!!this.cssClass&&!this.selected,[c.vars]:!this.selected,[(0,r.a)(this.imagePosition)]:!0,[r.h]:!this.selected&&this.hasDisabledImage}},(0,t.h)("div",{class:"image-and-link-container"},(0,t.h)("a",{class:{"gx-nav-link":!0,"gx-nav-link--active":this.selected,[k]:!0},href:"#",onClick:this.clickHandler},(0,r.i)({default:(0,t.h)("slot",null),disabledImage:(0,t.h)("slot",{name:"disabled-image"}),mainImage:(0,t.h)("slot",{name:"main-image"})}))))}clickHandler(a){a.preventDefault(),this.disabled||(this.selected=!0)}get element(){return(0,t.g)(this)}static get watchers(){return{selected:["selectedHandler"]}}};h.style="gx-tab-caption{display:table-cell;background-color:var(--tab-strip-background-color);font-size:12px;font-weight:600}gx-tab-caption[hidden]{display:none !important}gx-tab-caption[hidden][invisible-mode=keep-space]{display:table-cell !important;visibility:hidden}gx-tab-caption.gx-image-position--before [slot=main-image],gx-tab-caption.gx-image-position--before [slot=disabled-image]{margin:0 var(--tab-caption-image-vertical-margin)}gx-tab-caption.gx-image-position--after [slot=main-image],gx-tab-caption.gx-image-position--after [slot=disabled-image]{margin:0 var(--tab-caption-image-vertical-margin)}gx-tab-caption.gx-image-position--above [slot=main-image],gx-tab-caption.gx-image-position--above [slot=disabled-image]{margin:var(--tab-caption-image-horizontal-margin) 0}gx-tab-caption.gx-image-position--below [slot=main-image],gx-tab-caption.gx-image-position--below [slot=disabled-image]{margin:var(--tab-caption-image-horizontal-margin) 0}gx-tab-caption>.image-and-link-container a{flex:1;display:flex;flex-direction:column;position:relative;align-items:center;justify-content:center}gx-tab-caption>.image-and-link-container a>img[slot=disabled-image]{display:none}gx-tab-caption.gx-image-position--below>.image-and-link-container a>img{order:99}gx-tab-caption.gx-image-position--before>.image-and-link-container a{flex-direction:row}gx-tab-caption.gx-image-position--after>.image-and-link-container a{flex-direction:row}gx-tab-caption.gx-image-position--after>.image-and-link-container a>img{order:99}gx-tab-caption.gx-image-position--behind>.image-and-link-container a{flex-direction:column}gx-tab-caption.gx-image-position--behind>.image-and-link-container a>img{position:absolute}gx-tab-caption.gx-image-position--behind>.image-and-link-container a>span{z-index:1}gx-tab-caption.gx-image-position--hide-main>.image-and-link-container a>img[slot=main-image]{display:none}gx-tab-caption:not(.gx-tab-caption--active)>.image-and-link-container a>img[slot=disabled-image]{display:inline-block}gx-tab-caption [slot=main-image],gx-tab-caption [slot=disabled-image]{max-height:18px;max-width:18px;object-fit:contain}gx-tab-caption.gx-tab-caption{height:100%;transition:background-color 0.25s, filter 0.25s}gx-tab-caption.gx-tab-caption .image-and-link-container{display:inline-block;vertical-align:top;width:100%;height:100%}gx-tab-caption.gx-tab-caption .image-and-link-container .gx-nav-link{display:flex;height:100%;color:inherit;padding-inline:var(--tab-caption-horizontal-padding);overflow:hidden;transition:background-color 0.25s, color 0.25s, border-color 0.25s;white-space:nowrap}gx-tab-caption.gx-tab-caption .image-and-link-container .gx-nav-link:active,gx-tab-caption.gx-tab-caption .image-and-link-container .gx-nav-link:focus,gx-tab-caption.gx-tab-caption .image-and-link-container .gx-nav-link:hover,gx-tab-caption.gx-tab-caption .image-and-link-container .gx-nav-link:visited{color:none;text-decoration:none;outline:0}gx-tab-caption.gx-tab-caption .image-and-link-container .gx-nav-link>span{display:flex;align-items:center;height:100%;max-width:100%;min-height:1em;padding-top:0.125em}gx-tab-caption.gx-tab-caption[aria-selected=false]:hover:not(:active){filter:brightness(90%)}gx-tab-caption.gx-tab-caption--disabled{filter:opacity(0.5);pointer-events:none}";let C=0,x=class{constructor(a){(0,t.r)(this,a)}componentWillLoad(){this.element.id||(this.element.id="gx-tab-page-auto-id-"+C++)}render(){return(0,t.h)(t.H,{role:"tabpanel",tabindex:"0"},(0,t.h)("slot",null))}get element(){return(0,t.g)(this)}};x.style="gx-tab-page{display:flex;flex:1;flex-direction:column}gx-tab-page[hidden]{display:none !important}gx-tab-page[hidden][invisible-mode=keep-space]{display:flex !important;visibility:hidden}gx-tab-page.gx-tab-page{display:none}gx-tab-page.gx-tab-page--active{display:flex}"}}]);