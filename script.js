const products = [
  {
    id: 1,
    cat: "instagram",
    name: "Instagram Pro Pack",
    desc: "30 editable Canva templates",
    price: 19,
    cls: "p1"
  },
  {
    id: 2,
    cat: "reels",
    name: "Reels Creator Kit",
    desc: "20 templates for Reels",
    price: 15,
    cls: "p2"
  },
  {
    id: 3,
    cat: "ads",
    name: "Ad Campaign Pack",
    desc: "15 premium advertising templates",
    price: 12,
    cls: "p3"
  },
  {
    id: 4,
    cat: "business",
    name: "Business Essentials",
    desc: "25 clean business templates",
    price: 17,
    cls: "p4"
  }
];

let cart = JSON.parse(localStorage.getItem("cart") || "[]");

const tr = {
  ar: {
    home: "الرئيسية",
    store: "المتجر",
    bundles: "الباقات",
    about: "من نحن",
    contact: "تواصل معنا",
    eyebrow: "DIGITAL CREATIVE STUDIO",
    heroTitle: "تصاميم جاهزة.<br>عدّلها بطريقتك.",
    heroText:
      "قوالب Canva احترافية تساعدك على إنشاء محتوى مميز خلال دقائق.",
    browse: "تصفح التصاميم",
    explore: "اكتشف الباقات",
    best: "الأكثر طلبًا",
    all: "الكل",
    ads: "إعلانات",
    business: "أعمال",
    fast: "توفير الوقت",
    fastText: "ابدأ من قالب جاهز بدلًا من الصفر.",
    pro: "تصاميم احترافية",
    proText: "هوية بصرية عصرية وقابلة للتعديل.",
    easy: "سهلة التعديل",
    easyText: "عدّل النصوص والألوان والصور في Canva.",
    social: "للسوشيال ميديا",
    socialText: "مقاسات مناسبة للمحتوى الرقمي.",
    bundleTitle: "اختر الباقة المناسبة لك",
    popular: "الأكثر مبيعًا",
    howTitle: "كيف تحصل على التصميم؟",
    step1: "اختر التصميم",
    step2: "ادفع بأمان",
    step3: "استلم رابط Canva",
    aboutTitle: "نصمم لك نقطة بداية أفضل.",
    aboutText:
      "متجر رقمي للقوالب الاحترافية لأصحاب المشاريع وصناع المحتوى والمسوقين. عدّل القالب في Canva واجعله مناسبًا لعلامتك.",
    footer: "قوالب رقمية احترافية لصناعة محتوى أفضل.",
    cartTitle: "سلة المشتريات",
    total: "الإجمالي",
    checkout: "إتمام الشراء",
    paymentNote:
      "هذه نسخة تجريبية. اربط بوابة الدفع قبل الإطلاق."
  },

  en: {
    home: "Home",
    store: "Store",
    bundles: "Bundles",
    about: "About Us",
    contact: "Contact",
    eyebrow: "DIGITAL CREATIVE STUDIO",
    heroTitle: "Ready-made designs.<br>Make them yours.",
    heroText:
      "Professional Canva templates to help you create better content in minutes.",
    browse: "Browse Templates",
    explore: "Explore Bundles",
    best: "Best Sellers",
    all: "All",
    ads: "Ads",
    business: "Business",
    fast: "Save time",
    fastText: "Start with a ready-made template.",
    pro: "Professional designs",
    proText: "Modern, editable visual systems.",
    easy: "Easy to edit",
    easyText: "Change text, colors and images in Canva.",
    social: "Made for social",
    socialText: "Formats designed for digital content.",
    bundleTitle: "Choose your bundle",
    popular: "Best seller",
    howTitle: "How it works",
    step1: "Choose a design",
    step2: "Pay securely",
    step3: "Get your Canva link",
    aboutTitle: "A better starting point for your content.",
    aboutText:
      "A digital store of professional templates for businesses, creators and marketers.",
    footer: "Professional digital templates for better content.",
    cartTitle: "Your cart",
    total: "Total",
    checkout: "Checkout",
    paymentNote:
      "Demo checkout. Connect a payment provider before launch."
  },

  ku: {
    home: "سەرەکی",
    store: "فرۆشگا",
    bundles: "پاکێجەکان",
    about: "دەربارەی ئێمە",
    contact: "پەیوەندی",
    eyebrow: "DIGITAL CREATIVE STUDIO",
    heroTitle: "دیزاینی ئامادە.<br>بیکە بە شێوازی خۆت.",
    heroText:
      "قالبی پیشەیی Canva بۆ دروستکردنی ناوەڕۆکی جوان لە چەند خولەکێکدا.",
    browse: "گەڕان بە ناو دیزاینەکان",
    explore: "بینینی پاکێجەکان",
    best: "زۆرترین فرۆشراو",
    all: "هەموو",
    ads: "ڕیکلام",
    business: "بازرگانی",
    fast: "کاتی خۆت پاشەکەوت بکە",
    fastText: "لە قالبێکی ئامادەوە دەست پێ بکە.",
    pro: "دیزاینی پیشەیی",
    proText: "شێوازی نوێ و ئاسان بۆ دەستکاریکردن.",
    easy: "ئاسانە بۆ دەستکاریکردن",
    easyText: "دەق و ڕەنگ و وێنە لە Canva بگۆڕە.",
    social: "بۆ سۆشیال میدیا",
    socialText: "قەبارەی گونجاو بۆ ناوەڕۆکی دیجیتاڵ.",
    bundleTitle: "پاکێجی گونجاو هەڵبژێرە",
    popular: "زۆرترین فرۆشراو",
    howTitle: "چۆن دیزاینەکە وەردەگریت؟",
    step1: "دیزاین هەڵبژێرە",
    step2: "بە پارەیی ئاسایش بدە",
    step3: "بەستەری Canva وەربگرە",
    aboutTitle: "دەستپێکێکی باشتر بۆ ناوەڕۆکەکەت.",
    aboutText:
      "فرۆشگایەکی دیجیتاڵ بۆ قالبی پیشەیی بۆ خاوەنکار و دروستکەرانی ناوەڕۆک و مارکێتەرەکان.",
    footer: "قالبی دیجیتاڵی پیشەیی بۆ ناوەڕۆکی باشتر.",
    cartTitle: "سەبەتەکەت",
    total: "کۆی گشتی",
    checkout: "تەواوکردنی کڕین",
    paymentNote:
      "ئەمە وەشانی تاقیکردنەوەیە. پێش بڵاوکردنەوە سیستەمی پارەدان پەیوەست بکە."
  }
};

