//#region node_modules/.nitro/vite/services/ssr/assets/__23tanstack-start-server-fn-resolver-iVIg6ba9.js
var manifest = {
	"2b9d60752e85dda3652c42f85865d9466bc8e5a6418c99d2d30c17989247766e": {
		functionName: "initiateMpesaStk_createServerFn_handler",
		importer: () => import("./_ssr/mpesa.functions-DUgIosPN.mjs")
	},
	"4e115a0878fe72bd8d60c7f1cb1c877881c70c70f775ce5fc4bcc76aee5abdc5": {
		functionName: "grantUserRole_createServerFn_handler",
		importer: () => import("./_ssr/admin.functions-C6Tdohx3.mjs")
	},
	"a370f0b6749145fca33f60e658cf0d820cc190ffabe51c11c92c708950e6f9db": {
		functionName: "revokeUserRole_createServerFn_handler",
		importer: () => import("./_ssr/admin.functions-C6Tdohx3.mjs")
	}
};
async function getServerFnById(id, access) {
	const serverFnInfo = manifest[id];
	if (!serverFnInfo) throw new Error("Server function info not found for " + id);
	const fnModule = serverFnInfo.module ?? await serverFnInfo.importer();
	if (!fnModule) throw new Error("Server function module not resolved for " + id);
	const action = fnModule[serverFnInfo.functionName];
	if (!action) throw new Error("Server function module export not resolved for serverFn ID: " + id);
	return action;
}
//#endregion
export { getServerFnById as t };
