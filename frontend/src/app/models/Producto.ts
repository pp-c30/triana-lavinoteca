export interface IProducto
{
    id_producto?: number;
    nombre: string;
    categoria: number;
    stock: number;
    precio: number;
    variedad: number;
    imagen: string;
    public_id: string;
    bodega: number;
    descripcion: string;
    cantmil: number;
    estado: number;
    descripcion_variedad: string;
    descripcion_bodega: string;
    descripcion_categoria: string;
    id_varie: number;
    id_cat: number;
    id_bod: number;
}
