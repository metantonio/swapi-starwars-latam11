export const planetStore = {
    planets: [], //la lista de planetas
    planet: {} //planeta en específico
}

export function planetActions(getStore, getActions, setStore) {
    const BASE_URL = process.env.BASE_URL;
    return {
        getPlanets: async () => {
            //console.log(BASE_URL)
            let resultado = await fetch(`${BASE_URL}planets`)
            if (resultado.ok) {
                alert("Se trajo correctamente la lista de planetas")
                let resultadoJSON = await resultado.json()
                //console.log("resultadoJSON: ", resultadoJSON.results)
                let store = getStore();
                setStore({ ...store, planets: resultadoJSON.results })
                return resultadoJSON
            } else {
                alert("hubo un error en la petición de planetas")
                return false
            }
        },

        getSinglePlanet: async (numero) => {
            let resultado = await fetch(`${BASE_URL}planets/${numero}`)
            if (resultado.ok) {
                alert("Se trajo correctamente el planeta solicitado")
                let resultadoJSON = await resultado.json()
                console.log("resultadoJSON: ", resultadoJSON.result)
                let store = getStore();
                setStore({ ...store, planet: resultadoJSON.result })
                return resultadoJSON
            } else {
                alert("hubo un error en la petición del planeta")
                return false
            }
        }
    }
}