//Get

function layDuLieuSanPhamApi() {
    var promise = axios({
        url: 'http://svcy.myclass.vn/api/Product/GetAll',
        method: 'GET',
    });

    promise.then(function (result) {
        console.log(result.data);
        renderDSSanPham(result.data);
    });

    promise.catch(function (err) {
        console.log(err);
    })
}



//Create product

document.querySelector('#btnCreate').onclick = function () {
    var sp = new SanPham();

    sp.id = document.querySelector('#productId').value;
    sp.img = document.querySelector('#productImage').value;
    sp.name = document.querySelector('#productName').value;
    sp.price = document.querySelector('#productPrice').value;
    sp.description = document.querySelector('#productDescription').value;
    sp.type = document.querySelector('#productType').value;

    console.log(sp);

    var promise = axios({
        url: 'http://svcy.myclass.vn/api/Product/CreateProduct',
        method: 'POST',
        data: sp
    });

    promise.then(function (result) {
        console.log(result.data);
        layDuLieuSanPhamApi();
    });

    promise.catch(function (err) {
        console.log(err);
    });
}

window.onload = function () {
    layDuLieuSanPhamApi();
}

//delete product

function xoaSanPham(idSPClick) {
    alert(idSPClick);
    var promise = axios({
        url: 'http://svcy.myclass.vn/api/Product/DeleteProduct/' + idSPClick,
        method: 'DELETE'
    });

    //Thành công:

    promise.then(function (result) {
        console.log("xoa san pham thanh cong!");
        layDuLieuSanPhamApi();
    });

    //Thất bại

    promise.catch(function (err) {
        console.log(err);
    });
}

//edit product

function editSanPham(id) {
    var promise = axios({
        url: 'http://svcy.myclass.vn/api/Product/GetById/' + id,
        method: 'GET',
    });

    //Thành công thì đem info sản phẩm load lên các thẻ

    promise.then(function (result) {
        var sp = result.data;

        document.querySelector('#productId').value = sp.id;
        document.querySelector('#productImage').value = sp.img;
        document.querySelector('#productName').value = sp.name;
        document.querySelector('#productPrice').value = sp.price;
        document.querySelector('#productDescription').value = sp.description;
        document.querySelector('#productType').value = sp.type;
    });

    //Thất bại

    promise.catch(function(error){
        console.log(error);
    });

}

//Put: Cập nhật dữ liệu

document.querySelector('#btnUpdate').onclick = function(){
    var spUpdate = new SanPham();

    spUpdate.id = document.querySelector('#productId').value;
    spUpdate.img = document.querySelector('#productImage').value;
    spUpdate.name = document.querySelector('#productName').value;
    spUpdate.price = document.querySelector('#productPrice').value;
    spUpdate.description = document.querySelector('#productDescription').value;
    spUpdate.type = document.querySelector('#productType').value;

    var promise = axios({
        url:'http://svcy.myclass.vn/api/Product/UpdateProduct/'+spUpdate.id,
        method: 'PUT',
        data: spUpdate
    });

    promise.then(function(){
        layDuLieuSanPhamApi();
    });

    promise.catch(function(error){
        console.log(error);
    });
}


//SearchByName

document.querySelector('#btnSearch').onclick = function(){
    var searchContent = document.querySelector('#inputSearch').value;

    var promise = axios({
        url: 'http://svcy.myclass.vn/api/Product/SearchByName?name='+searchContent,
        method: 'GET',
        data: searchContent,
    });

    promise.then(function(result){
        renderDSSanPham(result.data);
    });

    promise.catch(function(error){
        console.log(error);
    });

}