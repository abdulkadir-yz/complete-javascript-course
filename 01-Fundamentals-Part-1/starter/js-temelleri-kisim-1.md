# JavaScript Temelleri — Kısım 1
### Değişkenler · Veri Tipleri · Operatörler

> **Müfredat Haritası**
> - ✅ **Kısım 1** — Değişkenler, Veri Tipleri, Operatörler ← *şu an buradasın*
> - ⬜ Kısım 2 — Akış Kontrolü & Fonksiyonlar
> - ⬜ Kısım 3 — Diziler, Objeler & Modern JS

---

## Neden JavaScript?

Önce "neden" sorusunu cevaplayalım — çünkü bir şeyi öğrenmeden önce neden öğrendiğini bilmek motivasyonunu yüksek tutar.

JavaScript, günümüzde **tek dil olup hem frontend hem backend'de çalışabilen** dildir. Browser'da doğrudan çalışır — kurulum yok, derleme yok. Ama asıl büyük fark şu:

```
C# (.NET)  →  Backend API
JavaScript →  Frontend (React, Next.js) + Node.js ile backend de
```

Sen .NET backend geliştirici hedefliyorsun. Peki neden JS öğreniyorsun?

1. **Next.js** (GymFuel frontend'i için) JS/TS tabanlı
2. API'larını test etmek için browser console'u kullanacaksın
3. Full-stack projelerde frontend'i anlaman gerekiyor
4. TypeScript = JavaScript + tip sistemi → TS öğrenmek için JS şart

---

## Bölüm 1 — Değişkenler

### Önce "neden" sorusu

Bir program çalışırken verileri bir yerde tutması gerekir. Bu yer **RAM**'dir. Değişken ise RAM'deki bir alanı adlandırmak için kullandığın etikettir.

```
RAM
┌─────────────────────┐
│  isim → "Kadir"     │  ← let isim = "Kadir" dediğinde bu olur
│  yas  → 30          │  ← const yas = 30
│  ...                │
└─────────────────────┘
```

### `let` — Değiştirilebilir değişken

```javascript
let isim = "Kadir";
console.log(isim); // → "Kadir"

isim = "Kadir Yılmaz"; // değer değiştirildi
console.log(isim); // → "Kadir Yılmaz"
```

**Ne zaman kullanırsın?** Değerin zamanla değişeceğini bildiğinde.
Örnek: kullanıcının sepet adedi, sayaç, form input değeri.

---

### `const` — Sabit değişken

```javascript
const apiUrl = "https://api.gymfuel.de/v1";
console.log(apiUrl); // → "https://api.gymfuel.de/v1"

// apiUrl = "başka bir şey"; // ❌ TypeError: Assignment to constant variable.
```

**Ne zaman kullanırsın?** Değerin hiç değişmeyeceğini bildiğinde.
Örnek: API adresi, sabit konfigürasyonlar, matematiksel sabitler.

> **Altın Kural:** Her zaman önce `const` yaz. Eğer ilerleyen satırlarda değeri değiştirmen gerekirse `let`'e dönüştür. `var`'ı asla kullanma.

---

### `var` — Neden kullanmıyoruz?

```javascript
// var ile ilgili tehlikeli davranış örneği:
console.log(eski); // → undefined (hata vermez! bu tehlikeli)
var eski = "değer";

// let ile aynı şeyi dene:
// console.log(yeni); // → ReferenceError: Cannot access before initialization ✅ BU DAHA İYİ
// let yeni = "değer";
```

`var` **hoisting** adlı bir davranış yüzünden tanımlanmadan önce kullanılabilir. Bu beklenmedik hatalara yol açar. `let` ve `const` bu sorunu çözer.

---

### Değişken İsimlendirme Kuralları

```javascript
// ✅ GEÇERLİ
let kullaniciAdi = "kadir";    // camelCase — JS standardı
let _gizliDeger = 42;          // alt çizgi ile başlayabilir
let $element = null;           // dolar işareti ile başlayabilir
let yas2024 = 30;              // içinde rakam olabilir

// ❌ GEÇERSİZ
// let 2024yas = 30;           // rakamla başlayamaz
// let kullanici adi = "k";    // boşluk olamaz
// let let = "değer";          // reserved keyword kullanılamaz
```

**camelCase nedir?** İlk kelime küçük, sonraki kelimelerin ilk harfi büyük.
`kullaniciAdi`, `siparisToplami`, `aktifMi`

---

## Bölüm 2 — Veri Tipleri

### Önce "neden" sorusu

Neden veri tipi önemli? Çünkü bilgisayar bellekte `"30"` ile `30`'u farklı tutar. Birisi metin, diğeri sayı. Bunları karıştırırsan beklenmedik sonuçlar alırsın:

```javascript
console.log("30" + 5);  // → "305"  (metin birleştirme!)
console.log(30 + 5);    // → 35     (matematiksel toplama)
```

Bu farkı anlamamak JavaScript'te en sık yapılan hatalardan biridir.

---

### 1. String (Metin)

```javascript
const isim = "Kadir";           // çift tırnak
const sehir = 'Worms';          // tek tırnak (ikisi de aynı)
const mesaj = `Merhaba ${isim}!`; // template literal (backtick)

console.log(mesaj); // → "Merhaba Kadir!"

// Sık kullanılan string işlemleri
console.log(isim.length);           // → 5 (karakter sayısı)
console.log(isim.toUpperCase());    // → "KADİR"
console.log(isim.toLowerCase());    // → "kadir"
console.log(isim.includes("adi")); // → true
console.log("  boşluk  ".trim()); // → "boşluk"
```

**Template literal neden önemli?** Metin içine değişken gömmek için `+` kullanmak yerine backtick ve `${}` kullanırsın. Okunması çok daha kolaydır:

```javascript
const ad = "Kadir";
const yas = 30;

// ESKİ YÖNTEM (karmaşık)
const mesaj1 = "Merhaba, ben " + ad + ", " + yas + " yaşındayım.";

// YENİ YÖNTEM (template literal)
const mesaj2 = `Merhaba, ben ${ad}, ${yas} yaşındayım.`;

// Her ikisi de aynı sonucu verir:
// → "Merhaba, ben Kadir, 30 yaşındayım."
```

---

### 2. Number (Sayı)

JavaScript'te `int` ve `float` ayrımı yoktur. İkisi de `number` tipidir:

```javascript
const tamSayi = 42;
const ondalikli = 9.99;
const negatif = -15;

console.log(typeof tamSayi);    // → "number"
console.log(typeof ondalikli);  // → "number"

// Özel number değerleri
console.log(10 / 0);            // → Infinity
console.log("metin" * 2);       // → NaN (Not a Number)
console.log(isNaN("metin"));    // → true
```

**`NaN` (Not a Number):** Sayısal bir işlemin başarısız olduğunu gösterir. İlginç olan: `typeof NaN === "number"` döner. Bu da JS'in ünlü garip davranışlarından biridir.

---

### 3. Boolean (Mantıksal)

Sadece iki değer alır: `true` ya da `false`.

```javascript
const aktif = true;
const silinmis = false;

console.log(typeof aktif); // → "boolean"

// Karşılaştırma işlemleri boolean döndürür:
console.log(5 > 3);        // → true
console.log(10 === "10");  // → false (tip farklı!)
console.log(10 == "10");   // → true  (tip kontrolü yapmaz — tehlikeli!)
```

> **Önemli:** `===` (üç eşittir) her zaman `==` (iki eşittir) yerine kullan. `===` hem değeri hem tipi kontrol eder. C#'taki `==` gibi davranır.

---

### 4. null — Kasıtlı Boşluk

```javascript
let aktifKullanici = null; // "şu an kimse yok" anlamında

console.log(aktifKullanici); // → null
console.log(typeof null);    // → "object"  ← ÜNLÜ JS BUG'I
```

`null` kullandığın zaman şunu söylüyorsun: "Bu değişken var, ama şu an içi kasıtlı olarak boş."

---

### 5. undefined — Atanmamış

```javascript
let sonuc;
console.log(sonuc);         // → undefined
console.log(typeof sonuc);  // → "undefined"
```

`undefined` şunu söyler: "Bu değişken tanımlandı ama henüz bir değer verilmedi."

---

### null vs undefined — Fark nedir?

```javascript
let a = null;      // SEN boş bıraktın (kasıtlı)
let b;             // JS boş bıraktı (henüz atanmadı)

console.log(a === null);      // → true
console.log(b === undefined); // → true
console.log(a === b);         // → false (tipleri farklı!)
```

C# ile kıyaslama:
- `null` → C#'daki `null` ile aynı
- `undefined` → C#'da karşılığı yok (JS'e özgü)

---

### typeof — Tipi öğrenmek

```javascript
console.log(typeof "Kadir");    // → "string"
console.log(typeof 42);         // → "number"
console.log(typeof true);       // → "boolean"
console.log(typeof undefined);  // → "undefined"
console.log(typeof null);       // → "object"  ← bug, unutma
console.log(typeof {});         // → "object"
console.log(typeof []);         // → "object"
console.log(typeof function(){}); // → "function"
```

---

## Bölüm 3 — Operatörler

### Aritmetik Operatörler

```javascript
const a = 10;
const b = 3;

console.log(a + b);  // → 13  (toplama)
console.log(a - b);  // → 7   (çıkarma)
console.log(a * b);  // → 30  (çarpma)
console.log(a / b);  // → 3.333... (bölme)
console.log(a % b);  // → 1   (mod — kalan)
console.log(a ** b); // → 1000 (üs alma: 10³)
```

**Mod (`%`) ne işe yarar?** Bir sayının çift mi tek mi olduğunu kontrol etmek için sık kullanılır:

```javascript
console.log(10 % 2 === 0); // → true  (çift sayı)
console.log(7 % 2 === 0);  // → false (tek sayı)
```

---

### Atama Operatörleri

```javascript
let sayi = 10;

sayi += 5;  // sayi = sayi + 5  → 15
sayi -= 3;  // sayi = sayi - 3  → 12
sayi *= 2;  // sayi = sayi * 2  → 24
sayi /= 4;  // sayi = sayi / 4  → 6
sayi **= 2; // sayi = sayi ** 2 → 36

// Artırma / Azaltma
sayi++;     // sayi = sayi + 1
sayi--;     // sayi = sayi - 1
```

---

### Karşılaştırma Operatörleri

Karşılaştırma operatörleri her zaman `boolean` döndürür.

```javascript
console.log(5 > 3);    // → true  (büyük mü?)
console.log(5 < 3);    // → false (küçük mü?)
console.log(5 >= 5);   // → true  (büyük eşit mi?)
console.log(5 <= 4);   // → false (küçük eşit mi?)

// EŞİTLİK — ÖNEMLI FARK:
console.log(5 === 5);  // → true  (değer VE tip eşit mi?) ← HEP BUNU KULLAN
console.log(5 === "5");// → false (tip farklı: number vs string)
console.log(5 == "5"); // → true  (sadece değer eşit mi? — tehlikeli!)

// EŞİT DEĞİL:
console.log(5 !== 3);  // → true  ← HEP BUNU KULLAN
console.log(5 != "5"); // → false ← KULLANMA
```

> **Kural:** `===` ve `!==` kullan. `==` ve `!=` kullanma. Bu kural C# geliştiricisi için sezgisel — C#'da `==` zaten strict karşılaştırma yapar.

---

### Mantıksal Operatörler

```javascript
const yasYeterlimi = 18;
const uyelikVarMi = true;

// && (AND — ve) → İKİSİ DE true ise true
console.log(yasYeterlimi >= 18 && uyelikVarMi); // → true

// || (OR — veya) → BİRİ true ise true
console.log(yasYeterlimi < 18 || uyelikVarMi);  // → true

// ! (NOT — değil) → tersine çevirir
console.log(!uyelikVarMi); // → false
console.log(!false);       // → true
```

**Gerçek hayat örneği:**

```javascript
const kullanici = "kadir";
const sifre = "12345";

const girisBasarili = kullanici === "kadir" && sifre === "12345";
console.log(girisBasarili); // → true
```

---

### Truthy & Falsy — JavaScript'e özgü kavram

JavaScript'te bazı değerler `false` gibi davranır (falsy), geri kalanlar `true` gibi (truthy).

```javascript
// FALSY değerler (false sayılanlar):
false, 0, "", null, undefined, NaN

// TRUTHY değerler (geri kalan her şey):
true, 1, "metin", [], {}, -1, "0"
```

Bunu şimdilik aklında tut, Kısım 2'de `if` ile kullandığında anlam kazanacak.

---

## Özet — Kısım 1

| Konu | Hatırlanacak |
|------|-------------|
| Değişkenler | `const` önce yaz, değişecekse `let`; `var` kullanma |
| String | Backtick + `${}` ile template literal kullan |
| Eşitlik | `===` ve `!==` kullan; `==` ve `!=` kullanma |
| null vs undefined | `null` sen koydun, `undefined` JS koydu |
| typeof null | `"object"` döner — bug, ama ezberle |

---

## Alıştırma Görevleri

Bunları bir `.js` dosyasına yaz ve Node.js ile çalıştır (`node dosya.js`):

**Görev 1:** Kendi bilgilerini içeren değişkenler oluştur (`isim`, `yas`, `sehir`, `aktif`). Template literal ile bir tanıtım cümlesi yazdır.

**Görev 2:** İki sayı gir, toplamlarını, farklarını, çarpmalarını ve modunu yazdır.

**Görev 3:** `typeof` ile her veri tipini test et ve sonuçları yazdır.

**Bonus:** `"5" + 5` ve `"5" - 5` ile dene. Sonuçlar farklı mı? Neden?

---

## Sıradaki Kısım

**Kısım 2** şunları kapsar:
- `if / else / else if` — koşullu çalıştırma
- `switch` — çoklu koşul
- `for`, `while`, `for...of` döngüleri
- Fonksiyonlar (declaration, expression, arrow function)
- Scope — değişken erişim alanı
