// let menus = [
//     {
//         id: 1,
//         name: "Espresso",
//         photo: "https://chefjob.vn/wp-content/uploads/2017/12/thuc-uong-epresso-la-gi.jpg",
//         price: 15000
//     },
//     {
//         id: 2,
//         name: "Espresso sữa",
//         photo: "https://dongangia.com/files/upload/images/doron/sua%20pha%20ca%20phe%20ngon%20(3).jpg",
//         price: 19000
//     },
//     {
//         id: 3,
//         name: "Bạc xỉu",
//         photo: "https://cdn.tgdd.vn/2021/03/content/Bac-xiu-la-gi-nguon-goc-va-cach-lam-bac-xiu-thom-ngon-don-gian-tai-nha-5-800x529.jpg",
//         price: 29000
//     },
//     {
//         id: 4,
//         name: "Capuchino",
//         photo: "https://cdn-ak.f.st-hatena.com/images/fotolife/b/baristangocanh/20181013/20181013165529.jpg",
//         price: 49000
//     },
//     {   id: 5,
//         name: "Cacao",
//         photo: "https://cacaomi.vn/wp-content/uploads/2020/10/cach-pha-cacao-da-uong-la-ghien.jpg",
//         price: 29000
//     },
//     {
//         id: 6,
//         name: "Yagurt đá",
//         photo: "https://diemdungchandongthap.com/wp-content/uploads/2022/05/yogurt-da.jpg",
//         price: 29000
//     },
//     {
//         id: 7,
//         name: "Trà sữa",
//         photo: "https://cdn.dayphache.edu.vn/wp-content/uploads/2020/02/mon-tra-sua-tran-chau.jpg",
//         price: 29000
//     },
//     {
//         id: 8,
//         name: "Trà đào",
//         photo: "https://bizweb.dktcdn.net/thumb/1024x1024/100/409/631/products/cnt-8842-8baa03f60c2f4eeb9392f7986dd59ea1.jpg?v=1606482724687",
//         price: 35000
//     }
// ]

class Menus {
    constructor(id, name, photo, price, hashtag){
        this.id = id;
        this.name = name;
        this.photo = photo;
        this.price = price
        this.hashtag = hashtag;
    }
}

let menus = [
    new Menus(1, "Espresso", "https://chefjob.vn/wp-content/uploads/2017/12/thuc-uong-epresso-la-gi.jpg", 15000, "Bán chạy"),
    new Menus(2, "Espresso sữa", "https://dongangia.com/files/upload/images/doron/sua%20pha%20ca%20phe%20ngon%20(3).jpg", 19000, ""),
    new Menus(3, "Bạc xỉu", "https://cdn.tgdd.vn/2021/03/content/Bac-xiu-la-gi-nguon-goc-va-cach-lam-bac-xiu-thom-ngon-don-gian-tai-nha-5-800x529.jpg", 25000, "Bán chạy"),
    new Menus(4, "Capuchino", "https://cdn-ak.f.st-hatena.com/images/fotolife/b/baristangocanh/20181013/20181013165529.jpg", 39000, "Bán chạy"),
    new Menus(5, "Cacao", "https://cacaomi.vn/wp-content/uploads/2020/10/cach-pha-cacao-da-uong-la-ghien.jpg", 25000, "Bán chạy"),
    new Menus(6, "Yagurt đá", "https://diemdungchandongthap.com/wp-content/uploads/2022/05/yogurt-da.jpg", 25000, "Bán chạy"),
    new Menus(7, "Trà sữa", "https://cdn.dayphache.edu.vn/wp-content/uploads/2020/02/mon-tra-sua-tran-chau.jpg", 29000, ""),
    new Menus(8, "Trà đào", "https://bizweb.dktcdn.net/thumb/1024x1024/100/409/631/products/cnt-8842-8baa03f60c2f4eeb9392f7986dd59ea1.jpg?v=1606482724687", 29000, "Bán chạy")
]

drawMenus()

