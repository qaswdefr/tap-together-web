export const CATEGORIES = ["burger", "set", "side", "drink"];

export const CATEGORY_LABELS = {
  burger: { ko: "버거", en: "Burgers", zh: "汉堡", ja: "バーガー", vi: "Burger" },
  set: { ko: "세트", en: "Meals", zh: "套餐", ja: "セット", vi: "Combo" },
  side: { ko: "사이드", en: "Sides", zh: "小食", ja: "サイド", vi: "Món phụ" },
  drink: { ko: "음료", en: "Drinks", zh: "饮料", ja: "ドリンク", vi: "Đồ uống" },
};

// 판매 가격이 아닌 키오스크 시연용 예시 가격입니다. 실제 매장·시기별 가격과 다를 수 있습니다.
export const MENU = [
  { id: "whopper", category: "burger", price: 7400, icon: "🍔", imageUrl: "https://cdn.sanity.io/images/kjfd81ul/prod_bk_ca/5dddf194b6dfd89567d029f2e74829fd6e7e75f8-1333x1333.png?auto=format&fit=max&q=75&w=1181",
    names: { ko: "와퍼", en: "Whopper", zh: "皇堡", ja: "ワッパー", vi: "Whopper" },
    whip: false, iceOnly: true },
  { id: "quattro-cheese-whopper", category: "burger", price: 10200, icon: "🧀", imageUrl: "https://image2.lotteimall.com/goods/75/85/63/1257638575_1.jpg/dims/resizemc/550x550/optimize",
    names: { ko: "콰트로치즈와퍼", en: "Quattro Cheese Whopper", zh: "四重芝士皇堡", ja: "クアトロチーズワッパー", vi: "Whopper Phô Mai Bốn Loại" },
    whip: false, iceOnly: true },
  { id: "bulgogi-whopper", category: "burger", price: 8900, icon: "🥩", imageUrl: "https://media.sodagift.com/img/image/1738908757653.jpg",
    names: { ko: "불고기와퍼", en: "Bulgogi Whopper", zh: "烤肉皇堡", ja: "プルコギワッパー", vi: "Whopper Bulgogi" },
    whip: false, iceOnly: true },
  { id: "shrimp-whopper", category: "burger", price: 9900, icon: "🍤", imageUrl: "https://img.danawa.com/prod_img/500000/309/485/img/21485309_1.jpg?_v=20240429132114",
    names: { ko: "통새우와퍼", en: "Shrimp Whopper", zh: "鲜虾皇堡", ja: "エビワッパー", vi: "Whopper Tôm" },
    whip: false, iceOnly: true },
  { id: "monster-whopper", category: "burger", price: 11200, icon: "🍔", imageUrl: "https://static1.purebreak.com/articles/8/20/92/08/%40/746061-burger-king-devoile-son-plus-gros-burger-1200x0-1.jpg",
    names: { ko: "몬스터와퍼", en: "Monster Whopper", zh: "怪兽皇堡", ja: "モンスターワッパー", vi: "Monster Whopper" },
    whip: false, iceOnly: true },
  { id: "whopper-set", category: "set", price: 12100, icon: "🍔", imageUrl: "https://cdn.011st.com/11dims/resize/600x600/quality/75/11src/dl/v2/7/1/9/4/5/3/UowfN/8795719453_214725429.webp", names: { ko: "와퍼 세트", en: "Whopper Meal", zh: "皇堡套餐", ja: "ワッパーセット", vi: "Combo Whopper" }, whip: false, iceOnly: true },
  { id: "quattro-cheese-whopper-set", category: "set", price: 12900, icon: "🧀", imageUrl: "https://sitem.ssgcdn.com/10/74/72/item/1000535727410_i1_750.jpg", names: { ko: "콰트로치즈와퍼 세트", en: "Quattro Cheese Whopper Meal", zh: "四重芝士皇堡套餐", ja: "クアトロチーズワッパーセット", vi: "Combo Whopper Phô Mai" }, whip: false, iceOnly: true },
  { id: "shrimp-whopper-set", category: "set", price: 12900, icon: "🍤", imageUrl: "https://sitem.ssgcdn.com/07/43/54/item/1000518544307_i1_1200.jpg", names: { ko: "통새우와퍼 세트", en: "Shrimp Whopper Meal", zh: "鲜虾皇堡套餐", ja: "エビワッパーセット", vi: "Combo Whopper Tôm" }, whip: false, iceOnly: true },
  { id: "monster-whopper-set", category: "set", price: 13800, icon: "🍔", imageUrl: "https://contents.lotteon.com/itemimage/LO/20/93/61/56/82/_2/09/36/15/68/3/LO2093615682_2093615683_1.jpg", names: { ko: "몬스터와퍼 세트", en: "Monster Whopper Meal", zh: "怪兽皇堡套餐", ja: "モンスターワッパーセット", vi: "Combo Monster Whopper" }, whip: false, iceOnly: true },
  { id: "french-fries", category: "side", price: 2300, icon: "🍟", imageUrl: "https://s.yimg.com/ny/api/res/1.2/X.n4Usq1pedjOu02s7gF7Q--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTY0MA--/https%3A/media.zenfs.com/en/aol_delish_448/3c6e147a7023cdf1bcb5093d55257b98",
    names: { ko: "프렌치프라이", en: "French Fries", zh: "薯条", ja: "フレンチフライ", vi: "Khoai tây chiên" },
    whip: false, iceOnly: true },
  { id: "onion-rings", category: "side", price: 2700, icon: "🧅", imageUrl: "https://cdn.inoutdelivery.com/burgerking.inoutdelivery.com/sm/1755284595680-DiDi_Aros%20Med-02.png",
    names: { ko: "어니언링", en: "Onion Rings", zh: "洋葱圈", ja: "オニオンリング", vi: "Hành tây chiên vòng" },
    whip: false, iceOnly: true },
  { id: "crispy-tenders", category: "side", price: 4800, icon: "🍗", imageUrl: "https://burgerkingfrance.twic.pics/img/menu/96f02467-690a-4062-b13f-730f7d0237f7_",
    names: { ko: "크리스퍼 텐더", en: "Crisper Tenders", zh: "香脆鸡柳", ja: "クリスパーテンダー", vi: "Gà Crispy Tenders" },
    whip: false, iceOnly: true },
  { id: "coca-cola", category: "drink", price: 2000, icon: "🥤", imageUrl: "https://cdn-image.tapgo.app/upload/3f46383e3c016459712fe348d594caad-1658717405.jpeg",
    names: { ko: "코카콜라", en: "Coca-Cola", zh: "可口可乐", ja: "コカ・コーラ", vi: "Coca-Cola" },
    whip: false, iceOnly: true },
  { id: "sprite", category: "drink", price: 2000, icon: "🥤", imageUrl: "https://burgerkingreunion.twic.pics/img/products/c/8d/c8dbd4c2-fda7-49cb-a2f9-0768812cb27c_",
    names: { ko: "스프라이트", en: "Sprite", zh: "雪碧", ja: "スプライト", vi: "Sprite" },
    whip: false, iceOnly: true },
  { id: "americano", category: "drink", price: 2500, icon: "☕", imageUrl: "https://mob-prd.burgerking.co.kr/images/menu/web/main/2025/01/06/c77ae44c-30a2-4b09-9438-4a072ce7299e.png", photo: "americano.jpg",
    names: { ko: "아메리카노", en: "Americano", zh: "美式咖啡", ja: "アメリカーノ", vi: "Americano" },
    whip: false, iceOnly: true },
];

