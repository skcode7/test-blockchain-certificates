"use strict";(self.webpackChunkgenexus_web_application=self.webpackChunkgenexus_web_application||[]).push([[208],{8208:(O,m,l)=>{l.r(m),l.d(m,{gx_query_viewer:()=>u});var s=l(4570);let u=class{constructor(e){(0,s.r)(this,e),this.mapServices={net:"gxqueryviewerforsd.aspx",java:"qviewer.services.gxqueryviewerforsd"},this.propsNotToPost=["baseUrl","env","mapServices","object","objectCall","propsNotToPost","parameters","elements","dataVersionId"],this.configurationObserver=new MutationObserver(()=>{this.configurationChangedHandler()})}parameterValueChangedHandler(e){e.stopPropagation(),this.getParameters()}elementChangedHandler(e){e.stopPropagation(),this.getElements()}configurationChangedHandler(){this.getParameters(),this.getElements()}componentWillLoad(){this.getParameters(),this.getElements()}componentDidLoad(){this.configurationObserver.observe(this.element,{childList:!0,subtree:!0})}componentDidRender(){this.element.querySelector("form").submit()}disconnectedCallback(){this.configurationObserver.disconnect()}parseObjectToObjectcall(){try{this.objectCall=JSON.parse(this.object)}catch(e){this.objectCall=null}}hasObjectCall(){return Array.isArray(this.objectCall)&&this.objectCall.length>=2}loadObjectNameFromObjectCall(){this.hasObjectCall()&&(this.objectName=this.objectCall[1])}postData(){return this.parseObjectToObjectcall(),this.loadObjectNameFromObjectCall(),[...Object.keys(u.prototype).filter(e=>!this.propsNotToPost.includes(e)).map(e=>(0,s.h)("input",{type:"hidden",name:e,value:this[e]})),(0,s.h)("input",{type:"hidden",name:"Elements",value:this.elements}),(0,s.h)("input",{type:"hidden",name:"Parameters",value:this.parameters})]}getParameters(){const e=[];this.hasObjectCall()?this.objectCall.slice(2).forEach(n=>{const t={};t.Value=encodeURIComponent(n),t.Name="",e.push(t)}):Array.from(document.getElementsByTagName("gx-query-viewer-parameter")).forEach(t=>{const r={};r.Value=encodeURIComponent(t.Value),r.Name=t.Name,e.push(r)}),this.parameters=JSON.stringify(e)}getElements(){const e=[];Array.from(document.getElementsByTagName("gx-query-viewer-element")).forEach(t=>{const r={};r.Name=t.name,r.Title=t.elementTitle,r.Visible=t.visible,r.Type=t.type,r.Axis=t.axis,r.Aggregation=t.aggregation,r.DataField=t.dataField,t.axisOrderType&&(r.AxisOrder={Type:t.axisOrderType},t.axisOrderValues&&(r.AxisOrder.Values=t.axisOrderValues)),t.filterType&&(r.Filter={Type:t.filterType},t.axisOrderValues&&(r.Filter.Values=t.filterValues)),t.expandCollapseType&&(r.ExpandCollapse={Type:t.expandCollapseType},t.axisOrderValues&&(r.ExpandCollapse.Values=t.expandCollapseValues));const h=this.getGrouping(t);Object.keys(h).length>0&&(r.Grouping=h),t.raiseItemClick&&(r.Action={RaiseItemClick:t.raiseItemClick}),Array.from(t.getElementsByTagName("gx-query-viewer-element-format")).forEach(a=>{const i={};i.Picture=a.picture,i.Subtotals=a.subtotals,i.CanDragToPages=a.canDragToPages,i.Style=a.formatStyle,i.TargetValue=a.targetValue,i.MaximumValue=a.maximumValue;const d=Array.from(t.getElementsByTagName("gx-query-viewer-format-style")),g=[],p=[];d.forEach(o=>{"Values"===o.type?g.push({Value:o.value,ApplyToRowOrColumn:o.applyToRowOrColumn,StyleOrClass:o.styleOrClass}):p.push({Value1:o.value1,Value2:o.value2,Operator:o.operator,StyleOrClass:o.styleOrClass})}),g.length>0&&(i.ValuesStyle=g),p.length>0&&(i.ConditionalStyles=p),r.Format=i}),e.push(r)}),this.elements=JSON.stringify(e)}getGrouping(e){return()=>Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},e.groupingGroupByYear&&{GroupByYear:e.groupingGroupByYear}),e.groupingYearTitle&&{YearTitle:e.groupingYearTitle}),e.groupingGroupBySemester&&{GroupBySemester:e.groupingGroupBySemester}),e.groupingSemesterTitle&&{SemesterTitle:e.groupingSemesterTitle}),e.groupingGroupByQuarter&&{GroupByQuarter:e.groupingGroupByQuarter}),e.groupingQuarterTitle&&{QuarterTitle:e.groupingQuarterTitle}),e.groupingGroupByMonth&&{GroupByMonth:e.groupingGroupByMonth}),e.groupingMonthTitle&&{MonthTitle:e.groupingMonthTitle}),e.groupingGroupByDayOfWeek&&{GroupByDayOfWeek:e.groupingGroupByDayOfWeek}),e.groupingDayOfWeekTitle&&{DayOfWeekTitle:e.groupingDayOfWeekTitle}),e.groupingHideValue&&{HideValue:e.groupingHideValue})}render(){return(0,s.h)(s.H,null,(0,s.h)("iframe",{name:"query_viewer","data-version-id":this.dataVersionId}),(0,s.h)("form",{hidden:!0,target:"query_viewer",action:this.baseUrl+this.mapServices[this.env],method:"POST"},this.postData()))}get element(){return(0,s.g)(this)}};u.style="gx-query-viewer{display:flex;flex:1}gx-query-viewer iframe{flex:1;border:0}"}}]);