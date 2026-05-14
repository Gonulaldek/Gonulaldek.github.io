/* ============================================================
   data.js — all editable content for the site
   ----------------------------------------------------------------
   To add a new project: append an object to portfolioData.projects.featured
   or portfolioData.projects.inDevelopment.
   To add a stack panel: append to portfolioData.stack.
   ============================================================ */

const portfolioData = {

  /* --------------------------------------------------------
     PROJECTS
     Each project object schema:
       id          - display ID (e.g. "PRJ_001")
       filename    - file-style label in the card header
       ext         - file extension (colored separately)
       status      - { label, class }  → class is one of:
                     "active-dev" | "prototype" | "in-dev"
       title       - HTML allowed (use <span class="accent">...</span>)
       role        - small label under the title
       description - plain text (single paragraph)
       stack       - array of strings (tech tags)
       links       - array of:
                     { label, url }              → renders as <a>
                     { label, pending: true }    → renders as disabled span
       preview     - key into the renderer's SVG templates map
       flip        - true to put preview on the right side
       dev         - true for dashed "in-development" card style
                     (also shows a "DEV BUILD" overlay on the preview)
     -------------------------------------------------------- */

  projects: {

    featured: [
      {
        id: 'PRJ_001',
        filename: 'iris_agent',
        ext: '.ts',
        status: { label: 'ACTIVE DEVELOPMENT', class: 'active-dev' },
        title: 'IRIS — Local <span class="accent">Agent System</span>',
        role: 'Kişisel Proje · TypeScript',
        description: "Yerel olarak çalışan, kural tabanlı bir terminal asistanı. Tool registry, profil/policy katmanı ve adım adım komut yürütme yapısı üzerine kurulu. Çoklu profille çalışma modu değişimi ve güvenli kabuk komut çalıştırma destekliyor. Kendi yazdığım araçları (`findText`, `inspectPackageJson` vb.) registry üzerinden ekleyebiliyorum.",
        stack: ['TypeScript', 'Node.js', 'CLI', 'Rule Router'],
        links: [
          { label: 'GitHub Repo', url: 'https://github.com/Gonulaldek/iris-ai-agent' }
        ],
        preview: 'iris',
        flip: false,
        dev: false
      },
      {
        id: 'PRJ_002',
        filename: 'email_sender',
        ext: '.cs',
        status: { label: 'PROTOTYPE', class: 'prototype' },
        title: 'Automated <span class="accent">Email Sender</span>',
        role: 'C# / Windows Forms Prototipi',
        description: "C# ve Windows Forms ile geliştirilmiş basit bir mail otomasyon prototipi. Kullanıcıdan alıcı, konu ve mesaj bilgilerini alarak SMTP üzerinden e-posta gönderme mantığını test ediyor. Proje; form event'leri, kullanıcı girdisi, temel doğrulama, SMTP kullanımı ve zamanlanmış gönderim mantığı üzerine çalışmak için geliştirildi.",
        stack: ['C#', '.NET', 'WinForms', 'SMTP'],
        links: [
          { label: 'GitHub Repo', url: 'https://github.com/Gonulaldek/AutomatedEmailSender-Public' }
        ],
        preview: 'email',
        flip: true,
        dev: false
      }
    ],

    inDevelopment: [
      {
        id: 'PRJ_003',
        filename: 'project_inspector',
        ext: '.ts',
        status: { label: 'IN DEVELOPMENT', class: 'in-dev' },
        title: 'Project <span class="accent">Inspector</span> CLI',
        role: 'Planlanan CLI Aracı · TypeScript',
        description: "Node.js projelerini hızlıca tarayan küçük bir komut satırı aracı geliştiriyorum. Hedef: package.json içindeki bağımlılıkları ve script'leri okumak, proje klasörünü özetlemek ve TODO/FIXME notlarını listelemek. Gelecekte IRIS agent içinde ayrı bir tool olarak kullanılabilecek şekilde tasarlanıyor.",
        stack: ['TypeScript', 'Node.js', 'CLI', 'npm'],
        links: [
          { label: 'Repository Coming Soon', pending: true }
        ],
        preview: 'inspector',
        flip: true,
        dev: true
      },
      {
        id: 'PRJ_004',
        filename: 'application_tracker',
        ext: '.html',
        status: { label: 'IN DEVELOPMENT', class: 'in-dev' },
        title: 'Internship <span class="accent">Application Tracker</span>',
        role: 'Planlanan Web Uygulaması',
        description: "Staj başvurularını takip etmek için kendim için geliştirmeye başladığım tek sayfalık dashboard. Hedef: şirket, pozisyon, durum (gönderildi / cevap bekleniyor / mülakat / sonuç) ve tarih takibi yapması; verileri localStorage üzerinde tutması. Şu an UI taslağı ve veri modeli üzerinde çalışıyorum.",
        stack: ['JavaScript', 'HTML/CSS', 'localStorage'],
        links: [
          { label: 'Repository Coming Soon', pending: true }
        ],
        preview: 'tracker',
        flip: false,
        dev: true
      },
      {
        id: 'PRJ_005',
        filename: 'motion_analysis',
        ext: '.js',
        status: { label: 'PROTOTYPE', class: 'prototype' },
        title: 'MediaPipe <span class="accent">Motion Analysis</span>',
        role: 'Bitirme Projesi · 2025–2026',
        description: "Tarayıcı tabanlı bir hareket takip prototipi. Webcam akışından vücut pozisyonunu okur, eklem açılarını ölçer ve egzersiz tekrarlarını sayar. MediaPipe Pose ve Canvas üzerinde çalışan, üniversite bitirme projem olarak geliştirdiğim web uygulaması — şu an aktif olarak üzerinde çalışıyorum. Public repo henüz yayımlanmadı.",
        stack: ['Vanilla JS', 'p5.js', 'MediaPipe', 'Canvas'],
        links: [
          { label: 'Repository Coming Soon', pending: true }
        ],
        preview: 'motion',
        flip: false,
        dev: false
      }
    ]

  },

  /* --------------------------------------------------------
     ADDITIONAL BACKGROUND
     Single horizontal band below the project sections.
     Used for side skills that support but aren't the main focus.
     -------------------------------------------------------- */

  additional: {
    icon: 'pentagon',
    title: '3D Modelleme / Blender / UE5',
    tag: 'ek alan',
    description: "Eğitim aldığım Bilgisayar Destekli Tasarım & Animasyon bölümü kapsamında Blender ve 3ds Max üzerinde modelleme, ayrıca Unreal Engine 5 pipeline'ına yönelik mesh hazırlama çalışmaları yapıyorum. Yazılım geliştirme odağımı destekleyen, görsel iletişim ve teknik problem çözme tarafında geliştirici bir yan beceri olarak değerlendiriyorum.",
    tags: ['Blender', '3ds Max', 'UE5']
  },

  /* --------------------------------------------------------
     STACK PANELS
     Each panel renders as a "modifier stack" style box.
     Level class controls badge color:
       "high" → cyan
       "mid"  → amber
       "low"  → muted
     Omit `level` for items without a badge.
     -------------------------------------------------------- */

  stack: [
    {
      title: 'LANGUAGES',
      items: [
        { name: 'JavaScript', level: 'orta',  class: 'high' },
        { name: 'TypeScript', level: 'temel', class: 'mid'  },
        { name: 'C#',         level: 'temel', class: 'mid'  },
        { name: 'HTML / CSS', level: 'orta',  class: 'high' }
      ]
    },
    {
      title: 'TOOLS &amp; WORKFLOW',
      items: [
        { name: 'Node.js',           level: 'temel', class: 'mid'  },
        { name: 'Git &amp; GitHub',  level: 'orta',  class: 'high' },
        { name: 'VS Code',           level: 'orta',  class: 'high' },
        { name: 'Visual Studio',     level: 'orta',  class: 'high' },
        { name: 'p5.js / MediaPipe', level: 'orta',  class: 'high' },
        { name: 'npm / CLI',         level: 'orta',  class: 'high' }
      ]
    },
    {
      title: 'SIDE SKILLS',
      items: [
        { name: 'Blender',      level: 'orta',  class: 'mid' },
        { name: '3ds Max',      level: 'orta',  class: 'mid' },
        { name: 'AutoCAD',      level: 'temel', class: 'low' },
        { name: 'Photoshop',    level: 'temel', class: 'low' },
        { name: 'Premiere Pro', level: 'temel', class: 'low' }
      ]
    }
  ]

};


// Expose portfolio data for classic script loading.
window.portfolioData = portfolioData;
