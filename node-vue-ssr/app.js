// app.js (在服務器和客戶端之間共享)
import { createSSRApp } from "vue";

export function createApp() {
	return createSSRApp({
		data: () => ({ count: 1 }),
		template: `<button @click="count++">{{ count }}</button>`,
	});
}