function renderProducts() {
  const search = document.querySelector("#search");

  if (!search) return;

  let q = search.value.toLowerCase();

  const activeCategory = document.querySelector(
    ".categories .active"
  );

  const cat = activeCategory
    ? activeCategory.dataset.cat
    : "all";

  const list = products.filter(
    p =>
      (cat === "all" || p.cat === cat) &&
      (
        p.name.toLowerCase().includes(q) ||
        p.desc.toLowerCase().includes(q)
      )
  );

  const container = document.querySelector("#products");

  if (!container) return;

  container.innerHTML = list
    .map(
      p => `
        <article class="product">

          <div class="preview ${p.cls}">
            ${p.name.split(" ")[0].toUpperCase()}
          </div>

          <div class="productInfo">

            <h3>${p.name}</h3>

            <p>${p.desc}</p>

            <div class="price">
              $${p.price}
            </div>

            <button
              class="btn primary"
              onclick="addProduct(${p.id})"
            >
              Buy / شراء
            </button>

          </div>

        </article>
      `
    )
    .join("");
}

function addProduct(id) {
  const product = products.find(
    item => item.id === id
  );

  if (!product) return;

  cart.push(product);

  save();

  openCart();
}

function addBundle(name, price) {
  cart.push({
    name,
    price
  });

  save();

  openCart();
}

function save() {
  localStorage.setItem(
    "cart",
    JSON.stringify(cart)
  );

  const cartCount =
    document.querySelector("#cartCount");

  if (cartCount) {
    cartCount.textContent = cart.length;
  }

  renderCart();
}

function renderCart() {
  const cartItems =
    document.querySelector("#cartItems");

  const total =
    document.querySelector("#total");

  if (!cartItems || !total) return;

  if (cart.length) {
    cartItems.innerHTML = cart
      .map(
        (product, index) => `
          <div class="cartItem">

            <span>
              ${product.name}
            </span>

            <b>
              $${product.price}
            </b>

          </div>
        `
      )
      .join("");
  } else {
    cartItems.innerHTML =
      `<p>Your cart is empty.</p>`;
  }

  total.textContent =
    "$" +
    cart.reduce(
      (sum, product) =>
        sum + Number(product.price),
      0
    );
}

function openCart() {
  const panel =
    document.querySelector("#cartPanel");

  if (panel) {
    panel.classList.add("open");
  }
}

function closeCart() {
  const panel =
    document.querySelector("#cartPanel");

  if (panel) {
    panel.classList.remove("open");
  }
}

function checkout() {
  alert(
    "Demo checkout: connect your payment gateway and automatic Canva-link delivery here."
  );
}

function setLang(lang) {
  if (!tr[lang]) {
    lang = "ar";
  }

  document.documentElement.lang = lang;

  document.documentElement.dir =
    lang === "en"
      ? "ltr"
      : "rtl";

  document
    .querySelectorAll("[data-i18n]")
    .forEach(element => {

      const key =
        element.dataset.i18n;

      if (tr[lang][key]) {
        element.innerHTML =
          tr[lang][key];
      }
    });

  const search =
    document.querySelector("#search");

  if (search) {

    search.placeholder =
      lang === "en"
        ? "Search templates..."
        : lang === "ku"
        ? "گەڕان بە ناو دیزاین..."
        : "ابحث عن تصميم...";
  }

  localStorage.setItem(
    "lang",
    lang
  );
}

document.addEventListener(
  "DOMContentLoaded",
  () => {

    const language =
      document.querySelector("#lang");

    if (language) {

      const savedLanguage =
        localStorage.getItem("lang") ||
        "ar";

      language.value =
        savedLanguage;

      setLang(savedLanguage);

      language.addEventListener(
        "change",
        event => {
          setLang(event.target.value);
        }
      );
    }

    const search =
      document.querySelector("#search");

    if (search) {
      search.addEventListener(
        "input",
        renderProducts
      );
    }

    document
      .querySelectorAll(
        ".categories button"
      )
      .forEach(button => {

        button.addEventListener(
          "click",
          () => {

            document
              .querySelectorAll(
                ".categories button"
              )
              .forEach(item =>
                item.classList.remove(
                  "active"
                )
              );

            button.classList.add(
              "active"
            );

            renderProducts();
          }
        );
      });

    const cartButton =
      document.querySelector("#cartBtn");

    if (cartButton) {
      cartButton.addEventListener(
        "click",
        openCart
      );
    }

    save();

    renderProducts();
  }
);
