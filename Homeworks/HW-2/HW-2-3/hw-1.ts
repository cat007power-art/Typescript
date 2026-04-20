interface Product {
    id: number;
    title: string;
    price: number;
    quantity: number;
    total: number;
    discountPercentage: number;
    discountedTotal: number;
    thumbnail: string;
}

interface Cart {
    id: number;
    products: Product[];
    total: number;
    discountedTotal: number;
    userId: number;
    totalProducts: number;
    totalQuantity: number;
}

interface CartsResponse {
    carts: Cart[];
}

const cartsDiv = document.getElementById("carts") as HTMLDivElement;

fetch("https://dummyjson.com/carts")
    .then((res) => res.json())
    .then((cartsObject: CartsResponse) => {
        const { carts } = cartsObject;

        for (const cart of carts) {
            const div: HTMLDivElement = document.createElement("div");
            div.classList.add("cart-container");

            const divWithInfo: HTMLDivElement = document.createElement("div");
            divWithInfo.innerText = `
        total: ${cart.total},
        discountedTotal: ${cart.discountedTotal},
        userId: ${cart.userId},
        totalProducts: ${cart.totalProducts},
        totalQuantity: ${cart.totalQuantity}
      `;

            const ol: HTMLOListElement = document.createElement("ol");
            for (const product of cart.products) {
                const li: HTMLLIElement = document.createElement("li");

                const info: HTMLParagraphElement = document.createElement("p");
                info.innerText = `
          id: ${product.id},
          title: ${product.title},
          price: ${product.price},
          quantity: ${product.quantity},
          total: ${product.total},
          discountPercentage: ${product.discountPercentage},
          discountedTotal: ${product.discountedTotal}
        `;

                const img: HTMLImageElement = document.createElement("img");
                img.src = product.thumbnail;
                img.alt = product.title;

                li.appendChild(info);
                li.appendChild(img);
                ol.appendChild(li);
            }

            div.appendChild(divWithInfo);
            div.appendChild(ol);
            cartsDiv.appendChild(div);
        }
    });