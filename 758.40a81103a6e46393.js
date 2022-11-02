"use strict";(self.webpackChunkgenexus_web_application=self.webpackChunkgenexus_web_application||[]).push([[758],{7758:(s,o,a)=>{a.r(o),a.d(o,{gx_image_picker:()=>n});var e=a(4570);let n=class{constructor(i){(0,e.r)(this,i),this.click=(0,e.c)(this,"click",7),this.onImageChanged=(0,e.c)(this,"onImageChanged",7),this.reader=new FileReader,this.dismissTimer=null,this.alt="",this.autoGrow=!0,this.disabled=!1,this.invisibleMode="collapse",this.lazyLoad=!0,this.lowResolutionSrc="",this.src="",this.highlightable=!1,this.readonly=!1,this.modalTitle=null,this.changeButtonText="Change image",this.removeButtonText="Remove image",this.cancelButtonText="CANCEL",this.state="readyToUse",this.renderModalElements=!1,this.clickImageAction=t=>{this.click.emit(t)},this.triggerAction=t=>{""===this.src?this.input.click():(clearTimeout(this.dismissTimer),this.renderModalElements=!0,this.modal.opened=!0),t.stopPropagation()},this.clearImageAction=()=>{this.input.value="",this.src="",this.alt="",this.onImageChanged.emit(null),this.closeAction()},this.closeAction=()=>{this.modal.opened=!1,this.dismissTimer=setTimeout(()=>{this.renderModalElements=!1},300)},this.fileSelectedAction=()=>{const t=this.input.files[0];null!=t&&(this.state="uploadingFile",this.alt=this.getFileNameWithoutExtension(t.name),this.reader.readAsDataURL(t),this.closeAction(),this.onImageChanged.emit(t))}}stopPropagation(i){i.stopPropagation()}getFileNameWithoutExtension(i){const t=i.lastIndexOf(".");return-1===t?i:i.substring(0,t)}getSearchPlusSolidSVG(){return(0,e.h)("svg",{viewBox:"3 2 20 20"},(0,e.h)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),(0,e.h)("path",{d:"M0 0h24v24H0z",fill:"none"}))}getPencilAltSolidSVG(){return(0,e.h)("svg",{viewBox:"0 -35 570 570"},(0,e.h)("path",{fill:"black",d:"M497.9 142.1l-46.1 46.1c-4.7 4.7-12.3 4.7-17 0l-111-111c-4.7-4.7-4.7-12.3 0-17l46.1-46.1c18.7-18.7 49.1-18.7 67.9 0l60.1 60.1c18.8 18.7 18.8 49.1 0 67.9zM284.2 99.8L21.6 362.4.4 483.9c-2.9 16.4 11.4 30.6 27.8 27.8l121.5-21.3 262.6-262.6c4.7-4.7 4.7-12.3 0-17l-111-111c-4.8-4.7-12.4-4.7-17.1 0zM124.1 339.9c-5.5-5.5-5.5-14.3 0-19.8l154-154c5.5-5.5 14.3-5.5 19.8 0s5.5 14.3 0 19.8l-154 154c-5.5 5.5-14.3 5.5-19.8 0zM88 424h48v36.3l-64.5 11.3-31.1-31.1L51.7 376H88v48z"}))}componentWillLoad(){this.shouldShowImagePickerButton=!this.readonly}componentDidLoad(){const i=this.element;this.reader.addEventListener("load",function(){i.src=this.result.toString(),i.state="readyToUse"},!1)}render(){return(0,e.h)(e.H,{onClick:this.stopPropagation},(0,e.h)("gx-image",{alt:this.alt,autoGrow:this.autoGrow,cssClass:this.cssClass,disabled:this.disabled,invisibleMode:this.invisibleMode,lazyLoad:this.lazyLoad,lowResolutionSrc:this.lowResolutionSrc,scaleType:this.scaleType,showImagePickerButton:this.shouldShowImagePickerButton,src:this.src,highlightable:this.highlightable,onClick:this.clickImageAction},this.shouldShowImagePickerButton&&(0,e.h)("div",{class:"image-picker-state-container",onClick:this.stopPropagation},"uploadingFile"!=this.state?(0,e.h)("button",{class:"image-picker-button",disabled:this.disabled,onClick:this.triggerAction},""===this.src?this.getSearchPlusSolidSVG():this.getPencilAltSolidSVG()):(0,e.h)("div",{class:"loading-image"}))),(0,e.h)("gx-modal",{onClose:this.closeAction,onClick:this.stopPropagation,ref:i=>this.modal=i},(0,e.h)("div",{class:"body-container",slot:"body"},(0,e.h)("label",{class:"picker-container"},(0,e.h)("input",{role:"button","aria-label":this.changeButtonText,class:"file-picker",type:"file",accept:"image/*",onChange:this.fileSelectedAction,ref:i=>this.input=i}),(0,e.h)("svg",{"aria-hidden":"true",class:"download",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1200 1200"},(0,e.h)("path",{d:"M0,1037.516h1200V1200H0V1037.516z M820.785,0h-441.57v496.632H103.233  L600,959.265l496.768-462.633H820.785V0z"})),(0,e.h)("span",{"aria-hidden":"true",class:"custom-file-picker"},this.changeButtonText)),this.renderModalElements&&(0,e.h)("button",{class:"remove-image-button",type:"button",onClick:this.clearImageAction},(0,e.h)("svg",{"aria-hidden":"true",class:"trash-can",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,e.h)("path",{d:"M 10 2 L 9 3 L 5 3 C 4.448 3 4 3.448 4 4 C 4 4.552 4.448 5 5 5 L 7 5 L 17 5 L 19 5 C 19.552 5 20 4.552 20 4 C 20 3.448 19.552 3 19 3 L 15 3 L 14 2 L 10 2 z M 5 7 L 5 20 C 5 21.105 5.895 22 7 22 L 17 22 C 18.105 22 19 21.105 19 20 L 19 7 L 5 7 z"})),this.removeButtonText)),this.renderModalElements&&[(0,e.h)("span",{slot:"header"},null===this.modalTitle?document.title:this.modalTitle),(0,e.h)("button",{class:"cancel-button",type:"button",slot:"secondary-action",onClick:this.closeAction},this.cancelButtonText)]))}get element(){return(0,e.g)(this)}};n.style="gx-image-picker{display:flex;flex:1;align-self:stretch;pointer-events:none}gx-image-picker>gx-image>.gx-image-container>.image-picker-state-container{display:flex;align-items:stretch;position:absolute;right:0;bottom:0;min-width:30px;min-height:30px}gx-image-picker>gx-image>.gx-image-container>.image-picker-state-container>.image-picker-button{border:1px solid #ddd;border-radius:15px;display:flex;justify-content:center;align-items:center;width:100%;background-color:#efefef;padding:0 0 0 2.5px;pointer-events:all;transition-property:background-color, color;transition-duration:0.25s}gx-image-picker>gx-image>.gx-image-container>.image-picker-state-container>.image-picker-button:not([disabled]):hover{background-color:#ddd}gx-image-picker>gx-image>.gx-image-container>.image-picker-state-container>.image-picker-button:not([disabled]):focus,gx-image-picker>gx-image>.gx-image-container>.image-picker-state-container>.image-picker-button:not([disabled]):active{outline:none}gx-image-picker>gx-image>.gx-image-container>.image-picker-state-container>.image-picker-button:not([disabled]):active{background-color:#ccc}gx-image-picker>gx-image>.gx-image-container>.image-picker-state-container>.image-picker-button[disabled]{border:1px solid #aaa;border-radius:15px;background-color:#ccc}gx-image-picker>gx-image>.gx-image-container>.image-picker-state-container>.image-picker-button svg{width:18px;height:18px}gx-image-picker>gx-image>.gx-image-container>.image-picker-state-container>.loading-image{width:100%;border-radius:50%;border:3px solid transparent;border-top-color:#60606080;border-left-color:#60606080;animation:rotate-loading-image 0.6s linear infinite}gx-image-picker>gx-modal::part(dialog){max-width:512px}gx-image-picker>gx-modal>.body-container{display:flex;align-content:space-between;justify-content:center;flex-wrap:wrap;background-color:inherit;width:100%}gx-image-picker>gx-modal>.body-container>.picker-container{display:flex;position:relative;background-color:var(--gx-modal-accent-color);box-shadow:0 0 9px var(--gx-modal-accent-color);color:var(--accent-contrast-color, inherit);overflow:hidden;padding:0}gx-image-picker>gx-modal>.body-container>.picker-container>.file-picker{position:absolute;width:100%;height:0;opacity:0}gx-image-picker>gx-modal>.body-container>.picker-container>.download{fill:currentColor;width:0.9em;margin-inline-start:16px}gx-image-picker>gx-modal>.body-container>.picker-container>.custom-file-picker{padding:8px 16px 8px 12px;pointer-events:none}gx-image-picker>gx-modal>.body-container>.remove-image-button{display:flex;appearance:none;background-color:inherit;border:1px solid;box-shadow:0 0 9px -3px var(--gx-modal-accent-color);color:var(--gx-modal-accent-color);font-size:inherit;outline:0;padding:8px 16px 8px 13px}gx-image-picker>gx-modal>.body-container>.remove-image-button>.trash-can{fill:currentColor;width:1.1em;margin-inline-end:8px}gx-image-picker>gx-modal>.body-container>.picker-container,gx-image-picker>gx-modal>.body-container>.remove-image-button{display:flex;align-items:center;border-radius:8px;cursor:pointer;min-height:2em;margin:16px 16px 8px 16px;transition:filter 0.25s}gx-image-picker>gx-modal>.body-container>.picker-container:active,gx-image-picker>gx-modal>.body-container>.remove-image-button:active{filter:brightness(80%)}gx-image-picker>gx-modal>.cancel-button{display:flex;align-items:center;appearance:none;background-color:transparent;border:1px solid;border-radius:8px;box-shadow:0 0 9px -3px var(--gx-modal-accent-color);color:var(--gx-modal-accent-color);cursor:pointer;padding:8px 16px;transition:filter 0.25s}gx-image-picker>gx-modal>.cancel-button:active{filter:brightness(80%)}@keyframes rotate-loading-image{to{transform:rotate(360deg)}}"}}]);