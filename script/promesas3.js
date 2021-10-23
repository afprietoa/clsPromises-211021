const promesa = new Promise((resolve, reject)=>{
    let nombre = prompt('Ingrese el nombre del usuario')
    if(nombre == ''){
        reject('No se ingreso información')
    }
    resolve('El nombre del usuario es:' + nombre)
})
promesa.then(resp =>{
    console.log(resp)
})
promesa.catch(error =>{
    console.log(error)
})