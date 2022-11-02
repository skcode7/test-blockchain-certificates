"use strict";(self.webpackChunkgenexus_web_application=self.webpackChunkgenexus_web_application||[]).push([[524],{6879:(u,n,l)=>{l.r(n),l.d(n,{gx_map:()=>s,gx_map_marker:()=>c});var o=l(4570),i=l(1810);let s=class{constructor(e){(0,o.r)(this,e),this.gxMapDidLoad=(0,o.c)(this,"gxMapDidLoad",7),this.mapClick=(0,o.c)(this,"mapClick",7),this.selectionInput=(0,o.c)(this,"selectionInput",7),this.selectionChange=(0,o.c)(this,"selectionChange",7),this.userLocationChange=(0,o.c)(this,"userLocationChange",7),this.isSelectionLayerSlot=!1,this.markersList=[],this.linesList=[],this.mapTypesProviders={hybrid:"https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}",satellite:"https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",standard:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"},this.markerClassIcon="gx-default-icon",this.center="0, 0",this.highAccuracyLocator=!0,this.mapType="standard",this.maxZoom=20,this.selectionLayer=!1,this.scrollWheelZoom=!0,this.watchPosition=!1,this.zoom=1}userLocationHandler(){this.userLocationChange.emit(this.userLocationCoords)}selectionLayerHandler(){this.registerSelectionLayerEvents()}onMapMarkerDidLoad(e){const t=e.target,a=e.detail;if(this.map?a.addTo(this.map):this.element.addEventListener("gxMapDidLoad",()=>{a.addTo(this.map)}),this.selectionLayer){const h=this.getSelectionMarkerSlot();this.selectionMarker=h.exist?h.elem:this.element.querySelector("[marker-class='gx-default-selection-layer-icon']"),t!==this.selectionMarker&&this.markersList.push(a)}else this.markersList.push(a);t.addEventListener("gxMapMarkerDeleted",()=>{this.onMapMarkerDeleted(a)})}onMapLineDidLoad(e){const t=e.target,a=e.detail;this.map?a.addTo(this.map):this.element.addEventListener("gxMapDidLoad",()=>{a.addTo(this.map)}),t.addEventListener("gxMapLineDeleted",()=>{this.onMapLineDeleted(a)})}addMapListener(e,t){this.map.on(e,t)}removeMapListener(e,t){this.map.off(e,t)}checkForMaxZoom(){return this.maxZoom<20?this.maxZoom:20}fitBounds(){if(this.markersList.length>1){const e=new i.F(this.markersList);this.map.fitBounds(e.getBounds())}else if(1===this.markersList.length){const[e]=this.markersList;this.map.setView([e._latlng.lat,e._latlng.lng],this.zoom)}}getZoom(){return this.zoom>0?this.zoom<20?this.zoom:19:1}getSelectionMarkerSlot(){const e=this.element.querySelector("[slot='selection-layer-marker']");return{exist:null!==e,elem:e}}onMapMarkerDeleted(e){let t=0;for(e.remove();t<this.markersList.length&&this.markersList[t]._leaflet_id!==e._leaflet_id;)t++;t<=this.markersList.length?this.markersList.splice(t,1):console.warn("There was an error in the markers list!")}onMapLineDeleted(e){let t=0;for(e.remove();t<=this.linesList.length&&this.linesList[t]._leaflet_id!==e._leaflet_id;)t++;t<=this.linesList.length?this.linesList.splice(t,1):console.warn("There was an error in the line list!")}updateSelectionMarkerPosition(){const e=this.map.getCenter();this.centerCoords=`${e.lat},${e.lng}`,this.selectionMarker.setAttribute("coords",this.centerCoords)}registerSelectionLayerEvents(){if(this.selectionLayer){const e={eventTrigger:"move",callbackFunction:()=>{this.updateSelectionMarkerPosition(),this.selectionInput.emit(this.centerCoords)}},t={eventTrigger:"moveend",callbackFunction:()=>{this.updateSelectionMarkerPosition(),this.selectionChange.emit(this.centerCoords)}};this.selectionLayer?(this.addMapListener(e.eventTrigger,e.callbackFunction),this.addMapListener(t.eventTrigger,t.callbackFunction)):(this.removeMapListener(e.eventTrigger,e.callbackFunction),this.removeMapListener(t.eventTrigger,t.callbackFunction))}}selectingTypes(e){const t=(0,i.t)(e,{maxZoom:this.maxZoom});t.addTo(this.map),this.mapProviderApplied=t}setMapProvider(){if(this.mapProviderApplied&&this.tileLayerApplied&&this.tileLayerApplied.removeFrom(this.map),this.mapProvider){const e=(0,i.t)(this.mapProvider,{maxZoom:this.maxZoom});e.addTo(this.map),this.mapProviderApplied=this.mapProvider,this.tileLayerApplied=e}else this.mapType&&"standard"!==this.mapType?"hybrid"===this.mapType?this.selectingTypes(this.mapTypesProviders.hybrid):"satellite"===this.mapType&&this.selectingTypes(this.mapTypesProviders.satellite):this.selectingTypes(this.mapTypesProviders.standard)}setUserLocation({coords:e}){this.userLocationCoords=`${e.latitude}, ${e.longitude}`}componentWillLoad(){this.watchPosition&&(this.watchPositionId=function d(e,t,a){return navigator.geolocation.watchPosition(e,t,a)}(this.setUserLocation.bind(this),e=>console.error(e),{enableHighAccuracy:this.highAccuracyLocator})),this.selectionLayer&&this.getSelectionMarkerSlot().exist&&(this.isSelectionLayerSlot=!0)}componentDidLoad(){const e=(0,i.p)(this.center);this.maxZoom=this.checkForMaxZoom(),this.zoom=this.getZoom(),this.map=null!==e?(0,i.c)(this.divMapView,{scrollWheelZoom:this.scrollWheelZoom}).setView(e,this.zoom,this.maxZoom):(0,i.c)(this.divMapView,{scrollWheelZoom:this.scrollWheelZoom}).setView([0,0],this.getZoom()),this.setMapProvider(),this.map.setMaxZoom(this.maxZoom),this.fitBounds(),this.gxMapDidLoad.emit(this),this.selectionLayer&&(this.updateSelectionMarkerPosition(),this.registerSelectionLayerEvents()),this.addMapListener("popupopen",function(t){const a=this.project(t.target._popup._latlng);a.y-=t.target._popup._container.clientHeight/2,this.panTo(this.unproject(a),{animate:!0})}),this.addMapListener("click",t=>{this.mapClick.emit(t.latlng)})}componentDidUpdate(){const e=this.checkForMaxZoom();this.setMapProvider(),this.selectionLayer&&this.fitBounds(),this.map.setMaxZoom(e),this.userLocationChange.emit(this.userLocationCoords)}disconnectedCallback(){navigator.geolocation.clearWatch(this.watchPositionId)}render(){return(0,o.h)(o.H,null,this.watchPosition&&(0,o.h)("gx-map-marker",{"marker-class":"gx-default-user-location-icon","icon-width":"65","icon-height":"55",coords:this.userLocationCoords}),this.selectionLayer&&(this.isSelectionLayerSlot?(0,o.h)("slot",{name:"selection-layer-marker"}):(0,o.h)("gx-map-marker",{"marker-class":"gx-default-selection-layer-icon","icon-width":"30","icon-height":"30",coords:this.centerCoords})),(0,o.h)("div",{class:"gxMapContainer"},(0,o.h)("div",{class:"gxMap",ref:e=>this.divMapView=e})))}get element(){return(0,o.g)(this)}static get watchers(){return{userLocationCoords:["userLocationHandler"],selectionLayer:["selectionLayerHandler"]}}};s.style='.leaflet-pane,.leaflet-tile,.leaflet-marker-icon,.leaflet-marker-shadow,.leaflet-tile-container,.leaflet-pane>svg,.leaflet-pane>canvas,.leaflet-zoom-box,.leaflet-image-layer,.leaflet-layer{position:absolute;left:0;top:0}.leaflet-container{overflow:hidden}.leaflet-tile,.leaflet-marker-icon,.leaflet-marker-shadow{-webkit-user-select:none;-moz-user-select:none;user-select:none;-webkit-user-drag:none}.leaflet-tile::selection{background:transparent}.leaflet-safari .leaflet-tile{image-rendering:-webkit-optimize-contrast}.leaflet-safari .leaflet-tile-container{width:1600px;height:1600px;-webkit-transform-origin:0 0}.leaflet-marker-icon,.leaflet-marker-shadow{display:block}.leaflet-container .leaflet-overlay-pane svg{max-width:none !important;max-height:none !important}.leaflet-container .leaflet-marker-pane img,.leaflet-container .leaflet-shadow-pane img,.leaflet-container .leaflet-tile-pane img,.leaflet-container img.leaflet-image-layer,.leaflet-container .leaflet-tile{max-width:none !important;max-height:none !important;width:auto;padding:0}.leaflet-container.leaflet-touch-zoom{-ms-touch-action:pan-x pan-y;touch-action:pan-x pan-y}.leaflet-container.leaflet-touch-drag{-ms-touch-action:pinch-zoom;touch-action:none;touch-action:pinch-zoom}.leaflet-container.leaflet-touch-drag.leaflet-touch-zoom{-ms-touch-action:none;touch-action:none}.leaflet-container{-webkit-tap-highlight-color:transparent}.leaflet-container a{-webkit-tap-highlight-color:rgba(51, 181, 229, 0.4)}.leaflet-tile{filter:inherit;visibility:hidden}.leaflet-tile-loaded{visibility:inherit}.leaflet-zoom-box{width:0;height:0;-moz-box-sizing:border-box;box-sizing:border-box;z-index:800}.leaflet-overlay-pane svg{-moz-user-select:none}.leaflet-pane{z-index:400}.leaflet-tile-pane{z-index:200}.leaflet-overlay-pane{z-index:400}.leaflet-shadow-pane{z-index:500}.leaflet-marker-pane{z-index:600}.leaflet-tooltip-pane{z-index:650}.leaflet-popup-pane{z-index:700}.leaflet-map-pane canvas{z-index:100}.leaflet-map-pane svg{z-index:200}.leaflet-vml-shape{width:1px;height:1px}.lvml{behavior:url(#default#VML);display:inline-block;position:absolute}.leaflet-control{position:relative;z-index:800;pointer-events:visiblePainted;pointer-events:auto}.leaflet-top,.leaflet-bottom{position:absolute;z-index:1000;pointer-events:none}.leaflet-top{top:0}.leaflet-right{right:0}.leaflet-bottom{bottom:0}.leaflet-left{left:0}.leaflet-control{float:left;clear:both}.leaflet-right .leaflet-control{float:right}.leaflet-top .leaflet-control{margin-top:10px}.leaflet-bottom .leaflet-control{margin-bottom:10px}.leaflet-left .leaflet-control{margin-left:10px}.leaflet-right .leaflet-control{margin-right:10px}.leaflet-fade-anim .leaflet-popup{opacity:0;-webkit-transition:opacity 0.2s linear;-moz-transition:opacity 0.2s linear;transition:opacity 0.2s linear}.leaflet-fade-anim .leaflet-map-pane .leaflet-popup{opacity:1}.leaflet-zoom-animated{-webkit-transform-origin:0 0;-ms-transform-origin:0 0;transform-origin:0 0}svg.leaflet-zoom-animated{will-change:transform}.leaflet-zoom-anim .leaflet-zoom-animated{-webkit-transition:-webkit-transform 0.25s cubic-bezier(0,0,0.25,1);-moz-transition:-moz-transform 0.25s cubic-bezier(0,0,0.25,1);transition:transform 0.25s cubic-bezier(0,0,0.25,1)}.leaflet-zoom-anim .leaflet-tile,.leaflet-pan-anim .leaflet-tile{-webkit-transition:none;-moz-transition:none;transition:none}.leaflet-zoom-anim .leaflet-zoom-hide{visibility:hidden}.leaflet-interactive{cursor:pointer}.leaflet-grab{cursor:-webkit-grab;cursor:-moz-grab;cursor:grab}.leaflet-crosshair,.leaflet-crosshair .leaflet-interactive{cursor:crosshair}.leaflet-popup-pane,.leaflet-control{cursor:auto}.leaflet-dragging .leaflet-grab,.leaflet-dragging .leaflet-grab .leaflet-interactive,.leaflet-dragging .leaflet-marker-draggable{cursor:move;cursor:-webkit-grabbing;cursor:-moz-grabbing;cursor:grabbing}.leaflet-marker-icon,.leaflet-marker-shadow,.leaflet-image-layer,.leaflet-pane>svg path,.leaflet-tile-container{pointer-events:none}.leaflet-marker-icon.leaflet-interactive,.leaflet-image-layer.leaflet-interactive,.leaflet-pane>svg path.leaflet-interactive,svg.leaflet-image-layer.leaflet-interactive path{pointer-events:visiblePainted;pointer-events:auto}.leaflet-container{background:#ddd;outline-offset:1px}.leaflet-container a{color:#0078A8}.leaflet-zoom-box{border:2px dotted #38f;background:rgba(255,255,255,0.5)}.leaflet-container{font-family:"Helvetica Neue", Arial, Helvetica, sans-serif;font-size:12px;font-size:0.75rem;line-height:1.5}.leaflet-bar{box-shadow:0 1px 5px rgba(0,0,0,0.65);border-radius:4px}.leaflet-bar a{background-color:#fff;border-bottom:1px solid #ccc;width:26px;height:26px;line-height:26px;display:block;text-align:center;text-decoration:none;color:black}.leaflet-bar a,.leaflet-control-layers-toggle{background-position:50% 50%;background-repeat:no-repeat;display:block}.leaflet-bar a:hover,.leaflet-bar a:focus{background-color:#f4f4f4}.leaflet-bar a:first-child{border-top-left-radius:4px;border-top-right-radius:4px}.leaflet-bar a:last-child{border-bottom-left-radius:4px;border-bottom-right-radius:4px;border-bottom:none}.leaflet-bar a.leaflet-disabled{cursor:default;background-color:#f4f4f4;color:#bbb}.leaflet-touch .leaflet-bar a{width:30px;height:30px;line-height:30px}.leaflet-touch .leaflet-bar a:first-child{border-top-left-radius:2px;border-top-right-radius:2px}.leaflet-touch .leaflet-bar a:last-child{border-bottom-left-radius:2px;border-bottom-right-radius:2px}.leaflet-control-zoom-in,.leaflet-control-zoom-out{font:bold 18px \'Lucida Console\', Monaco, monospace;text-indent:1px}.leaflet-touch .leaflet-control-zoom-in,.leaflet-touch .leaflet-control-zoom-out{font-size:22px}.leaflet-control-layers{box-shadow:0 1px 5px rgba(0,0,0,0.4);background:#fff;border-radius:5px}.leaflet-control-layers-toggle{background-image:url(images/layers.png);width:36px;height:36px}.leaflet-retina .leaflet-control-layers-toggle{background-image:url(images/layers-2x.png);background-size:26px 26px}.leaflet-touch .leaflet-control-layers-toggle{width:44px;height:44px}.leaflet-control-layers .leaflet-control-layers-list,.leaflet-control-layers-expanded .leaflet-control-layers-toggle{display:none}.leaflet-control-layers-expanded .leaflet-control-layers-list{display:block;position:relative}.leaflet-control-layers-expanded{padding:6px 10px 6px 6px;color:#333;background:#fff}.leaflet-control-layers-scrollbar{overflow-y:scroll;overflow-x:hidden;padding-right:5px}.leaflet-control-layers-selector{margin-top:2px;position:relative;top:1px}.leaflet-control-layers label{display:block;font-size:13px;font-size:1.08333em}.leaflet-control-layers-separator{height:0;border-top:1px solid #ddd;margin:5px -10px 5px -6px}.leaflet-default-icon-path{background-image:url(images/marker-icon.png)}.leaflet-container .leaflet-control-attribution{background:#fff;background:rgba(255, 255, 255, 0.8);margin:0}.leaflet-control-attribution,.leaflet-control-scale-line{padding:0 5px;color:#333;line-height:1.4}.leaflet-control-attribution a{text-decoration:none}.leaflet-control-attribution a:hover,.leaflet-control-attribution a:focus{text-decoration:underline}.leaflet-control-attribution svg{display:inline !important}.leaflet-left .leaflet-control-scale{margin-left:5px}.leaflet-bottom .leaflet-control-scale{margin-bottom:5px}.leaflet-control-scale-line{border:2px solid #777;border-top:none;line-height:1.1;padding:2px 5px 1px;white-space:nowrap;overflow:hidden;-moz-box-sizing:border-box;box-sizing:border-box;background:#fff;background:rgba(255, 255, 255, 0.5)}.leaflet-control-scale-line:not(:first-child){border-top:2px solid #777;border-bottom:none;margin-top:-2px}.leaflet-control-scale-line:not(:first-child):not(:last-child){border-bottom:2px solid #777}.leaflet-touch .leaflet-control-attribution,.leaflet-touch .leaflet-control-layers,.leaflet-touch .leaflet-bar{box-shadow:none}.leaflet-touch .leaflet-control-layers,.leaflet-touch .leaflet-bar{border:2px solid rgba(0,0,0,0.2);background-clip:padding-box}.leaflet-popup{position:absolute;text-align:center;margin-bottom:20px}.leaflet-popup-content-wrapper{padding:1px;text-align:left;border-radius:12px}.leaflet-popup-content{margin:13px 24px 13px 20px;line-height:1.3;font-size:13px;font-size:1.08333em;min-height:1px}.leaflet-popup-content p{margin:17px 0;margin:1.3em 0}.leaflet-popup-tip-container{width:40px;height:20px;position:absolute;left:50%;margin-top:-1px;margin-left:-20px;overflow:hidden;pointer-events:none}.leaflet-popup-tip{width:17px;height:17px;padding:1px;margin:-10px auto 0;pointer-events:auto;-webkit-transform:rotate(45deg);-moz-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg)}.leaflet-popup-content-wrapper,.leaflet-popup-tip{background:white;color:#333;box-shadow:0 3px 14px rgba(0,0,0,0.4)}.leaflet-container a.leaflet-popup-close-button{position:absolute;top:0;right:0;border:none;text-align:center;width:24px;height:24px;font:16px/24px Tahoma, Verdana, sans-serif;color:#757575;text-decoration:none;background:transparent}.leaflet-container a.leaflet-popup-close-button:hover,.leaflet-container a.leaflet-popup-close-button:focus{color:#585858}.leaflet-popup-scrolled{overflow:auto;border-bottom:1px solid #ddd;border-top:1px solid #ddd}.leaflet-oldie .leaflet-popup-content-wrapper{-ms-zoom:1}.leaflet-oldie .leaflet-popup-tip{width:24px;margin:0 auto;-ms-filter:"progid:DXImageTransform.Microsoft.Matrix(M11=0.70710678, M12=0.70710678, M21=-0.70710678, M22=0.70710678)";filter:progid:DXImageTransform.Microsoft.Matrix(M11=0.70710678, M12=0.70710678, M21=-0.70710678, M22=0.70710678)}.leaflet-oldie .leaflet-control-zoom,.leaflet-oldie .leaflet-control-layers,.leaflet-oldie .leaflet-popup-content-wrapper,.leaflet-oldie .leaflet-popup-tip{border:1px solid #999}.leaflet-div-icon{background:#fff;border:1px solid #666}.leaflet-tooltip{position:absolute;padding:6px;background-color:#fff;border:1px solid #fff;border-radius:3px;color:#222;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none;box-shadow:0 1px 3px rgba(0,0,0,0.4)}.leaflet-tooltip.leaflet-interactive{cursor:pointer;pointer-events:auto}.leaflet-tooltip-top:before,.leaflet-tooltip-bottom:before,.leaflet-tooltip-left:before,.leaflet-tooltip-right:before{position:absolute;pointer-events:none;border:6px solid transparent;background:transparent;content:""}.leaflet-tooltip-bottom{margin-top:6px}.leaflet-tooltip-top{margin-top:-6px}.leaflet-tooltip-bottom:before,.leaflet-tooltip-top:before{left:50%;margin-left:-6px}.leaflet-tooltip-top:before{bottom:0;margin-bottom:-12px;border-top-color:#fff}.leaflet-tooltip-bottom:before{top:0;margin-top:-12px;margin-left:-6px;border-bottom-color:#fff}.leaflet-tooltip-left{margin-left:-6px}.leaflet-tooltip-right{margin-left:6px}.leaflet-tooltip-left:before,.leaflet-tooltip-right:before{top:50%;margin-top:-6px}.leaflet-tooltip-left:before{right:0;margin-right:-12px;border-left-color:#fff}.leaflet-tooltip-right:before{left:0;margin-left:-12px;border-right-color:#fff}@media print{.leaflet-control{-webkit-print-color-adjust:exact;color-adjust:exact}}gx-map{display:block}gx-map[hidden]{display:none !important}gx-map[hidden][invisible-mode=keep-space]{display:block !important;visibility:hidden}gx-map .gxMapContainer{height:568px;width:100%}gx-map .gxMapContainer .gxMap{height:100%;width:100%}gx-map .gx-default-selection-layer-icon,gx-map .gx-default-icon,gx-map .gx-default-user-location-icon{background-color:transparent;border:none;background-repeat:no-repeat;background-size:contain;background-position:center}gx-map .gx-default-user-location-icon{background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAM7SURBVEiJnVXNa9xVFD33vvebSacx08Q2U1GwaQW1WSSZ6VQQIdaisQNdFMymoKJU+zf000FGl650oaJQRKiRWlE0CxdpEYs0H52kFqO1UoRapqVmpEnn6717XWhCzLxJtGf5zr3nnfs+7iW0wvCISWe25CCyzwtnVTQFYAOAMjGVDMs4mE9PVbNfIU8SkqDQYn9hYlhFXneqj3ghaItEwwpLOkssx4tHH/90dfH8mE1H69+pOrzqg17CsAzEjP+k7jpeuJTvrTeJZ96diHzJf1MTGpSQ1TXADMRJz5qUeXry4I4GAPAiqTf1g5renTAAiABVwaDc9O//y3mmcG64InbE+7sTXg7LQAz03IXXsqcIwyOmr+/BmWqDtoeCSR3ijVuI/DxIHYQiONOOWqwLChvcoC3CT9PTV3spXTi/t+b1CyfND8f4CrrkGl58cjueTW9FdzKBUnkBo5O/4sTZH1G298Pzumb3BrCke819T718qO65f2UAq8e9/je8/cpu5DLb0JGIwzAjmYgj89BmDPR048zEDComiWVXBwBQBeKGauyUMqE7jDVu4fnBR9G3pTtYenprCvufeBix+h9NnAJwKjsYilQo2fp5DA30BIUXMTTQg8jPh0lFihWcDHGsDt0d61cV35RMgDT8xJRoAxNpOUQKRbhebuHqH1yfW4CyCXIEzDGgpRDZsO0Ynbyyqvjo1BU0zD0tWC2xYZoIda+67cLH317G+Z9/D6aem72Gk9/9gnrUGXINAx03m3e/5FV5v+iKLYhR5wTGJi9ioVJFZ3sbjGFcvfEnPjrzA976sojbsQcgFGsStwwwmWME5LmvkJupNtAbckjqEXNziNw8CA5CFs60o267oMShFLQZzE5LttcCeTGaO24MToV6i5JBLdqIWrQxKBRyTVYP4TAJA8DUsZ2fxUlPcNjIfwaRIm70w+Lhxz4Hlv3bC/7OgbiRMQ7OprXBDLRZHZtydw4urS2x+V2u6CrPrIvkPfM/K7CsiDFOmk12CPldbqmSUHD/m9/n1HPBiQ6sOUMNXSLWo4tHsTKmBfLc/8aePSSyT8FZ+bsHdQKYY0KJIOPKfLp4ZOfXAAXn11+IRkSUOZv6dwAAAABJRU5ErkJggg==")}gx-map .gx-default-icon{background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAApCAYAAADAk4LOAAAFgUlEQVR4Aa1XA5BjWRTN2oW17d3YaZtr2962HUzbDNpjszW24mRt28p47v7zq/bXZtrp/lWnXr337j3nPCe85NcypgSFdugCpW5YoDAMRaIMqRi6aKq5E3YqDQO3qAwjVWrD8Ncq/RBpykd8oZUb/kaJutow8r1aP9II0WmLKLIsJyv1w/kqw9Ch2MYdB++12Onxee/QMwvf4/Dk/Lfp/i4nxTXtOoQ4pW5Aj7wpici1A9erdAN2OH64x8OSP9j3Ft3b7aWkTg/Fm91siTra0f9on5sQr9INejH6CUUUpavjFNq1B+Oadhxmnfa8RfEmN8VNAsQhPqF55xHkMzz3jSmChWU6f7/XZKNH+9+hBLOHYozuKQPxyMPUKkrX/K0uWnfFaJGS1QPRtZsOPtr3NsW0uyh6NNCOkU3Yz+bXbT3I8G3xE5EXLXtCXbbqwCO9zPQYPRTZ5vIDXD7U+w7rFDEoUUf7ibHIR4y6bLVPXrz8JVZEql13trxwue/uDivd3fkWRbS6/IA2bID4uk0UpF1N8qLlbBlXs4Ee7HLTfV1j54APvODnSfOWBqtKVvjgLKzF5YdEk5ewRkGlK0i33Eofffc7HT56jD7/6U+qH3Cx7SBLNntH5YIPvODnyfIXZYRVDPqgHtLs5ABHD3YzLuespb7t79FY34DjMwrVrcTuwlT55YMPvOBnRrJ4VXTdNnYug5ucHLBjEpt30701A3Ts+HEa73u6dT3FNWwflY86eMHPk+Yu+i6pzUpRrW7SNDg5JHR4KapmM5Wv2E8Tfcb1HoqqHMHU+uWDD7zg54mz5/2BSnizi9T1Dg4QQXLToGNCkb6tb1NU+QAlGr1++eADrzhn/u8Q2YZhQVlZ5+CAOtqfbhmaUCS1ezNFVm2imDbPmPng5wmz+gwh+oHDce0eUtQ6OGDIyR0uUhUsoO3vfDmmgOezH0mZN59x7MBi++WDL1g/eEiU3avlidO671bkLfwbw5XV2P8Pzo0ydy4t2/0eu33xYSOMOD8hTf4CrBtGMSoXfPLchX+J0ruSePw3LZeK0juPJbYzrhkH0io7B3k164hiGvawhOKMLkrQLyVpZg8rHFW7E2uHOL888IBPlNZ1FPzstSJM694fWr6RwpvcJK60+0HCILTBzZLFNdtAzJaohze60T8qBzyh5ZuOg5e7uwQppofEmf2++DYvmySqGBuKaicF1blQjhuHdvCIMvp8whTTfZzI7RldpwtSzL+F1+wkdZ2TBOW2gIF88PBTzD/gpeREAMEbxnJcaJHNHrpzji0gQCS6hdkEeYt9DF/2qPcEC8RM28Hwmr3sdNyht00byAut2k3gufWNtgtOEOFGUwcXWNDbdNbpgBGxEvKkOQsxivJx33iow0Vw5S6SVTrpVq11ysA2Rp7gTfPfktc6zhtXBBC+adRLshf6sG2RfHPZ5EAc4sVZ83yCN00Fk/4kggu40ZTvIEm5g24qtU4KjBrx/BTTH8ifVASAG7gKrnWxJDcU7x8X6Ecczhm3o6YicvsLXWfh3Ch1W0k8x0nXF+0fFxgt4phz8QvypiwCCFKMqXCnqXExjq10beH+UUA7+nG6mdG/Pu0f3LgFcGrl2s0kNNjpmoJ9o4B29CMO8dMT4Q5ox8uitF6fqsrJOr8qnwNbRzv6hSnG5wP+64C7h9lp30hKNtKdWjtdkbuPA19nJ7Tz3zR/ibgARbhb4AlhavcBebmTHcFl2fvYEnW0ox9xMxKBS8btJ+KiEbq9zA4RthQXDhPa0T9TEe69gWupwc6uBUphquXgf+/FrIjweHQS4/pduMe5ERUMHUd9xv8ZR98CxkS4F2n3EUrUZ10EYNw7BWm9x1GiPssi3GgiGRDKWRYZfXlON+dfNbM+GgIwYdwAAAAASUVORK5CYII")}gx-map .gx-default-selection-layer-icon{background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAoCAYAAAALz1FrAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAATySURBVEiJrZVbiF3VGcd/39p7n8ucM3OOl4xgzFTF6ENA1ASkRaRqxfZBbPuQgmIfRIIiXl40JsEyVWsUbSuIIkIpWJ/S2hdbGynagBZqLN5AjBqjZjJ4SWaSM+e619prfX1wJiSTvefMjP3D97L2Xt9vfZe1PmEJPXo+Dc2SX0Si1yts1CDNABUj9A3MgO7NkJds3704eZhOkR/JW5y8gLFKmjyCcEuzTDitJLV6IsQGYoEsgA3Qccpsqp22w6DyzGBgf50HOwXy8LpkUyz6j9MrUpuoSTU2uec4STbAVDv0jlltZ15+vGPavVsI+c3a+KrIyEsXNGSkUZLh3hfpaIoemAu9gP5k+1T2+imQh84uX1SKw1vrGzJaT1bs/7jaVvlkTtvBm03bp9OPAQzALojKcfjLOTWp1RJBYdVWLwlra1KLovDXXRAdhxyYSG4qx5x7RkWMKnxXW1MRU47le5+uS24+DkF56OwRqQ87Zc/DnFN6fnhE59SoR6IPK0i0cyLZmETctnbElIvy3ErhSxmjfvH3GbvkCgbJKNNfzxJ7S6mg+xIjzKSwpx69FovXnzYrpqoFgJlUSdZfyubf/hETxcfXs36Pv92+mXDkc0ZL+aBGSWqHAzeYKJarRxLivJBdUPq1NVz3++dPAgDE1RGuf+5FZswoQfNTVouJIrjG+KDrK0ZyC9hKYcPPboSCKxOVypx/5TXMufwGKEeCajjPqEjTmPyTDDyctfEHBYn8VuMXbyLNNHd/JBBEmrEqkcyHu1giYFtHl4SkrWOIfHvyxVpYMiJkRTkdiWH/y39eEvLZnt2MxPkX2CuIkhmDztqiwiXC1JtvMPvJh7mAQ//ZQ+vAPkpR/n4XQAzfRNc2o59XY9YV9XtVPO/t/julyghnXLgBMQbvLO8//wz/ffZxxmOXPy+AroOeDXvl0Yn4V82S2bGmKqWilASFloM0qROVygTbp+K6NArux4K+6oVBy7HNhCCvtJ2mS71FAjQTOIsOZ9oZxukxluS3/YnWceoxsttsO+T2etVOfxnv0Uqs5xVVmd7+ud1nBDTAk7OD0P1/QmYGdBQeg/lXOEmzp/ueLPUrf9bzrO+U1Ife6ePuTzA/VP7ZxV3ViLppxpWjpeIGWK6+7mvbe3PXPR/5d+GE8bsLogMTyf7xCudW49WP365Dj6S6b+tBt0HmL71Z+LgZfAjhjiMDVl2bAMykoQe6ZQFwEgRg+yH/ssI7LathNZCW1SzAv+4/mL1xot+TIACIbDmWkmZhZcX2XmlZbKbRPYtdngLZ+oX9ENg1Z0lXEsVRS1+VZx+YSj8dCgFQ5+7tZJrZsDyA9dDzWJO4B/P8RXmLr3boXds0ZIHLq9Hwlp5Jte0z7tt2MPw773tuJACDevZE6rUz8PlTb8H6Hlxg1k67PxT5KoRMfoANmLvnLJ2lCt5KtYvqlknIinwNvXU7J5K3xxK5pBqf+m/Xaeg4Xt825X64lI/CSBYUhFvnXOgvHtFBoeMYiMgdw3wMhez4wr2N8ko3w52YprYlRXnh/oP2g+8MAfCa3Nl16vx8NC5AP1OXBLdjOftzW3ixXpvL2lc34noIelkpklLHaTcYndx6KLy6nP3LigTADewjNqjteSVTbaX17Knl7l1WJAB7etgfNaLDLnCDYn75wH4/tBar0iSYneuS36103/8A3ul8UMJ+7p4AAAAASUVORK5CYII=")}';let c=class{constructor(e){(0,o.r)(this,e),this.gxMapMarkerDidLoad=(0,o.c)(this,"gxMapMarkerDidLoad",7),this.gxMapMarkerUpdate=(0,o.c)(this,"gxMapMarkerUpdate",7),this.gxMapMarkerDeleted=(0,o.c)(this,"gxMapMarkerDeleted",7),this.coords="0, 0",this.iconImageClass="gx-default-icon",this.iconHeight=30,this.iconWidth=30}getHalfSizes(){return{height:this.iconHeight/2,width:this.iconWidth/2}}setupMarker(e){this.markerInstance=(0,i.m)(e,{icon:(0,i.d)({className:this.iconImageClass,iconAnchor:[this.getHalfSizes().width,this.iconHeight],popupAnchor:[0,-this.getHalfSizes().height],iconSize:[this.iconWidth,this.iconHeight],tooltipAnchor:[0,-this.getHalfSizes().height]})})}setPopup(){const e=this.element.querySelector("[class='popup-data-container']");if(null!==e.firstElementChild){const t={height:.83*document.querySelector(".gxMap").clientHeight,width:.83*document.querySelector(".gxMap").clientWidth};this.markerInstance.bindPopup(e,{keepInView:!0,maxHeight:t.height,maxWidth:t.width,minWidth:100})}}componentDidLoad(){const e=(0,i.p)(this.coords);null!==e?this.setupMarker(e):(console.warn("GX warning: Can not read 'coords' attribute, default coords set (gx-map-marker)",this.element),this.setupMarker([0,0])),this.setPopup(),this.tooltipCaption&&this.markerInstance.bindTooltip(this.tooltipCaption,{direction:"top"}),this.gxMapMarkerDidLoad.emit(this.markerInstance)}componentDidUpdate(){const e=(0,i.p)(this.coords);null!==e?this.markerInstance.setLatLng(e):(console.warn("GX warning: Can not read 'coords' attribute, default coords set (gx-map-marker)",this.element),this.markerInstance.setLatLng([0,0])),this.markerInstance.setIcon((0,i.d)({className:this.iconImageClass,iconAnchor:[this.getHalfSizes().width,this.iconHeight],popupAnchor:[0,-this.getHalfSizes().height],iconSize:[this.iconWidth,this.iconHeight],tooltipAnchor:[0,-this.getHalfSizes().height]})),this.setPopup()}disconnectedCallback(){this.gxMapMarkerDeleted.emit(this.markerInstance)}render(){return(0,o.h)("div",{class:"popup-data-container"},(0,o.h)("slot",null))}get element(){return(0,o.g)(this)}};c.style="gx-map-marker{display:none}gx-map-marker[hidden]{display:none !important}gx-map-marker[hidden][invisible-mode=keep-space]{display:none !important;visibility:hidden}"}}]);