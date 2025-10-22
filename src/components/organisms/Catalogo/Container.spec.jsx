import { fireEvent, render, screen } from "@testing-library/react"
import Container from "./Container"
import React from "react"

describe('Container Component', () => {
    const mockProducts = [
        { code: "1", name: "Torta Cuadrada de Chocolate", price: "45000" },
        { code: "2", name: "Torta Cuadrada de Frutas", price: "50000" }
    ]

    Storage.prototype.getItem = jest.fn(() => JSON.stringify(mockProducts))
    Storage.prototype.setItem = jest.fn()

    it('renderiza correctamente las categorías principales', () => {
        render(<Container />)

        expect(screen.getByText("Tortas Cuadradas")).toBeInTheDocument()
        expect(screen.getByText("Tortas Circulares")).toBeInTheDocument()
        expect(screen.getByText("Postres Individuales")).toBeInTheDocument()
        expect(screen.getByText("Productos Sin Azúcar")).toBeInTheDocument()
        expect(screen.getByText("Pastelería Tradicional")).toBeInTheDocument()
        expect(screen.getByText("Productos Sin Gluten")).toBeInTheDocument()
        expect(screen.getByText("Productos Veganos")).toBeInTheDocument()
        expect(screen.getByText("Tortas Especiales")).toBeInTheDocument()
    })

    it('carga correctamente el carrito guardado desde localStorage', () => {
        render(<Container />)
        expect(localStorage.getItem).toHaveBeenCalledWith("products")
        expect(screen.getByText("Torta Cuadrada de Chocolate")).toBeInTheDocument()
    })

    it('agrega un producto al carrito al hacer clic en "Agregar al carrito"', () => {
        render(<Container />)

        const botonAgregar = screen.getAllByText("Agregar al carrito")[0]
        fireEvent.click(botonAgregar)

        expect(localStorage.setItem).toHaveBeenCalled()
        const llamada = localStorage.setItem.mock.calls[0]
        expect(llamada[0]).toBe("products")

        const productosGuardados = JSON.parse(llamada[1])
        expect(productosGuardados.length).toBeGreaterThan(0)
        expect(productosGuardados[0].name).toBe("Torta Cuadrada de Chocolate")
    })
})

//3 tests realizados. uno pa verificar que las categorías principales se renderizan correctamente, otro para asegurar que el carrito se carga desde localStorage y un tercero para comprobar que al agregar un producto