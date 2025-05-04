<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Total Harga Barang</title>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>
<body>

    <h2>Hitung Total Harga</h2>

    <label for="kode">Pilih Barang:</label>
    <select id="kode">
        <option value="B001">Barang A - Rp1.200.000</option>
        <option value="B002">Barang B - Rp4.250.000</option>
        <option value="B003">Barang C - Rp675.000</option>
    </select>
    <br><br>

    <label for="jumlah">Jumlah:</label>
    <input type="number" id="jumlah">
    <br><br>

    <button onclick="hitungTotal()">Hitung Total</button>

    <h3>Total Harga: <span id="total">Rp0</span></h3>

    <script>
        function hitungTotal() {
            // Daftar harga barang
            var hargaBarang = {
                "B001": 1200000,
                "B002": 4250000,
                "B003": 675000
            };

            // Ambil kode barang dan jumlah
            var kode = $("#kode").val();
            var jumlah = parseInt($("#jumlah").val());

            // Hitung harga awal
            var hargaNormal = hargaBarang[kode] * jumlah;
            var total = hargaNormal;
            var diskon = 0;
            var ppn = 0;

            // Terapkan diskon atau PPN
            if (total > 3000000) {
                diskon = total * 0.03; // Diskon 3%
                total -= diskon;
            } else if (total > 2000000) {
                diskon = total * 0.025; // Diskon 2.5%
                total -= diskon;
            } else {
                ppn = total * 0.11; // PPN 11%
                total += ppn;
            }

            // Format hasil ke rupiah
            var formatRupiah = (angka) => {
                return "Rp" + angka.toLocaleString("id-ID");
            };

            // Tampilkan hasil
            $("#total").text(formatRupiah(total));
            alert("Harga Normal: " + formatRupiah(hargaNormal) + 
                  "\nDiskon: " + formatRupiah(diskon) + 
                  "\nPPN: " + formatRupiah(ppn) + 
                  "\nTotal Bayar: " + formatRupiah(total));
        }
    </script>

</body>
</html>
