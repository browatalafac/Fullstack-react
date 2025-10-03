import React from 'react'

export default function Container() {
  return (
     <div className="container">
        <div className="row">
            <div className="category">
                <h2 className="category-title">Tortas Cuadradas</h2>
                <div className="item">
                    <div className="img img-TC001"></div>
                    <h3 className="name">Torta Cuadrada de Chocolate</h3>
                    <p className="price">$45.000 CLP</p>
                    <button className="btn">Agregar al carrito</button>
                </div>
                <div className="item">
                    <div className="img img-TC002"></div>
                    <h3 className="name">Torta Cuadrada de Frutas</h3>
                    <p className="price">$50.000 CLP</p>
                    <button className="btn">Agregar al carrito</button>
                </div>
            </div>
            <div className="category">
                <h2 className="category-title">Tortas Circulares</h2>
                <div className="item">
                    <div className="img img-TT001"></div>
                    <h3 className="name">Torta Circular de Vainilla</h3>
                    <p className="price">$40.000 CLP</p>
                    <button className="btn">Agregar al carrito</button>
                </div>
                <div className="item">
                    <div className="img img-TT002"></div>
                    <h3 className="name">Torta Circular de Manjar</h3>
                    <p className="price">$42.000 CLP</p>
                    <button className="btn">Agregar al carrito</button>
                </div>
            </div>
            <div className="category">
                <h2 className="category-title">Postres Individuales</h2>
                <div className="item">
                    <div className="img img-PI001"></div>
                    <h3 className="name">Mousse de Chocolate</h3>
                    <p className="price">$5.000 CLP</p>
                    <button className="btn">Agregar al carrito</button>
                </div>
                <div className="item">
                    <div className="img img-PI002"></div>
                    <h3 className="name">Tiramisú Clásico</h3>
                    <p className="price">$5.500 CLP</p>
                    <button className="btn">Agregar al carrito</button>
                </div>
            </div>
        </div>

        <div className="row">
            <div className="category">
                <h2 className="category-title">Productos Sin Azúcar</h2>
                <div className="item">
                    <div className="img img-PSA001"></div>
                    <h3 className="name">Torta Sin Azúcar de Naranja</h3>
                    <p className="price">$48.000 CLP</p>
                    <button className="btn">Agregar al carrito</button>
                </div>
                <div className="item">
                    <div className="img img-PSA002"></div>
                    <h3 className="name">Cheesecake Sin Azúcar</h3>
                    <p className="price">$47.000 CLP</p>
                    <button className="btn">Agregar al carrito</button>
                </div>
            </div>
            <div className="category">
                <h2 className="category-title">Pastelería Tradicional</h2>
                <div className="item">
                    <div className="img img-PT001"></div>
                    <h3 className="name">Empanada de Manzana</h3>
                    <p className="price">$3.000 CLP</p>
                    <button className="btn">Agregar al carrito</button>
                </div>
                <div className="item">
                    <div className="img img-PT002"></div>
                    <h3 className="name">Tarta de Santiago</h3>
                    <p className="price">$6.000 CLP</p>
                    <button className="btn">Agregar al carrito</button>
                </div>
            </div>
            <div className="category">
                <h2 className="category-title">Productos Sin Gluten</h2>
                <div className="item">
                    <div className="img img-PG001"></div>
                    <h3 className="name">Brownie Sin Gluten</h3>
                    <p className="price">$4.000 CLP</p>
                    <button className="btn">Agregar al carrito</button>
                </div>
                <div className="item">
                    <div className="img img-PG002"></div>
                    <h3 className="name">Pan Sin Gluten</h3>
                    <p className="price">$3.500 CLP</p>
                    <button className="btn">Agregar al carrito</button>
                </div>
            </div>
        </div>

        <div className="row row-last">
            <div className="category">
                <h2 className="category-title">Productos Veganos</h2>
                <div className="item">
                    <div className="img img-PV001"></div>
                    <h3 className="name">Torta Vegana de Chocolate</h3>
                    <p className="price">$50.000 CLP</p>
                    <button className="btn">Agregar al carrito</button>
                </div>
                <div className="item">
                    <div className="img img-PV002"></div>
                    <h3 className="name">Galletas Veganas de Avena</h3>
                    <p className="price">$4.500 CLP</p>
                    <button className="btn">Agregar al carrito</button>
                </div>
            </div>

            <div className="category">
                <h2 className="category-title">Tortas Especiales</h2>
                <div className="item">
                    <div className="img img-TE001"></div>
                    <h3 className="name">Torta Especial de Cumpleaños</h3>
                    <p className="price">$55.000 CLP</p>
                    <button className="btn">Agregar al carrito</button>
                </div>
                <div className="item">
                    <div className="img img-TE002"></div>
                    <h3 className="name">Torta Especial de Boda</h3>
                    <p className="price">$60.000 CLP</p>
                    <button className="btn">Agregar al carrito</button>
                </div>
            </div>
        </div>
    </div>
  )
}
