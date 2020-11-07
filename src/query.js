/*Documento de búsquedas*/

/*Esta búsqueda nos muestra todas las motos de la marca Kawasaki
cuya cilindrada es igual o mayor a 300cc, de manera ordenada.*/
db.Motos.find({ $and: [
        { "Cilindrada": {$gte:300}},
        { "Marca":{ $eq:"Kawasaki"}}
]}).pretty()


/*Esta búsqueda enseña todas las motos cuyo Tipo es Scooter y
cuyo precio es igual o mayor que 500.
La cláusula "nor" niega todo lo que contenga dentro.*/
db.Motos.find({ $nor: [
    { "Tipo":{$ne:"Scooter"}},
    { "Precio":{$lte:500}}
]}).pretty()


/*Cuenta todos los documentos que su tipo es Custom o que su
gasolina no es de tipo 98 octanos.*/
db.Motos.find({$or:[
    { "Tipo": {$ne: "Custom"}},
    { "Gasolina": {$nin: ["98 octanos"]}}
]}).count()


/*Muestra todos los documentos cuyo precio no es mas pequeño o igual
que 600, y además su gasolina es de 98 octanos.*/
db.Motos.find({$and:[
    {"Precio":{$not: {$lte:600}}},
    {"Gasolina":{$eq:"98 octanos"}}
]}).pretty()


