const promise = new Promise((resolve, reject) =>{
    let  num1,
         num2,
         num3,
         sum;

         num1 = Number(prompt('Ingrese el primer número'))
         num2 = Number(prompt('Ingrese el segundo número'))
         num3 = Number(prompt('Ingrese el tercero número'))

         sum = num1 + num2 + num3;

         if(sum > 25){
             resolve(`El resultado de la suma es ${sum}`)
         }
            reject(`La suma de los tres números no es mayor a 25`)

})

promise
.then(res => console.log(res))
.catch(err => console.error(err))