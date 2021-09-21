class ProductList {
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];
        this.goodsObject = [];

        this.fetchGoods();
        this.render();
        console.log(this.getCount());
    }

    fetchGoods() {
        this.goods = [
            { id: 1, title: 'Notebook', price: 20000 },
            { id: 2, title: 'Mouse', price: 1500 },
            { id: 3, title: 'Keyboard', price: 5000 },
            { id: 4, title: 'Gamepad', price: 4500 },
        ];
    }

    render() {
        const block = document.querySelector(this.container);

        for (const product of this.goods) {
            const productObject = new ProductItem(product);
            this.goodsObject.push(productObject);

            block.insertAdjacentHTML('beforeend', productObject.getHTMLString());
        }
    }

    getCount() {
        return this.goodsObject.reduce((accum, { price }) => accum + price, 0);
    }
}

class ProductItem {
    constructor(item, img = '') {
        this.id = item.id;
        this.title = item.title;
        this.price = item.price;
        this.img = item.img;
    }

    getHTMLString() {
        return `<div class="product-item data-id="${this.id}">
                    <img src="${this.img}" alt="Some img">
                    <div class="desc">
                        <h3>${this.title}</h3>
                        <p>${this.price}</p>
                        <button class="by-btn">Добавить</button>
                    </div>
                </div>`;
    }
}
/*
class Cart {
    constructor() {
        this.goodsCart = [];

        this.render();
    }

    render() {

    }

    clearCart() {

    }

    addToCart() {

    }

    deleteItem() {

    }
}

class CartItem {
    constructor(item, img = '') {
        this.id = item.id;
        this.title = item.title;
        this.price = item.price;
        this.img = item.img;

    }

    getCartString() {
        return `<div class="product-item data-id="${this.id}">
                    <img src="${this.img}" alt="Some img">
                    <div class="desc">
                        <h3>${this.title}</h3>
                        <p>${this.price}</p>
                        <button class="by-btn">Удалить</button>
                    </div>
                </div>`;
    }
*/
const catalog = new ProductList();