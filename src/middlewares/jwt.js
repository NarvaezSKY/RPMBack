
import jwt from "jsonwebtoken";


export const createToken= (payload)=>{
    return new Promise((resolve, reject)=>{
        jwt.sign(
            payload,
            'token123',
            {
                expiresIn: '1d'
            },
            (error, token)=>{
                if(error)  reject(error)
                resolve(token)
                
    
            }
        )

    })

}