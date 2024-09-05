export const TESTS = [
  {
    id: 0,
    date: "21.02.2024",
    photo: require("../../assets/images/jpeg/man-wearing-black.jpg"),
    name: "BDI Testi",
    questions: [
      {
        question: "Ne kadar sıklıkla üzgün hissediyorsunuz?",
        items: [
          { text: "Hiç üzgün hissetmiyorum.", value: 0 },
          { text: "Üzgün hissediyorum.", value: 1 },
          { text: "Her zaman üzgünüm ve bundan çıkamıyorum.", value: 2 },
          {
            text: "O kadar üzgünüm ve mutsuzum ki dayanacak gücüm yok.",
            value: 3,
          },
        ],
      },
      {
        question: "Gelecek hakkında ne düşünüyorsunuz?",
        items: [
          { text: "Gelecek hakkında özellikle umutsuz değilim.", value: 0 },
          { text: "Gelecek hakkında umutsuz hissediyorum.", value: 1 },
          {
            text: "İleriye dönük bir şeyim olmadığını hissediyorum.",
            value: 2,
          },
          {
            text: "Gelecek hakkında umutsuzum ve hiçbir şeyin düzelemeyeceğine inanıyorum.",
            value: 3,
          },
        ],
      },
      {
        question: "Kendinizi başarısız hissediyor musunuz?",
        items: [
          { text: "Kendimi başarısız hissetmiyorum.", value: 0 },
          {
            text: "Kendimi ortalama bir kişiden daha fazla başarısız hissediyorum.",
            value: 1,
          },
          {
            text: "Hayatıma baktığımda sadece başarısızlıklar görüyorum.",
            value: 2,
          },
          { text: "Kendimi tamamen başarısız hissediyorum.", value: 3 },
        ],
      },
      {
        question: "Eskiden aldığınız keyif hala devam ediyor mu?",
        items: [
          { text: "Eskisi kadar keyif alıyorum.", value: 0 },
          { text: "Eskisi kadar keyif almıyorum.", value: 1 },
          { text: "Artık hiçbir şeyden gerçekten keyif almıyorum.", value: 2 },
          { text: "Her şeyden memnun değilim ya da sıkılıyorum.", value: 3 },
        ],
      },
      {
        question: "Suçluluk hissediyor musunuz?",
        items: [
          { text: "Kendimi özellikle suçlu hissetmiyorum.", value: 0 },
          { text: "Zamanımın çoğunda suçluluk hissediyorum.", value: 1 },
          { text: "Çoğu zaman oldukça suçlu hissediyorum.", value: 2 },
          { text: "Her zaman suçlu hissediyorum.", value: 3 },
        ],
      },
      {
        question: "Cezalandırılma hissediyor musunuz?",
        items: [
          { text: "Cezalandırılacağımı hissetmiyorum.", value: 0 },
          { text: "Cezalandırılacağımı hissediyorum.", value: 1 },
          { text: "Cezalandırılmayı bekliyorum.", value: 2 },
          { text: "Cezalandırıldığımı hissediyorum.", value: 3 },
        ],
      },
      {
        question: "Hayal kırıklığı yaşıyor musunuz?",
        items: [
          { text: "Kendimden hayal kırıklığına uğramıyorum.", value: 0 },
          { text: "Kendimden hayal kırıklığına uğradım.", value: 1 },
          { text: "Kendimden tiksiniyorum.", value: 2 },
          { text: "Kendimden nefret ediyorum.", value: 3 },
        ],
      },
      {
        question: "Kendinizi suçlu hissediyor musunuz?",
        items: [
          { text: "Kendimi başkalarından daha kötü hissetmiyorum.", value: 0 },
          {
            text: "Zayıflıklarım veya hatalarım için kendimi eleştiriyorum.",
            value: 1,
          },
          { text: "Sürekli hatalarım için kendimi suçluyorum.", value: 2 },
          { text: "Her şeyin kötü gitmesi için kendimi suçluyorum.", value: 3 },
        ],
      },
      {
        question: "İntihar düşünceleriniz var mı?",
        items: [
          { text: "İntihar etme düşüncem yok.", value: 0 },
          { text: "İntihar etmeyi düşünüyorum ama bunu yapmam.", value: 1 },
          { text: "İntihar etmek istiyorum.", value: 2 },
          { text: "Fırsatım olsa kendimi öldürürüm.", value: 3 },
        ],
      },
      {
        question: "Ağlama durumunuz nasıl?",
        items: [
          { text: "Her zamankinden daha fazla ağlamıyorum.", value: 0 },
          { text: "Şimdi eskisinden daha fazla ağlıyorum.", value: 1 },
          { text: "Şimdi sürekli ağlıyorum.", value: 2 },
          {
            text: "Eskiden ağlayabiliyordum, ama şimdi ağlamak istesem bile ağlayamıyorum.",
            value: 3,
          },
        ],
      },
      {
        question: "Sinirlilik durumunuz nasıl?",
        items: [
          { text: "Eskisinden daha fazla sinirlenmiyorum.", value: 0 },
          {
            text: "Şimdi eskisinden biraz daha fazla sinirleniyorum.",
            value: 1,
          },
          { text: "Zamanımın çoğunda oldukça sinirleniyorum.", value: 2 },
          { text: "Her zaman sinirliyim.", value: 3 },
        ],
      },
      {
        question: "Diğer insanlara olan ilginiz ne durumda?",
        items: [
          { text: "Diğer insanlara olan ilgimi kaybetmedim.", value: 0 },
          { text: "Diğer insanlara olan ilgim eskisinden daha az.", value: 1 },
          { text: "Diğer insanlara olan ilgimin çoğunu kaybettim.", value: 2 },
          { text: "Diğer insanlara olan ilgimi tamamen kaybettim.", value: 3 },
        ],
      },
      {
        question: "Karar verme zorluğu yaşıyor musunuz?",
        items: [
          { text: "Eskisi kadar iyi karar verebiliyorum.", value: 0 },
          {
            text: "Karar vermeyi eskisinden daha fazla erteliyorum.",
            value: 1,
          },
          {
            text: "Karar vermekte eskisinden daha fazla zorlanıyorum.",
            value: 2,
          },
          { text: "Artık hiç karar veremiyorum.", value: 3 },
        ],
      },
      {
        question: "Görünümünüz hakkında endişeleriniz var mı?",
        items: [
          { text: "Eskisi kadar kötü görünmediğimi hissediyorum.", value: 0 },
          {
            text: "Yaşlanıyor ya da çekici olmaktan endişe ediyorum.",
            value: 1,
          },
          {
            text: "Görünümümde kalıcı değişiklikler olduğunu ve çekici görünmediğimi hissediyorum.",
            value: 2,
          },
          { text: "Kendimi çirkin olduğuma inanıyorum.", value: 3 },
        ],
      },
      {
        question: "Çalışma yeteneğiniz ne durumda?",
        items: [
          { text: "Eskisi kadar iyi çalışabiliyorum.", value: 0 },
          {
            text: "Bir işe başlamak için ekstra bir çaba gerekiyor.",
            value: 1,
          },
          {
            text: "Bir şey yapmak için kendimi çok zorlamam gerekiyor.",
            value: 2,
          },
          { text: "Hiçbir iş yapamıyorum.", value: 3 },
        ],
      },
      {
        question: "Uyku durumunuz nasıl?",
        items: [
          { text: "Eskisi kadar iyi uyuyorum.", value: 0 },
          { text: "Eskisi kadar iyi uyuyamıyorum.", value: 1 },
          {
            text: "Her zamankinden 1-2 saat daha erken uyanıyorum ve tekrar uyuyamıyorum.",
            value: 2,
          },
          {
            text: "Eskisinden birkaç saat daha erken uyanıyorum ve tekrar uyuyamıyorum.",
            value: 3,
          },
        ],
      },
      {
        question: "Yorgunluk durumunuz nasıl?",
        items: [
          { text: "Eskisinden daha fazla yorulmuyorum.", value: 0 },
          { text: "Eskisinden daha kolay yoruluyorum.", value: 1 },
          { text: "Neredeyse her şeyden yoruluyorum.", value: 2 },
          { text: "Hiçbir şey yapamayacak kadar yorgunum.", value: 3 },
        ],
      },
      {
        question: "İştah durumunuz nasıl?",
        items: [
          { text: "İştahım eskisi kadar kötü değil.", value: 0 },
          { text: "Eskisi kadar iyi değilim.", value: 1 },
          { text: "İştahım şimdi çok daha kötü.", value: 2 },
          { text: "Artık hiç iştahım yok.", value: 3 },
        ],
      },
      {
        question: "Kilo kaybı yaşadınız mı?",
        items: [
          {
            text: "Son zamanlarda pek kilo vermedim, eğer verdiysem.",
            value: 0,
          },
          { text: "Beş kilodan fazla verdim.", value: 1 },
          { text: "On kilodan fazla verdim.", value: 2 },
          { text: "On beş kilodan fazla verdim.", value: 3 },
        ],
      },
      {
        question: "Sağlık konusunda endişeleriniz var mı?",
        items: [
          {
            text: "Sağlığım konusunda her zamankinden daha fazla endişeli değilim.",
            value: 0,
          },
          {
            text: "Aches, ağrılar, mide bulantısı veya kabızlık gibi fiziksel sorunlar hakkında endişeliyim.",
            value: 1,
          },
          {
            text: "Fiziksel sorunlar hakkında çok endişeliyim ve başka bir şey düşünmek zor.",
            value: 2,
          },
          {
            text: "Fiziksel sorunlarım hakkında o kadar endişeliyim ki başka bir şey düşünemiyorum.",
            value: 3,
          },
        ],
      },
      {
        question: "Cinsel ilginizde bir değişiklik fark ettiniz mi?",
        items: [
          {
            text: "Cinselliğe olan ilgimde herhangi bir değişiklik fark etmedim.",
            value: 0,
          },
          { text: "Cinselliğe olan ilgim eskisinden daha az.", value: 1 },
          { text: "Cinselliğe olan ilgim neredeyse yok.", value: 2 },
          { text: "Cinselliğe olan ilgimi tamamen kaybettim.", value: 3 },
        ],
      },
    ],
  },
  {
    id: 1,
    date: "02.08.2024",
    photo: require("../../assets/images/jpeg/women-in-black.jpg"),
    name: "Hamilton Testi",
    questions: [
      {
        question: "Uyku problemleri yaşıyor musunuz?",
        items: [
          { text: "Hiçbir uyku problemi yaşamıyorum.", value: 0 },
          { text: "Hafif uyku problemlerim var.", value: 1 },
          { text: "Orta derecede uyku problemlerim var.", value: 2 },
          { text: "Şiddetli uyku problemlerim var.", value: 3 },
        ],
      },
      {
        question: "Anksiyete seviyeniz nedir?",
        items: [
          { text: "Hiç anksiyete yaşamıyorum.", value: 0 },
          { text: "Hafif anksiyete yaşıyorum.", value: 1 },
          { text: "Orta derecede anksiyete yaşıyorum.", value: 2 },
          { text: "Şiddetli anksiyete yaşıyorum.", value: 3 },
        ],
      },
      {
        question: "Günlük işlerinizi yapmada zorlanıyor musunuz?",
        items: [
          { text: "Hiçbir zorluk yaşamıyorum.", value: 0 },
          { text: "Hafif zorluklar yaşıyorum.", value: 1 },
          { text: "Orta derecede zorluklar yaşıyorum.", value: 2 },
          { text: "Şiddetli zorluklar yaşıyorum.", value: 3 },
        ],
      },
      {
        question: "Enerji seviyeniz nasıl?",
        items: [
          { text: "Enerjim yüksek.", value: 0 },
          { text: "Enerjim biraz düşük.", value: 1 },
          { text: "Enerjim oldukça düşük.", value: 2 },
          { text: "Hiç enerjim yok.", value: 3 },
        ],
      },
      {
        question: "İlgi düzeyiniz nasıl?",
        items: [
          { text: "Her zamanki gibi ilgi duyuyorum.", value: 0 },
          { text: "İlgim biraz azalmış.", value: 1 },
          { text: "İlgim oldukça azalmış.", value: 2 },
          { text: "Hiçbir şeye ilgi duymuyorum.", value: 3 },
        ],
      },
      {
        question: "Konsantrasyon düzeyiniz nasıl?",
        items: [
          { text: "Konsantrasyonum iyi.", value: 0 },
          { text: "Biraz konsantrasyon kaybım var.", value: 1 },
          { text: "Konsantrasyonum oldukça düşük.", value: 2 },
          { text: "Hiç konsantre olamıyorum.", value: 3 },
        ],
      },
    ],
  },
  {
    id: 2,
    date: "04.09.2024",
    photo: require("../../assets/images/jpeg/black-mask.jpg"),
    name: "PHQ-9 Testi",
    questions: [
      {
        question: "Hayattan zevk alıyor musunuz?",
        items: [
          { text: "Hayattan zevk alıyorum.", value: 0 },
          { text: "Bazen zevk alıyorum.", value: 1 },
          { text: "Nadiren zevk alıyorum.", value: 2 },
          { text: "Hiç zevk almıyorum.", value: 3 },
        ],
      },
      {
        question: "Kendinizi yorgun hissediyor musunuz?",
        items: [
          { text: "Hiç yorgun hissetmiyorum.", value: 0 },
          { text: "Bazen yorgun hissediyorum.", value: 1 },
          { text: "Çoğu zaman yorgun hissediyorum.", value: 2 },
          { text: "Her zaman yorgun hissediyorum.", value: 3 },
        ],
      },
      {
        question: "Kendinizi değersiz hissediyor musunuz?",
        items: [
          { text: "Hiç değersiz hissetmiyorum.", value: 0 },
          { text: "Bazen değersiz hissediyorum.", value: 1 },
          { text: "Çoğu zaman değersiz hissediyorum.", value: 2 },
          { text: "Her zaman değersiz hissediyorum.", value: 3 },
        ],
      },
      {
        question: "Konsantrasyon sorunlarınız var mı?",
        items: [
          { text: "Konsantrasyon sorunum yok.", value: 0 },
          { text: "Bazen konsantrasyon sorunum var.", value: 1 },
          { text: "Çoğu zaman konsantrasyon sorunum var.", value: 2 },
          { text: "Her zaman konsantrasyon sorunum var.", value: 3 },
        ],
      },
      {
        question: "Kendinizi daha az enerjik hissediyor musunuz?",
        items: [
          { text: "Hiç enerjim eksik değil.", value: 0 },
          { text: "Bazen enerjim eksik.", value: 1 },
          { text: "Çoğu zaman enerjim eksik.", value: 2 },
          { text: "Her zaman enerjim eksik.", value: 3 },
        ],
      },
      {
        question: "İntihar düşünceniz var mı?",
        items: [
          { text: "İntihar etmeyi hiç düşünmüyorum.", value: 0 },
          { text: "Bazen intihar etmeyi düşünüyorum.", value: 1 },
          { text: "Çoğu zaman intihar etmeyi düşünüyorum.", value: 2 },
          { text: "Her zaman intihar etmeyi düşünüyorum.", value: 3 },
        ],
      },
    ],
  },
];
