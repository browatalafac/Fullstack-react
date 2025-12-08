import { render, screen, fireEvent } from "@testing-library/react";
import Formulario from "./Formulario";
import React from "react";
import UsuarioService from "../../../services/UsuarioService";

// Mock del servicio
jest.mock("../../../services/UsuarioService");

describe('Formulario Component', () => {
    const mockUser = {
        nombre: "tomas ponce",
        apellidos: "apellido test",
        direccion: "direccion test",
        email: "tomas@correo.com",
        clave1: "Clave1234",
        clave2: "Clave1234"
    };

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('renderiza correctamente los campos principales del formulario', () => {
        render(<Formulario />);
        expect(screen.getByText("Crear una cuenta")).toBeInTheDocument();
        expect(screen.getByLabelText("Nombre")).toBeInTheDocument();
        expect(screen.getByLabelText("Apellidos")).toBeInTheDocument();
        expect(screen.getByLabelText("Dirección")).toBeInTheDocument();
        expect(screen.getByLabelText("E-mail")).toBeInTheDocument();
        expect(screen.getByLabelText("Contraseña")).toBeInTheDocument();
        expect(screen.getByLabelText("Repetir contraseña")).toBeInTheDocument();
    });

    it("muestra mensaje de error si el email no contiene arroba", async () => {
        render(<Formulario />);

        fireEvent.change(screen.getByLabelText("Nombre"), {
            target: { value: "Tomas" }
        });
        fireEvent.change(screen.getByLabelText("Apellidos"), {
            target: { value: "Ponce" }
        });
        fireEvent.change(screen.getByLabelText("Dirección"), {
            target: { value: "Calle 123" }
        });
    
        fireEvent.change(screen.getByLabelText("E-mail"), {
            target: { value: "hola" }
        });
        fireEvent.change(screen.getByLabelText("Contraseña"), {
            target: { value: "Clave1234" }
        });
        fireEvent.change(screen.getByLabelText("Repetir contraseña"), {
            target: { value: "Clave1234" }
        });

        fireEvent.click(screen.getByText("Crear cuenta"));

        // usa findByText (await) en vez de waitFor+getByText
        const errorMessage = await screen.findByText("Añade un signo arroba (@) en el email.");
        expect(errorMessage).toBeInTheDocument();
        expect(errorMessage).toHaveStyle({ color: "rgb(255, 0, 0)" });
    });

    it('envía correctamente el formulario con los datos válidos', async () => {
        const mockSave = jest.fn().mockResolvedValue({ data: { success: true } });
        UsuarioService.saveUsuario = mockSave;
        
        render(<Formulario />);

        fireEvent.change(screen.getByLabelText("Nombre"), { 
            target: { value: mockUser.nombre } 
        });
        fireEvent.change(screen.getByLabelText("Apellidos"), { 
            target: { value: mockUser.apellidos } 
        });
        fireEvent.change(screen.getByLabelText("Dirección"), { 
            target: { value: mockUser.direccion } 
        });
        fireEvent.change(screen.getByLabelText("E-mail"), { 
            target: { value: mockUser.email } 
        });
        fireEvent.change(screen.getByLabelText("Contraseña"), { 
            target: { value: mockUser.clave1 } 
        });
        fireEvent.change(screen.getByLabelText("Repetir contraseña"), { 
            target: { value: mockUser.clave2 } 
        });

        fireEvent.click(screen.getByText("Crear cuenta"));

        await screen.findByText("✅ Usuario registrado correctamente"); // espera al mensaje
        expect(mockSave).toHaveBeenCalledWith({
            nombre: mockUser.nombre,
            apellido: mockUser.apellidos,
            correo: mockUser.email,
            contrasena: mockUser.clave1,
            direccion: mockUser.direccion
        });
    });
});
