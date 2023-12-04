import { Schema, model } from "mongoose";


//la Geo (Geolocalizacion) es otro tipo de dato luego se cambia por que se llena con mapas
/*geo: {
    type: { type: String, enum: ['Point'], default: 'Point' },
    coordinates: { type: [Number], default: [0, 0] }, // [longitud, latitud]
  },
*/

//duda ¿Que datos especificos da un mapa para que se pueda dibujar la ruta?, ¿solo geo?  R/ Nose


const paradasShema = new Schema({
    nombre_par: {
        type: String
    },
    geo_par: {
        type: String,
        default: 'location_secreta'
    }
})


const rutaShema = new Schema({
    nombre_rut: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        default: 'Descripcion de la ruta',
        required: false
    },
    fecha_rut: {
        type: Date,
        required: true
    },
    geo_P_inicio: {
        type: String,
        default: 'location_inicio',
        required: true
    },
    paradas: [paradasShema],
    geo_P_final: {
        type: String,
        default: 'location_final',
        required: true
    },
    kilometros_rut:{type: Number},
    

})


export default model('ruta', rutaShema);