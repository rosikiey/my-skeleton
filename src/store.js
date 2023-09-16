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
            group: "a"
        }
    ]
)

export const listarraycost = writable(
    [
        {
            iconlist: "lucide:monitor-dot",
            headlist: "HRIS",
            titlelist: "Software yang bertujuan memberikan informasi dana manajemen sumber daya manusia",
            group: "a"
        },
        {
            iconlist: "lucide:monitor-dot",
            headlist: "SOFTWARE AKUNTANSI",
            titlelist: "Software lengkap untuk mendukung kegiatan Akutansi yang berbasis modularitas",
            group: "a"
        },
        {
            iconlist: "lucide:monitor-dot",
            headlist: "MANAJEMEN ASSET",
            titlelist: "Software untuk menajemen asset mulai dar pnegadaan sampai dengan pemusnahaan",
            group: "a"
        }
    ]
)