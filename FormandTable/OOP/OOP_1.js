// let ip14 = {
//     name: "Iphone 14 Pro Max",
//     colors: ["gold", "blue", "red", "pink"],
//     capacity: ["64G", "256G", "1T"],
//     price: "1000USD",
//     producer: ["China" , "USA"]
// }
// let laptop = {
//     name: "MSI MODER 14",
//     image: "https://philong.com.vn/media/product/250-29579-msi-modern-14-c13m-458vn-philong.png",
//     hashtags: "Khuyến mãi",
//     price: "17790000 VNĐ",
//     intercore: "i5-1335u",
//     RAM: "8GB",
//     SSD: "512GB"
// }

let c0223g2 = [
    {
        name: "Phúc",
        date: "01/04/1989",
        gender: "Nam",
        email: "phucdu@gamil.com",
        phone: "0905123456"
    },
    {
        name: "Khoa",
        date: "01/01/1998",
        gender: "Nam",
        email: "khoa@gamil.com",
        phone: "0905135790"
    },
    {
        name: "Duy",
        date: "06/09/1999",
        gender: "Nam",
        email: "duy@gamil.com",
        phone: "0935123987"
    }
]

for (let i = 0; i < c0223g2.length; i++){
    document.getElementById('tbStudent').innerHTML += 
    `
        <tr>
            <td>${c0223g2[i].name}</td>
            <td>${c0223g2[i].date}</td>
            <td>${c0223g2[i].gender}</td>
            <td>${c0223g2[i].email}</td>
            <td>${c0223g2[i].phone}</td>
        </tr>
    `
}