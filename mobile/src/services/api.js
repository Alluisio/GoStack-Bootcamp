import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3333",
});

export default api;

/**
 * iOS com Emulador : localhost
 * iOS com físico : IP da máquina
 *
 * Andoid com Emulador: localhost (adb reverse tcp:3333 tcp:3333)
 * Andoid com Emulador: 10.0.2.2 (Andoird Studio)
 * Andoid com Emulador: 10.0.3.2 (Genymotion)
 * Andoid com físico : IP da máquina
 */
