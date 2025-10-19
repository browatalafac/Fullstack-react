import { render, screen, fireEvent } from "@testing-library/react"
import Formulario from "./Formulario"
import React from "react"

describe('Formulario Component', () => {
    const mockUser = {
        nombre: "tomas ponce",
        email: "tomas@correo.com",
        clave1: "asdasd123",
        clave2: "asdasd123"
    }

    it('renderiza correctamente los campos principales del formulario', () => {
        render(<Formulario />)

        expect(screen.getByText("Crear una cuenta")).toBeInTheDocument()
        expect(screen.getByLabelText("Nombre")).toBeInTheDocument()
        expect(screen.getByLabelText("Apellidos")).toBeInTheDocument()
        expect(screen.getByLabelText("Dirección")).toBeInTheDocument()
        expect(screen.getByLabelText("E-mail")).toBeInTheDocument()
        expect(screen.getByLabelText("Contraseña")).toBeInTheDocument()
        expect(screen.getByLabelText("Repetir contraseña")).toBeInTheDocument()
    })

    it('muestra mensaje de error si el email no contiene arroba', () => {
        render(<Formulario />)

        const inputNombre = screen.getByLabelText("Nombre")
        const inputEmail = screen.getByLabelText("E-mail")
        const botonEnviar = screen.getByText("Enviar")

        fireEvent.change(inputNombre, { target: { value: "Pedro" } })
        fireEvent.change(inputEmail, { target: { value: "pedrocorreo.com" } })
        fireEvent.click(botonEnviar)

        expect(screen.getByText("Añade un signo arroba (@) en el email.")).toBeInTheDocument()
    })

    it('envía correctamente el formulario con los datos válidos del mockUser', () => {
        window.alert = jest.fn()

        render(<Formulario />)

        fireEvent.change(screen.getByLabelText("Nombre"), { target: { value: mockUser.nombre } })
        fireEvent.change(screen.getByLabelText("E-mail"), { target: { value: mockUser.email } })
        fireEvent.change(screen.getByLabelText("Contraseña"), { target: { value: mockUser.clave1 } })
        fireEvent.change(screen.getByLabelText("Repetir contraseña"), { target: { value: mockUser.clave2 } })

        fireEvent.click(screen.getByText("Enviar"))

        expect(screen.queryByText(/error/i)).toBeNull()

        expect(window.alert).toHaveBeenCalledWith("Formulario enviado correctamente ✅")
    })
})
