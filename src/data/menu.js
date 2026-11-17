export const CATEGORIES = ["burger", "side", "drink"];

export const CATEGORY_LABELS = {
  burger: { ko: "버거", en: "Burgers", zh: "汉堡", ja: "バーガー", vi: "Burger" },
  side: { ko: "사이드", en: "Sides", zh: "小食", ja: "サイド", vi: "Món phụ" },
  drink: { ko: "음료", en: "Drinks", zh: "饮料", ja: "ドリンク", vi: "Đồ uống" },
};

// 판매 가격이 아닌 키오스크 시연용 예시 가격입니다. 실제 매장·시기별 가격과 다를 수 있습니다.
export const MENU = [
  { id: "whopper", category: "burger", price: 8900, icon: "🍔", photo: "whopper.jpg",
    names: { ko: "와퍼", en: "Whopper", zh: "皇堡", ja: "ワッパー", vi: "Whopper" },
    whip: false, iceOnly: true },
  { id: "quattro-cheese-whopper", category: "burger", price: 9900, icon: "🧀", photo: "quattro-cheese-whopper.jpg",
    names: { ko: "콰트로치즈와퍼", en: "Quattro Cheese Whopper", zh: "四重芝士皇堡", ja: "クアトロチーズワッパー", vi: "Whopper Phô Mai Bốn Loại" },
    whip: false, iceOnly: true },
  { id: "bulgogi-whopper", category: "burger", price: 8900, icon: "🥩", photo: "bulgogi-whopper.jpg",
    names: { ko: "불고기와퍼", en: "Bulgogi Whopper", zh: "烤肉皇堡", ja: "プルコギワッパー", vi: "Whopper Bulgogi" },
    whip: false, iceOnly: true },
  { id: "shrimp-whopper", category: "burger", price: 9900, icon: "🍤", photo: "shrimp-whopper.jpg",
    names: { ko: "통새우와퍼", en: "Shrimp Whopper", zh: "鲜虾皇堡", ja: "エビワッパー", vi: "Whopper Tôm" },
    whip: false, iceOnly: true },
  { id: "monster-whopper", category: "burger", price: 10900, icon: "🍔", photo: "monster-whopper.jpg",
    names: { ko: "몬스터와퍼", en: "Monster Whopper", zh: "怪兽皇堡", ja: "モンスターワッパー", vi: "Monster Whopper" },
    whip: false, iceOnly: true },
  { id: "french-fries", category: "side", price: 2500, icon: "🍟", photo: "french-fries.jpg",
    names: { ko: "프렌치프라이", en: "French Fries", zh: "薯条", ja: "フレンチフライ", vi: "Khoai tây chiên" },
    whip: false, iceOnly: true },
  { id: "onion-rings", category: "side", price: 3000, icon: "🧅", photo: "onion-rings.jpg",
    names: { ko: "어니언링", en: "Onion Rings", zh: "洋葱圈", ja: "オニオンリング", vi: "Hành tây chiên vòng" },
    whip: false, iceOnly: true },
  { id: "crispy-tenders", category: "side", price: 3900, icon: "🍗", photo: "crispy-tenders.jpg",
    names: { ko: "크리스퍼 텐더", en: "Crisper Tenders", zh: "香脆鸡柳", ja: "クリスパーテンダー", vi: "Gà Crispy Tenders" },
    whip: false, iceOnly: true },
  { id: "coca-cola", category: "drink", price: 2000, icon: "🥤", photo: "coca-cola.jpg",
    names: { ko: "코카콜라", en: "Coca-Cola", zh: "可口可乐", ja: "コカ・コーラ", vi: "Coca-Cola" },
    whip: false, iceOnly: true },
  { id: "sprite", category: "drink", price: 2000, icon: "🥤", photo: "sprite.jpg",
    names: { ko: "스프라이트", en: "Sprite", zh: "雪碧", ja: "スプライト", vi: "Sprite" },
    whip: false, iceOnly: true },
  { id: "americano", category: "drink", price: 2500, icon: "☕", photo: "americano.jpg",
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
  `${process.env.PUBLIC_URL || ""}/menu-images/${item.photo || `${item.id}.jpg`}`;

export const computeUnitPrice = (item, options) =>
  item.price +
  (item.category === "drink" && options.size === "large" ? ADDON_PRICE.sizeLarge : 0);

export const buildOptionSummary = (t, options, item) =>
  item.category === "drink" && options.size === "large"
    ? t.sizeLarge.replace(/\\s*\\(.*\\)/, "")
    : "";

export const format = (template, vars) =>
  (template || "").replace(/\\{(\\w+)\\}/g, (_, k) => (vars[k] !== undefined ? vars[k] : ""));
