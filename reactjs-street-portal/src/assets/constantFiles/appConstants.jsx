
export const AppName = 'ReactJs';

//https://developers.google.com/amp/cache/reference/acceleratedmobilepageurl/rest/
export const googlePublicAPI = 'https://acceleratedmobilepageurl.googleapis.com/$discovery/rest?version=v1';

const isLocalHost =  (window.location.host) === "localhost:3000" ? true : false

export const routePathPrefix = "/ReactJsStreet/";

export const AppUrl = isLocalHost ? "http://localhost:3000" + routePathPrefix : "https://learningstreets.github.io" + routePathPrefix;


 
 //export const routePathPrefix = "/";