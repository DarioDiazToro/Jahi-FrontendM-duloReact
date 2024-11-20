const urlBackend = "http://localhost:3000/api/v1";
import axios from 'axios';

export class PeticionesHttp {


    async post(prefijoUrl = '', data = {}, config = {}) {
        let newUrl = `${urlBackend}${prefijoUrl}`;
        try {
            const answer = await axios.post(newUrl, data, config);
            const respuesta = answer.data;
            console.log("Respuesta post", respuesta);
            return {
                ok: true,
                mensaje: '',
                data: respuesta
            }
        } catch (error) {
            const msg = error.response ? JSON.stringify(error.response.data) : error.message;
            console.error("Error post ======>", error.message);
            console.error("Error post msg ======>", msg);
            console.error("Error post url ======>", newUrl);


            return {
                ok: false,
                mensaje: `Ocurrio un error (${msg}) `,
                data: null
            }
        }

    }

    async put(prefijoUrl = '', data = {}, config = {}) {
        let newUrl = `${urlBackend}${prefijoUrl}`;
        try {
            const answer = await axios.put(newUrl, data, config);
            const respuesta = answer.data;
            console.log("Respuesta put", respuesta);
            return {
                ok: true,
                mensaje: '',
                data: respuesta
            }
        } catch (error) {
            const msg = error.response ? JSON.stringify(error.response.data) : error.message;
            console.error("Error put ======>", error.message);
            console.error("Error put msg ======>", msg);
            console.error("Error put url ======>", newUrl);


            return {
                ok: false,
                mensaje: `Ocurrio un error (${msg}) `,
                data: null
            }
        }

    }

    async delete(prefijoUrl = '', config = {}) {
        let newUrl = `${urlBackend}${prefijoUrl}`;
        try {
            const answer = await axios.delete(newUrl, config);
            const respuesta = answer.data;
            console.log("Respuesta delete", respuesta);
            return {
                ok: true,
                mensaje: '',
                data: respuesta
            }
        } catch (error) {
            const msg = error.response ? JSON.stringify(error.response.data) : error.message;
            console.error("Error delete ======>", error.message);
            console.error("Error delete msg ======>", msg);
            console.error("Error delete url ======>", newUrl);


            return {
                ok: false,
                mensaje: `Ocurrio un error (${msg}) `,
                data: null
            }
        }

    }

    async get(prefijoUrl = '', pagina = 1, limite = 0, config = {}) {
        let newUrl = `${urlBackend}${prefijoUrl}`;
        try {
            const answer = await axios.get(newUrl, config);
            const respuesta = answer.data;
            console.log("Respuesta get", respuesta);
            return {
                ok: true,
                mensaje: '',
                data: respuesta
            }
        } catch (error) {
            const msg = error.response ? JSON.stringify(error.response.data) : error.message;
            console.error("Error get ======>", error.message);
            console.error("Error get msg ======>", msg);
            console.error("Error get url ======>", newUrl);


            return {
                ok: false,
                mensaje: `Ocurrio un error (${msg}) `,
                data: null
            }
        }

    }

}



