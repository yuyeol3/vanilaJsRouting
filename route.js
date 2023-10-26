import * as page from "./pages.js";

export const routes = {
    404: page.getPage404,
    "/": page.getPageHome,
    "/about": page.getPageAbout,
    "/image" : page.getPageImage
};
  
export const getRouteHtml = async () => {
    const path = window.location.pathname;
    const route = routes[path] || routes[404];
    const contents = document.getElementById("contents");
    contents.innerHTML = route();
};
  
export const handleRoute = event => {
    event = event || window.event;
    event.preventDefault(); // anchor 태그의 기본동작인 링크 대상으로 이동하는 행동을 방지한다.
    window.history.pushState({}, "", event.target.href); 
    getRouteHtml();
};
  
