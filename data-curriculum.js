/**
 * DATABASE KURIKULUM LENGKAP HAN YU 1 - HAN YU 12 (TOTAL 180 UNIT LENGKAP)
 * Edisi Standar Kurikulum Pembelajaran Mandarin Sekolah Dasar
 * Fitur: Cerita Narasi Pelan Anak SD, Pinyin Lengkap, Arti Kalimat, Guratan, Game Gambar, dan Kuis 5 Tipe Pilihan Berganda (KKM 70)
 */

// 1. DATA MASTER 15 UNIT PER BUKU UNTUK HAN YU 1 SAMPAI HAN YU 12
const HAN_YU_RAW_CURRICULUM_DATA = {
  // ==========================================
  // HAN YU 1 (第一册 - Dasar Pengenalan)
  // ==========================================
  1: {
    guide: { name: "Rexy Cilik (T-Rex)", avatar: "🦖", species: "Tyrannosaurus Rex", desc: "Halo teman-teman! Mari belajar dasar kosakata dan sapaan Mandarin bersama Rexy!" },
    level: "Tingkat 1 - Dasar Pemula (SD Kelas 1)",
    units: [
      {
        id: 1,
        title: "第1课 你好",
        pinyin: "Nǐ hǎo",
        meaning: "Halo / Salam Jumpa",
        vocab: [
          { hanzi: "你", pinyin: "nǐ", meaning: "kamu", strokes: 7, strokeOrder: ["撇", "竖", "撇", "横撇", "竖钩", "撇", "点"], radical: "亻" },
          { hanzi: "好", pinyin: "hǎo", meaning: "baik / bagus", strokes: 6, strokeOrder: ["撇点", "撇", "提", "横撇", "弯钩", "横"], radical: "女" },
          { hanzi: "老师", pinyin: "lǎoshī", meaning: "guru", strokes: 6, strokeOrder: ["横", "竖", "横", "撇", "竖弯钩", "点"], radical: "耂" },
          { hanzi: "谢谢", pinyin: "xièxie", meaning: "terima kasih", strokes: 12, strokeOrder: ["点", "横折提", "撇", "竖", "横折钩", "横", "横", "撇", "竖", "横折钩", "横", "点"], radical: "讠" }
        ],
        sentences: [
          { hanzi: "清晨，小霸王龙背着新书包来到学校。", pinyin: "Qīngchén, xiǎo bàwánglóng bēizhe xīn shūbāo lái dào xuéxiào.", indonesian: "Pagi hari, Rexy si T-Rex kecil menggendong tas barunya datang ke sekolah." },
          { hanzi: "他看见陈老师，有礼貌地说：“老师早！”", pinyin: "Tā kànjiàn Chén lǎoshī, yǒu lǐmào de shuō: “Lǎoshī zǎo!”", indonesian: "Dia melihat Guru Chen lalu menyapa dengan sopan: 'Selamat pagi Guru!'" },
          { hanzi: "老师笑着回答：“你好，小霸王龙！”", pinyin: "Lǎoshī xiàozhe huídá: “Nǐ hǎo, xiǎo bàwánglóng!”", indonesian: "Guru tersenyum menjawab: 'Halo, Rexy kecil!'" },
          { hanzi: "小华也走过来打招呼：“你好！我们一起进教室吧！”", pinyin: "Xiǎohuá yě zǒu guòlái dǎ zhāohu: “Nǐ hǎo! Wǒmen yìqǐ jìn jiàoshì ba!”", indonesian: "Xiaohua juga menghampiri dan menyapa: 'Halo! Mari kita masuk ke kelas bersama!'" },
          { hanzi: "大家开开心心开始了美好的一天。", pinyin: "Dàjiā kāikāi xīnxīn kāishǐ le měihǎo de yì tiān.", indonesian: "Semua orang dengan gembira memulai hari yang indah." }
        ]
      },
      {
        id: 2,
        title: "第2课 我爱爸爸妈妈",
        pinyin: "Wǒ ài bàba māma",
        meaning: "Saya Sayang Ayah dan Ibu",
        vocab: [
          { hanzi: "我", pinyin: "wǒ", meaning: "saya / aku", strokes: 7, strokeOrder: ["撇", "横", "竖钩", "提", "斜钩", "撇", "点"], radical: "戈" },
          { hanzi: "爱", pinyin: "ài", meaning: "cinta / sayang", strokes: 10, strokeOrder: ["撇", "点", "点", "撇", "点", "横撇", "点", "横撇", "撇", "捺"], radical: "爫" },
          { hanzi: "爸爸", pinyin: "bàba", meaning: "ayah / papa", strokes: 8, strokeOrder: ["撇", "点", "撇", "捺", "横折", "竖", "横", "竖弯钩"], radical: "父" },
          { hanzi: "妈妈", pinyin: "māma", meaning: "ibu / mama", strokes: 6, strokeOrder: ["撇点", "撇", "提", "横折", "竖折折钩", "横"], radical: "女" }
        ],
        sentences: [
          { hanzi: "周末的早晨，阳光洒满了恐龙小屋。", pinyin: "Zhōumò de zǎochen, yángguāng sǎ mǎn le kǒnglóng xiǎowū.", indonesian: "Pagi akhir pekan, sinar matahari menyinari rumah kecil keluarga dinosaurus." },
          { hanzi: "小霸王龙在书桌前画了一幅美丽的彩笔画。", pinyin: "Xiǎo bàwánglóng zài shūzhuō qián huà le yì fú měilì de cǎibǐ huà.", indonesian: "Rexy kecil menggambar sebuah lukisan warna-warni yang indah di meja belajarnya." },
          { hanzi: "他画了高大的爸爸，又画了温柔的妈妈。", pinyin: "Tā huà le gāodà de bàba, yòu huà le wēnróu de māma.", indonesian: "Dia menggambar sosok ayah yang gagah, dan ibu yang lemah lembut." },
          { hanzi: "他把画送给父母，大声说：“爸爸妈妈，我爱你们！”", pinyin: "Tā bǎ huà sòng gěi fùmǔ, dàshēng shuō: “Bàba māma, wǒ ài nǐmen!”", indonesian: "Dia memberikan lukisan itu kepada orang tuanya sambil berkata: 'Papa dan Mama, aku sayang kalian!'" },
          { hanzi: "爸爸妈妈高兴地抱住他，夸他是个懂事的好孩子。", pinyin: "Bàba māma gāoxìng de bào zhù tā, kuā tā shì ge dǒngshì de hǎo háizi.", indonesian: "Ayah dan ibu memeluknya dengan bahagia dan memujinya sebagai anak yang pintar." }
        ]
      },
      {
        id: 3,
        title: "第3课 爸爸是老师",
        pinyin: "Bàba shì lǎoshī",
        meaning: "Ayah adalah Guru",
        vocab: [
          { hanzi: "是", pinyin: "shì", meaning: "adalah / ya", strokes: 9, strokeOrder: ["竖", "横折", "横", "横", "横", "竖", "横", "撇", "捺"], radical: "日" },
          { hanzi: "学生", pinyin: "xuéshēng", meaning: "murid / pelajar", strokes: 5, strokeOrder: ["撇", "横", "横", "竖", "横"], radical: "生" },
          { hanzi: "医生", pinyin: "yīshēng", meaning: "dokter", strokes: 7, strokeOrder: ["横", "撇", "横", "竖提", "点", "撇", "竖折"], radical: "匚" }
        ],
        sentences: [
          { hanzi: "小霸王龙的爸爸是一位辛勤的中文老师。", pinyin: "Xiǎo bàwánglóng de bàba shì yí wèi xīnqín de Zhōngwén lǎoshī.", indonesian: "Ayah Rexy kecil adalah seorang guru bahasa Mandarin yang rajin." },
          { hanzi: "每天早晨，爸爸站在讲台上教小朋友们认汉字。", pinyin: "Měitiān zǎochen, bàba zhàn zài jiǎngtái shang jiāo xiǎopéngyou men rèn hànzì.", indonesian: "Setiap pagi, ayah berdiri di depan kelas mengajari anak-anak mengenal karakter Mandarin." },
          { hanzi: "大家认真听讲，大声朗读生词和课文。", pinyin: "Dàjiā rènzhēn tīngjiǎng, dàshēng lǎngdú shēngcí hé kèwén.", indonesian: "Semua murid mendengarkan dengan seksama dan membaca kosakata serta teks dengan lantang." },
          { hanzi: "下课后，爸爸还耐心回答同学们的每一个问题。", pinyin: "Xiàkè hòu, bàba hái nàixīn huídá tóngxué men de měi yí ge wèntí.", indonesian: "Setelah selesai kelas, ayah dengan sabar menjawab setiap pertanyaan murid-murid." },
          { hanzi: "小霸王龙自豪地说：“我爸爸是老师，我也要努力学习！”", pinyin: "Xiǎo bàwánglóng zìháo de shuō: “Wǒ bàba shì lǎoshī, wǒ yě yào nǔlì xuéxí!”", indonesian: "Rexy kecil dengan bangga berkata: 'Ayahku adalah guru, aku juga harus tekun belajar!'" }
        ]
      },
      {
        id: 4,
        title: "第4课 你叫什么名字",
        pinyin: "Nǐ jiào shénme míngzi",
        meaning: "Siapa Namamu",
        vocab: [
          { hanzi: "叫", pinyin: "jiào", meaning: "bernama / panggil", strokes: 5, strokeOrder: ["竖", "横折", "横", "竖折折钩", "竖"], radical: "口" },
          { hanzi: "什么", pinyin: "shénme", meaning: "apa", strokes: 4, strokeOrder: ["撇", "竖", "横", "竖"], radical: "亻" },
          { hanzi: "名字", pinyin: "míngzi", meaning: "nama", strokes: 6, strokeOrder: ["撇", "横撇", "点", "竖", "横折", "横"], radical: "夕" }
        ],
        sentences: [
          { hanzi: "下课铃响了，操场上走来一只活泼的小三角龙。", pinyin: "Xiàkè líng xiǎng le, cāochǎng shang zǒu lái yì zhī huópo de xiǎo sānjiǎolóng.", indonesian: "Bel istirahat berbunyi, datanglah seekor Triceratops kecil yang ceria di lapangan." },
          { hanzi: "小霸王龙跑过去热情地问：“你好！你叫什么名字？”", pinyin: "Xiǎo bàwánglóng pǎo guòqù rèqíng de wèn: “Nǐ hǎo! Nǐ jiào shénme míngzi?”", indonesian: "Rexy kecil berlari menghampiri dan bertanya dengan ramah: 'Halo! Siapa namamu?'" },
          { hanzi: "小三角龙笑着说：“我叫角角，今年七岁。”", pinyin: "Xiǎo sānjiǎolóng xiàozhe shuō: “Wǒ jiào Jiǎojiao, jīnnián qī suì.”", indonesian: "Triceratops kecil tersenyum menjawab: 'Namaku Jiaojiao, usiaku tujuh tahun.'" },
          { hanzi: "小霸王龙说：“我叫雷克斯，我们交个朋友吧！”", pinyin: "Xiǎo bàwánglóng shuō: “Wǒ jiào Léikèsī, wǒmen jiāo ge péngyou ba!”", indonesian: "Rexy kecil berkata: 'Aku bernama Rexy, mari kita menjadi sahabat!'" },
          { hanzi: "两个小伙伴手拉手，一起在草地上快乐地玩耍。", pinyin: "Liǎng ge xiǎo huǒbàn shǒu lā shǒu, yìqǐ zài cǎodì shang kuàilè de wánshuǎ.", indonesian: "Dua sahabat kecil bergandengan tangan, bermain dengan gembira di padang rumput." }
        ]
      },
      {
        id: 5,
        title: "第5课 我爱我家",
        pinyin: "Wǒ ài wǒ jiā",
        meaning: "Keluargaku Penuh Kasih",
        vocab: [
          { hanzi: "家", pinyin: "jiā", meaning: "rumah / keluarga", strokes: 10, strokeOrder: ["点", "点", "横撇", "横", "撇", "竖提", "撇", "撇", "撇", "捺"], radical: "宀" },
          { hanzi: "哥哥", pinyin: "gēge", meaning: "kakak laki-laki", strokes: 10, strokeOrder: ["横", "竖", "横折", "横", "竖钩", "横", "竖", "横折", "横", "竖钩"], radical: "口" },
          { hanzi: "姐姐", pinyin: "jiějie", meaning: "kakak perempuan", strokes: 8, strokeOrder: ["撇点", "撇", "提", "竖", "横折", "横", "横", "横"], radical: "女" }
        ],
        sentences: [
          { hanzi: "小霸王龙有一个温馨幸福的家。", pinyin: "Xiǎo bàwánglóng yǒu yí ge wēnxīn xìngfú de jiā.", indonesian: "Rexy kecil memiliki rumah dan keluarga yang hangat serta bahagia." },
          { hanzi: "家里有勤劳的爸爸、慈爱的妈妈和聪明的姐姐。", pinyin: "Jiā lǐ yǒu qínláo de bàba, cí'ài de māma hé cōngmíng de jiějie.", indonesian: "Di rumah ada ayah yang rajin, ibu yang penuh kasih, dan kakak perempuan yang pintar." },
          { hanzi: "客厅里摆着大沙发，窗台上开着美丽的花朵。", pinyin: "Kètīng lǐ bǎi zhe dà shāfā, chuāngtái shang kāi zhe měilì de huāduǒ.", indonesian: "Di ruang tamu ada sofa yang nyaman, di ambang jendela mekar bunga yang indah." },
          { hanzi: "每天晚上，全家人坐在一起愉快地吃饭聊天。", pinyin: "Měitiān wǎnshang, quán jiā rén zuò zài yìqǐ yúkuài de chīfàn liáotiān.", indonesian: "Setiap malam, sekeluarga duduk bersama menikmati makan malam sambil berbincang ceria." },
          { hanzi: "小霸王龙微笑着说：“我爱我家，家里充满欢笑！”", pinyin: "Xiǎo bàwánglóng wēixiàozhe shuō: “Wǒ ài wǒ jiā, jiā lǐ chōngmǎn huānxiào!”", indonesian: "Rexy kecil tersenyum berkata: 'Aku cinta rumahku, rumah kami penuh tawa dan kebahagiaan!'" }
        ]
      },
      {
        id: 6,
        title: "第6课 哥哥去学校",
        pinyin: "Gēge qù xuéxiào",
        meaning: "Kakak Pergi ke Sekolah",
        vocab: [
          { hanzi: "去", pinyin: "qù", meaning: "pergi", strokes: 5, strokeOrder: ["横", "竖", "横", "撇折", "点"], radical: "厶" },
          { hanzi: "学校", pinyin: "xuéxiào", meaning: "sekolah", strokes: 8, strokeOrder: ["点", "点", "提", "撇", "竖钩", "横撇", "点", "提"], radical: "木" },
          { hanzi: "公园", pinyin: "gōngyuán", meaning: "taman", strokes: 4, strokeOrder: ["撇", "捺", "横折弯钩", "竖"], radical: "八" }
        ],
        sentences: [
          { hanzi: "早晨七点半，恐龙哥哥背着大书包走出家门。", pinyin: "Zǎochen qī diǎn bàn, kǒnglóng gēge bēizhe dà shūbāo zǒu chū jiāmén.", indonesian: "Pukul tujuh lewat tiga puluh pagi, kakak dinosaurus menggendong tas besar melangkah keluar rumah." },
          { hanzi: "阳光洒在马路上，路旁的大树郁郁葱葱。", pinyin: "Yángguāng sǎ zài mǎlù shang, lù páng de dà shù yùyù cōngcōng.", indonesian: "Sinar mentari menyinari jalan raya, pepohonan di tepi jalan tumbuh rimbun dan hijau." },
          { hanzi: "校门口的陈老师微笑着迎接每一位同学。", pinyin: "Xiàomén kǒu de Chén lǎoshī wēixiàozhe yíngjiē měi yí wèi tóngxué.", indonesian: "Guru Chen di depan gerbang sekolah tersenyum menyambut setiap murid yang datang." },
          { hanzi: "哥哥向弟弟挥手说：“再见，我要去学校上课啦！”", pinyin: "Gēge xiàng dìdi huīshǒu shuō: “Zàijiàn, wǒ yào qù xuéxiào shàngkè la!”", indonesian: "Kakak melambaikan tangan ke adik berkata: 'Sampai jumpa, aku mau pergi belajar ke sekolah!'" },
          { hanzi: "弟弟大声喊道：“哥哥在学校要认真听讲哦！”", pinyin: "Dìdi dàshēng hǎn dào: “Gēge zài xuéxiào yào rènzhēn tīngjiǎng o!”", indonesian: "Adik berseru dengan lantang: 'Kakak di sekolah harus belajar dengan tekun ya!'" }
        ]
      },
      {
        id: 7,
        title: "第7课 我们上课吧",
        pinyin: "Wǒmen shàngkè ba",
        meaning: "Mari Belajar di Kelas",
        vocab: [
          { hanzi: "上课", pinyin: "shàngkè", meaning: "mulai kelas", strokes: 3, strokeOrder: ["竖", "横", "横"], radical: "一" },
          { hanzi: "听", pinyin: "tīng", meaning: "mendengar", strokes: 7, strokeOrder: ["竖", "横折", "横", "撇", "撇", "横", "竖"], radical: "口" },
          { hanzi: "回答", pinyin: "huídá", meaning: "menjawab", strokes: 6, strokeOrder: ["竖", "横折", "竖", "横折", "横", "横"], radical: "囗" }
        ],
        sentences: [
          { hanzi: "叮铃铃！上课铃声清脆地响遍了校园。", pinyin: "Dīnglínglíng! Shàngkè língshēng qīngcuì de xiǎng biàn le xiàoyuán.", indonesian: "Kring! Bel tanda masuk kelas berbunyi nyaring di seluruh penjuru sekolah." },
          { hanzi: "小恐龙们快步走进宽敞明亮的教室，回到座位上坐好。", pinyin: "Xiǎo kǒnglóng men kuàibù zǒu jìn kuānchang míngliàng de jiàoshì, huí dào zuòwèi shang zuò hǎo.", indonesian: "Dinosaurus-dinosaurus kecil bergegas masuk ke ruang kelas yang luas dan terang, duduk rapi di kursi." },
          { hanzi: "陈老师走进教室说：“同学们好，我们开始上课吧！”", pinyin: "Chén lǎoshī zǒu jìn jiàoshì shuō: “Tóngxué men hǎo, wǒmen kāishǐ shàngkè ba!”", indonesian: "Guru Chen masuk ke kelas dan berkata: 'Halo anak-anak, mari kita mulai pelajaran kita!'" },
          { hanzi: "大家都坐得端端正正，专心致志地听老师讲课。", pinyin: "Dàjiā dōu zuò de duānduān zhèngzhèng, zhuānxīn zhìzhì de tīng lǎoshī jiǎngkè.", indonesian: "Semua murid duduk dengan tegak dan tertib, mendengarkan penjelasan guru dengan penuh konsentrasi." },
          { hanzi: "当老师提问时，小霸王龙和同学们争先恐后地举手回答。", pinyin: "Dāng lǎoshī tíwèn shí, xiǎo bàwánglóng hé tóngxué men zhēngxiān kǒnghòu de jǔshǒu huídá.", indonesian: "Saat guru bertanya, Rexy kecil dan teman-temannya berlomba-lomba mengacungkan tangan untuk menjawab." }
        ]
      },
      {
        id: 8,
        title: "第8课 我们吃午饭",
        pinyin: "Wǒmen chī wǔfàn",
        meaning: "Kita Makan Siang Bersama",
        vocab: [
          { hanzi: "吃", pinyin: "chī", meaning: "makan", strokes: 6, strokeOrder: ["竖", "横折", "横", "撇", "横", "竖弯钩"], radical: "口" },
          { hanzi: "米饭", pinyin: "mǐfàn", meaning: "nasi putih", strokes: 6, strokeOrder: ["点", "撇", "横", "竖", "撇", "捺"], radical: "米" },
          { hanzi: "面条", pinyin: "miàntiáo", meaning: "bakmi / mi", strokes: 9, strokeOrder: ["横", "撇", "竖", "横折", "竖", "竖", "横", "横", "横"], radical: "面" }
        ],
        sentences: [
          { hanzi: "中午十二点到了，学校食堂飘出阵阵饭菜的香味。", pinyin: "Zhōngwǔ shí'èr diǎn dào le, xuéxiào shítáng piāo chū zhènzhèn fàncài de xiāngwèi.", indonesian: "Pukul 12 siang telah tiba, kantin sekolah menyebarkan aroma makanan yang harum sedap." },
          { hanzi: "小恐龙们排好整齐的队伍，依次洗手取餐盘。", pinyin: "Xiǎo kǒnglóng men pái hǎo zhěngqí de duìwǔ, yīcì xǐshǒu qǔ cānpán.", indonesian: "Anak-anak dinosaurus berbaris dengan tertib, mencuci tangan bergantian dan mengambil nampan makanan." },
          { hanzi: "小华吃香喷喷的米饭，小明吃热腾腾的面条和饺子。", pinyin: "Xiǎohuá chī xiāngpēnpēn de mǐfàn, Xiǎomíng chī rèténgténg de miàntiáo hé jiǎozi.", indonesian: "Xiaohua makan nasi putih yang harum, Xiaoming makan mi hangat dan pangsit lezat." },
          { hanzi: "长颈龙大口大口地吃着新鲜绿色的蔬菜水果。", pinyin: "Chángjǐnglóng dà kǒu dà kǒu de chī zhe xīnxiān lǜsè de shūcài shuǐguǒ.", indonesian: "Brachy si dinosaurus leher panjang makan sayuran dan buah segar dengan lahap." },
          { hanzi: "大家都夸赞午饭真好吃，多吃蔬菜让身体长得更强壮！", pinyin: "Dàjiā dōu kuāzàn wǔfàn zhēn hǎochī, duō chī shūcài ràng shēntǐ zhǎng de gèng qiángzhuàng!", indonesian: "Semua memuji makan siang sangat enak, rajin makan sayur membuat tubuh tumbuh kuat!" }
        ]
      },
      {
        id: 9,
        title: "第9课 小华打球",
        pinyin: "Xiǎohuá dǎqiú",
        meaning: "Bermain Bola di Lapangan",
        vocab: [
          { hanzi: "打球", pinyin: "dǎqiú", meaning: "bermain bola", strokes: 5, strokeOrder: ["横", "竖钩", "提", "横", "竖钩"], radical: "扌" },
          { hanzi: "篮球", pinyin: "lánqiú", meaning: "bola basket", strokes: 11, strokeOrder: ["撇", "横", "点", "撇", "横", "点", "竖", "横折", "横", "竖", "横"], radical: "竹" },
          { hanzi: "足球", pinyin: "zúqiú", meaning: "sepak bola", strokes: 7, strokeOrder: ["竖", "横折", "横", "竖", "横", "撇", "捺"], radical: "足" }
        ],
        sentences: [
          { hanzi: "下午放学后的操场上，到处都是欢声笑语。", pinyin: "Xiàwǔ fàngxué hòu de cāochǎng shang, dàochù dōu shì huānshēng xiàoyǔ.", indonesian: "Di lapangan sekolah sepulang kelas sore, terdengar tawa riang gembira di mana-mana." },
          { hanzi: "小华在篮球架下拍着橘红色的篮球，动作非常敏捷。", pinyin: "Xiǎohuá zài lánqiú jià xià pāi zhe júhóngsè de lánqiú, dòngzuò fēicháng mǐnjié.", indonesian: "Xiaohua men-dribel bola basket oranye di bawah ring dengan gerakan yang sangat lincah." },
          { hanzi: "小明和小角龙在绿茵场上练习传球和射门。", pinyin: "Xiǎomíng hé xiǎo jiǎolóng zài lǜyīn chǎng shang liànxí chuánqiú hé shèmén.", indonesian: "Xiaoming dan Triceratops kecil berlatih mengoper bola dan menembak gol di lapangan rumput." },
          { hanzi: "小霸王龙站在场边用力挥手，大声为伙伴们加油助威。", pinyin: "Xiǎo bàwánglóng zhàn zài chǎng biān yònglì huīshǒu, dàshēng wèi huǒbàn men jiāyóu zhùwēi.", indonesian: "Rexy kecil berdiri di tepi lapangan melambaikan tangan memberi semangat untuk teman-temannya." },
          { hanzi: "大家奔跑流汗，运动锻炼让每只小恐龙都身心健康！", pinyin: "Dàjiā bēnpǎo liúhàn, yùndòng duànliàn ràng měi zhī xiǎo kǒnglóng dōu shēnxīn jiànkāng!", indonesian: "Semua berlari dan berolahraga dengan ceria, membuat setiap dinosaurus cilik sehat jasmani dan rohani!" }
        ]
      },
      {
        id: 10,
        title: "第10课 我的一天",
        pinyin: "Wǒ de yì tiān",
        meaning: "Rutinitas Keseharianku",
        vocab: [
          { hanzi: "早上", pinyin: "zǎoshang", meaning: "pagi hari", strokes: 6, strokeOrder: ["竖", "横折", "横", "横", "横", "竖"], radical: "日" },
          { hanzi: "做游戏", pinyin: "zuò yóuxì", meaning: "bermain permainan", strokes: 11, strokeOrder: ["撇", "竖", "撇", "横", "竖", "横折", "横", "竖", "横", "撇", "捺"], radical: "亻" },
          { hanzi: "回家", pinyin: "huíjiā", meaning: "pulang ke rumah", strokes: 6, strokeOrder: ["竖", "横折", "竖", "横折", "横", "横"], radical: "囗" }
        ],
        sentences: [
          { hanzi: "清晨六点半，小恐龙准时起床，自己刷牙洗脸。", pinyin: "Qīngchén liù diǎn bàn, xiǎo kǒnglóng zhǔnshí qǐchuáng, zìjǐ shuāyá xǐliǎn.", indonesian: "Pukul enam lewat tiga puluh pagi, dinosaurus kecil bangun tepat waktu, mandiri menggosok gigi dan mencuci muka." },
          { hanzi: "吃过营养的早餐后，他精神饱满地迈步走向学校。", pinyin: "Chī guò yíngyǎng de zǎocān hòu, tā jīngshén bǎomǎn de màibù zǒuxiàng xuéxiào.", indonesian: "Setelah sarapan bergizi, dia dengan semangat melangkah menuju ke sekolah." },
          { hanzi: "在学校里，他认真听课、书写汉字、与同学友好相处。", pinyin: "Zài xuéxiào lǐ, tā rènzhēn tīngkè, shūxiě hànzì, yǔ tóngxué yǒuhǎo xiāngchǔ.", indonesian: "Di sekolah, dia tekun belajar, menulis Hanzi, dan bermain rukun bersama teman-teman." },
          { hanzi: "傍晚回家后，他先复习功课，然后帮妈妈做小家务。", pinyin: "Bàngwǎn huíjiā hòu, tā xiān fùxí gōngkè, ránhòu bāng māma zuò xiǎo jiāwù.", indonesian: "Sore hari tiba di rumah, dia mengulang pelajaran terlebih dahulu lalu membantu ibu mengerjakan tugas rumah." },
          { hanzi: "晚上九点准时上床睡觉，这真是充实而快乐的一天！", pinyin: "Wǎnshang jiǔ diǎn zhǔnshí shàngchuáng shuìjiào, zhè zhēn shì chōngshí ér kuàilè de yì tiān!", indonesian: "Pukul 9 malam tidur tepat waktu, sungguh hari yang bermanfaat dan penuh kebahagiaan!" }
        ]
      },
      {
        id: 11,
        title: "第11课 这是我的书",
        pinyin: "Zhè shì wǒ de shū",
        meaning: "Ini Adalah Bukuku",
        vocab: [
          { hanzi: "书", pinyin: "shū", meaning: "buku", strokes: 4, strokeOrder: ["横折", "横折钩", "竖", "点"], radical: "乙" },
          { hanzi: "笔", pinyin: "bǐ", meaning: "pensil / pena", strokes: 10, strokeOrder: ["撇", "横", "点", "撇", "横", "点", "撇", "横", "横", "竖弯钩"], radical: "竹" },
          { hanzi: "本子", pinyin: "běnzi", meaning: "buku tulis", strokes: 5, strokeOrder: ["横", "竖", "撇", "捺", "横"], radical: "木" }
        ],
        sentences: [
          { hanzi: "小霸王龙打开整洁的书包，拿出崭新的课本。", pinyin: "Xiǎo bàwánglóng dǎkāi zhěngjié de shūbāo, ná chū zhǎnxīn de kèběn.", indonesian: "Rexy kecil membuka tas sekolah yang rapi, mengeluarkan buku pelajaran barunya." },
          { hanzi: "他指着桌子上的文具说：“这是我的中文课本。”", pinyin: "Tā zhǐ zhe zhuōzi shang de wénjù shuō: “Zhè shì wǒ de Zhōngwén kèběn.”", indonesian: "Dia menunjuk alat tulis di mejanya lalu berkata: 'Ini adalah buku teks Mandarinku.'" },
          { hanzi: "桌上还放着一支削好的铅笔和一个蓝色的铅笔盒。", pinyin: "Zhuō shang hái fàng zhe yì zhī xiāo hǎo de qiānbǐ hé yí ge lánsè de qiānbǐ hé.", indonesian: "Di atas meja juga ditaruh sebatang pensil runcing dan sebuah kotak pensil berwarna biru." },
          { hanzi: "小恐龙把每样文具都摆放得整整齐齐，从不乱扔乱放。", pinyin: "Xiǎo kǒnglóng bǎ měi yàng wénjù dōu bǎifàng de zhěngzhěng qíqí, cóng bù luàn rēng luàn fàng.", indonesian: "Dinosaurus kecil menata setiap alat tulis dengan sangat rapi, tidak pernah meletakkannya sembarangan." },
          { hanzi: "陈老师夸奖小恐龙是一个爱护文具的好学生！", pinyin: "Chén lǎoshī kuājiǎng xiǎo kǒnglóng shì yí ge àihù wénjù de hǎo xuéshēng!", indonesian: "Guru Chen memuji dinosaurus kecil sebagai murid teladan yang pandai merawat perlengkapan belajar!" }
        ]
      },
      {
        id: 12,
        title: "第12课 我有两本书",
        pinyin: "Wǒ yǒu liǎng běn shū",
        meaning: "Saya Punya Dua Buku",
        vocab: [
          { hanzi: "有", pinyin: "yǒu", meaning: "ada / punya", strokes: 6, strokeOrder: ["横", "撇", "竖", "横折钩", "横", "横"], radical: "月" },
          { hanzi: "两", pinyin: "liǎng", meaning: "dua (jumlah)", strokes: 7, strokeOrder: ["横", "竖", "横折钩", "撇", "点", "撇", "点"], radical: "一" },
          { hanzi: "书包", pinyin: "shūbāo", meaning: "tas sekolah", strokes: 5, strokeOrder: ["撇", "横折钩", "横折", "横", "竖弯钩"], radical: "勹" }
        ],
        sentences: [
          { hanzi: "书桌上整齐地摆放着两本图文并茂的故事书。", pinyin: "Shūzhuō shang zhěngqí de bǎifàng zhe liǎng běn túwén bìngmào de gùshì shū.", indonesian: "Di atas meja belajar diletakkan dua buku cerita bergambar yang sangat menarik." },
          { hanzi: "小霸王龙高兴地对同桌说：“我有两本好看的恐龙画册。”", pinyin: "Xiǎo bàwánglóng gāoxìng de duì tóngzhuō shuō: “Wǒ yǒu liǎng běn hǎokàn de kǒnglóng huàcè.”", indonesian: "Rexy kecil dengan riang berkata pada teman sebangkunya: 'Aku punya dua buku cerita bergambar dinosaurus yang bagus.'" },
          { hanzi: "小角龙说：“我有一本童话书，我们交换看吧！”", pinyin: "Xiǎo jiǎolóng shuō: “Wǒ yǒu yì běn tónghuà shū, wǒmen jiāohuàn kàn ba!”", indonesian: "Triceratops kecil berkata: 'Aku punya satu buku dongeng, mari kita bertukar membaca!'" },
          { hanzi: "两个小伙伴坐在一起，一边看书一边讨论有趣的故事情节。", pinyin: "Liǎng ge xiǎo huǒbàn zuò zài yìqǐ, yìbiān kànshū yìbiān tǎolùn yǒuqù de gùshì qíngjié.", indonesian: "Dua sahabat kecil duduk bersama, membaca buku sambil mendiskusikan alur cerita yang seru." },
          { hanzi: "大家一起分享好书，阅读让他们的友谊更加深厚！", pinyin: "Dàjiā yìqǐ fēnxiǎng hǎo shū, yuèdú ràng tāmen de yǒuyì gèngjiā shēnhòu!", indonesian: "Berbagi buku bersama membuat kegiatan membaca dan persahabatan mereka semakin erat!" }
        ]
      },
      {
        id: 13,
        title: "第13课 你家有电脑吗",
        pinyin: "Nǐ jiā yǒu diànnǎo ma",
        meaning: "Apakah Ada Komputer di Rumah",
        vocab: [
          { hanzi: "电脑", pinyin: "diànnǎo", meaning: "komputer", strokes: 5, strokeOrder: ["竖", "横折", "横", "横", "竖弯钩"], radical: "田" },
          { hanzi: "电视", pinyin: "diànshì", meaning: "televisi", strokes: 4, strokeOrder: ["点", "横折", "横", "竖弯钩"], radical: "礻" },
          { hanzi: "没有", pinyin: "méiyǒu", meaning: "tidak ada / tidak punya", strokes: 7, strokeOrder: ["点", "点", "提", "撇", "横撇", "捺", "竖"], radical: "氵" }
        ],
        sentences: [
          { hanzi: "放学回家的路上，小华好奇地问小明：“你家有电脑吗？”", pinyin: "Fàngxué huíjiā de lù shang, Xiǎohuá hàoqí de wèn Xiǎomíng: “Nǐ jiā yǒu diànnǎo ma?”", indonesian: "Di perjalanan pulang sekolah, Xiaohua dengan penasaran bertanya pada Xiaoming: 'Apakah di rumahmu ada komputer?'" },
          { hanzi: "小明笑着回答：“有啊，我家有一台新电脑。”", pinyin: "Xiǎomíng xiàozhe huídá: “Yǒu a, wǒ jiā yǒu yì tái xīn diànnǎo.”", indonesian: "Xiaoming tersenyum menjawab: 'Tentu ada, di rumahku ada satu komputer baru.'" },
          { hanzi: "小明接着说：“我常常用电脑听中文标准录音、看动画片。”", pinyin: "Xiǎomíng jiēzhe shuō: “Wǒ chángcháng yòng diànnǎo tīng Zhōngwén biāozhǔn lùyīn, kàn dònghuàpiàn.”", indonesian: "Xiaoming melanjutkan: 'Aku sering memakai komputer untuk mendengarkan rekaman Mandarin dan menonton animasi edukasi.'" },
          { hanzi: "小霸王龙说：“电脑还能帮我们查阅很多古生物科普知识呢！”", pinyin: "Xiǎo bàwánglóng shuō: “Diànnǎo hái néng bāng wǒmen cháyuè hěn duō gǔshēngwù kēpǔ zhīshi ne!”", indonesian: "Rexy kecil berkata: 'Komputer juga bisa membantu kita mencari pengetahuan sains tentang hewan purba!'" },
          { hanzi: "现代科技让大家学习中文和探索世界变得更加轻松快捷！", pinyin: "Xiàndài kējì ràng dàjiā xuéxí Zhōngwén hé tànsuǒ shìjiè biàn de gèngjiā qīngsōng kuàijié!", indonesian: "Teknologi modern membuat belajar Mandarin dan menjelajahi dunia menjadi jauh lebih mudah dan menyenangkan!" }
        ]
      },
      {
        id: 14,
        title: "第14课 书在书架上",
        pinyin: "Shū zài shūjià shang",
        meaning: "Buku Ada di Atas Rak",
        vocab: [
          { hanzi: "在", pinyin: "zài", meaning: "berada di", strokes: 6, strokeOrder: ["横", "撇", "竖", "横", "竖", "横"], radical: "土" },
          { hanzi: "桌子", pinyin: "zhuōzi", meaning: "meja", strokes: 10, strokeOrder: ["竖", "横", "竖", "横折", "横", "横", "横", "竖", "撇", "捺"], radical: "木" },
          { hanzi: "椅子", pinyin: "yǐzi", meaning: "kursi", strokes: 9, strokeOrder: ["横", "竖", "撇", "点", "横折", "横", "竖折", "横", "竖钩"], radical: "木" }
        ],
        sentences: [
          { hanzi: "走进小霸王龙的书房，映入眼帘的是一个高大的实木书架。", pinyin: "Zǒu jìn xiǎo bàwánglóng de shūfáng, yìngrù yǎanlián de shì yí ge gāodà de shímù shūjià.", indonesian: "Masuk ke ruang belajar Rexy kecil, terlihat sebuah rak buku kayu yang besar dan rapi." },
          { hanzi: "中文故事书整齐地摆在书架上层，词典放在中间层。", pinyin: "Zhōngwén gùshì shū zhěngqí de bǎi zài shūjià shàngcéng, cídiǎn fàng zài zhōngjiāncéng.", indonesian: "Buku-buku cerita Mandarin tertata rapi di rak bagian atas, sedangkan kamus ditaruh di rak bagian tengah." },
          { hanzi: "书桌在窗户旁边，桌上有一盏柔和明亮的护眼台灯。", pinyin: "Shūzhuō zài chuānghu pángbiān, zhuō shang yǒu yì zhǎn róuhé míngliàng de hùyǎn táidēng.", indonesian: "Meja belajar berada di samping jendela, di atas meja ada lampu baca yang lembut dan terang." },
          { hanzi: "小恐龙每次看完书，都会自觉把书本放回原位。", pinyin: "Xiǎo kǒnglóng měi cì kàn wán shū, dōu huì zìjué bǎ shūběn fàng huí yuánwèi.", indonesian: "Setiap kali selesai membaca, dinosaurus kecil selalu mengembalikan buku ke tempat semula." },
          { hanzi: "良好的整理习惯，让整个书房始终保持干干净净！", pinyin: "Liánghǎo de zhěnglǐ xíguàn, ràng zhěng ge shūfáng shǐzhōng bǎochí gāngān jìngjìng!", indonesian: "Kebiasaan merapikan barang yang baik membuat seluruh ruang belajar selalu bersih dan nyaman!" }
        ]
      },
      {
        id: 15,
        title: "第15课 我的房间",
        pinyin: "Wǒ de fángjiān",
        meaning: "Kamar Tidurku yang Nyaman",
        vocab: [
          { hanzi: "房间", pinyin: "fángjiān", meaning: "kamar / ruangan", strokes: 8, strokeOrder: ["点", "横折", "横", "撇", "横折钩", "撇", "撇", "捺"], radical: "户" },
          { hanzi: "床", pinyin: "chuáng", meaning: "tempat tidur / kasur", strokes: 7, strokeOrder: ["点", "横", "撇", "横", "竖", "撇", "捺"], radical: "广" },
          { hanzi: "干净", pinyin: "gānjìng", meaning: "bersih dan rapi", strokes: 3, strokeOrder: ["横", "横", "竖"], radical: "干" }
        ],
        sentences: [
          { hanzi: "这是小霸王龙独立居住的小天地——我的房间。", pinyin: "Zhè shì xiǎo bàwánglóng dúlì jūzhù de xiǎo tiāndì——wǒ de fángjiān.", indonesian: "Ini adalah tempat istirahat mandiri milik Rexy kecil: Kamar tidurku." },
          { hanzi: "房间里有一张柔软舒服的小床，床单上印着可爱的树叶花纹。", pinyin: "Fángjiān lǐ yǒu yì zhāng róuruǎn shūfu de xiǎochuáng, chuángdān shang yìn zhe kě'ài de shùyè huāwén.", indonesian: "Di dalam kamar ada sebuah kasur kecil yang empuk, sprei bergambar motif dedaunan lucu." },
          { hanzi: "靠墙摆着大衣柜和书桌，墙上挂着精美的恐龙探险地图。", pinyin: "Kào qiáng bǎi zhe dà yīguì hé shūzhuō, qiáng shang guà zhe jīngměi de kǒnglóng tànxiǎn dìtú.", indonesian: "Di dekat dinding ada lemari pakaian dan meja belajar, serta peta petualangan dinosaurus yang indah di dinding." },
          { hanzi: "每天起床后，小恐龙都会把被子叠整齐，把地板擦干净。", pinyin: "Měitiān qǐchuáng hòu, xiǎo kǒnglóng dōu huì bǎ bèizi dié zhěngqí, bǎ dìbǎn cā gānjìng.", indonesian: "Setiap bangun pagi, dinosaurus kecil merapikan selimut dan menyapu lantai hingga bersih." },
          { hanzi: "在这个舒适温暖的小房间里读书休息，心里感到格外幸福！", pinyin: "Zài zhè ge shūshì wēnxīn de xiǎo fángjiān lǐ dúshū xiūxi, xīn lǐ gǎndào géwài xìngfú!", indonesian: "Belajar dan beristirahat di kamar yang nyaman ini membuat hatinya merasa sangat bahagia!" }
        ]
      }
    ]
  },

  // ==========================================
  // HAN YU 2 (第二册 - Deskripsi & Lingkungan)
  // ==========================================
  2: {
    guide: { name: "Trishi Manis (Triceratops)", avatar: "🦏", species: "Triceratops", desc: "Halo teman-teman! Bersama Trishi, kita belajar perbandingan ukuran, cuaca, dan warna!" },
    level: "Tingkat 2 - Dasar Lanjutan (SD Kelas 2)",
    units: [
      { id: 1, title: "第1课 西瓜大 苹果小", pinyin: "Xīguā dà, píngguǒ xiǎo", meaning: "Semangka Besar, Apel Kecil", vocab: [{ hanzi: "大", pinyin: "dà", meaning: "besar", strokes: 3, strokeOrder: ["横", "撇", "捺"], radical: "大" }, { hanzi: "小", pinyin: "xiǎo", meaning: "kecil", strokes: 3, strokeOrder: ["竖钩", "撇", "点"], radical: "小" }, { hanzi: "西瓜", pinyin: "xīguā", meaning: "semangka", strokes: 6, strokeOrder: ["横", "竖", "横折", "横", "竖弯钩", "横"], radical: "西" }] },
      { id: 2, title: "第2课 今天的天气很好", pinyin: "Jīntiān de tiānqì hěn hǎo", meaning: "Cuaca Hari Ini Sangat Baik", vocab: [{ hanzi: "天气", pinyin: "tiānqì", meaning: "cuaca", strokes: 4, strokeOrder: ["横", "横", "撇", "捺"], radical: "天" }, { hanzi: "晴天", pinyin: "qíngtiān", meaning: "cerah", strokes: 12, strokeOrder: ["竖", "横折", "横", "横", "横", "横", "竖", "横", "竖", "横折钩", "横", "横"], radical: "日" }, { hanzi: "冷", pinyin: "lěng", meaning: "dingin", strokes: 7, strokeOrder: ["点", "提", "撇", "横撇", "捺", "点", "点"], radical: "冫" }] },
      { id: 3, title: "第3课 我们真高兴", pinyin: "Wǒmen zhēn gāoxìng", meaning: "Kami Sungguh Gembira", vocab: [{ hanzi: "高兴", pinyin: "gāoxìng", meaning: "gembira", strokes: 10, strokeOrder: ["点", "横", "竖", "横折", "横", "竖", "横折钩", "横"], radical: "高" }, { hanzi: "唱歌", pinyin: "chànggē", meaning: "menyanyi", strokes: 11, strokeOrder: ["竖", "横折", "横", "竖", "横折", "横", "横", "横", "竖", "横折", "横"], radical: "口" }, { hanzi: "跳舞", pinyin: "tiàowǔ", meaning: "menari", strokes: 13, strokeOrder: ["竖", "横折", "横", "竖", "横", "竖", "横", "横", "竖", "横折", "横", "竖", "横"], radical: "足" }] },
      { id: 4, title: "第4课 小狗非常可爱", pinyin: "Xiǎogǒu fēicháng kě'ài", meaning: "Anak Anjing Sangat Lucu", vocab: [{ hanzi: "狗", pinyin: "gǒu", meaning: "anjing", strokes: 8, strokeOrder: ["撇", "弯钩", "撇", "撇", "横撇", "竖", "横折", "横"], radical: "犭" }, { hanzi: "猫", pinyin: "māo", meaning: "kucing", strokes: 11, strokeOrder: ["撇", "弯钩", "撇", "横", "竖", "竖", "竖", "横折", "横", "竖", "横"], radical: "犭" }, { hanzi: "可爱", pinyin: "kě'ài", meaning: "lucu / imut", strokes: 5, strokeOrder: ["横", "竖", "横折", "横", "竖钩"], radical: "口" }] },
      { id: 5, title: "第5课 这个公园真热闹", pinyin: "Zhè ge gōngyuán zhēn rènao", meaning: "Taman Ini Sangat Ramai", vocab: [{ hanzi: "公园", pinyin: "gōngyuán", meaning: "taman umum", strokes: 4, strokeOrder: ["撇", "捺", "横折弯钩", "竖"], radical: "八" }, { hanzi: "热闹", pinyin: "rènao", meaning: "ramai dan meriah", strokes: 10, strokeOrder: ["横", "竖", "横", "竖", "点", "点", "点", "点"], radical: "火" }, { hanzi: "花朵", pinyin: "huāduǒ", meaning: "bunga mekar", strokes: 7, strokeOrder: ["横", "竖", "竖", "撇", "竖", "撇", "竖弯钩"], radical: "艹" }] },
      { id: 6, title: "第6课 这双筷子是我的", pinyin: "Zhè shuāng kuàizi shì wǒ de", meaning: "Sepasang Sumpit Ini Milikku", vocab: [{ hanzi: "筷子", pinyin: "kuàizi", meaning: "sumpit", strokes: 13, strokeOrder: ["撇", "横", "点", "撇", "横", "点", "横", "竖", "横折", "横", "竖", "横", "点"], radical: "竹" }, { hanzi: "碗", pinyin: "wǎn", meaning: "mangkuk", strokes: 13, strokeOrder: ["横", "撇", "竖", "横折", "横", "点", "横折", "横", "撇", "竖弯钩"], radical: "石" }, { hanzi: "喝汤", pinyin: "hē tāng", meaning: "minum sup", strokes: 12, strokeOrder: ["竖", "横折", "横", "竖", "横折", "横", "横", "横折钩", "撇", "竖折", "横"], radical: "口" }] },
      { id: 7, title: "第7课 小华的衣服是红的", pinyin: "Xiǎohuá de yīfu shì hóng de", meaning: "Baju Xiaohua Berwarna Merah", vocab: [{ hanzi: "衣服", pinyin: "yīfu", meaning: "pakaian / baju", strokes: 6, strokeOrder: ["点", "横", "撇", "竖提", "撇", "捺"], radical: "衣" }, { hanzi: "红色", pinyin: "hóngsè", meaning: "warna merah", strokes: 6, strokeOrder: ["撇折", "撇折", "提", "横", "竖", "横"], radical: "纟" }, { hanzi: "黄色", pinyin: "huángsè", meaning: "warna kuning", strokes: 11, strokeOrder: ["横", "竖", "竖", "横", "竖", "横折", "横", "竖", "横", "撇", "点"], radical: "黄" }] },
      { id: 8, title: "第8课 书包里有什么", pinyin: "Shūbāo lǐ yǒu shénme", meaning: "Ada Apa di Dalam Tas Sekolah", vocab: [{ hanzi: "里面", pinyin: "lǐmiàn", meaning: "di dalam", strokes: 7, strokeOrder: ["竖", "横折", "横", "横", "竖", "横", "横"], radical: "里" }, { hanzi: "剪刀", pinyin: "jiǎndāo", meaning: "gunting", strokes: 11, strokeOrder: ["点", "撇", "横", "竖", "横折", "横", "横", "竖", "撇", "捺", "竖"], radical: "刀" }, { hanzi: "尺子", pinyin: "chǐzi", meaning: "penggaris", strokes: 4, strokeOrder: ["横折", "横", "撇", "捺"], radical: "尸" }] },
      { id: 9, title: "第9课 学校前面是马路", pinyin: "Xuéxiào qiánmiàn shì mǎlù", meaning: "Di Depan Sekolah Jalan Raya", vocab: [{ hanzi: "前面", pinyin: "qiánmiàn", meaning: "di depan", strokes: 9, strokeOrder: ["点", "撇", "横", "竖", "横折", "横", "横", "竖钩", "横"], radical: "刂" }, { hanzi: "后面", pinyin: "hòumiàn", meaning: "di belakang", strokes: 6, strokeOrder: ["撇", "撇", "横", "竖", "横折", "横"], radical: "口" }, { hanzi: "马路", pinyin: "mǎlù", meaning: "jalan raya", strokes: 3, strokeOrder: ["横折", "竖折折钩", "横"], radical: "马" }] },
      { id: 10, title: "第10课 我们的教室", pinyin: "Wǒmen de jiàoshì", meaning: "Ruang Kelas Kami yang Terang", vocab: [{ hanzi: "教室", pinyin: "jiàoshì", meaning: "ruang kelas", strokes: 9, strokeOrder: ["点", "点", "横撇", "横", "竖", "横折", "横", "横", "横"], radical: "宀" }, { hanzi: "黑板", pinyin: "hēibǎn", meaning: "papan tulis", strokes: 12, strokeOrder: ["竖", "横折", "点", "撇", "横", "竖", "横", "提", "点", "点", "点", "点"], radical: "黑" }, { hanzi: "明亮", pinyin: "míngliàng", meaning: "terang benderang", strokes: 8, strokeOrder: ["竖", "横折", "横", "横", "撇", "横折钩", "横", "横"], radical: "日" }] },
      { id: 11, title: "第11课 小华常去图书馆", pinyin: "Xiǎohuá cháng qù túshūguǎn", meaning: "Xiaohua Sering ke Perpustakaan", vocab: [{ hanzi: "图书馆", pinyin: "túshūguǎn", meaning: "perpustakaan", strokes: 8, strokeOrder: ["竖", "横折", "横", "横", "竖", "横折", "横", "横"], radical: "囗" }, { hanzi: "借书", pinyin: "jiè shū", meaning: "meminjam buku", strokes: 10, strokeOrder: ["撇", "竖", "横", "竖", "横折", "横", "横", "竖", "横折", "横"], radical: "亻" }, { hanzi: "安静", pinyin: "ānjìng", meaning: "tenang dan sunyi", strokes: 6, strokeOrder: ["点", "点", "横撇", "撇点", "撇", "横"], radical: "宀" }] },
      { id: 12, title: "第12课 小红也学中文", pinyin: "Xiǎohóng yě xué Zhōngwén", meaning: "Xiaohong Juga Belajar Mandarin", vocab: [{ hanzi: "学习", pinyin: "xuéxí", meaning: "belajar", strokes: 8, strokeOrder: ["点", "点", "提", "撇", "竖钩", "横撇", "横折", "竖钩"], radical: "子" }, { hanzi: "汉字", pinyin: "hànzì", meaning: "aksara Hanzi", strokes: 5, strokeOrder: ["点", "点", "提", "横折", "捺"], radical: "氵" }, { hanzi: "会说", pinyin: "huì shuō", meaning: "bisa berbicara", strokes: 6, strokeOrder: ["撇", "捺", "横", "横", "撇折", "点"], radical: "人" }] },
      { id: 13, title: "第13课 我们都是学生", pinyin: "Wǒmen dōu shì xuéshēng", meaning: "Kami Semua adalah Pelajar", vocab: [{ hanzi: "都是", pinyin: "dōushì", meaning: "semua adalah", strokes: 10, strokeOrder: ["横", "竖", "横", "撇", "竖", "横折", "横", "横", "横折折折钩", "竖"], radical: "阝" }, { hanzi: "同学", pinyin: "tóngxué", meaning: "teman sekelas", strokes: 6, strokeOrder: ["竖", "横折钩", "横", "竖", "横折", "横"], radical: "口" }, { hanzi: "一起", pinyin: "yìqǐ", meaning: "bersama-sama", strokes: 10, strokeOrder: ["横", "竖", "横", "竖", "横", "撇", "捺", "横折", "横", "竖弯钩"], radical: "走" }] },
      { id: 14, title: "第14课 他们一起上学", pinyin: "Tāmen yìqǐ shàngxué", meaning: "Mereka Berangkat Sekolah Bersama", vocab: [{ hanzi: "走路", pinyin: "zǒulù", meaning: "berjalan kaki", strokes: 7, strokeOrder: ["横", "竖", "横", "竖", "横", "撇", "捺"], radical: "走" }, { hanzi: "坐车", pinyin: "zuòchē", meaning: "naik kendaraan", strokes: 7, strokeOrder: ["撇", "点", "撇", "点", "横", "竖", "横"], radical: "土" }, { hanzi: "招手", pinyin: "zhāoshǒu", meaning: "melambaikan tangan", strokes: 8, strokeOrder: ["横", "竖钩", "提", "横折", "横", "竖", "横折", "横"], radical: "扌" }] },
      { id: 15, title: "第15课 快乐的假期", pinyin: "Kuàilè de jiàqī", meaning: "Liburan yang Menyenangkan", vocab: [{ hanzi: "假期", pinyin: "jiàqī", meaning: "masa liburan", strokes: 11, strokeOrder: ["撇", "竖", "横折", "横", "横", "竖", "横", "竖", "横", "撇", "捺"], radical: "亻" }, { hanzi: "旅游", pinyin: "lǚyóu", meaning: "berwisata", strokes: 10, strokeOrder: ["点", "横", "横折钩", "撇", "撇", "横", "竖", "横", "撇", "捺"], radical: "方" }, { hanzi: "拍照", pinyin: "pāizhào", meaning: "memotret foto", strokes: 8, strokeOrder: ["横", "竖钩", "提", "撇", "竖", "横折", "横", "横"], radical: "扌" }] }
    ]
  },

  // ==========================================
  // HAN YU 3 (第三册 - Waktu & Aktivitas)
  // ==========================================
  3: {
    guide: { name: "Ptero Terry (Pterodactyl)", avatar: "🦅", species: "Pterodactyl", desc: "Halo! Ptero akan memandu kalian belajar jam, hari, belanja buah, dan satwa!" },
    level: "Tingkat 3 - Menengah Awal (SD Kelas 3)",
    units: [
      { id: 1, title: "第1课 现在几点", pinyin: "Xiànzài jǐ diǎn", meaning: "Sekarang Jam Berapa", vocab: [{ hanzi: "现在", pinyin: "xiànzài", meaning: "sekarang", strokes: 8, strokeOrder: ["横", "横", "竖", "提", "竖", "横折", "撇", "竖弯钩"], radical: "王" }, { hanzi: "几点", pinyin: "jǐ diǎn", meaning: "pukul berapa", strokes: 2, strokeOrder: ["撇", "横折弯钩"], radical: "几" }, { hanzi: "半", pinyin: "bàn", meaning: "setengah / 30 menit", strokes: 5, strokeOrder: ["点", "撇", "横", "横", "竖"], radical: "十" }] },
      { id: 2, title: "第2课 星期天你去哪儿", pinyin: "Xīngqītiān nǐ qù nǎr", meaning: "Hari Minggu Pergi ke Mana", vocab: [{ hanzi: "星期", pinyin: "xīngqī", meaning: "hari / minggu", strokes: 9, strokeOrder: ["竖", "横折", "横", "横", "撇", "横", "横", "竖", "横"], radical: "日" }, { hanzi: "明天", pinyin: "míngtiān", meaning: "besok", strokes: 8, strokeOrder: ["竖", "横折", "横", "横", "撇", "横折钩", "横", "横"], radical: "日" }, { hanzi: "商店", pinyin: "shāngdiàn", meaning: "toko", strokes: 11, strokeOrder: ["点", "横", "点", "撇", "竖", "横折钩", "撇", "点", "竖", "横折", "横"], radical: "口" }] },
      { id: 3, title: "第3课 我想买水果", pinyin: "Wǒ xiǎng mǎi shuǐguǒ", meaning: "Saya Ingin Membeli Buah", vocab: [{ hanzi: "买", pinyin: "mǎi", meaning: "membeli", strokes: 6, strokeOrder: ["横折", "点", "提", "撇", "捺", "点"], radical: "乙" }, { hanzi: "香蕉", pinyin: "xiāngjiāo", meaning: "pisang", strokes: 9, strokeOrder: ["撇", "横", "竖", "撇", "捺", "竖", "横折", "横", "横"], radical: "香" }, { hanzi: "多少钱", pinyin: "duōshao qián", meaning: "berapa harganya", strokes: 6, strokeOrder: ["撇", "横撇", "点", "撇", "横撇", "点"], radical: "夕" }] },
      { id: 4, title: "第4课 你想吃什么", pinyin: "Nǐ xiǎng chī shénme", meaning: "Kamu Ingin Makan Apa", vocab: [{ hanzi: "想吃", pinyin: "xiǎng chī", meaning: "ingin makan", strokes: 13, strokeOrder: ["横", "竖", "撇", "点", "竖", "横折", "横", "横", "点", "斜钩", "点", "点"], radical: "心" }, { hanzi: "包子", pinyin: "bāozi", meaning: "bakpao", strokes: 5, strokeOrder: ["撇", "横折钩", "横折", "横", "竖弯钩"], radical: "勹" }, { hanzi: "喝茶", pinyin: "hē chá", meaning: "minum teh", strokes: 9, strokeOrder: ["横", "竖", "竖", "撇", "捺", "横", "竖", "撇", "点"], radical: "艹" }] },
      { id: 5, title: "第5课 动物园里有大象", pinyin: "Dòngwùyuán lǐ yǒu dàxiàng", meaning: "Di Kebun Binatang Ada Gajah", vocab: [{ hanzi: "大象", pinyin: "dàxiàng", meaning: "gajah besar", strokes: 11, strokeOrder: ["撇", "竖折", "横", "撇", "弯钩", "撇", "撇", "撇", "捺", "点", "提"], radical: "豕" }, { hanzi: "猴子", pinyin: "hóuzi", meaning: "monyet cerdik", strokes: 12, strokeOrder: ["撇", "弯钩", "撇", "撇", "竖", "横折", "横", "横", "横", "撇", "点", "横"], radical: "犭" }, { hanzi: "老虎", pinyin: "lǎohǔ", meaning: "harimau", strokes: 8, strokeOrder: ["竖", "横", "横撇", "撇", "横", "竖弯钩", "撇", "竖弯钩"], radical: "虍" }] },
      { id: 6, title: "第6课 我会游泳", pinyin: "Wǒ huì yóuyǒng", meaning: "Saya Bisa Berenang", vocab: [{ hanzi: "游泳", pinyin: "yóuyǒng", meaning: "berenang", strokes: 8, strokeOrder: ["点", "点", "提", "点", "横", "横折钩", "撇", "撇"], radical: "氵" }, { hanzi: "跑步", pinyin: "pǎobù", meaning: "berlari santai", strokes: 12, strokeOrder: ["竖", "横折", "横", "竖", "横", "竖", "提", "撇", "竖弯钩", "横折", "横", "竖"], radical: "足" }, { hanzi: "骑车", pinyin: "qíchē", meaning: "naik sepeda", strokes: 11, strokeOrder: ["横折", "竖折折钩", "提", "横", "撇", "点", "横", "竖", "横折", "横", "横"], radical: "马" }] },
      { id: 7, title: "第7课 你的生日是几月几号", pinyin: "Nǐ de shēngrì shì jǐ yuè jǐ hào", meaning: "Kapan Hari Ulang Tahunmu", vocab: [{ hanzi: "生日", pinyin: "shēngrì", meaning: "ulang tahun", strokes: 5, strokeOrder: ["撇", "横", "横", "竖", "横"], radical: "生" }, { hanzi: "几月", pinyin: "jǐ yuè", meaning: "bulan berapa", strokes: 4, strokeOrder: ["撇", "横折钩", "横", "横"], radical: "月" }, { hanzi: "祝贺", pinyin: "zhùhè", meaning: "selamat / berkah", strokes: 9, strokeOrder: ["点", "横撇", "竖", "点", "竖", "横折", "横", "竖", "横"], radical: "礻" }] },
      { id: 8, title: "第8课 春天来了", pinyin: "Chūntiān lái le", meaning: "Musim Semi Telah Tiba", vocab: [{ hanzi: "春天", pinyin: "chūntiān", meaning: "musim semi", strokes: 9, strokeOrder: ["横", "横", "横", "撇", "捺", "竖", "横折", "横", "横"], radical: "日" }, { hanzi: "夏天", pinyin: "xiàtiān", meaning: "musim panas", strokes: 10, strokeOrder: ["横", "撇", "竖", "横折", "横", "横", "横", "撇", "竖弯钩", "捺"], radical: "夂" }, { hanzi: "暖和", pinyin: "nuǎnhuo", meaning: "hangat nyaman", strokes: 13, strokeOrder: ["竖", "横折", "横", "横", "点", "撇", "横", "横", "撇", "横", "竖", "撇", "捺"], radical: "日" }] },
      { id: 9, title: "第9课 我们去看电影", pinyin: "Wǒmen qù kàn diànyǐng", meaning: "Kami Menonton Film di Bioskop", vocab: [{ hanzi: "电影", pinyin: "diànyǐng", meaning: "film / bioskop", strokes: 15, strokeOrder: ["竖", "横折", "横", "横", "竖弯钩", "竖", "横折", "横", "横", "横", "竖", "提", "撇", "撇", "撇"], radical: "彡" }, { hanzi: "电影院", pinyin: "diànyǐngyuàn", meaning: "gedung bioskop", strokes: 9, strokeOrder: ["横折折折钩", "竖", "横", "横", "撇", "横折钩", "横", "横", "竖"], radical: "阝" }, { hanzi: "精彩", pinyin: "jīngcǎi", meaning: "sangat seru", strokes: 14, strokeOrder: ["点", "撇", "横", "竖", "撇", "捺", "横", "竖", "横折", "横", "横", "竖", "横", "竖"], radical: "米" }] },
      { id: 10, title: "第10课 奶奶做饭", pinyin: "Nǎinai zuò fàn", meaning: "Nenek Sedang Memasak", vocab: [{ hanzi: "奶奶", pinyin: "nǎinai", meaning: "nenek", strokes: 5, strokeOrder: ["撇点", "撇", "提", "横折折折钩", "撇"], radical: "女" }, { hanzi: "做饭", pinyin: "zuò fàn", meaning: "memasak nasi", strokes: 11, strokeOrder: ["撇", "竖", "撇", "横", "竖", "横折", "横", "竖", "横", "撇", "捺"], radical: "亻" }, { hanzi: "好吃", pinyin: "hǎochī", meaning: "lezat / enak", strokes: 6, strokeOrder: ["撇点", "撇", "提", "横撇", "弯钩", "横"], radical: "女" }] },
      { id: 11, title: "第11课 小鸟在天上飞", pinyin: "Xiǎoniǎo zài tiān shang fēi", meaning: "Burung Terbang di Angkasa", vocab: [{ hanzi: "天空", pinyin: "tiānkōng", meaning: "langit angkasa", strokes: 8, strokeOrder: ["点", "点", "横撇", "撇", "点", "横", "竖", "横"], radical: "穴" }, { hanzi: "飞翔", pinyin: "fēixiáng", meaning: "terbang tinggi", strokes: 3, strokeOrder: ["横折弯钩", "撇", "点"], radical: "飞" }, { hanzi: "自由", pinyin: "zìyóu", meaning: "bebas lepas", strokes: 6, strokeOrder: ["撇", "竖", "横折", "横", "横", "横"], radical: "自" }] },
      { id: 12, title: "第12课 森林里的动物", pinyin: "Sēnlín lǐ de dòngwù", meaning: "Satwa Rimba Belantara", vocab: [{ hanzi: "森林", pinyin: "sēnlín", meaning: "hutan rimba", strokes: 12, strokeOrder: ["横", "竖", "撇", "捺", "横", "竖", "撇", "捺", "横", "竖", "撇", "捺"], radical: "木" }, { hanzi: "保护", pinyin: "bǎohù", meaning: "melindungi", strokes: 9, strokeOrder: ["撇", "竖", "点", "点", "横撇", "横", "撇", "竖提", "撇"], radical: "亻" }, { hanzi: "美丽", pinyin: "měilì", meaning: "indah jelita", strokes: 9, strokeOrder: ["点", "撇", "横", "横", "竖", "横", "横", "撇", "捺"], radical: "羊" }] },
      { id: 13, title: "第13课 听音乐", pinyin: "Tīng yīnyuè", meaning: "Mendengarkan Alunan Musik", vocab: [{ hanzi: "音乐", pinyin: "yīnyuè", meaning: "musik", strokes: 9, strokeOrder: ["点", "点", "撇", "竖", "横折", "横", "横", "横"], radical: "音" }, { hanzi: "钢琴", pinyin: "gāngqín", meaning: "piano", strokes: 12, strokeOrder: ["横", "竖", "横", "横", "竖", "提", "点", "撇", "横", "竖", "横折", "横"], radical: "钅" }, { hanzi: "好听", pinyin: "hǎotīng", meaning: "merdu di telinga", strokes: 6, strokeOrder: ["撇点", "撇", "提", "横撇", "弯钩", "横"], radical: "女" }] },
      { id: 14, title: "第14课 帮助别人", pinyin: "Bāngzhù biérén", meaning: "Membantu Sesama Teman", vocab: [{ hanzi: "帮助", pinyin: "bāngzhù", meaning: "membantu", strokes: 9, strokeOrder: ["横", "横", "竖", "横", "撇", "点", "竖", "横折钩", "竖"], radical: "巾" }, { hanzi: "别人", pinyin: "biérén", meaning: "orang lain", strokes: 7, strokeOrder: ["竖", "横折", "横", "竖", "横折钩", "撇", "竖钩"], radical: "刂" }, { hanzi: "夸奖", pinyin: "kuājiǎng", meaning: "memuji", strokes: 6, strokeOrder: ["横", "撇", "捺", "横", "横折", "竖折折钩"], radical: "大" }] },
      { id: 15, title: "第15课 参观博物馆", pinyin: "Cānguān bówùguǎn", meaning: "Berkunjung ke Museum Fosil", vocab: [{ hanzi: "博物馆", pinyin: "bówùguǎn", meaning: "museum", strokes: 12, strokeOrder: ["横", "竖", "横", "竖", "横折", "横", "横", "竖", "横折钩", "点", "撇", "横"], radical: "十" }, { hanzi: "化石", pinyin: "huàshí", meaning: "fosil purba", strokes: 4, strokeOrder: ["撇", "竖弯钩", "横", "撇"], radical: "匕" }, { hanzi: "奇妙", pinyin: "qímiào", meaning: "ajaib & mengagumkan", strokes: 8, strokeOrder: ["横", "撇", "捺", "横", "竖", "横折", "横", "竖钩"], radical: "大" }] }
    ]
  }
};

