!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("d3")):"function"==typeof define&&define.amd?define(["d3"],e):"object"==typeof exports?exports.eventDrops=e(require("d3")):t.eventDrops=e(t.d3)}(this,function(t){return function(t){function e(n){if(r[n])return r[n].exports;var a=r[n]={exports:{},id:n,loaded:!1};return t[n].call(a.exports,a,a.exports,e),a.loaded=!0,a.exports}var r={};return e.m=t,e.c=r,e.p="",e(0)}([function(t,e,r){r(12),t.exports=r(16)},function(e,r){e.exports=t},function(t,e){"use strict";function r(){var t=arguments.length<=0||void 0===arguments[0]?[]:arguments[0],e=arguments[1],r=e.domain(),a=n(r,2),o=a[0],i=a[1];return t.filter(function(t){return t>=o&&i>=t})}Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){var r=[],n=!0,a=!1,o=void 0;try{for(var i,u=t[Symbol.iterator]();!(n=(i=u.next()).done)&&(r.push(i.value),!e||r.length!==e);n=!0);}catch(l){a=!0,o=l}finally{try{!n&&u["return"]&&u["return"]()}finally{if(a)throw o}}return r}return function(e,r){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();e["default"]=r},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=function(t,e,r){var n=e.tickFormat.map(function(t){return t.slice(0)}),a=e.locale?e.locale.timeFormat.multi(n):o["default"].time.format.multi(n),i=o["default"].svg.axis().scale(t).orient(r).tickFormat(a);return"function"==typeof e.axisFormat&&e.axisFormat(i),i};var a=r(1),o=n(a)},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}var a=r(1),o=n(a),i={lineHeight:45,start:new Date(0),end:new Date,minScale:0,maxScale:1/0,width:1e3,margin:{top:60,left:200,bottom:40,right:50},labelsWidth:210,locale:null,axisFormat:null,tickFormat:[[".%L",function(t){return t.getMilliseconds()}],[":%S",function(t){return t.getSeconds()}],["%I:%M",function(t){return t.getMinutes()}],["%I %p",function(t){return t.getHours()}],["%a %d",function(t){return t.getDay()&&1!==t.getDate()}],["%b %d",function(t){return 1!==t.getDate()}],["%B",function(t){return t.getMonth()}],["%Y",function(){return!0}]],eventHover:null,eventZoom:null,eventClick:null,hasDelimiter:!0,hasTopAxis:!0,hasBottomAxis:function(t){return t.length>=10},eventLineColor:"black",eventColor:null,metaballs:!0,zoomable:!0};i.dateFormat=i.locale?i.locale.timeFormat("%d %B %Y"):o["default"].time.format("%d %B %Y"),t.exports=i},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var a=r(3),o=n(a),i=(r(11),function(t,e){return"function"==typeof t?t(e):t});e["default"]=function(t,e,r,n){return function(a){var u=function(a){var i=t.selectAll(".x-axis."+a).data([{}]);i.enter().append("g").classed("x-axis",!0).classed(a,!0).call(o["default"](e.x,r,a)).attr("transform","translate(0,"+("bottom"===a?n.height+5:0)+")"),i.call(o["default"](e.x,r,a)),i.exit().remove()};i(r.hasTopAxis,a)&&u("top"),i(r.hasBottomAxis,a)&&u("bottom")}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.delimiters=function(t,e,r){var n=t.select(".extremum");n.selectAll(".minimum").remove(),n.selectAll(".maximum").remove();var a=e.x.domain();n.append("text").text(r(a[0])).classed("minimum",!0),n.append("text").text(r(a[1])).classed("maximum",!0).attr("transform","translate("+(e.x.range()[1]-200)+")").attr("text-anchor","end")}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=function(t,e,r){return function(n){var a=t.selectAll(".drop-line").data(n);a.enter().append("g").classed("drop-line",!0).attr("transform",function(t,n){return"translate(10, "+(40+r.lineHeight+e.y(n))+")"}).attr("fill",r.eventLineColor),a.each(function(t){var n=d3.select(this).selectAll(".drop").data(t.dates);n.attr("cx",function(t){return e.x(t)+200});var a=n.enter().append("circle").classed("drop",!0).attr("r",5).attr("cx",function(t){return e.x(t)+200}).attr("cy",-5).attr("fill",r.eventColor);r.eventClick&&a.on("click",r.eventClick),r.eventHover&&a.on("mouseover",r.eventHover),n.exit().on("click",null).on("mouseover",null),n.exit().remove()}),a.exit().remove()}}},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var a=r(1),o=(n(a),r(6)),i=r(2),u=(n(i),r(13)),l=r(5),s=n(l),c=r(7),d=n(c),f=r(9),m=n(f),p=r(10),v=n(p);e["default"]=function(t,e,r,n){var a=t.append("defs");a.append("clipPath").attr("id","drops-container-clipper").append("rect").attr("id","drops-container-rect").attr("x",n.margin.left+10).attr("y",0).attr("width",e.width).attr("height",e.outer_height);var i=t.append("g").classed("labels",!0).attr("transform","translate(0, 45)"),l=t.append("g").classed("axes",!0).attr("transform","translate("+(n.labelsWidth+10)+", 55)"),c=t.append("g").classed("drops-container",!0).attr("clip-path","url(#drops-container-clipper)").style("filter","url(#metaballs)");t.append("g").classed("extremum",!0).attr("width",e.width).attr("height",30).attr("transform","translate("+n.margin.left+", "+(n.margin.top-45)+")");n.metaballs&&u.metaballs(a);var f=v["default"](l,r,n,e),p=s["default"](l,r,n,e),h=m["default"](i,r,n),x=d["default"](c,r,n);return function(e){f(e),o.delimiters(t,r,n.dateFormat),x(e),h(e,n),p(e)}}},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var a=r(2),o=n(a);e["default"]=function(t,e,r){return function(n){var a=t.selectAll(".label").data(n),i=function(t){var r=o["default"](t.dates,e.x).length;return t.name+(r>0?" ("+r+")":"")};a.text(i),a.enter().append("text").classed("label",!0).attr("x",r.labelsWidth).attr("transform",function(t,r){return"translate(0, "+(40+e.y(r))+")"}).attr("text-anchor","end").text(i),a.exit().remove()}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=function(t,e,r,n){return function(a){var o=t.selectAll(".line-separator").data(a);o.enter().append("g").classed("line-separator",!0).attr("transform",function(t,n){return"translate(0, "+(e.y(n)+r.lineHeight)+")"}).append("line").attr("x1",0).attr("x2",n.width),o.exit().remove()}}},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0}),e.drawBottomAxis=e.drawTopAxis=void 0;var a=r(3),o=n(a),i=function(t,e,r,n,a){t.append("g").classed("x-axis",!0).classed(n,!0).attr("transform","translate("+r.margin.left+", "+a+")").call(o["default"](e,r,n))};e.drawTopAxis=function(t,e,r,n){return i(t,e,r,"top",r.margin.top-40)},e.drawBottomAxis=function(t,e,r,n){return i(t,e,r,"bottom",+n.height-21)}},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}function a(){function t(t){t.each(function(e){u["default"].select(this).select(".event-drops-chart").remove();var o=40*e.length,i={width:r.width-r.margin.right-r.margin.left,height:o,outer_height:o+r.margin.top+r.margin.bottom},l={x:a(i.width,[r.start,r.end]),y:n(e)},s=u["default"].select(this).append("svg").classed("event-drops-chart",!0).attr({width:i.width,height:i.outer_height}),c=m["default"](s,i,l,r).bind(t);c(e),r.zoomable&&v["default"](u["default"].select(this),i,l,r,e,c)})}var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],r=o({},d["default"],e),n=function(t){var e=u["default"].scale.ordinal();return e.domain(t.map(function(t){return t.name})).range(t.map(function(t,e){return 40*e}))},a=function(t,e){return u["default"].time.scale().range([0,t]).domain(e)};return s["default"](t,r),t}var o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},i=r(1),u=n(i),l=r(15),s=n(l),c=r(4),d=n(c),f=r(8),m=n(f),p=r(14),v=n(p);u["default"].chart=u["default"].chart||{},u["default"].chart.eventDrops=a,t.exports=a},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.metaballs=function(t){var e=t.append("filter");return e.attr("id","metaballs"),e.append("feGaussianBlur").attr("in","SourceGraphic").attr("stdDeviation",10).attr("result","blur"),e.append("feColorMatrix").attr("in","blur").attr("mode","matrix").attr("values","1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 50 -10").attr("result","contrast"),e.append("feBlend").attr("in","SourceGraphic").attr("in2","contrast"),e}},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var a=r(1),o=n(a);e["default"]=function(t,e,r,n,a,i){var u=o["default"].behavior.zoom().size([e.width,e.height]).scaleExtent([n.minScale,n.maxScale]).x(r.x).on("zoom",function(){requestAnimationFrame(function(){return i(a)})});return n.eventZoom&&u.on("zoomend",n.eventZoom),t.call(u)}},function(t,e,r){"use strict";function n(t,e){function r(r){return function(n){return arguments.length?(e[r]=n,t):e[r]}}for(var n in e)t[n]=r(n)}t.exports=n},function(t,e){}])});
//# sourceMappingURL=eventDrops.js.map