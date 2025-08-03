// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		interface Platform {
			env: Env;
			cf: CfProperties;
			ctx: ExecutionContext;
		}
	}

	interface Window {
		naver: {
			maps: {
				Map: any;
				Marker: any;
				InfoWindow: any;
				LatLng: any;
				Event: any;
			};
		};
	}
}

export {};