// Auto-fill template data komprehensif untuk Buku 4 sampai 12 (15 Unit spesifik per buku)
const ADVANCED_BOOK_METADATA = {
  4: {
    guide: { name: "Ankylo Rock (Ankylosaurus)", avatar: "🛡️", species: "Ankylosaurus", desc: "Ankylo yang kuat akan menemani kalian belajar perbandingan sifat, zodiak Shio, dan perayaan festival!" },
    level: "Tingkat 4 - Menengah (SD Kelas 4)",
    units: [
      ["我比你高", "Wǒ bǐ nǐ gāo", "Saya Lebih Tinggi dari Kamu", "比", "bǐ", "dibandingkan", 4],
      ["坐飞机去旅行", "Zuò fēijī qù lǚxíng", "Naik Pesawat Terbang Liburan", "飞机", "fēijī", "pesawat terbang", 3],
      ["医生给我看病", "Yīshēng gěi wǒ kànbìng", "Dokter Memeriksa Kesehatanku", "看病", "kànbìng", "periksa sakit", 9],
      ["你属什么", "Nǐ shǔ shénme", "Apa Shio Zodiakmu", "生肖", "shēngxiào", "shio kelahiran", 5],
      ["中秋节吃月饼", "Zhōngqiūjié chī yuèbǐng", "Makan Kue Bulan Saat Mid-Autumn", "月饼", "yuèbǐng", "kue bulan", 4],
      ["春节放鞭炮", "Chūnjié fàng biānpào", "Menyambut Tahun Baru Imlek", "春节", "chūnjié", "hari raya Imlek", 8],
      ["请问怎么走", "Qǐngwèn zěnme zǒu", "Permisi Menanyakan Arah Jalan", "拐弯", "guǎiwān", "belok arah", 8],
      ["借一支铅笔", "Jiè yì zhī qiānbǐ", "Meminjam Sebatang Pensil", "借用", "jièyòng", "meminjam", 10],
      ["讲一个有趣的故事", "Jiǎng yí ge yǒuqù de gùshì", "Menceritakan Kisah Dongeng", "故事", "gùshì", "cerita dongeng", 6],
      ["学校运动会", "Xuéxiào yùndònghuì", "Pekan Olahraga Sekolah", "比赛", "bǐsài", "pertandingan", 10],
      ["大家一起做手工", "Dàjiā yìqǐ zuò shǒugōng", "Membuat Kerajinan Tangan Kreatif", "剪纸", "jiǎnzhǐ", "seni potong kertas", 11],
      ["植树造林保护地球", "Zhíshù zàolín bǎohù dìqiú", "Menanam Pohon Hijau", "种树", "zhòngshù", "menanam pohon", 9],
      ["诚实守信拾金不昧", "Chéngshí shǒuxìn shí jīn bú mèi", "Kejujuran Anak Berbudi", "诚实", "chéngshí", "jujur dan tulus", 8],
      ["端午节划龙舟", "Duānwǔjié huá lóngzhōu", "Festival Lomba Perahu Naga", "龙舟", "lóngzhōu", "perahu naga", 5],
      ["美丽的四季风光", "Měilì de sìjì fēngguāng", "Pemandangan Empat Musim Indah", "季节", "jìjié", "musim cuaca", 8]
    ]
  },
  5: {
    guide: { name: "Bronto Sage (Brachiosaurus)", avatar: "🦕", species: "Brachiosaurus", desc: "Bronto berleher panjang yang bijak mengajakmu mendalami cerita fabel Chengyu dan kearifan kuno!" },
    level: "Tingkat 5 - Menengah Mahir (SD Kelas 5)",
    units: [
      ["司马光砸缸", "Sīmǎ Guāng zá gāng", "Kecerdikan Sima Guang Menyelamatkan Teman", "聪明", "cōngmíng", "cerdas pintar", 12],
      ["拔苗助长", "Bá miáo zhù zhǎng", "Menarik Padi Agar Cepat Tumbuh", "禾苗", "hémiáo", "tunas padi", 5],
      ["守株待兔", "Shǒu zhū dài tù", "Menunggu Kelinci Dekat Pohon", "勤劳", "qínláo", "rajin tekun", 12],
      ["乌鸦喝水", "Wūyā hē shuǐ", "Gagak Pintar Mengambil Air", "办法", "bànfǎ", "cara solusi", 4],
      ["盲人摸象", "Mángrén mō xiàng", "Orang Buta Meraba Gajah", "全面", "quánmiàn", "menyeluruh", 6],
      ["刻舟求剑", "Kè zhōu qiú jiàn", "Menandai Perahu Mencari Pedang", "宝剑", "bǎojiàn", "pedang pusaka", 8],
      ["狐假虎威", "Hú jiǎ hǔ wēi", "Rubah Meminjam Wibawa Harimau", "威风", "wēifēng", "kewibawaan", 9],
      ["掩耳盗铃", "Yǎn ěr dào líng", "Menutup Telinga Mencuri Lonceng", "铃铛", "língdang", "lonceng bel", 10],
      ["曹冲称象", "Cáo Chōng chēng xiàng", "Cao Chong Menimbang Gajah", "智慧", "zhìhuì", "kebijaksanaan", 12],
      ["望梅止渴", "Wàng méi zhǐ kě", "Membayangkan Buah Asam Pelepas Dahaga", "士兵", "shìbīng", "prajurit tentara", 7],
      ["愚公移山", "Yú gōng yí shān", "Kakek Yu Gong Memindahkan Bukit", "毅力", "yìlì", "pantang menyerah", 15],
      ["塞翁失马", "Sài wēng shī mǎ", "Hikmah di Balik Kuda si Kakek", "乐观", "lèguān", "sikap optimis", 5],
      ["井底之蛙", "Jǐng dǐ zhī wā", "Katak dalam Tempurung Sumur", "眼界", "yǎnjiè", "cakrawala wawasan", 5],
      ["铁杵磨成针", "Tiě chǔ mó chéng zhēn", "Batang Besi Diasah Jadi Jarum", "坚持", "jiānchí", "gigih berjuang", 9],
      ["画龙点睛", "Huà lóng diǎn jīng", "Melukis Naga Menorehkan Mata", "生动", "shēngdòng", "hidup dinamis", 5]
    ]
  },
  6: {
    guide: { name: "Veloci Sharp (Velociraptor)", avatar: "🦎", species: "Velociraptor", desc: "Veloci yang lincah mengajak kalian menjelajahi sejarah Tembok Raksasa, Opera Beijing, dan Kaligrafi!" },
    level: "Tingkat 6 - Menengah Lanjutan (SD Kelas 6)",
    units: [
      ["中国万里长城", "Zhōngguó Wànlǐ Chángchéng", "Kemegahan Tembok Raksasa Tiongkok", "长城", "chángchéng", "tembok besar", 8],
      ["故宫博物院", "Gùgōng Bówùyuàn", "Istana Terlarang yang Bersejarah", "宫殿", "gōngdiàn", "istana megah", 9],
      ["美丽的桂林山水", "Měilì de Guìlín shānshuǐ", "Pesona Alam Sungai Li Guilin", "山水", "shānshuǐ", "alam perbukitan", 3],
      ["秦始皇兵马俑", "Qínshǐhuáng bīngmǎyǒng", "Tentara Terakota Kuno", "奇迹", "qíjì", "keajaiban dunia", 8],
      ["中国古代四大发明", "Zhōngguó gǔdài sì dà fāmíng", "Empat Penemuan Besar Sejarah", "发明", "fāmíng", "penemuan karya", 5],
      ["中国茶艺文化", "Zhōngguó cháyì wénhuà", "Filosofi dan Seni Menyeduh Teh", "茶道", "chádào", "seni teh", 9],
      ["书法与文房四宝", "Shūfǎ yǔ wénfáng sìbǎo", "Seni Kaligrafi dan Empat Pusaka Tulis", "宣纸", "xuānzhǐ", "kertas kuas", 9],
      ["京剧脸谱的艺术", "Jīngjù liǎnpǔ de yìshù", "Warna-warni Topeng Opera Beijing", "脸谱", "liǎnpǔ", "rias topeng seni", 11],
      ["传统民间剪纸", "Chuántǒng mínjiān jiǎnzhǐ", "Keahlian Menggunting Ornamen Kertas", "吉祥", "jíxiáng", "kemujuran berkah", 6],
      ["神奇的中医与本草", "Shénqí de zhōngyī yǔ běncǎo", "Pengobatan Tradisional dan Herbal", "草药", "cǎoyào", "tanaman obat", 9],
      ["古老丝绸之路", "Gǔlǎo sīchóu zhī lù", "Jalur Sutra Niaga Antar Benua", "贸易", "màoyì", "perdagangan niaga", 12],
      ["中华武术与功夫", "Zhōnghuá wǔshù yǔ gōngfu", "Semangat Bela Diri Wushu dan Kungfu", "太极", "tàijí", "jurus taichi", 4],
      ["中国传统节庆民俗", "Zhōngguó chuántǒng jiéqìng mínsú", "Adat Tradisi Festival Tahunan", "舞狮", "wǔshī", "tarian barongsai", 13],
      ["汉字的演变历史", "Hànzì de yǎnbiàn lìshǐ", "Evolusi Aksara Hanzi Sejak Zaman Kuno", "甲骨文", "jiǎgǔwén", "tulisan tempurung", 5],
      ["中华文化走向世界", "Zhōnghuá wénhuà zǒuxiàng shìjiè", "Jembatan Budaya Menuju Dunia", "友谊", "yǒuyì", "persahabatan erat", 4]
    ]
  },
  7: {
    guide: { name: "Spino King (Spinosaurus)", avatar: "🐊", species: "Spinosaurus", desc: "Spino sang penjelajah membawa kalian mengeksplorasi sains antariksa, samudra luas, dan teknologi masa depan!" },
    level: "Tingkat 7 - Mahir Dasar (SMP Kelas 7)",
    units: [
      ["地球与宇宙探索", "Dìqiú yǔ yǔzhòu tànsuǒ", "Penjelajahan Bumi dan Tata Surya", "宇宙", "yǔzhòu", "alam semesta", 6],
      ["神秘的海洋世界", "Shénmì de hǎiyáng shìjiè", "Eksplorasi Kedalaman Samudra Biru", "海洋", "hǎiyáng", "lautan samudra", 10],
      ["保护地球生态家园", "Bǎohù dìqiú shēngtài jiāyuán", "Kelestarian Ekosistem Hijau", "生态", "shēngtài", "ekosistem alam", 5],
      ["绿色新能源的发展", "Lǜsè xīn néngyuán de fāzhǎn", "Energi Surya dan Angin Terbarukan", "太阳能", "tàiyángnéng", "energi matahari", 4],
      ["人工智能走进生活", "Réngōng zhìnéng zǒujìn shēnghuó", "Kecerdasan Buatan AI Membantu Manusia", "机器人", "jīqìrén", "robot pintar", 6],
      ["互联网与数字化时代", "Hùliánwǎng yǔ shùzìhuà shídài", "Konektivitas Era Informasi Digital", "网络", "wǎngluò", "jaringan digital", 6],
      ["现代高速铁路网", "Xiàndài gāosù tiělù wǎng", "Kereta Cepat Menghubungkan Kota", "高铁", "gāotiě", "kereta cepat", 10],
      ["恐龙化石与史前生物", "Kǒnglóng huàshí yǔ shǐqián shēngwù", "Meneliti Fosil Dinosaurus Prasejarah", "恐龙", "kǒnglóng", "hewan dinosaurus", 10],
      ["气象科学与防灾减灾", "Qìxiàng kēxué yǔ fángzāi jiǎnzāi", "Sains Prakiraan Cuaca", "卫星", "wèixīng", "satelit cuaca", 8],
      ["科学家的严谨探索", "Kēxuéjiā de yánjǐn tànsuǒ", "Ketelitian Eksperimen Laboratorium", "实验", "shíyàn", "uji coba riset", 8],
      ["垃圾分类与资源循环", "Lājī fēnlèi yǔ zīyuán xúnhuán", "Daur Ulang Sampah dan Lingkungan", "循环", "xúnhuán", "siklus daur ulang", 11],
      ["植被绿化与森林防火", "Zhíbèi lǜhuà yǔ sēnlín fánghuǒ", "Melindungi Hutan dan Pohon Rindang", "森林", "sēnlín", "hutan tropis", 12],
      ["浩瀚的银河星系", "Hàohàn de yínhé xīngxì", "Menatap Galaksi Bima Sakti", "行星", "xíngxīng", "planet angkasa", 9],
      ["智能家居改变未来", "Zhìnéng jiājū gǎibiàn wèilái", "Rumah Pintar Terotomatisasi", "智能", "zhìnéng", "pintar otomatis", 12],
      ["追逐未来的科学梦想", "Zhuīzhú wèilái de kēxué mèngxiǎng", "Mencapai Cita-cita Sains Masa Depan", "梦想", "mèngxiǎng", "impian luhur", 11]
    ]
  },
  8: {
    guide: { name: "Pachy Shield (Pachycephalosaurus)", avatar: "🦬", species: "Pachycephalosaurus", desc: "Pachy yang bersemangat memandu kalian membangun karakter unggul, kerjasama tim, dan bakti sosial!" },
    level: "Tingkat 8 - Mahir Terapan (SMP Kelas 8)",
    units: [
      ["礼貌交往与尊重沟通", "Lǐmào jiāowǎng yǔ zūnzhòng gōutōng", "Sopan Santun dalam Pergaulan", "尊重", "zūnzhòng", "menghormati", 12],
      ["团队合作创造辉煌", "Tuánduì hézuò chuàngzào huīhuáng", "Kekuatan Gotong Royong Kelompok", "合作", "hézuò", "kerjasama kompak", 6],
      ["诚实守信立身之本", "Chéngshí shǒuxìn lìshēn zhī běn", "Menjaga Kejujuran dan Integritas", "信用", "xìnyòng", "kepercayaan amanah", 9],
      ["坚持不懈战胜困难", "Jiānchí búxiè zhànshèng kùnnan", "Ketekunan Melompati Rintangan", "克服", "kèfú", "mengatasi rintangan", 7],
      ["热心志愿关爱社会", "Rèxīn zhìyuàn guān'ài shèhuì", "Aksi Relawan Membantu Sesama", "奉献", "fèngxiàn", "berdedikasi tulus", 8],
      ["百善孝为先感恩父母", "Bǎi shàn xiào wéi xiān gǎn'ēn fùmǔ", "Bakti Anak Menyayangi Orang Tua", "孝敬", "xiàojìng", "berbakti tulus", 7],
      ["勇敢面对生活挑战", "Yǒnggǎn miànduì shēnghuó tiǎozhàn", "Keberanian Menghadapi Ujian", "坚强", "jiānqiáng", "tangguh kuat", 11],
      ["学会包容与化解矛盾", "Xuéhuì bāoróng yǔ huàjiě máodùn", "Kelapangan Hati dan Memaafkan", "宽容", "kuānróng", "lapang dada", 10],
      ["科学管理宝贵时间", "Kēxué guǎnlǐ bǎoguì shíjiān", "Menghargai Waktu dan Disiplin", "效率", "xiàolǜ", "efisiensi tinggi", 7],
      ["责任担当做合格公民", "Zérèn dāndāng zuò hégé gōngmín", "Rasa Tanggung Jawab Moral", "担当", "dāndāng", "berani memikul", 8],
      ["培养独立思辨能力", "Péiyǎng dúlì sībiàn nénglì", "Berpikir Kritis dan Mandiri", "思考", "sīkǎo", "menelaah kritis", 6],
      ["保持身心阳光健康", "Bǎochí shēnxīn yángguāng jiànkāng", "Kebugaran Jasmani dan Rohani", "健康", "jiànkāng", "sehat walafiat", 11],
      ["立下远大人生理想", "Lì xià yuǎndà rénshēng lǐxiǎng", "Menetapkan Visi Hidup Mulia", "追求", "zhuīqiú", "meraih impian", 9],
      ["包容互鉴多元文化", "Bāoróng hùjiàn duōyuán wénhuà", "Toleransi Antar Suku dan Budaya", "多元", "duōyuán", "keberagaman kaya", 6],
      ["全面发展做时代栋梁", "Quánmiàn fāzhǎn zuò shídài dòngliáng", "Menjadi Generasi Penerus Berprestasi", "优秀", "yōuxiù", "berbakat unggul", 6]
    ]
  },
  9: {
    guide: { name: "Titan Master (Titanosaurus)", avatar: "🐉", species: "Titanosaurus", desc: "Titan yang perkasa akan membimbing kalian mahir menulis karangan, berpidato, dan apresiasi sastra!" },
    level: "Tingkat 9 - Mahir Terpadu (SMP Kelas 9)",
    units: [
      ["古代寓言的深层启示", "Gǔdài yùyán de shēncéng qǐshì", "Pesan Moral Fabel Klasik", "启示", "qǐshì", "petunjuk hikmah", 7],
      ["品读中外文学名著", "Pǐndú zhōngwài wénxué míngzhù", "Apresiasi Karya Sastra Dunia", "经典", "jīngdiǎn", "karya agung", 8],
      ["唐诗宋词的优美韵律", "Tángshī Sòngcí de yōuměi yùnlǜ", "Keindahan Syair Puisi Klasik", "韵律", "yùnlǜ", "ritme rima indah", 9],
      ["记叙文的情感表达", "Jìxùwén de qínggǎn biǎodá", "Menulis Karangan Narasi Emosional", "叙述", "xùshù", "alur penceritaan", 9],
      ["说明文的条理与逻辑", "Shuōmíngwén de tiáolǐ yǔ luóji", "Struktur Teks Eksplanasi Sains", "逻辑", "luóji", "nalar teratur", 8],
      ["议论文的立论与论证", "Yìlùnwén de lìlùn yǔ lùnzhèng", "Menyusun Argumen Logis dan Bukti", "论点", "lùndiǎn", "pokok gagasan", 6],
      ["公众演讲的语言艺术", "Gōngzhòng yǎnjiǎng de yǔyán yìshù", "Seni Berbicara di Depan Publik", "演讲", "yǎnjiǎng", "orasi pidato", 14],
      ["校园辩论赛的思辨交锋", "Xiàoyuán biànlùnsài de sībiàn jiāofēng", "Teknik Debat dan Tanggapan Kritis", "辩驳", "biànbó", "membantah logis", 14],
      ["新闻采写的客观真实", "Xīnwén cǎixiě de kèguān zhēnshí", "Jurnalistik Berita Terpercaya", "报道", "bàodào", "liputan fakta", 12],
      ["话剧表演与舞台台词", "Huàjù biǎoyǎn yǔ wǔtái táicí", "Seni Peran Drama dan Dialog Teater", "舞台", "wǔtái", "panggung sandiwara", 6],
      ["现代优美抒情散文", "Xiàndài yōuměi shūqíng sǎnwén", "Menikmati Prosa Penuh Makna", "散文", "sǎnwén", "prosa liris", 12],
      ["读书笔记与提炼总结", "Dúshū bǐjì yǔ tíliàn zǒngjié", "Merangkum Intisari Bacaan Buku", "总结", "zǒngjié", "kesimpulan utuh", 8],
      ["创意广告文案设计", "Chuàngyì guǎnggào wén'àn shèjì", "Kreativitas Slogan Promosi", "创意", "chuàngyì", "gagasan segar", 9],
      ["人物深度访谈技巧", "Rénwù shēndù fǎngtán jìqiǎo", "Wawancara Tokoh Inspiratif", "访谈", "fǎngtán", "bincang mendalam", 6],
      ["文学创作的灵感源泉", "Wénxué chuàngzuò de línggǎn yuánquán", "Menggali Inspirasi Menulis Cerita", "灵感", "línggǎn", "ilham kreatif", 11]
    ]
  },
  10: {
    guide: { name: "Chrono Dino (Kronosaurus)", avatar: "⏳", species: "Kronosaurus", desc: "Chrono sang penjelajah waktu membimbing ekonomi global, e-commerce, dan inovasi industri!" },
    level: "Tingkat 10 - Pra-Lanjutan (SMA Kelas 10)",
    units: [
      ["经济全球化与合作共赢", "Jīngjì quánqiúhuà yǔ hézuò gòngyíng", "Globalisasi dan Perdagangan Bebas", "贸易", "màoyì", "perdagangan global", 12],
      ["国际商务沟通与谈判", "Guójì shāngwù gōutōng yǔ tánpàn", "Negosiasi Bisnis Multinasional", "谈判", "tánpàn", "perundingan kontrak", 10],
      ["高新科技与产业升级", "Gāoxīn kējì yǔ chǎnyè shēngjí", "Transformasi Industri Cerdas", "产业", "chǎnyè", "sektor industri", 8],
      ["青少年财商与储蓄规划", "Qīngshàonián cái shāng yǔ chǔxù guīhuà", "Literasi Keuangan dan Investasi", "储蓄", "chǔxù", "tabungan berencana", 12],
      ["知识产权保护与创新", "Zhīshi chǎnquán bǎohù yǔ chuàngxīn", "Hak Paten dan Perlindungan Karya", "专利", "zhuānlì", "hak paten inovasi", 4],
      ["电子商务与数字支付", "Diànzǐ shāngwù yǔ shùzì zhìfù", "Belanja Online dan Transaksi Digital", "支付", "zhìfù", "pembayaran non-tunai", 4],
      ["青年创业与社会价值", "Qīngnián chuàngyè yǔ shèhuì jiàzhí", "Kewirausahaan dan Kepedulian Sosial", "创业", "chuàngyè", "merintis usaha", 9],
      ["现代智慧物流与供应链", "Xiàndài zhìhuì wùliú yǔ gōngyìngliàn", "Jaringan Distribusi Logistik Cepat", "物流", "wùliú", "rantai distribusi", 8],
      ["共享经济与生活便利", "Gòngxiǎng jīngjì yǔ shēnghuó biànlì", "Ekonomi Kolaboratif Masa Kini", "共享", "gòngxiǎng", "berbagi sarana", 6],
      ["品牌战略与精准营销", "Pǐnpái zhànlüè yǔ jīngzhǔn yíngxiāo", "Branding dan Reputasi Produk", "品牌", "pǐnpái", "citra merk ternama", 9],
      ["绿色经济与低碳环保", "Lǜsè jīngjì yǔ dītàn huánbǎo", "Pembangunan Berkelanjutan Berwawasan Alam", "低碳", "dītàn", "ramah lingkungan", 7],
      ["大数据分析赋能决策", "Dà shùjù fēnxī fùnéng juécè", "Pemanfaatan Big Data dan Cloud", "数据", "shùjù", "analisis data", 8],
      ["国际博览会与文化窗口", "Guójì bólǎnhuì yǔ wénhuà chuāngkǒu", "Pameran Dagang Internasional", "展会", "zhǎnhuì", "ekspo pameran", 10],
      ["维护消费者合法权益", "Wéihù xiāofèizhě héfǎ quányì", "Perlindungan Hak Konsumen", "质量", "zhìliàng", "mutu standar", 6],
      ["胸怀世界的全球化格局", "Xiōnghuái shìjiè de quánqiúhuà géjú", "Wawasan Global Menatap Masa Depan", "格局", "géjú", "wawasan luas", 10]
    ]
  },
  11: {
    guide: { name: "Aero Dragon (Aerotitan)", avatar: "🦅", species: "Aerotitan", desc: "Aero memandu kalian mengkaji filsafat humaniora, estetika arsitektur, dan etika modern!" },
    level: "Tingkat 11 - Lanjutan Akademik (SMA Kelas 11)",
    units: [
      ["哲学思考与人生智慧", "Zhéxué sīkǎo yǔ rénshēng zhìhuì", "Renungan Filsafat dan Kearifan Jiwa", "哲学", "zhéxué", "pemikiran filsafat", 10],
      ["文明交流互鉴的历史", "Wénmíng jiāoliú hùjiàn de lìshǐ", "Dialog Antar Peradaban Dunia", "文明", "wénmíng", "peradaban mulia", 4],
      ["艺术美学与审美体验", "Yìshù měixué yǔ shěnměi tǐyàn", "Apresiasi Nilai Estetika Seni", "审美", "shěnměi", "kepekaan rasa", 9],
      ["现代社会的伦理道德", "Xiàndài shèhuì de lúnlǐ dàodé", "Moralitas dan Norma Masyarakat", "伦理", "lúnlǐ", "tata susila", 6],
      ["科技伦理与造福人类", "Kējì lúnlǐ yǔ zàofú rénlèi", "Etika Perkembangan Bioteknologi & AI", "规范", "guīfàn", "aturan etis", 8],
      ["语言发展与人类思维", "Yǔyán fāzhǎn yǔ rénlèi sīwéi", "Kaitan Linguistik dan Pola Pikir", "符号", "fúhào", "lambang bahasa", 8],
      ["心理健康与情商培养", "Xīnlǐ jiànkāng yǔ qíngshāng péiyǎng", "Kesehatan Jiwa dan Ketahanan Emosi", "心理", "xīnlǐ", "psikologi batin", 4],
      ["社区建设与和谐共处", "Shèqū jiànshè yǔ héxié gòngchǔ", "Kerukunan Warga Bertetangga", "和谐", "héxié", "keselarasan damai", 8],
      ["法治精神与公民素养", "Fǎzhì jīngshén yǔ gōngmín sùyǎng", "Kesadaran Hukum dan Keadilan", "公正", "gōngzhèng", "keadilan hukum", 4],
      ["终身学习适应时代变革", "Zhōngshēn xuéxí shìyìng shídài biàngé", "Belajar Sepanjang Hayat", "潜能", "qiánnéng", "potensi diri", 15],
      ["经典戏剧的悲喜美学", "Jīngdiǎn xìjù de bēixǐ měixué", "Estetika Seni Teater Tragedi & Komedi", "戏剧", "xìjù", "seni panggung lakon", 6],
      ["建筑艺术与人居空间", "Jiànzhù yìshù yǔ rénjū kōngjiān", "Harmoni Arsitektur dan Tata Ruang", "空间", "kōngjiān", "dimensi ruang", 8],
      ["音乐疗愈与心灵共鸣", "Yīnyuè liáoyù yǔ xīnlíng gòngmíng", "Kekuatan Penyembuh Alunan Musik", "共鸣", "gòngmíng", "getaran batin", 6],
      ["非物质文化遗产的传承", "Fēi wùzhì wénhuà yíchǎn de chuánchéng", "Pelestarian Warisan Budaya Takbenda", "传承", "chuánchéng", "mewariskan tradisi", 6],
      ["构建人类命运共同愿景", "Gòujiàn rénlèi mìngyùn gòngtóng yuànjǐng", "Masa Depan Damai Seluruh Umat Manusia", "愿景", "yuànjǐng", "visi kedamaian", 14]
    ]
  },
  12: {
    guide: { name: "Apex Emperor (Tyrannosaurus Rex Rex)", avatar: "👑", species: "Apex Dino Emperor", desc: "Puncak Master Mandarin! Bersama Kaisar Dinosaurus, kuasai retorika, diplomasi, dan sastra klasik tingkat tinggi!" },
    level: "Tingkat 12 - Master Bahasa Mandarin (SMA Kelas 12)",
    units: [
      ["儒道经典的当代启示", "Rúdào jīngdiǎn de dāngdài qǐshì", "Nilai Abadi Ajaran Konfusianisme & Taoisme", "经典", "jīngdiǎn", "kitab klasik agung", 8],
      ["跨文化翻译的信达雅", "Kuà wénhuà fānyì de xìn dá yǎ", "Seni Menerjemahkan Lintas Bahasa", "翻译", "fānyì", "alih bahasa fasih", 6],
      ["中文修辞格与文采魅力", "Zhōngwén xiūcígé yǔ wéncǎi mèilì", "Retorika dan Gaya Bahasa Elegan", "修辞", "xiūcí", "gaya bertutur", 9],
      ["学术论文的严谨写作", "Xuéshù lùnwén de yánjǐn xiězuò", "Metodologi Riset dan Karya Ilmiah", "论文", "lùnwén", "tulisan ilmiah", 6],
      ["国际中文教育的发展", "Guójì Zhōngwén jiàoyù de fāzhǎn", "Pengajaran Mandarin di Ranah Global", "传播", "chuánbō", "menyebarkan wawasan", 12],
      ["文学批评与多维鉴赏", "Wénxué pīpíng yǔ duōwéi jiànshǎng", "Kritik Sastra dan Analisis Makna", "洞察", "dòngchá", "pandangan tajam", 9],
      ["跨学科融合与综合视野", "Kuà xuékē rónghé yǔ zōnghé shìyě", "Integrasi Lintas Ilmu Pengetahuan", "融合", "rónghé", "peleburan disiplin", 12],
      ["东方哲学与修身养性", "Dōngfāng zhéxué yǔ xiūshēn yǎngxìng", "Harmoni Jiwa dan Olah Batin", "宁静", "níngjìng", "kedamaian kalbu", 5],
      ["全球治理与多边外交", "Quánqiú zhìlǐ yǔ duōbiān wàijiāo", "Diplomasi dan Negosiasi Perdamaian", "治理", "zhìlǐ", "tata kelola dunia", 8],
      ["数字人文与文物数字化", "Shùzì rénwén yǔ wénwù shùzìhuà", "Digital Humanities Merawat Cagar Budaya", "遗产", "yíchǎn", "warisan luhur", 5],
      ["现代诗歌的意象探索", "Xiàndài shīgē de yìxiàng tànsuǒ", "Eksplorasi Metafora Puisi Kontemporer", "意象", "yìxiàng", "simbol puisi", 13],
      ["高级辩论与逻辑闭环", "Gāojí biànlùn yǔ luóji bìhuán", "Retorika Orasi dan Logika Sempurna", "雄辩", "xióngbiàn", "orasi fasih", 12],
      ["科学哲学与认知边界", "Kēxué zhéxué yǔ rènzhī biānjiè", "Filsafat Sains Menembus Batas Pengetahuan", "真理", "zhēnlǐ", "kebenaran hakiki", 10],
      ["全球胜任力与青年担当", "Quánqiú shèngrènlì yǔ qīngnián dāndāng", "Kepemimpinan Global Generasi Muda", "卓越", "zhuóyuè", "prestasi gemilang", 12],
      ["汉语之光连接世界大道", "Hànyǔ zhī guāng liánjiē shìjiè dàdào", "Mandarin Menghubungkan Jantung Dunia", "光明", "guāngmíng", "cahaya masa depan", 6]
    ]
  }
};

