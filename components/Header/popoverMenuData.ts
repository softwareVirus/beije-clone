export default function popoverMenuData(type: string) {
  if (type === "product") {
    return {
      data: [
        {
          title: "Ürünler",
          imageLinks: [
            "https://beije.co/_next/image?url=https%3A%2F%2Fapi.beije.co%2Fcatalog_service%2Fv1%2Fimage%2FproductType%2Fslug%2Fpads%3Fvariant%3Dheader&w=1920&q=75",
            "https://beije.co/_next/image?url=https%3A%2F%2Fapi.beije.co%2Fcatalog_service%2Fv1%2Fimage%2FproductType%2Fslug%2Fpantyliner%3Fvariant%3Dheader&w=1920&q=75",
            "https://beije.co/_next/image?url=https%3A%2F%2Fapi.beije.co%2Fcatalog_service%2Fv1%2Fimage%2FproductType%2Fslug%2Ftampons%3Fvariant%3Dheader&w=1920&q=75",
            "https://beije.co/_next/image?url=https%3A%2F%2Fapi.beije.co%2Fcatalog_service%2Fv1%2Fimage%2FproductType%2Fslug%2Fcup%3Fvariant%3Dheader&w=1920&q=75",
          ],
          subtitles: [
            "beije Ped",
            "beije Günlük Ped",
            "beije Tampon",
            "beije Kap",
          ],
          iconsDir: [
            "./header_icons/pad.svg",
            "./header_icons/dailyPad.svg",
            "./header_icons/tampon.svg",
            "./header_icons/kap.svg",
          ],
        },
        {
          title: "Paketler",
          imageLinks: [
            "https://beije.co/_next/image?url=%2Fimages%2Fnav%2Fpackets_all.png&w=1920&q=75",
            "https://beije.co/_next/image?url=https%3A%2F%2Fapi.beije.co%2Fcatalog_service%2Fv1%2Fimage%2FpacketType%2Fslug%2Fpads%3Fvariant%3Dheader&w=1920&q=75",
            "https://beije.co/_next/image?url=https%3A%2F%2Fapi.beije.co%2Fcatalog_service%2Fv1%2Fimage%2FpacketType%2Fslug%2Fpantyliner%3Fvariant%3Dheader&w=1920&q=75",
            "https://beije.co/_next/image?url=https%3A%2F%2Fapi.beije.co%2Fcatalog_service%2Fv1%2Fimage%2FpacketType%2Fslug%2Ftampons%3Fvariant%3Dheader&w=1920&q=75",
            "https://beije.co/_next/image?url=%2Fimages%2Fnav%2Ftrial-pack.png&w=1920&q=75"
          ],
          subtitles: [
            "Popüler Paketler",
            "Ped Paketleri",
            "Günlük Ped Paketleri",
            "Tampon Paketleri",
            "Deneme Paketleri",
          ],
          iconsDir: [
            "./header_icons/packet.svg",
            "./header_icons/pad.svg",
            "./header_icons/dailyPad.svg",
            "./header_icons/tampon.svg",
            "./header_icons/bag.svg",
          ],
        },
      ],
    };
  } else if (type === "whoWeAre") {
    return {
      data: [
        {
          title: "Biz Kimiz",
          imageLinks: [
            "https://beije.co/_next/image?url=%2Fimages%2Fnav%2Fwhy.png&w=1920&q=75",
            "https://beije.co/_next/image?url=%2Fimages%2Fnav%2Fhow.png&w=1920&q=75",
            "https://beije.co/_next/image?url=%2Fimages%2Fnav%2Fprice.png&w=1920&q=75",
            "https://beije.co/_next/image?url=%2Fimages%2Fnav%2Ffaq.png&w=1920&q=75",
            "https://beije.co/_next/image?url=%2Fimages%2Fnav%2Fall-materials.png&w=1920&q=75",
          ],
          subtitles: [
            "Neden beije?",
            "beije Nasıl Çalışır?",
            "Fiyat Politikası",
            "Sıkça Sorulan Sorular",
            "Tüm Malzemeler",
          ],
          iconsDir: [],
        },
      ],
    };
  } else if (type === "donationCulture") {
    return {
      data: [
        {
          title: "Bağış Kültürü",
          imageLinks: [
            "https://beije.co/_next/image?url=%2Fimages%2Fnav%2Four-philosophy.webp&w=1920&q=75",
            "https://beije.co/_next/image?url=%2Fimages%2Fnav%2Fdonation-pad.webp&w=1920&q=75",
          ],
          subtitles: ["Felsefemiz", "Askıda Ped"],
          iconsDir: [],
        },
      ],
    };
  }
  return {
    data: []
  };
}
