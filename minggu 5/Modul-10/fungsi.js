var data_barang = ["Buku Tulis","Pensil","Spidol"];    

function tampildata(){
    var listBarang = document.getElementById("list_barang");
    listBarang.innerHTML = "";    
    for(let i=0; i<data_barang.length; i++){
        var button_edit = "<a href='#' onclick='edit_barang("+i+")'>Edit</a>";
        var button_hapus = "<a href='#' onclick='hapus_barang("+i+")'>Hapus</a>";

        listBarang.innerHTML += "<li>" + data_barang[i] + " ["+button_edit + " | "+ button_hapus +"]</li>";        
    }
}

function tambah_barang(){
    var input = document.querySelector("input[name=barang]");
    data_barang.push(input.value);
    tampildata();
}

function edit_barang(id){
    var newBarang = prompt("Nama baru", data_barang[id]);
    data_barang[id] = newBarang;
    tampildata();
}

function hapus_barang(id){
    data_barang.splice(id, 1);
    tampildata();
}

tampildata();