import { render, screen, fireEvent } from "@testing-library/react";
import CartItem from "./CartItem";
import React from "react";

describe("CartItem Component", () => {
    const mockProduct = {
        carritoItemId: "10",
        imagenUrl: "http://example.com/pastel-chocolate.png",
        nombre: "Pastel de Chocolate",
        descripcion: "Delicioso pastel con cobertura de cacao y relleno cremoso",
        precio: 15990,
        cantidad: 1
    };

    it("muestra correctamente la información del producto", () => {
        render(<CartItem product={mockProduct} removeProduct={() => {}} />);

        expect(screen.getByText("Pastel de Chocolate")).toBeInTheDocument();
        expect(screen.getByText("15990")).toBeInTheDocument();
        expect(screen.getByText(/Delicioso pastel/i)).toBeInTheDocument();
        expect(screen.getByAltText("Pastel de Chocolate"))
            .toHaveAttribute("src", "http://example.com/pastel-chocolate.png");
    });

    it("llama a removeProduct al hacer clic en el botón ✖", () => {
        const mockRemove = jest.fn();

        render(<CartItem product={mockProduct} removeProduct={mockRemove} />);

        fireEvent.click(screen.getByText("✖"));

        expect(mockRemove).toHaveBeenCalledWith("10");
        expect(mockRemove).toHaveBeenCalledTimes(1);
    });
});
//2 tests realizados. uno para verificar que la informaci´on del producto se muestra correctamente y otro para asegurar que la función removeProduct se llama con el código correcto al hacer clic en el botón de eliminar
