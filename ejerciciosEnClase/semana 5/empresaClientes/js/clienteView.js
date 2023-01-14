export class ClienteView {
    constructor(client, parent) {
        this.parent = parent;
        this.cliente = client;

        this.container = document.createElement('div');
        this.container.className = 'clientView_container';
        this.parent.appendChild(this.container);

        this.textsContainer = document.createElement('div');
        this.textsContainer.className = 'clientView_textsContainer';
        this.buttonsContainer = document.createElement('div');
        this.buttonsContainer.className = 'clientView_buttonsContainer';

        this.container.appendChild(this.textsContainer);
        this.container.appendChild(this.buttonsContainer);

        var p = document.createElement('p');
        p.innerHTML = this.cliente.nombre;
        this.textsContainer.appendChild(p);

        this.fondosLbl = document.createElement('p');
        this.fondosLbl.innerHTML = this.cliente.fondos;
        this.textsContainer.appendChild(this.fondosLbl);

        //TODO: Agregar el resto UI
        this.cobrarBtn = document.createElement('button');
        this.cobrarBtn.innerHTML = 'Cobrar';
        this.cobrarBtn.onclick = this.onCobrarBtn.bind(this);
        this.buttonsContainer.appendChild(this.cobrarBtn);
        //TODO: Agregar los otros botones
    }

    onCobrarBtn() {
        var cobroRealizado = this.cliente.pagar();
        this.fondosLbl.innerHTML = this.cliente.fondos;
        if (!cobroRealizado) {
            this.container.classList.add('clientView_container_error');
        } else {
            this.container.classList.remove('clientView_container_error');
        }
    }
}