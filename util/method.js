function renderDSSanPham (arrSanPham){
    var html = '';
    for (var i = 0; i < arrSanPham.length; i++){
        var sp = arrSanPham[i];
        html += `

            <tr>
            <td>${sp.id}</td>
            <td>${sp.img}</td>
            <td>${sp.name}</td>
            <td>${sp.price}</td>
            <td>${sp.description}</td>
            <td>${sp.type}</td>
            <button class="btn btn-danger" id="btnXoa"><i class="fa-solid fa-trash-can"></i></button>
            <button class="btn btn-primary" id="btnChinhSua"> <i class="fa-solid fa-pen-to-square"></i></button>
            </tr>
        `;
    }
    document.querySelector('#tblSanPham').innerHTML = html;
}