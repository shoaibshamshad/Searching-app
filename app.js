var carObj = {
    name: "mehran",
    model: 2020,
    price: 100000,
    colorName: "red",

}
var carsArr = [{
    name: "Civic",
    model: 2020,
    price: 150000,
    colorName: "red",
    imageUrl: {
        red: "https://di-uploads-pod11.dealerinspire.com/hondaofkirkland/uploads/2019/08/2019-Civic-Sedan-Rallye-Red.png",
        black: "https://di-uploads-pod5.dealerinspire.com/brownautogroup/uploads/2018/06/2018-Honda-Civic-COLOR-CrystalBlack.jpg",
        gray: "https://di-uploads-pod11.dealerinspire.com/valleyhonda/uploads/2019/08/2019-Civic-Si-Lunar-Silver.png"
    },

}, {
    name: "Alto",
    model: 2020,
    price: 2000000,
    colorName: "red",
    imageUrl: {
        red: "https://static.pakwheels.com/2014/12/2016-Suzuki-Alto-JDM-front-three-quarter.jpg",
        black: "https://suzukifortmotors.com/wp-content/uploads/2020/12/Alto-Pearl-Black-720x466.jpg",
        gray: "https://suzukifortmotors.com/wp-content/uploads/2020/12/Alto-Graphite-Grey-720x466.jpg"
    }
}, {
    name: "Swift",
    model: 2020,
    price: 2500000,
    colorName: "red",
    imageUrl: {
        red: "https://stimg.cardekho.com/images/car-images/large/Maruti/Maruti-Swift/6324/Solid-Fire-RedN_9d1411.jpg?impolicy=resize&imwidth=420",
        black: "https://imgcdn.zigwheels.pk/large/gallery/color/13/111/suzuki-swift-color-811738.jpg",
        gray: "https://imgcdn.zigwheels.pk/large/gallery/color/13/111/suzuki-swift-color-911430.jpg"
    }
}, {
    name: "Cultus",
    model: 2020,
    price: 3000000,
    colorName: "red",
    imageUrl: {
        red: "https://www.suzukiislamabad.pk/media/colors/cultus/car/red.png",
        black: "https://imgcdn.zigwheels.pk/large/gallery/color/13/124/suzuki-cultus-color-254313.jpg",
        gray: "https://imgcdn.zigwheels.pk/large/gallery/color/13/124/suzuki-cultus-color-704737.jpg"
    }
}, {
    name: "WagonR",
    model: 2020,
    price: 2000000,
    colorName: "red",
    imageUrl: {
        red: "https://blog.gaadikey.com/wp-content/uploads/2016/05/Maruti-Wagonr-Passion-Red-Color.jpg",
        black: "https://imgd.aeplcdn.com//642x361//n/cw/ec/145113/maruti-suzuki-wagon-r-right-side-view1.jpeg?isig=0&q=75",
        gray: "https://blog.gaadikey.com/wp-content/uploads/2016/05/Maruti-Wagonr-Glistening-Grey-Color.jpg"
    }
}, {
    name: "Jimmy",
    model: 2020,
    price: 1000000,
    colorName: "red",
    imageUrl: {
        red: "https://imgd-ct.aeplcdn.com/1056x660/n/0b8pp0b_1638611.jpg?q=80",
        black: "https://stimg.cardekho.com/images/cms/carnewsimages/editorimages/63bfe5a92db1e.jpg?impolicy=resize&imwidth=420",
        gray: "https://imgcdn.oto.com.sg/large/gallery/color/20/204/suzuki-jimny-color-908032.jpg"
    }
}, {
    name: "Bolan",
    model: 2020,
    price: 100000,
    colorName: "red",
    imageUrl: {
        red: "https://cars.qeemat.com/suzuki/images/suzuki-bolan-2012-picture-red-color.jpg",
        black: "https://cache3.pakwheels.com/ad_pictures/8574/suzuki-bolan-2012-85741155.webp",
        gray: "https://suzukigujrat.com/wp-content/uploads/2023/02/Suzuki-Gujrat-Motors-Suzuki-Bolan-Silky-SIlver.png"
    }
}, {
    name: "Ciaz",
    model: 2020,
    price: 100000,
    colorName: "red",
    imageUrl: {
        red: "https://images.jdmagicbox.com/quickquotes/images_main/maruti-suzuki-ciaz-1-4-alpha-pearl-sangria-red-82690560-3010q.jpg",
        black: "https://stimg.cardekho.com/images/car-images/large/Maruti/Maruti-Ciaz-S/6377/Pearl-Midnight-Black_252525.jpg?impolicy=resize&imwidth=420",
        gray: "https://www.carandbike.com/_next/image?url=https%3A%2F%2Fimages.carandbike.com%2Fcar-images%2Fcolors%2Fmaruti-suzuki%2Fciaz%2Fmaruti-suzuki-ciaz-metallic-premium-silver.png%3Fv%3D1567492574&w=640&q=75"
    }
}, {
    name: "Mehran",
    model: 2020,
    price: 100000,
    colorName: "red",
    imageUrl: {
        red: "https://i.ytimg.com/vi/c5gRVpe_Mqk/maxresdefault.jpg",
        black: "https://cache2.pakwheels.com/ad_pictures/9539/tn_suzuki-mehran-2012-95395268.webp",
        gray: "https://imgcdn.zigwheels.pk/large/gallery/color/13/123/suzuki_mehran_silky_silver.jpg"
    }
}]
var carsDiv = document.getElementById("carsDiv")

function changeColor(index, color) {
    var img = document.getElementById("img" + index)
    img.src = carsArr[index].imageUrl[color]
    // console.log(carsArr[index].imageUrl[color])
}
var select = document.getElementById("select")
// console.log(select,"select")
// var value = select.value;
// console.log(value,"value")
function carNameChange() {
    var select = document.getElementById("carName")
    console.log(select.value)
    displayProducts(select.value, "carName")

}


function displayProducts(value, type) {
    carsDiv.innerHTML = ""
    for (var i = 0; i < carsArr.length; i++) {
        var product = carsArr[i]
        // console.log(product)

        var carHtml = `<div class="col col-lg-3 col-md-4 col-sm-6">
<div class="card m-2 card-image" >
<img id="img${i}" src="${product.imageUrl.black}" class="card-img-top" alt="...">
<div class="card-body">
    <h5 class="card-title">${product.name}</h5>
    <p class="card-text">${product.model}</p>
    <p class="card-text">RS:10,00,000</p>
    <p class="card-text">seat capacity : 5</p>
    <div class="color-div">
    <div class="black" id"black" onClick="changeColor(${i},'black')">
    </div>
    <div class="red" id"red" onClick="changeColor(${i},'red')">
    </div>
    <div class="gray" id"gray" onClick="changeColor(${i},'gray')">
    </div>
</div>    </div>
</div>
</div>`
        if (value === "showAllProducts") {
            carsDiv.innerHTML += carHtml
        }
        else if (type === "search" && product.name.includes(value)) {
            carsDiv.innerHTML += carHtml
        }
        else if (product.name === value) {
            carsDiv.innerHTML += carHtml
        }
    }

}
displayProducts("showAllProducts")
function search() {
    let searchCarName = document.getElementById("searchCarName")
    displayProducts(searchCarName.value, "search")
    //    console.log(searchCarName)

    //    SearchValue = searchCarName.value
    //    console.log(SearchValue)
    //    if(SearchValue===){
    //     carsDiv.innerHTML += carHtml

}