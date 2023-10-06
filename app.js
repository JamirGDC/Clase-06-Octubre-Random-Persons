const listaPersonas = [
{ nombre: "Maria" },
{ nombre: "Paul" },
{ nombre: "Jamir" },
{ nombre: "Agustin" }
];

function imprimirPersona() {
    const contenedor = document.getElementById("personas");
    const personasOrder = listaPersonas.sort((a, b) => a.nombre.localeCompare(b.nombre));

    personasOrder.forEach(persona => {
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.name = persona.nombre;
        contenedor.appendChild(checkbox);

        const label = document.createElement("label");
        label.innerHTML = persona.nombre;
        contenedor.appendChild(label);

        contenedor.appendChild(document.createElement("br"));

    });
}
imprimirPersona();