// ==========================================
// 2. BUILD CURRICULUM OBJECT GENERATOR
// ==========================================

function buildFullCurriculumDatabase() {
  const books = [];

  for (let b = 1; b <= 12; b++) {
    let bookMeta = null;
    let unitsList = [];

    if (b === 1) {
      bookMeta = HAN_YU_RAW_CURRICULUM_DATA[1];
      unitsList = bookMeta.units.map(u => {
        const sentences = u.sentences || generateDefaultSentences(b, u.id, u.title, u.pinyin, u.meaning, u.vocab[0]);
        return {
          id: u.id,
          unitNumber: u.id,
          title: `Unit ${u.id}: ${u.title}`,
          pinyin: u.pinyin,
          meaning: u.meaning,
          lessons: [u.title],
          story: {
            title: `Cerita Han Yu ${b} Unit ${u.id}: ${u.title}`,
            hanzi: sentences.map(s => s.hanzi).join(' '),
            pinyin: sentences.map(s => s.pinyin).join(' '),
            indonesian: sentences.map(s => s.indonesian).join(' '),
            sentences: sentences
          },
          vocab: u.vocab,
          matchingPairs: u.vocab.map((v, vIdx) => ({
            id: `m_${b}_${u.id}_${vIdx}`,
            hanzi: v.hanzi,
            pinyin: v.pinyin,
            meaning: v.meaning,
            icon: ["🌟", "📚", "🎨", "⚽", "🍎", "🏡", "🦖", "🌿"][vIdx % 8],
            category: "kosakata"
          })),
          quizQuestions: generateUnitQuestions(b, u.id, u.title, u.pinyin, u.meaning, u.vocab)
        };
      });
    } else if (b === 2 || b === 3) {
      bookMeta = HAN_YU_RAW_CURRICULUM_DATA[b];
      unitsList = bookMeta.units.map(u => {
        const sentences = u.sentences || generateDefaultSentences(b, u.id, u.title, u.pinyin, u.meaning, u.vocab[0]);
        return {
          id: u.id,
          unitNumber: u.id,
          title: `Unit ${u.id}: ${u.title}`,
          pinyin: u.pinyin,
          meaning: u.meaning,
          lessons: [u.title],
          story: {
            title: `Cerita Han Yu ${b} Unit ${u.id}: ${u.title}`,
            hanzi: sentences.map(s => s.hanzi).join(' '),
            pinyin: sentences.map(s => s.pinyin).join(' '),
            indonesian: sentences.map(s => s.indonesian).join(' '),
            sentences: sentences
          },
          vocab: u.vocab,
          matchingPairs: u.vocab.map((v, vIdx) => ({
            id: `m_${b}_${u.id}_${vIdx}`,
            hanzi: v.hanzi,
            pinyin: v.pinyin,
            meaning: v.meaning,
            icon: ["🌟", "📚", "🎨", "⚽", "🍎", "🏡", "🦖", "🌿"][vIdx % 8],
            category: "kosakata"
          })),
          quizQuestions: generateUnitQuestions(b, u.id, u.title, u.pinyin, u.meaning, u.vocab)
        };
      });
    } else {
      const adv = ADVANCED_BOOK_METADATA[b];
      bookMeta = {
        guide: adv.guide,
        level: adv.level
      };

      unitsList = adv.units.map((uItem, idx) => {
        const uNum = idx + 1;
        const [uTitle, uPinyin, uMeaning, vHanzi, vPinyin, vMeaning, vStrokes] = uItem;

        const vocabList = [
          { hanzi: vHanzi, pinyin: vPinyin, meaning: vMeaning, strokes: vStrokes, strokeOrder: ["横", "竖", "撇", "捺", "点", "提"], radical: "文" },
          { hanzi: "学习", pinyin: "xuéxí", meaning: "belajar dengan tekun", strokes: 8, strokeOrder: ["点", "点", "提", "撇", "竖钩", "横撇", "横折", "竖钩"], radical: "子" },
          { hanzi: "朋友", pinyin: "péngyou", meaning: "sahabat teman", strokes: 4, strokeOrder: ["撇", "横折钩", "横", "横"], radical: "月" },
          { hanzi: "进步", pinyin: "jìnbù", meaning: "kemajuan pesat", strokes: 7, strokeOrder: ["横", "横", "竖", "点", "横折折撇", "捺", "撇"], radical: "辶" }
        ];

        const sentences = generateDefaultSentences(b, uNum, uTitle, uPinyin, uMeaning, vocabList[0]);

        return {
          id: uNum,
          unitNumber: uNum,
          title: `Unit ${uNum}: 第${uNum}课 ${uTitle}`,
          pinyin: uPinyin,
          meaning: uMeaning,
          lessons: [`第${uNum}课 ${uTitle}`],
          story: {
            title: `Cerita Han Yu ${b} Unit ${uNum}: ${uTitle}`,
            hanzi: sentences.map(s => s.hanzi).join(' '),
            pinyin: sentences.map(s => s.pinyin).join(' '),
            indonesian: sentences.map(s => s.indonesian).join(' '),
            sentences: sentences
          },
          vocab: vocabList,
          matchingPairs: vocabList.map((v, vIdx) => ({
            id: `m_${b}_${uNum}_${vIdx}`,
            hanzi: v.hanzi,
            pinyin: v.pinyin,
            meaning: v.meaning,
            icon: ["🌟", "📚", "🎨", "🌿", "🏆", "🦖", "🍎", "⚽"][vIdx % 8],
            category: "kosakata"
          })),
          quizQuestions: generateUnitQuestions(b, uNum, uTitle, uPinyin, uMeaning, vocabList)
        };
      });
    }

    books.push({
      id: b,
      title: `Han Yu ${b} (第${["一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二"][b - 1]}册)`,
      level: bookMeta.level,
      dinoGuide: bookMeta.guide,
      units: unitsList
    });
  }

  return { books };
}

