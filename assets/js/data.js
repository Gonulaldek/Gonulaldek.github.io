/* ============================================================
   data.js — all editable content (bilingual: TR / EN)
   ----------------------------------------------------------------
   Structure:
     - staticTexts: per-language strings for nav, hero, headings, etc.
                    Each key is referenced from index.html via [data-i18n]
     - statusLabels: project status badge labels per language
     - projects.featured / projects.inDevelopment: array of project objects
                    Translatable fields are { tr, en } objects
     - additional: single side-skill band (bilingual fields)
     - stack: skill panels (titles + items, bilingual)

   To add a new project: copy a featured object and edit.
   To add a new translation key: add it to BOTH staticTexts.tr and .en,
                                  then reference via data-i18n in HTML.
   ============================================================ */

const portfolioData = {

  /* --------------------------------------------------------
     STATIC TEXTS — referenced from HTML via data-i18n="<key>"
     -------------------------------------------------------- */
  staticTexts: {

    tr: {
      tbLive: 'ÇEVRİMİÇİ',

      navWorks:   '<span class="br">01_</span>İŞLER',
      navStack:   '<span class="br">02_</span>STACK',
      navAbout:   '<span class="br">03_</span>HAKKIMDA',
      navContact: '<span class="br">04_</span>İLETİŞİM',

      heroLabel: 'STAJYER YAZILIM GELİŞTİRİCİ ADAYI',
      heroTitle: 'Küçük ölçekli yazılım araçları ve prototipler <span class="accent">geliştiriyorum</span>.',
      heroDesc:  'C#, TypeScript ve JavaScript ile <strong>komut satırı araçları</strong>, <strong>otomasyon prototipleri</strong> ve <strong>pratik yazılım uygulamaları</strong> geliştiriyorum. Şu anda yazılım geliştirme alanında staj fırsatları arıyorum.',
      heroMetaKLocation: 'Lokasyon',
      heroMetaVLocation: 'Balıkesir, TR',
      heroMetaKStatus:   'Durum',
      heroMetaVStatus:   '<span class="dot">●</span> STAJ ARIYOR',
      heroMetaKStack:    'Stack',
      heroMetaVStack:    'C# / TS / JS',
      heroCtaPrimary: 'Projelerimi İncele <span class="arrow">→</span>',
      heroCtaGhost:   'İletişime Geç',

      worksNum:      '01',
      worksTitle:    'Öne Çıkan <span class="accent">Projeler</span>',
      worksRight:    '3 PROJE',
      worksSubtitle: 'Mevcut kodu olan veya çalışan prototip projeler',

      inDevNum:      '02',
      inDevTitle:    'Geliştirme <span class="accent">Aşamasında</span>',
      inDevRight:    '2 PROJE',
      inDevSubtitle: 'Portfolyo tamamlama için şu anda geliştirilen küçük yazılım projeleri',

      extrasNum:      '03',
      extrasTitle:    'Ek <span class="accent">Geçmiş</span>',
      extrasRight:    'YAN BECERİLER',
      extrasSubtitle: 'Birincil yazılım odağı dışındaki destekleyici beceriler',

      stackNum:   '04',
      stackTitle: 'Teknik <span class="accent">Stack</span>',
      stackRight: 'YETENEKLER',

      aboutNum:   '05',
      aboutTitle: 'Hakkımda',
      aboutRight: 'PROFİL',
      aboutCardHead: '<span class="accent">[</span> profile.json <span class="accent">]</span>',
      profileKName:     'isim',
      profileVName:     'Melih Gönülal',
      profileKRole:     'rol',
      profileVRole:     '<span class="hi">Stajyer Yazılım Geliştirici</span>',
      profileKSchool:   'okul',
      profileVSchool:   'Amasya Üniversitesi',
      profileKDept:     'bölüm',
      profileVDept:     'BDTA · 2024 →',
      profileKLoc:      'lokasyon',
      profileVLoc:      'Balıkesir / Gönen, TR',
      profileKLangs:    'diller',
      profileVLangs:    'TR · EN <span class="hi">(temel / gelişiyor)</span>',
      profileKStatus:   'durum',
      profileVStatus:   '<span class="hi">● staj arıyor</span>',
      aboutTextHeading: 'Çalışan, açıklanabilir, <span class="accent">çalıştırılabilir</span> projeler üretmeye odaklanıyorum.',
      aboutP1: 'Bilgisayar Destekli Tasarım & Animasyon bölümünde okuyan, kendi kendine yazılım geliştirme çalışan bir öğrenciyim. <strong>C#, TypeScript ve JavaScript</strong> ile küçük araçlar ve prototipler yazıyorum — günlük iş akışımı kolaylaştıran CLI uygulamalarından web tabanlı dashboard\'lara kadar.',
      aboutP2: 'Projelerimi <span class="hi">GitHub üzerinde README\'leri, çalıştırma talimatlarıyla birlikte</span> düzenli tutmaya özen gösteriyorum. Kullandığım kütüphaneyi neden seçtiğimi, hangi sorunu çözdüğünü ve neyi farklı yapabileceğimi açıklayabilmek benim için kod yazmak kadar önemli.',
      aboutP3: 'Şu an <strong>junior / intern düzeyinde yazılım pozisyonları</strong> için açığım. Bir ekibin içinde öğrenmeye, kod review almaya ve gerçek bir ürün için katkıda bulunmaya hazırım.',

      contactNum:    '06',
      contactTitle:  '<span class="accent">İletişim</span>',
      contactRight:  'İLETİŞİM',
      contactHead:   'FIRSATLARA AÇIK',
      contactInnerTitle: 'Staj fırsatları için<br><span class="accent">konuşalım.</span>',
      contactSub:    'Yazılım ekipleri, junior / intern pozisyonları veya bir projenizde katkı sağlayabileceğim her şey için bana yazabilirsiniz. CV\'mi ek olarak iletebilirim.',
      cvPending:     'CV / PDF · Yakında',

      footerLeft:  '<span class="ok">●</span> TÜM SİSTEMLER ÇALIŞIYOR',
      footerRight: '© <span class="hi">2026</span> · MELIH GÖNÜLAL',

      pendingLinkLabel: 'Repo Yakında'
    },

    en: {
      tbLive: 'ONLINE',

      navWorks:   '<span class="br">01_</span>WORKS',
      navStack:   '<span class="br">02_</span>STACK',
      navAbout:   '<span class="br">03_</span>ABOUT',
      navContact: '<span class="br">04_</span>CONTACT',

      heroLabel: 'JUNIOR SOFTWARE DEVELOPER CANDIDATE',
      heroTitle: 'I build small-scale software tools and <span class="accent">prototypes</span>.',
      heroDesc:  'I develop <strong>command-line tools</strong>, <strong>automation prototypes</strong>, and <strong>practical software applications</strong> using C#, TypeScript, and JavaScript. I am currently looking for software development internship opportunities.',
      heroMetaKLocation: 'Location',
      heroMetaVLocation: 'Balıkesir, TR',
      heroMetaKStatus:   'Status',
      heroMetaVStatus:   '<span class="dot">●</span> SEEKING INTERNSHIP',
      heroMetaKStack:    'Stack',
      heroMetaVStack:    'C# / TS / JS',
      heroCtaPrimary: 'View Projects <span class="arrow">→</span>',
      heroCtaGhost:   'Contact Me',

      worksNum:      '01',
      worksTitle:    'Featured <span class="accent">Projects</span>',
      worksRight:    '3 ITEMS',
      worksSubtitle: 'Projects with existing code or working prototype',

      inDevNum:      '02',
      inDevTitle:    'In <span class="accent">Development</span>',
      inDevRight:    '2 ITEMS',
      inDevSubtitle: 'Small software projects currently being built for portfolio completion',

      extrasNum:      '03',
      extrasTitle:    'Additional <span class="accent">Background</span>',
      extrasRight:    'SIDE SKILLS',
      extrasSubtitle: 'Supporting skills outside the primary software focus',

      stackNum:   '04',
      stackTitle: 'Technical <span class="accent">Stack</span>',
      stackRight: 'CAPABILITIES',

      aboutNum:   '05',
      aboutTitle: 'About',
      aboutRight: 'PROFILE',
      aboutCardHead: '<span class="accent">[</span> profile.json <span class="accent">]</span>',
      profileKName:     'name',
      profileVName:     'Melih Gönülal',
      profileKRole:     'role',
      profileVRole:     '<span class="hi">Junior Software Dev</span>',
      profileKSchool:   'school',
      profileVSchool:   'Amasya University',
      profileKDept:     'department',
      profileVDept:     'CADA · 2024 →',
      profileKLoc:      'location',
      profileVLoc:      'Balıkesir / Gönen, TR',
      profileKLangs:    'languages',
      profileVLangs:    'TR · EN <span class="hi">(basic / improving)</span>',
      profileKStatus:   'status',
      profileVStatus:   '<span class="hi">● seeking internship</span>',
      aboutTextHeading: 'I focus on producing working, explainable, <span class="accent">runnable</span> projects.',
      aboutP1: 'I am a student in the Computer-Aided Design & Animation department who is self-teaching software development. I write small tools and prototypes with <strong>C#, TypeScript, and JavaScript</strong> — from CLI utilities that simplify my daily workflow to web-based dashboards.',
      aboutP2: 'I keep my projects <span class="hi">well-organized on GitHub, with README files and clear run instructions</span>. Being able to explain why I chose a particular library, what problem it solves, and what I could do differently is just as important to me as writing the code itself.',
      aboutP3: 'I am currently open to <strong>junior / intern level software positions</strong>. I am ready to learn inside a team, receive code reviews, and contribute to a real product.',

      contactNum:    '06',
      contactTitle:  '<span class="accent">Contact</span>',
      contactRight:  'GET IN TOUCH',
      contactHead:   'OPEN TO OPPORTUNITIES',
      contactInnerTitle: 'Let\'s talk about<br><span class="accent">internship opportunities.</span>',
      contactSub:    'Feel free to write to me about software teams, junior / intern positions, or anything I could contribute to in one of your projects. I can attach my CV.',
      cvPending:     'CV / PDF · Coming Soon',

      footerLeft:  '<span class="ok">●</span> ALL SYSTEMS OPERATIONAL',
      footerRight: '© <span class="hi">2026</span> · MELIH GÖNÜLAL',

      pendingLinkLabel: 'Repository Coming Soon'
    }
  },

  /* --------------------------------------------------------
     STATUS LABELS — for project header badges
     Keys must match `statusClass` on each project.
     -------------------------------------------------------- */
  statusLabels: {
    'active-dev': { tr: 'AKTİF GELİŞTİRME', en: 'ACTIVE DEVELOPMENT' },
    'prototype':  { tr: 'PROTOTİP',         en: 'PROTOTYPE' },
    'in-dev':     { tr: 'GELİŞTİRİLİYOR',   en: 'IN DEVELOPMENT' },
    'completed':  { tr: 'V1 TAMAMLANDI',    en: 'V1 COMPLETED' }
  },

  /* --------------------------------------------------------
     PROJECTS
     Translatable fields are { tr, en } objects:
       - title (HTML allowed)
       - role
       - description
       - links[i].label (or use { pending: true } to render a disabled span)
     -------------------------------------------------------- */
  projects: {

    featured: [
      {
        id: 'PRJ_001',
        filename: 'iris_agent',
        ext: '.ts',
        statusClass: 'active-dev',
        title: {
          tr: 'IRIS — Yerel <span class="accent">Agent Sistemi</span>',
          en: 'IRIS — Local <span class="accent">Agent System</span>'
        },
        role: {
          tr: 'Kişisel Proje · TypeScript',
          en: 'Personal Project · TypeScript'
        },
        description: {
          tr: 'Yerel olarak çalışan, kural tabanlı bir terminal asistanı. Tool registry, profil/policy katmanı ve adım adım komut yürütme yapısı üzerine kurulu. Çoklu profille çalışma modu değişimi ve güvenli kabuk komut çalıştırma destekliyor. Kendi yazdığım araçları (`findText`, `inspectPackageJson` vb.) registry üzerinden ekleyebiliyorum.',
          en: 'A locally-running, rule-based terminal assistant. Built around a tool registry, a profile/policy layer, and step-by-step command execution. Supports switching between multiple work modes via profiles and safe shell command execution. I can add my own tools (`findText`, `inspectPackageJson`, etc.) through the registry.'
        },
        stack: ['TypeScript', 'Node.js', 'CLI', 'Rule Router'],
        links: [
          { label: { tr: 'GitHub Repo', en: 'GitHub Repo' }, url: 'https://github.com/Gonulaldek/iris-ai-agent' }
        ],
        preview: 'iris',
        flip: false,
        dev: false
      },
      {
        id: 'PRJ_002',
        filename: 'email_sender',
        ext: '.cs',
        statusClass: 'prototype',
        title: {
          tr: 'Otomatik <span class="accent">E-posta Gönderici</span>',
          en: 'Automated <span class="accent">Email Sender</span>'
        },
        role: {
          tr: 'C# / Windows Forms Prototipi',
          en: 'C# / Windows Forms Prototype'
        },
        description: {
          tr: "C# ve Windows Forms ile geliştirilmiş basit bir mail otomasyon prototipi. Kullanıcıdan alıcı, konu ve mesaj bilgilerini alarak SMTP üzerinden e-posta gönderme mantığını test ediyor. Proje; form event'leri, kullanıcı girdisi, temel doğrulama, SMTP kullanımı ve zamanlanmış gönderim mantığı üzerine çalışmak için geliştirildi.",
          en: 'A simple email-automation prototype built with C# and Windows Forms. It tests the SMTP email-sending flow by collecting recipient, subject, and body input from the user. The project was built to practice form events, user input handling, basic validation, SMTP usage, and scheduled-send logic.'
        },
        stack: ['C#', '.NET', 'WinForms', 'SMTP'],
        links: [
          { label: { tr: 'GitHub Repo', en: 'GitHub Repo' }, url: 'https://github.com/Gonulaldek/AutomatedEmailSender-Public' }
        ],
        preview: 'email',
        flip: true,
        dev: false
      },
      {
        id: 'PRJ_003',
        filename: 'project_inspector',
        ext: '.ts',
        statusClass: 'completed',
        title: {
          tr: 'Project <span class="accent">Inspector</span> CLI',
          en: 'Project <span class="accent">Inspector</span> CLI'
        },
        role: {
          tr: 'Kişisel Proje · TypeScript / Node.js',
          en: 'Personal Project · TypeScript / Node.js'
        },
        description: {
          tr: 'TypeScript ve Node.js ile geliştirilmiş küçük bir komut satırı aracı. Verilen proje klasörünü analiz eder, package.json bilgilerini okur, dosya/klasör sayılarını çıkarır ve kaynak dosyalar içinde TODO/FIXME notlarını tarar.',
          en: 'A small TypeScript and Node.js command-line tool that analyzes a project folder, reads package.json information, counts files and folders, and scans source files for TODO/FIXME comments.'
        },
        stack: ['TypeScript', 'Node.js', 'CLI', 'File System'],
        links: [
          { label: { tr: 'GitHub Repo', en: 'GitHub Repo' }, url: 'https://github.com/Gonulaldek/project-inspector-cli' }
        ],
        preview: 'inspector',
        flip: false,
        dev: false
      }
    ],

    inDevelopment: [
      {
        id: 'PRJ_004',
        filename: 'application_tracker',
        ext: '.html',
        statusClass: 'in-dev',
        title: {
          tr: 'Staj Başvuru <span class="accent">Takipçisi</span>',
          en: 'Internship Application <span class="accent">Tracker</span>'
        },
        role: {
          tr: 'Planlanan Web Uygulaması',
          en: 'Planned Web Application'
        },
        description: {
          tr: 'Staj başvurularını takip etmek için kendim için geliştirmeye başladığım tek sayfalık dashboard. Hedef: şirket, pozisyon, durum (gönderildi / cevap bekleniyor / mülakat / sonuç) ve tarih takibi yapması; verileri localStorage üzerinde tutması. Şu an UI taslağı ve veri modeli üzerinde çalışıyorum.',
          en: 'A single-page dashboard I started building for myself to track internship applications. Goal: track company, role, status (sent / awaiting reply / interview / result) and dates, with data stored in localStorage. Currently working on the UI draft and data model.'
        },
        stack: ['JavaScript', 'HTML/CSS', 'localStorage'],
        links: [
          { pending: true }
        ],
        preview: 'tracker',
        flip: false,
        dev: true
      },
      {
        id: 'PRJ_005',
        filename: 'motion_analysis',
        ext: '.js',
        statusClass: 'prototype',
        title: {
          tr: 'MediaPipe <span class="accent">Hareket Analizi</span>',
          en: 'MediaPipe <span class="accent">Motion Analysis</span>'
        },
        role: {
          tr: 'Bitirme Projesi · 2025–2026',
          en: 'Final-Year Project · 2025–2026'
        },
        description: {
          tr: 'Tarayıcı tabanlı bir hareket takip prototipi. Webcam akışından vücut pozisyonunu okur, eklem açılarını ölçer ve egzersiz tekrarlarını sayar. MediaPipe Pose ve Canvas üzerinde çalışan, üniversite bitirme projem olarak geliştirdiğim web uygulaması — şu an aktif olarak üzerinde çalışıyorum. Public repo henüz yayımlanmadı.',
          en: 'A browser-based motion-tracking prototype. It reads body position from a webcam stream, measures joint angles, and counts exercise repetitions. Built on MediaPipe Pose and Canvas as my final-year university project — currently in active development. The public repo has not been published yet.'
        },
        stack: ['Vanilla JS', 'p5.js', 'MediaPipe', 'Canvas'],
        links: [
          { pending: true }
        ],
        preview: 'motion',
        flip: true,
        dev: false
      }
    ]
  },

  /* --------------------------------------------------------
     ADDITIONAL BACKGROUND BAND
     -------------------------------------------------------- */
  additional: {
    icon: 'pentagon',
    title: {
      tr: '3D Modelleme / Blender / UE5',
      en: '3D Modeling / Blender / UE5'
    },
    tag: {
      tr: 'ek alan',
      en: 'side area'
    },
    description: {
      tr: "Eğitim aldığım Bilgisayar Destekli Tasarım & Animasyon bölümü kapsamında Blender ve 3ds Max üzerinde modelleme, ayrıca Unreal Engine 5 pipeline'ına yönelik mesh hazırlama çalışmaları yapıyorum. Yazılım geliştirme odağımı destekleyen, görsel iletişim ve teknik problem çözme tarafında geliştirici bir yan beceri olarak değerlendiriyorum.",
      en: 'As part of my Computer-Aided Design & Animation major, I work on modeling in Blender and 3ds Max, plus mesh preparation for the Unreal Engine 5 pipeline. I treat it as a supporting side skill that strengthens my visual communication and technical problem-solving — alongside my main software focus.'
    },
    tags: ['Blender', '3ds Max', 'UE5']
  },

  /* --------------------------------------------------------
     STACK PANELS
     Level → class mapping (badge color):
       Practical    / Pratik   → 'high' (cyan)
       Basic        / Temel    → 'mid'  (amber)
       Experimental / Deneysel → 'low'  (muted)
     -------------------------------------------------------- */
  stack: [
    {
      title: { tr: 'DİLLER', en: 'LANGUAGES' },
      items: [
        { name: 'JavaScript', level: { tr: 'Pratik', en: 'Practical' }, class: 'high' },
        { name: 'HTML / CSS', level: { tr: 'Pratik', en: 'Practical' }, class: 'high' },
        { name: 'TypeScript', level: { tr: 'Temel',  en: 'Basic'     }, class: 'mid'  },
        { name: 'C#',         level: { tr: 'Temel',  en: 'Basic'     }, class: 'mid'  }
      ]
    },
    {
      title: { tr: 'ARAÇLAR & İŞ AKIŞI', en: 'TOOLS &amp; WORKFLOW' },
      items: [
        { name: 'Git &amp; GitHub',  level: { tr: 'Pratik',   en: 'Practical'    }, class: 'high' },
        { name: 'VS Code',           level: { tr: 'Pratik',   en: 'Practical'    }, class: 'high' },
        { name: 'Visual Studio',     level: { tr: 'Pratik',   en: 'Practical'    }, class: 'high' },
        { name: 'Node.js',           level: { tr: 'Temel',    en: 'Basic'        }, class: 'mid'  },
        { name: 'npm / CLI',         level: { tr: 'Temel',    en: 'Basic'        }, class: 'mid'  },
        { name: 'p5.js / MediaPipe', level: { tr: 'Deneysel', en: 'Experimental' }, class: 'low'  }
      ]
    },
    {
      title: { tr: 'YAN BECERİLER', en: 'SIDE SKILLS' },
      items: [
        { name: 'Blender',      level: { tr: 'Pratik', en: 'Practical' }, class: 'high' },
        { name: '3ds Max',      level: { tr: 'Temel',  en: 'Basic'     }, class: 'mid'  },
        { name: 'AutoCAD',      level: { tr: 'Temel',  en: 'Basic'     }, class: 'mid'  },
        { name: 'Photoshop',    level: { tr: 'Temel',  en: 'Basic'     }, class: 'mid'  },
        { name: 'Premiere Pro', level: { tr: 'Temel',  en: 'Basic'     }, class: 'mid'  }
      ]
    }
  ]

};

/* Expose to global scope so window.portfolioData works in classic scripts. */
window.portfolioData = portfolioData;
