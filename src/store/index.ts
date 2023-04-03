import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

export function setupStore(app: any) {
  const piniaInstance = createPinia()
  piniaInstance.use(piniaPluginPersistedstate)
  app.use(piniaInstance)
}
