import Ruta from "../models/Ruta.js";


export const registroRuta = async (req, res) => {
    const { nombre_rut, descripcion,paradas, kilometros_rut } = req.body;
    try {
        const nuevaRuta = new Ruta({
            nombre_rut,
            descripcion,
            fecha_rut: new Date(),
            paradas,
            kilometros_rut
        })

        const saveRuta = await nuevaRuta.save();
        res.json(saveRuta)

    } catch (error) {
        console.log(error)
    }

}

export const obtenRutas=async(req, res)=>{

    try {
        const allRutas= await Ruta.find();
        res.json(allRutas)
        
    } catch (error) {
        console.log(error)
    }

}
export const eliminaRutas= async(req, res)=>{
    try {
        await Ruta.findByIdAndDelete(req.params.id)
        res.json({message: 'Ruta eliminada'})
        
    } catch (error) {
        console.log(err)
        
    }
}