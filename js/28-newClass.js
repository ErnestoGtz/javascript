class Producto {
    constructor(descripcion,precio){
        this.descripcion = descripcion;
        this.precio = precio;
    }

    formatearProducto(){
        return `El producto ${this.descripcion} tiene un precio de $ ${this.precio}`;
    }
    getPrice(){
        return `El precio del producto es ${this.precio}`;
    }
}

const producto2 = new Producto('Monitor Curvo 27',800,true);
const producto3 = new Producto('Monitor Curvo 32',1800,false);

console.log(producto2.formatearProducto());
console.log(producto2.getPrice());
console.log(producto3);

class Libro extends Producto {
    constructor(nombre,precio,isdn){
        super(nombre,precio);
        this.isdn = isdn;
    }
    formatearProducto(){
        return `${super.formatearProducto()} y su isdn es ${this.isdn}`;
    }
}

const libro = new Libro('Javascript la revolucion',150,'12312321312');
console.log(libro);

console.log(libro.formatearProducto());
