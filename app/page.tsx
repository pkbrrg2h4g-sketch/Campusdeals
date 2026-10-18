const deals = [
  {
    id: 1,
    title: 'Kütüphane Stüdyum Paketi',
    store: 'StudyHub',
    city: 'İzmir',
    category: 'Eğitim',
    discount: '%25',
    validUntil: '31 Aralık',
    description: 'Öğrenci kartı ile tüm stüdyum ve çalışma alanlarına %25 indirim.',
  },
  {
    id: 2,
    title: 'Yemek Seti Fırsatı',
    store: 'Beyaz Masa',
    city: 'Ankara',
    category: 'Yemek',
    discount: '%20',
    validUntil: '15 Kasım',
    description: 'Öğrenci kimliği ile menü setlerinde ekstra %20 indirim.',
  },
  {
    id: 3,
    title: 'Kısa Film Kulübü',
    store: 'CineCampus',
    city: 'İstanbul',
    category: 'Eğlence',
    discount: '%30',
    validUntil: '30 Kasım',
    description: 'Haftalık öğrenci gösterimlerinde özel indirim.',
  },
  {
    id: 4,
    title: 'Dergi ve Baskı Paketi',
    store: 'PrintLab',
    city: 'Bursa',
    category: 'Kırtasiye',
    discount: '%15',
    validUntil: '20 Aralık',
    description: 'Yazdırma, fotokopi ve baskı işleri için öğrenci indirimi.',
  },
];

const stats = [
  { label: 'Üniversite', value: '120+' },
  { label: 'İndirim', value: '2.4K+' },
  { label: 'Mağaza', value: '480+' },
  { label: 'Öğrenci', value: '18K+' },
];

export default function Home() {
  return (
    <main className="min-h-screen px-4 py-8 md:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <header className="mb-10 flex flex-col gap-4 rounded-3xl bg-slate-900 px-6 py-5 text-white shadow-xl md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-sky-200">CampusDeals</p>
            <h1 className="mt-2 text-2xl font-bold">Öğrenci fırsatları, tek ekranda</h1>
          </div>
          <nav className="flex flex-wrap gap-3 text-sm text-slate-200">
            <a href="#deals" className="rounded-full border border-slate-700 px-3 py-2 hover:bg-slate-800">İndirimler</a>
            <a href="#how" className="rounded-full border border-slate-700 px-3 py-2 hover:bg-slate-800">Nasıl Çalışır</a>
            <a href="#admin" className="rounded-full bg-blue-500 px-3 py-2 font-medium text-white hover:bg-blue-400">Admin</a>
          </nav>
        </header>

        <section className="mb-12 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="card p-8 md:p-10">
            <span className="badge">Öğrenci merkezli</span>
            <h2 className="mt-5 text-4xl font-extrabold md:text-5xl">
              Kampüs hayatını <span className="text-blue-600">daha ucuz</span> yaşa.
            </h2>
            <p className="mt-5 max-w-xl text-lg text-slate-600">
              Yerel mağazalar, restoranlar, kırtasiye ve eğlence yerleri için özel öğrenci fırsatlarını tek platformda keşfet.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#deals" className="rounded-full bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-500">
                İndirimleri Gör
              </a>
              <a href="#admin" className="rounded-full border border-slate-300 px-5 py-3 font-semibold text-slate-700 transition hover:bg-slate-100">
                Mağaza Başvurusu
              </a>
            </div>
          </div>

          <div className="card p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Toplam Etki</p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              {stats.map((item) => (
                <div key={item.label} className="rounded-2xl bg-slate-50 p-4 text-center">
                  <div className="text-2xl font-bold text-blue-700">{item.value}</div>
                  <div className="mt-2 text-sm text-slate-600">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="deals" className="mb-14">
          <div className="mb-6 flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Öne çıkan</p>
              <h3 className="mt-2 text-3xl font-bold">Güncel fırsatlar</h3>
            </div>
            <div className="rounded-full bg-sky-100 px-4 py-2 text-sm font-medium text-sky-700">İzmir · Ankara · İstanbul</div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {deals.map((deal) => (
              <article key={deal.id} className="card overflow-hidden p-5">
                <div className="mb-4 flex items-center justify-between">
                  <span className="badge">{deal.category}</span>
                  <span className="text-xl font-extrabold text-blue-600">{deal.discount}</span>
                </div>
                <h4 className="text-xl font-bold">{deal.title}</h4>
                <p className="mt-2 text-sm text-slate-500">{deal.store}</p>
                <p className="mt-4 text-sm text-slate-600">{deal.description}</p>
                <div className="mt-5 flex items-center justify-between text-sm text-slate-500">
                  <span>{deal.city}</span>
                  <span>{deal.validUntil}</span>
                </div>
                <button className="mt-5 w-full rounded-xl bg-slate-900 px-4 py-2.5 font-medium text-white transition hover:bg-slate-700">
                  Kupon Al
                </button>
              </article>
            ))}
          </div>
        </section>

        <section id="how" className="mb-14 grid gap-6 md:grid-cols-3">
          {[
            ['1. Keşfet', 'İlgi alanına göre indirimleri filtrele ve bul.'],
            ['2. Kupon Al', 'Öğrenci kimliği veya tek tıkla özel kuponu kullan.'],
            ['3. Tasarruf Et', 'Daha az harca, daha çok yaşa.'],
          ].map(([title, text], idx) => (
            <div key={title} className="card p-6">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white">
                {idx + 1}
              </div>
              <h4 className="text-xl font-bold">{title}</h4>
              <p className="mt-3 text-slate-600">{text}</p>
            </div>
          ))}
        </section>

        <section id="admin" className="card p-8">
          <div className="grid gap-8 md:grid-cols-[1fr_0.9fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Mağaza başvurusu</p>
              <h3 className="mt-2 text-3xl font-bold">İndiriminizi ekleyin</h3>
              <p className="mt-4 max-w-lg text-slate-600">
                Öğrencilerinize özel fırsatlar sunmak için başvuru formunu doldurun. Onay sonrası ilanlar listede yayınlanır.
              </p>
            </div>
            <form className="space-y-4 rounded-2xl bg-slate-50 p-5">
              <input className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none ring-0 focus:border-blue-500" placeholder="Mağaza adı" />
              <input className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none ring-0 focus:border-blue-500" placeholder="İletişim e-posta" />
              <input className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none ring-0 focus:border-blue-500" placeholder="Fırsat başlığı" />
              <textarea className="min-h-[110px] w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none focus:border-blue-500" placeholder="İndirim açıklaması" />
              <button type="button" className="w-full rounded-xl bg-blue-600 px-4 py-3 font-semibold text-white hover:bg-blue-500">
                Başvuruyu Gönder
              </button>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}
