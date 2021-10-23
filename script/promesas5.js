const promesa = new Promise((resolve,reject) =>{
    let  edad,
         peso;

    edad = Number(prompt('Ingrese su edad'))
    peso = Number(prompt('Ingrese su peso'))

    if(peso >= 100){
        reject('El usuario tiene sobrepeso')
    }
        resolve('El usuario es saludable')
})

promesa.then(result=>
    console.log(result)
    )
promesa.catch(error =>
    console.log(error)
    )