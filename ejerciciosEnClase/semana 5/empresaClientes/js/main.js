"use strict";

import { Cliente } from "./cliente.js";
import { ClienteView } from "./clienteView.js";
import { Empresa } from "./empresa.js";

window.addEventListener('load', init, false);

function init() {
    var empresaIn = document.getElementById('empresaIn');
    var registrarEmpresaBtn = document.getElementById('registrarEmpresaBtn');
    var empresasSlt = document.getElementById('empresasSlt');
    var mostrarEmpresaBtn = document.getElementById('mostrarEmpresaBtn');

    var nombreIn = document.getElementById('nombreIn');
    var apellidoIn = document.getElementById('apellidoIn');
    var emailIn = document.getElementById('emailIn');
    var fondosIn = document.getElementById('fondosIn');
    var mensualidadIn = document.getElementById('mensualidadIn');
    var registrarClientBtn = document.getElementById('registrarClientBtn');
    var clientesContainer = document.getElementById('clientesContainer');

    registrarEmpresaBtn.onclick = onRegistrarEmpresaBtn;
    mostrarEmpresaBtn.onclick = onMostrarEmpresaBtn;
    registrarClientBtn.onclick = onRegistrarClientBtn;
    empresasSlt.onchange = onMostrarEmpresaBtn;

    var empresas = [];
    var kolbi = new Empresa('Kolbi');
    var claro = new Empresa('Claro');
    empresas.push(kolbi);
    empresas.push(claro);
    llenarEmpresasSlt();

    kolbi.clientes.push(new Cliente('Esteban', 'Padilla', 'ep@mail.com', 100, 10));
    kolbi.clientes.push(new Cliente('Hellen', 'Leiva', 'hl@mail.com', 200, 10));
    onMostrarEmpresaBtn();

    claro.clientes.push(new Cliente('Esteban', 'Padilla', 'ep@mail.com', 100, 10));

    function onRegistrarEmpresaBtn() {
        var nombre = empresaIn.value;
        empresaIn.value = '';

        //TODO: Validar que la empresas no se repita por medio del nombre
        if (nombre !== '') {
            var empresa = new Empresa(nombre);
            empresas.push(empresa);
            llenarEmpresasSlt();
        }

        console.log(empresas);
    }

    function onMostrarEmpresaBtn() {
        clientesContainer.innerHTML = '';
        var empresa = encontrarEmpresaSeleccionada();
        for (let i = 0; i < empresa.clientes.length; i++) {
            const client = empresa.clientes[i];
            var clienteView = new ClienteView(client, clientesContainer);
        }
    }

    function llenarEmpresasSlt() {
        empresasSlt.innerHTML = '';
        empresas.forEach(function (empresa) {
            var option = document.createElement('option');
            option.innerHTML = empresa.nombre;
            option.value = empresa.nombre;
            empresasSlt.appendChild(option);
        });
    }

    function onRegistrarClientBtn() {
        var nombre = nombreIn.value;
        var apellido = apellidoIn.value;
        var email = emailIn.value;
        var fondos = fondosIn.value;
        var mensualidad = mensualidadIn.value;

        if (nombre !== '' && apellido !== '' && email !== '' && fondos !== '' && mensualidad !== '') {
            var cliente = new Cliente(nombre, apellido, email, fondos, mensualidad);
            var empresa = encontrarEmpresaSeleccionada();

            if (encontrarClienteEnEmpresa(cliente, empresa) === null) {
                empresa.clientes.push(cliente);
                onMostrarEmpresaBtn();
            }
        }

        //TODO: limpiar campos
        nombreIn.value = '';
    }

    function encontrarEmpresaSeleccionada() {
        var nombre = empresasSlt.value;
        for (let i = 0; i < empresas.length; i++) {
            const empresa = empresas[i];
            if (nombre === empresa.nombre) {
                return empresa
            }
        }
        return null;
    }

    function encontrarClienteEnEmpresa(cliente, empresa) {
        for (let i = 0; i < empresa.clientes.length; i++) {
            const clienteEnEmpresa = empresa.clientes[i];
            if (cliente.email === clienteEnEmpresa.email) {
                return clienteEnEmpresa;
            }
        }
        return null;
    }
}