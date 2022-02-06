class Product {
    constructor() {
        this.arrayProducts = []
        this.id = 1

    }
    save() {
        let product = this.readdata()

        if (this.validateField(product)) {
            this.addProduct(product)

        }

        this.listTable()
        this.cancel()
    }

    listTable() {
        let tbody = document.getElementById("tbody")
        tbody.innerText = ""

        for (let i = 0; i < this.arrayProducts.length; i++) {
            let tr = tbody.insertRow()

            let tdId = tr.insertCell()
            let tdBrand = tr.insertCell()
            let tdSize = tr.insertCell()
            let tdValue = tr.insertCell()
            let tdActions = tr.insertCell()

            tdId.innerText = this.arrayProducts[i].id
            tdBrand.innerText = this.arrayProducts[i].brand
            tdSize.innerText = this.arrayProducts[i].size
            tdValue.innerText = this.arrayProducts[i].value

            tdId.classList.add("center") //add uma classe dinamica para o css
            tdActions.classList.add("center")

            let imgEdit = document.createElement("img")
            imgEdit.src = "editar.png"
            imgEdit.setAttribute("onClick", "product.alt")

            tdActions.appendChild(imgEdit)

            let imgDelete = document.createElement("img")
            imgDelete.src = "excluir.png"
            imgDelete.setAttribute("onclick", "product.delet(" + this.arrayProducts[i].id + ")")

            tdActions.appendChild(imgDelete)

        }
    }

    addProduct(product) {
        this.arrayProducts.push(product)
        this.id++
    }

    readdata() {
        let product = {}

        product.id = this.id
        product.brand = document.getElementById("brand").value
        product.size = document.getElementById("size").value
        product.value = document.getElementById("value").value

        return product
    }

    validateField(product) {
        let msg = ""

        if (product.brand == "") {
            msg += "- Informe o Nome da Marca "
        }

        if (product.size == "") {
            msg += "- Informe o Tamanho do Shape "
        }

        if (product.value == "") {
            msg += "- Informe o valor "
        }

        if (msg != "") {
            alert(msg)
            return false
        }

        return true
    }

    cancel() {
        document.getElementById("brand").value = ""
        document.getElementById("size").value = ""
        document.getElementById("value").value = ""

    }

    delet(id) {

        if (confirm("Deseja deletar o produto do ID " + id)) {
            let tbody = document.getElementById("tbody")

            for (let i = 0; this.arrayProducts.length; i++) {
                if (this.arrayProducts[i].id == id) {
                    this.arrayProducts.splice(i, 1)
                    tbody.deleteRow(i)
                }
            }
        }
    }
}

let product = new Product()