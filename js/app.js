$(function () {
    var products = [


        { name: 'Samsung TV', price: 3.900, id: 1, description: 'Lenovo Ideapad 320 erbjuder pålitlig och smidig uppspelning av multimedia i hög kvalitet. Datorn kommer med 15,6" Full HD IPS-skärm, Dolby stereohögtalare, kompetent 7:e generationens Intel Core i3 processor och snabba anslutningsmöjligheter.', picture: 'https://tubby.scene7.com/is/image/tubby/LE80XL03WGMX?$prod_all4one$', category: 'Elektronik' },

        { name: 'Kläder', price: 25, id: 3, description: 'Det här är en t-shirt från Vans som är svart och som har en tryckt logotyp på bröstet. T-shirten har en normal passform och är sydd i ett mjukt och bekvämt tyg. På ena ärmslutet sitter en liten svart tygpatch med en vit logotyp. Avslutet nedtill är rakt och runt halsringningen finns en smal ribbad kant.', picture: 'https://cdn.stayhard.com/storage/ma/93891c3d499a4df58f0bbe88ca77fa07/3e25bc41fab8428cb73eea8948ca0b48/1028-1244-0-jpg.Jpeg/87A518E5C30F416911BAE36BB27820E9B02A71A9/10663847_display.jpeg', category: 'Hemmet' },
        { name: 'Leksaker', price: 20, id: 4, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fugit, vel quibusdam fugiat at atque vero, minima ratione tempora architecto sit aperiam similique in quidem, iste nemo debitis quaerat nisi!', picture: 'https://picsum.photos/300/?image=20', category: 'Hemmet' },
        { name: 'Telefoner', price: 800, id: 5, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fugit, vel quibusdam fugiat at atque vero, minima ratione tempora architecto sit aperiam similique in quidem, iste nemo debitis quaerat nisi!', picture: 'https://tubby.scene7.com/is/image/tubby/GIGAC430DUO?$prod_all4one$', category: 'Kontor' },
        { name: 'Sport', price: 2000, id: 6, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fugit, vel quibusdam fugiat at atque vero, minima ratione tempora architecto sit aperiam similique in quidem, iste nemo debitis quaerat nisi!', picture: 'https://dam.media.xxlsports.com/9391183790110_1131917_Black_1_jpg.jpg', category: 'Kontor' }
    ];

    var cart = [];

    var appendList = function (array, location) {
        var template = array.map(function (item, id) {
            return `<li class="product col-3">
                <img src="${item.picture}" alt="">
                <div class="product-content">
                <h4>${item.name} -
                    <span class="category">${item.category}</span> <small>${item.price}kr</small>
                 </h4>
                  <p>${item.description}</p>
                </div>
                <button type="button" id="${item.id}">Köp Nu</button>
            </li>`;
        });
        $(location).html(template);
    };

    var addToCart = function (array, id, location) {
        var a = array.find(function (i) {
            return i.id === id;

        });

        cart.push(a);
        console.log(cart);
        var item = `
        <li class="item" id="${a.id}">
            <h4>${a.name}</h4>
            <button type="button">X</button>
        </li>
        `;
        $('span.amount').text(cart.length);
        $(location).append(item);
    };

    var removeFromCart = function (array, removedItem) {
        array.splice(removedItem, 1);

    };

    var populateCart = function (array, location) {
        var item = `
        <li class="item" id="${array.id}">
            <h4>${array.name}</h4>
            <button type="button">X</button>
        </li>
        `;
        $('span.amount').text(array.length);
    };


    appendList(products, $('.product-list'));

    $('.product').on('click', 'button', function (event) {
        var id = $(this).attr('id');
        addToCart(products, +id, $('.cart-list'));
    });

    $('.cart-list').on('click', 'button', function (e) {
        var item = $(e.currentTarget).closest('li').remove();
        removeFromCart(cart, item);
        populateCart(cart, $('.cart-list'));
    });


});