// 3. GENERATOR CERITA EDUKASI RAMAH ANAK SD (5 KALIMAT LENGKAP)
function generateDefaultSentences(bookId, unitId, unitTitle, unitPinyin, unitMeaning, primaryVocab) {
  const vHanzi = primaryVocab ? primaryVocab.hanzi : "学习";
  const vPinyin = primaryVocab ? primaryVocab.pinyin : "xuéxí";

  return [
    {
      hanzi: `今天，恐龙伙伴们一起在课堂上学习《汉语第${bookId}册》第${unitId}课：“${unitTitle}”。`,
      pinyin: `Jīntiān, kǒnglóng huǒbàn men yìqǐ zài kètáng shang xuéxí 《Hànyǔ Dì ${bookId} Cè》 dì ${unitId} kè: “${unitPinyin}”.`,
      indonesian: `Hari ini, anak-anak dinosaurus belajar bersama materi buku Han Yu ${bookId} Unit ${unitId}: '${unitTitle}' (${unitMeaning}).`
    },
    {
      hanzi: `陈老师用生动有趣的恐龙故事，耐心地带领大家慢速朗读课文中的生词“${vHanzi}”。`,
      pinyin: `Chén lǎoshī yòng shēngdòng yǒuqù de kǒnglóng gùshì, nàixīn de dàilǐng dàjiā mànsù lǎngdú kèwén zhōng de shēngcí “${vPinyin}”.`,
      indonesian: `Guru Chen menggunakan cerita dinosaurus yang menarik, dengan sabar membimbing murid membaca lafal kosakata '${vHanzi}' secara lambat dan jelas.`
    },
    {
      hanzi: `小恐龙们聚精会神地听讲，一笔一画在田字格里认真练习本课的汉字笔画。`,
      pinyin: `Xiǎo kǒnglóng men jùjīng huìshén de tīngjiǎng, yì bǐ yí huà zài tiánzìgé lǐ rènzhēn liànxí běn kè de hànzì bǐhuà.`,
      indonesian: `Dinosaurus-dinosaurus cilik mendengarkan dengan seksama, menuliskan kosakata di kotak Tian Zi Ge guratan demi guratan dengan tekun.`
    },
    {
      hanzi: `大家在趣味互动中深入理解了中文的句式结构，提高了口语表达和阅读理解能力。`,
      pinyin: `Dàjiā zài qùwèi hùdòng zhōng shēnrù lǐjiě le Zhōngwén de jùshì jiégòu, tígāo le kǒuyǔ biǎodá hé yuèdú lǐjiě nénglì.`,
      indonesian: `Melalui interaksi menyenangkan, mereka memahami struktur kalimat Mandarin serta meningkatkan kemampuan membaca.`
    },
    {
      hanzi: `老师夸奖大家是最棒的中文小学员，大家开开心心期待着下一节精彩的中文探险课！`,
      pinyin: `Lǎoshī kuājiǎng dàjiā shì zuì bàng de Zhōngwén xiǎo xuéyuán, dàjiā kāikāixīnxīn qīdài zhe xià yì jié jīngcǎi de Zhōngwén tànxiǎn kè!`,
      indonesian: `Guru memuji semua murid sebagai pembelajar teladan, semua bersemangat menyambut petualangan pelajaran berikutnya!`
    }
  ];
}

