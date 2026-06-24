import { t as createClient } from "../_libs/supabase__supabase-js.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/client-Bat_bAlP.js
function createSupabaseClient() {
	return createClient("https://jolviinyqvaxsuelpwcu.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpvbHZpaW55cXZheHN1ZWxwd2N1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE4Njk5MDQsImV4cCI6MjA5NzQ0NTkwNH0.1U9rYqNzSjSdBnTy9a0-KIod_dbcKzERfBp5sHjGvVo", { auth: {
		storage: typeof window !== "undefined" ? localStorage : void 0,
		persistSession: true,
		autoRefreshToken: true
	} });
}
var _supabase;
var supabase = new Proxy({}, { get(_, prop, receiver) {
	if (!_supabase) _supabase = createSupabaseClient();
	return Reflect.get(_supabase, prop, receiver);
} });
//#endregion
export { supabase as t };
