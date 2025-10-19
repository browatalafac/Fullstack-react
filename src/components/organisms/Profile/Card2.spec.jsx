import { render, screen, fireEvent } from "@testing-library/react"
import Card2 from "./Card2"
import React from "react"

describe('Card2 Component', () => {

    it('renderiza correctamente todos los campos y el título', () => {
        render(<Card2 />)
        expect(screen.getByText("Editar información del perfil")).toBeInTheDocument()
        expect(screen.getByLabelText("Nombre")).toBeInTheDocument()
        expect(screen.getByPlaceholderText("Cambia tu nombre")).toBeInTheDocument()
        expect(screen.getByLabelText("Apellido")).toBeInTheDocument()
        expect(screen.getByPlaceholderText("Cambia tu apellido")).toBeInTheDocument()
        expect(screen.getByLabelText("Correo")).toBeInTheDocument()
        expect(screen.getByPlaceholderText("Cambia tu correo")).toBeInTheDocument()
        expect(screen.getByLabelText("Dirección")).toBeInTheDocument()
        expect(screen.getByPlaceholderText("Cambia tu dirección")).toBeInTheDocument()
        expect(screen.getByLabelText("Contraseña")).toBeInTheDocument()
        expect(screen.getByPlaceholderText("Cambia tu contraseña")).toBeInTheDocument()
        expect(screen.getByText("Guardar")).toBeInTheDocument()
    })

    it('permite escribir en los inputs', () => {
        render(<Card2 />)

        const inputNombre = screen.getByLabelText("Nombre")
        const inputApellido = screen.getByLabelText("Apellido")
        const inputCorreo = screen.getByLabelText("Correo")
        const inputDireccion = screen.getByLabelText("Dirección")
        const inputContraseña = screen.getByLabelText("Contraseña")
        fireEvent.change(inputNombre, { target: { value: "Tomás" } })
        fireEvent.change(inputApellido, { target: { value: "Pérez" } })
        fireEvent.change(inputCorreo, { target: { value: "tomas@mail.com" } })
        fireEvent.change(inputDireccion, { target: { value: "Calle 123" } })
        fireEvent.change(inputContraseña, { target: { value: "123456" } })

        expect(inputNombre.value).toBe("Tomás")
        expect(inputApellido.value).toBe("Pérez")
        expect(inputCorreo.value).toBe("tomas@mail.com")
        expect(inputDireccion.value).toBe("Calle 123")
        expect(inputContraseña.value).toBe("123456")
    })
})

//es solo 1 test que verifica que el componente renderiza correctamente todos los campos y permite escribir en ellos