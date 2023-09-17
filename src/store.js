import { writable } from "svelte/store";

export const arraytitle = writable(
    [
        {
            titlehead: "SDM",
            title: "Sdm Berkualitas",
            titlefooter: "oke",
            iconset: "akar-icons:person",
            tipe: "card variant-ghost-surface lg:h-64",
            titleFooter: "Seluruh software di kerjakan oleh sdm yang terampil dan berpengalaman di bidang pengembangan perangkat lunak"
        },
        {
            titlehead: "FLEXSIBLE",
            title: "Custom Software",
            titlefooter: "oke",
            iconset: "subway:brush",
            tipe: "card variant-ringed-surface lg:h-64",
            titleFooter: "Menerima segala pembuatan software sesuai dengan kebutuhan perusahaan / usaha anda"
        }
        ,
        {
            titlehead: "Full Support",
            title: "Full Support",
            titlefooter: "oke",
            iconset: "bx:support",
            tipe: "card variant-ghost-surface lg:h-64",
            titleFooter: "Garansi perbaikan selamanya tanpa biaya apapun jika terjadi masalah / kendala saat software berjalan"
        }
        ,
        {
            titlehead: "Harga Bersaing",
            title: "Harga Bersaing",
            titlefooter: "oke",
            iconset: "nimbus:money",
            tipe: "card variant-ringed-surface lg:h-64",
            titleFooter: "Harga sesuai kesepakatan di awal sudah include sewa hosting 1 bulan dan domain 1 tahun"
        }
        ,
        {
            titlehead: "FIXED COSTS",
            title: "Keamanan Data",
            titlefooter: "oke",
            iconset: "uiw:safety",
            tipe: "card variant-ringed-surface lg:h-64",
            titleFooter: "Seluruh data disimpan dalam penyimpanan cloud yang sudah teruji dan tersertifikasi keamanannya"
        }
        ,
        {
            titlehead: "FIXED COSTS",
            title: "Dokumentasi",
            titlefooter: "oke",
            iconset: "ion:book-outline",
            tipe: "card variant-ringed-surface lg:h-64",
            titleFooter: "Software yang dihasilkan dilengkapi dengan dokumentasi dan panduan penggunaan software"
        }
    ]
)

export const arraycost = writable(
    [
        {
            icon: "mdi:company",
            group: "a",
            price: "START 5 JUTA"
        },
        {
            icon: "healthicons:market-stall",
            group: "b",
            price: "START 4 JUTA"
        },
        {
            icon: "material-symbols:business-center-rounded",
            group: "c",
            price: "START 1 JUTA"
        },
        {
            icon: "material-symbols:inbox-customize",
            group: "d",
            price: "START 1 JUTA"
        },
    ]
)

export const listarraycost = writable(
    [
        {
            iconlist: "lucide:monitor-dot",
            headlist: "HRIS",
            titlelist: "Software yang bertujuan memberikan informasi dan untuk manajemen sumber daya manusia",
            group: "a",
            highlight: "t"
        },
        {
            iconlist: "lucide:monitor-dot",
            headlist: "SOFTWARE AKUNTANSI",
            titlelist: "Software lengkap untuk mendukung kegiatan Akutansi yang berbasis modularitas",
            group: "a",
            highlight: "t"
        },
        {
            iconlist: "lucide:monitor-dot",
            headlist: "MANAJEMEN ASSET",
            titlelist: "Software menajemen asset mulai dari pengadaan sampai dengan pemusnahaan",
            group: "a",
            highlight: "t"
        },
        {
            iconlist: "eos-icons:software-outlined",
            headlist: "POINT OF SALE",
            titlelist: "Software yang bertujuan memberikan informasi dan untuk manajemen sumber daya manusia",
            group: "b",
            highlight: "t"
        },
        {
            iconlist: "eos-icons:software-outlined",
            headlist: "CRM",
            titlelist: "Software untuk mengelola data riwayat pelanggan, mulai dari prospek hingga transaksi pelanggan ",
            group: "b",
            highlight: "t"
        },
        {
            iconlist: "eos-icons:software-outlined",
            headlist: "MANAJEMEN STOK BARANG",
            titlelist: "Software untuk mengelola semua aspek persediaan barang, mulai dari penerimaan s/d pengiriman",
            group: "b",
            highlight: "t"
        },
        {
            iconlist: "fluent:app-generic-32-filled",
            headlist: "COMPANY PROFILE",
            titlelist: "Website untuk menampilkan informasi dari perusahaan, seperti deskripsi, produk dan kontak perusahaan",
            group: "c",
            highlight: "t"
        },
        {
            iconlist: "fluent:app-generic-32-filled",
            headlist: "LANDING PAGE",
            titlelist: "Website yang di desain khusus dengan mindset marketing untuk pemasaran / pengenalan produk",
            group: "c",
            highlight: "t"
        }
        ,
        {
            iconlist: "fluent:app-generic-32-filled",
            headlist: "PORTOFOLIO",
            titlelist: "Website yang di desain khusus untuk menunjukkan pengalaman, skill, dan karya seseorang",
            group: "c",
            highlight: "t"
        },
        {
            iconlist: "tdesign:app",
            headlist: "SOFTWARE MANUFAKTUR",
            titlelist: "Software untuk menunjang proses produksi barang agar berjalan dengan baik",
            group: "d",
            highlight: "t"
        },
        {
            iconlist: "tdesign:app",
            headlist: "IOT DEVICE",
            titlelist: "Pembuatan perangkat fisik yang terhubung ke jaringan internet untuk bekerja secara fungsional",
            group: "d",
            highlight: "t"
        },
        {
            iconlist: "carbon:app",
            headlist: "CUSTOM SOFTWARE",
            titlelist: "Software yang di buat khusus untuk solusi dari permasalahan binis anda",
            group: "d",
            highlight: "y"
        }
    ]
)