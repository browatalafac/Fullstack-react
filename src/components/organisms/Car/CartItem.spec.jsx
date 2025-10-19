import { fireEvent, render, screen } from "@testing-library/react"
import CartItem from "./CartItem"
import React from "react"

describe('CartItem Component', () => {
    const mockProduct = {
        code: "10",
        image: "http://example.com/pastel-chocolate.png",
        name: "Pastel de Chocolate",
        description: "Delicioso pastel con cobertura de cacao y relleno cremoso",
        price: "15990"
    }

    it('muestra correctamente la información del producto', () => {
        render(<CartItem product={mockProduct} removeProduct={() => {}} />)

        expect(screen.getByText("Pastel de Chocolate")).toBeInTheDocument()
        expect(screen.getByText("15990")).toBeInTheDocument()
        expect(screen.getByText("Delicioso pastel con cobertura de cacao y relleno cremoso")).toBeInTheDocument()
        expect(screen.getByAltText("Pastel de Chocolate")).toHaveAttribute("src", "http://example.com/pastel-chocolate.png")
        expect(screen.getByText("x1")).toBeInTheDocument()
    })

    it('llama a removeProduct al hacer clic en el botón ✖', () => {
        const mockRemove = jest.fn()
        render(<CartItem product={mockProduct} removeProduct={mockRemove} />)

        const botonEliminar = screen.getByText("✖")
        fireEvent.click(botonEliminar)

        expect(mockRemove).toHaveBeenCalledWith("10")
        expect(mockRemove).toHaveBeenCalledTimes(1)
    })
})

//2 tests realizados. uno para verificar que la informaci´on del producto se muestra correctamente y otro para asegurar que la función removeProduct se llama con el código correcto al hacer clic en el botón de eliminar
