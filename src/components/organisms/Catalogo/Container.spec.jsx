import { render, screen, fireEvent } from "@testing-library/react";
import Container from "./Container";
import React from "react";

// Mock ProductoService
jest.mock("../../../services/ProductoService", () => ({
  getAllProductos: jest.fn()
}));

// Mock CarritoService (para evitar llamadas reales)
jest.mock("../../../services/CarritoService", () => ({
  agregarItemAlCarrito: jest.fn(() => Promise.resolve())
}));

import ProductoService from "../../../services/ProductoService";
import CarritoService from "../../../services/CarritoService";

describe("Container Component", () => {
  beforeEach(() => {
    // Mock productos del backend
    ProductoService.getAllProductos.mockResolvedValue({
      data: [
        { id: 1, nombre: "Torta Cuadrada de Chocolate", precio: 45000, imagenUrl: "" },
        { id: 2, nombre: "Torta Cuadrada de Frutas", precio: 50000, imagenUrl: "" }
      ]
    });

    // Simula usuario logueado
    Storage.prototype.getItem = jest.fn(() => JSON.stringify({ id: 99 }));
  });

  it("renderiza categorías correctamente", async () => {
    render(<Container />);

    expect(await screen.findByText("Tortas Cuadradas")).toBeInTheDocument();
  });

  it("renderiza productos del backend", async () => {
    render(<Container />);

    expect(await screen.findByText("Torta Cuadrada de Chocolate")).toBeInTheDocument();
    expect(screen.getByText("Torta Cuadrada de Frutas")).toBeInTheDocument();
  });

  it("llama al backend al agregar un producto", async () => {
    render(<Container />);

    const botones = await screen.findAllByText("🛒 Agregar");

    fireEvent.click(botones[0]);

    expect(CarritoService.agregarItemAlCarrito).toHaveBeenCalledWith({
      usuario: { id: 99 },
      producto: { id: 1 },
      cantidad: 1
    });
  });
});
//3 tests realizados. uno pa verificar que las categorías principales se renderizan correctamente, otro para asegurar que el carrito se carga desde localStorage y un tercero para comprobar que al agregar un producto