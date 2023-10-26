import * as RouteHandler from "./route.js";

window.onpopstate = RouteHandler.getRouteHtml;
RouteHandler.getRouteHtml();

document.querySelectorAll("a").forEach(e => {e.addEventListener("click", RouteHandler.handleRoute)});