function drawMenus(){
    document.getElementById("coffee").innerHTML = "";
    for(let i = 0; i < menus.length; i++){
        document.getElementById("coffee").innerHTML += 
        `
        <div class="menu">
            <img id="image" src="${menus[i].photo}">
            <button class="btnEdit" onclick="btnEditClick(${menus[i].id})">EDIT</button>
            <button class="btnDel" onclick="btnDelClick(${menus[i].id})">DELETE</button>
            <p>
                <h2 id="nameDrinks">${menus[i].name}</h2>
            </p>
            <p id="priceDrinks">${formatCurrency(menus[i].price)}</p>
            <p id="hashtag">${menus[i].hashtag}</p>
        </div>
        `
    }
}

// Đổi kiểu tiền tệ
function formatCurrency(price){
    return price.toLocaleString('vi-VN', {style : 'currency', currency : 'VND'});
}

// Nút add
function btnAddClick(){
    document.getElementById("table_1").style.display = "block";
    document.getElementById("table_2").style.display = "none";
}

// Nút OK để add vào
function btnAddMenu(){
    let errors = [];
    let name = document.getElementById("inp_name_add").value;
    let photo = document.getElementById("inp_photo_add").value;
    let price = +document.getElementById("inp_price_add").value;
    let hashtag = document.getElementById("inp_hashtag_add").value;

    if(name == ""){
        errors.push("Tên đồ uống không hợp lệ");
    }
    if(photo == ""){
        errors.push("Hình ảnh không hợp lệ");
    }
    if(price == "" || price < 0){
        errors.push("Giá đồ uống không hợp lệ");
    }
    if(errors != ""){
        let str = "";
        for(let j = 0; j < errors.length; j++){
            str += errors[j] + "\n";
        }
        alert(str);
    }
    else{
        let id;
        if(getMaxId() == -1){
            id = 1;
        }
        else{
            id = getMaxId();
        }
        let m = new Menus(id, name, photo, price, hashtag);
        menus.push(m);
        document.getElementById("table_1").style.display = "none";
        drawMenus();
    }
}

function getMaxId(){
    if(menus.length > 0){
        let maxMenu = menus[0];
        for(let j = 1; j < menus.length; j++){
            if(menus[j].id > maxMenu.id){
                maxMenu.id = menus[j].id;
            }
        }
    return maxMenu.id + 1;
    }
    else{
        return -1;
    }
    
}

// Nút Edit
function btnEditClick(id){
    document.getElementById("table_2").style.display = "block";
    document.getElementById("table_1").style.display = "none";
    document.getElementById("idEdit").value = id;

    let menu = findMenuById(id)
    if (menu != null){
        document.getElementById("inp_photo_edit").value = menu.photo;
        document.getElementById("inp_name_edit").value = menu.name;
        document.getElementById("inp_price_edit").value = menu.price;
        document.getElementById("inp_hashtag_edit").value = menu.hashtag;
    }
    else {
        alert("Không tìm thấy sản phẩm");       
    }
}

function findMenuById(id){
    for(let i = 0; i < menus.length; i++){
        if (menus[i].id == id){
            return menus[i];
        }
    }
    return null;
}

// Nút OK để Edit lại
function btnEditMenu(){
    let id = +document.getElementById("idEdit").value;
    let name = document.getElementById("inp_name_edit").value;
    let photo = document.getElementById("inp_photo_edit").value;
    let price = +document.getElementById("inp_price_edit").value;
    let hashtag = document.getElementById("inp_hashtag_edit").value;

    let menuNew = new Menus(id, name, photo, price, hashtag);
    updateMenus(id, menuNew);
    document.getElementById("table_2").style.display = "none";
    drawMenus();
}

function updateMenus(id, menuNew){
    for(let j = 0; j < menus.length; j++){
        if(menus[j].id == id){
            menus[j].name = menuNew.name;
            menus[j].photo = menuNew.photo;
            menus[j].price = menuNew.price;
            menus[j].hashtag = menuNew.hashtag;
        }
    }
}

// Nút delete
function btnDelClick(id){
    let check = confirm("Bạn chắc chắn muốn xóa không?");
    if(check == true){
        for(let j = 0; j < menus.length; j++){
            if(menus[j].id == id){
                menus.splice(j, 1);
                break;
            }
        }
        drawMenus()
    }
}

// Nút cancel
function btnCloseTable(){
    document.getElementById("table_2").style.display = "none";
    document.getElementById("table_1").style.display = "none";
}