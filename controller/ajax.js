//Get

function layDuLieuSanPhamApi (){
    var promise = axios({
        url:'http://svcy.myclass.vn/api/Product/GetAll',
        method: 'GET',
    });

    promise.then(function(result){
        console.log(result.data);
        renderDSSanPham(result.data);
    });

    promise.catch(function(error){
        console.log(error);
    })
}



//Create product

document.querySelector('#btnCreate').onclick = function(){
    var sp = new SanPham();

    sp.id = document.querySelector('#productId').value;
    sp.img = document.querySelector('#productImage').value;
    sp.name = document.querySelector('#productName').value;
    sp.price = document.querySelector('#productPrice').value;
    sp.description = document.querySelector('#productDescription').value;
    sp.type = document.querySelector('#productType').value;

    console.log(sp);

    var promise = axios({
        url:'http://svcy.myclass.vn/api/Product/CreateProduct',
        method: 'POST',
        data: sp
    });

    promise.then(function(result){
        console.log(result.data);
        renderDSSanPham(result.data);
    });

    promise.catch(function(err){
        console.log(error);
    });
}

window.onload = function (){
    renderDSSanPham();
}