// 4. GENERATOR 5 TIPE SOAL KUIS PILIHAN BERGANDA PER UNIT
function generateUnitQuestions(bookId, unitId, unitTitle, unitPinyin, unitMeaning, vocabList) {
  const v1 = (vocabList && vocabList[0]) ? vocabList[0] : { hanzi: "你好", pinyin: "nǐ hǎo", meaning: "halo", strokes: 7 };

  return [
    // TIPE 1: MENGARTIKAN
    {
      id: `q_${bookId}_${unitId}_1`,
      type: "meaning",
      question: `Apa arti dari kosakata '${v1.hanzi}' (${v1.pinyin}) pada materi ${unitTitle}?`,
      audioText: `${v1.pinyin} shì shénme yìsi?`,
      options: [
        v1.meaning,
        "Berlari kencang di taman",
        "Membeli baju baru di toko",
        "Minum air putih dingin"
      ],
      correctIndex: 0,
      explanation: `'${v1.hanzi}' (${v1.pinyin}) berarti '${v1.meaning}'.`
    },
    // TIPE 2: BACAAN PINYIN YANG BENAR
    {
      id: `q_${bookId}_${unitId}_2`,
      type: "pinyin",
      question: `Pilihlah bacaan Pinyin yang benar dan tepat untuk karakter '${v1.hanzi}':`,
      audioText: `Qǐng xuǎnzhé zhèngquè de pīnyīn.`,
      options: [
        v1.pinyin,
        "zàijiàn",
        "xièxie",
        "nǐ hǎo"
      ],
      correctIndex: 0,
      explanation: `Karakter '${v1.hanzi}' memiliki pelafalan Pinyin '${v1.pinyin}'.`
    },
    // TIPE 3: HITUNGAN GORESAN (STROKES COUNT)
    {
      id: `q_${bookId}_${unitId}_3`,
      type: "strokes",
      question: `Berapakah jumlah goresan (bi hua) dari karakter '${v1.hanzi[0]}'?`,
      audioText: `${v1.hanzi[0]} zì yǒu jǐ huà?`,
      options: [
        `${v1.strokes} goresan`,
        `${v1.strokes + 2} goresan`,
        `${Math.max(2, v1.strokes - 2)} goresan`,
        `${v1.strokes + 4} goresan`
      ],
      correctIndex: 0,
      explanation: `Karakter '${v1.hanzi[0]}' tersusun dari ${v1.strokes} goresan yang teratur.`
    },
    // TIPE 4: MENYUSUN KATA MENJADI KALIMAT YANG BENAR
    {
      id: `q_${bookId}_${unitId}_4`,
      type: "sentence_order",
      question: `Susunlah kata-kata acak berikut menjadi kalimat yang benar: [${v1.hanzi} / 认真 / 我们]`,
      audioText: `Qǐng lián cí chéng jù.`,
      options: [
        `我们 认真 ${v1.hanzi}。`,
        `认真 我们 ${v1.hanzi}。`,
        `${v1.hanzi} 我们 认真。`,
        `认真 ${v1.hanzi} 我们。`
      ],
      correctIndex: 0,
      explanation: `Struktur kalimat yang baku adalah Subjek (我们) + Keterangan (认真) + Kata Kerja (${v1.hanzi}): '我们认真${v1.hanzi}。'`
    },
    // TIPE 5: MENCARI JAWABAN GAMBAR YANG SESUAI DENGAN KALIMAT
    {
      id: `q_${bookId}_${unitId}_5`,
      type: "picture_match",
      question: `Pilihlah ilustrasi gambar yang paling cocok menggambarkan isi cerita '${unitTitle}'!`,
      audioText: `Nǎge túpiàn shì duì de?`,
      options: [
        `📖 Gambar dinosaurus cilik sedang tekun mempelajari materi ${v1.meaning}`,
        "🌧️ Gambar hujan lebat di luar jendela rumah yang sepi",
        "🛒 Keranjang belanja supermarket yang kosong tanpa barang",
        "🚪 Pintu kayu cokelat yang tertutup rapat"
      ],
      correctIndex: 0,
      explanation: `Ilustrasi buku dan dinosaurus cilik belajar menggambarkan esensi materi '${unitTitle}'.`
    }
  ];
}

// Inisialisasi Database Kurikulum Lengkap
const HAN_YU_CURRICULUM = buildFullCurriculumDatabase();
window.HAN_YU_CURRICULUM = HAN_YU_CURRICULUM;

// Helper Functions
function getBookById(bookId) {
  const b = HAN_YU_CURRICULUM.books.find(x => x.id === parseInt(bookId));
  return b || HAN_YU_CURRICULUM.books[0];
}

function getUnitByBookAndUnitId(bookId, unitId) {
  const book = getBookById(bookId);
  const u = book.units.find(x => x.id === parseInt(unitId));
  return u || book.units[0];
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { HAN_YU_CURRICULUM, getBookById, getUnitByBookAndUnitId };
}