export const MENU_NAMES = Object.fromEntries(MENU.map((item) => [item.id, item.names]));
export const WHIP_AVAILABLE_IDS = MENU.filter((item) => item.whip).map((item) => item.id);
export const FIXED_ICE_IDS = MENU.filter((item) => item.iceOnly).map((item) => item.id);

export const applyMenuNames = (translations) => {
  if (!translations) return translations;
  const result = {};
  Object.keys(translations).forEach((lang) => {
    const menu = { ...(translations[lang].menu || {}) };
    Object.keys(menu).forEach((id) => { if (!MENU_NAMES[id]) delete menu[id]; });
    Object.keys(MENU_NAMES).forEach((id) => {
      const name = MENU_NAMES[id][lang] || MENU_NAMES[id].ko;
      if (name) menu[id] = name;
    });
    result[lang] = { ...translations[lang], menu };
  });
  return result;
};

export const ADDON_PRICE = { sizeLarge: 500, whip: 500, toppingPearl: 500 };
export const DEFAULT_OPTIONS = { size: "regular", whip: "none", topping: "none", hotIce: "ice" };

export const getQrImageUrl = (value) =>
  `https://api.qrserver.com/v1/create-qr-code/?size=180x180&margin=8&data=${encodeURIComponent(value)}`;

export const getMenuImageUrl = (item) =>
  item.imageUrl || `${process.env.PUBLIC_URL || ""}/menu-images/${item.photo || `${item.id}.jpg`}`;

export const computeUnitPrice = (item, options) =>
  item.price +
  (item.category === "drink" && options.size === "large" ? ADDON_PRICE.sizeLarge : 0);

export const buildOptionSummary = (t, options, item) =>
  item.category === "drink" && options.size === "large"
    ? t.sizeLarge.replace(/\s*\\(.*\\)/, "")
    : "";

export const format = (template, vars) =>
  (template || "").replace(/\{(\\w+)\}/g, (_, k) => (vars[k] !== undefined ? vars[k] : ""));
