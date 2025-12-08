import { render, screen, fireEvent, waitFor } from "@testing-library/react";
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
        clave1: "Clave123",
        clave2: "Clave123"
    };

    beforeEach(() => {
        // Limpiar mocks antes de cada prueba
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

    it('muestra mensaje de error si el email no contiene arroba', async () => {
        render(<Formulario />);

        // Completar los campos requeridos
        fireEvent.change(screen.getByLabelText("Nombre"), { 
            target: { value: "tomas" } 
        });
        fireEvent.change(screen.getByLabelText("Apellidos"), { 
            target: { value: "apellido" } 
        });
        fireEvent.change(screen.getByLabelText("Dirección"), { 
            target: { value: "direccion" } 
        });
        fireEvent.change(screen.getByLabelText("E-mail"), { 
            target: { value: "tomas.correo.com" } // Email sin @
        });
        fireEvent.change(screen.getByLabelText("Contraseña"), { 
            target: { value: "Clave123" } 
        });
        fireEvent.change(screen.getByLabelText("Repetir contraseña"), { 
            target: { value: "Clave123" } 
        });

        // Enviar el formulario
        fireEvent.click(screen.getByText("Crear cuenta"));

        // Verificar que se muestra el mensaje de error
        const errorMessage = await screen.findByText("Añade un signo arroba (@) en el email.");
        expect(errorMessage).toBeInTheDocument();
        expect(errorMessage).toHaveStyle({ color: 'red' });
    });

    it('envía correctamente el formulario con los datos válidos', async () => {
        // Mock de la función saveUsuario
        const mockSave = jest.fn().mockResolvedValue({ data: { success: true } });
        UsuarioService.saveUsuario = mockSave;
        
        render(<Formulario />);

        // Completar todos los campos requeridos
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

        // Enviar el formulario
        fireEvent.click(screen.getByText("Crear cuenta"));

        // Esperar a que se resuelvan las promesas
        await waitFor(() => {
            // Verificar que se llamó al servicio con los datos correctos
            expect(mockSave).toHaveBeenCalledWith({
                nombre: mockUser.nombre,
                apellido: mockUser.apellidos,
                correo: mockUser.email,
                contrasena: mockUser.clave1,
                direccion: mockUser.direccion
            });
        });

        // Verificar que se muestra el mensaje de éxito
        const successMessage = await screen.findByText("✅ Usuario registrado correctamente");
        expect(successMessage).toBeInTheDocument();
        expect(successMessage).toHaveStyle({ color: 'green' });
    });
});