const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([]),
	mimeTypes: {},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.28a5d21e.js","imports":["_app/immutable/entry/start.28a5d21e.js","_app/immutable/chunks/index.cd6162fe.js","_app/immutable/chunks/singletons.59370aff.js","_app/immutable/chunks/index.8b8ce394.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.7d1b54f0.js","imports":["_app/immutable/entry/app.7d1b54f0.js","_app/immutable/chunks/index.cd6162fe.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./chunks/0-92ff3c8b.js'),
			() => import('./chunks/1-be7692ed.js'),
			() => import('./chunks/2-9e71ac22.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

const prerendered = new Set([]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map
