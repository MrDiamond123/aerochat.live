export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".well-known/atproto-did","embed.png","favicon.ico","robots.txt","sitemap.txt"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.pcqR9BhC.js","app":"_app/immutable/entry/app.V0NBJv6l.js","imports":["_app/immutable/entry/start.pcqR9BhC.js","_app/immutable/chunks/scheduler.tgD2rtmB.js","_app/immutable/chunks/singletons.PcqPjIus.js","_app/immutable/entry/app.V0NBJv6l.js","_app/immutable/chunks/scheduler.tgD2rtmB.js","_app/immutable/chunks/index.FvPb5Ppg.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
