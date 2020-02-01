let PRODUCTS_NAMES = ['Notebook', 'Display', 'Keyboard', 'Mouse', 'Phones', 'Router', 'USB-camera', 'Gamepad',]
        let PRICES = [1000, 200, 20, 10, 25, 30, 18, 24]
        let IMGS = ['http://placehold.it/200x150',
                    'http://placehold.it/200x150',
                    'http://placehold.it/200x150',
                    'http://placehold.it/200x150',
                    'http://placehold.it/200x150',
                    'http://placehold.it/200x150',
                    'http://placehold.it/200x150',
                    'http://placehold.it/200x150' ]
        let IDS = [0, 1, 2, 3, 4, 5, 6, 7]  

        let products = []

        function createProductsDTO (arr) {
            
            let length = IDS.length

            for (let i = 0; i < length; i++) {
                arr.push (createProduct (i))
            }
        }

        function createProduct (index) {
            return {
                product_name: PRODUCTS_NAMES [index],
                price: PRICES [index],
                images: IMGS [index],
                id_product: IDS [index]
            }
        }

    let catalog = {
        items: [],
        loadProducts () {
            createProductsDTO (this.items)
    }
 }   

 
 
 
 function createSomeDOM () {
    let numberOfSections = 8
    let wrp = document.createElement('div')
        wrp.innerHTML =''
        wrp.classList.add('wrp')
        document.body.appendChild (wrp)

    for (let ind = 1; ind <= numberOfSections; ind++) {
        let block = document.createElement('div')
        block.innerHTML =''
        block.classList.add('block')
        wrp.appendChild (block)
        let productImg = document.createElement ('div')
        productImg.innerHTML = 'Фото продукта'
        productImg.classList.add('img-block')
        block.appendChild (productImg)
        let productName = document.createElement ('p')
        productName.innerHTML = 'Продукт'
        productName.classList.add('product-name')
        block.appendChild (productName)
        let productPrice = document.createElement ('p')
        productPrice.innerHTML = 'Цена $'
        productPrice.classList.add('product-price')
        block.appendChild (productPrice)
        let productBuy = document.createElement ('button')
        productBuy.innerHTML = 'Купить'
        productBuy.classList.add('product-btn')
        block.appendChild (productBuy)
    }

     
}

createSomeDOM ()





