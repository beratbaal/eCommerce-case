# Ürün Satış Sayfası

Bu proje, React, Next.js ve Tailwind CSS kullanılarak oluşturulmuş bir dijital ürün satış sayfasıdır. Redux Toolkit ile state yönetimi sağlanmıştır.

## Özellikler

- Ürünlerin listelenmesi ve detaylarının görüntülenmesi
- Ürünleri sepete ekleme ve sepetten çıkarma
- API entegrasyonu ile ürün verilerinin alınması
- Responsive tasarım

## Kullanılan Teknolojiler

- **React**: Bileşen tabanlı yapı
- **Next.js**: Sayfa yönlendirmesi ve server-side rendering
- **Tailwind CSS**: Hızlı ve esnek stil oluşturma
- **Redux Toolkit**: State yönetimi
- **React Icons**: İkonlar

## Kurulum

1. Projeyi klonlayın:

   ```bash
   git clone https://github.com/kullanici/proje-adi.git
   ```

2. Proje dizinine gidin:

   ```bash
   cd proje-adi
   ```

3. Bağımlılıkları yükleyin:

   ```bash
   npm install
   ```

4. Projeyi çalıştırın:

   ```bash
   npm run dev
   ```

5. Tarayıcıda çalıştırın: [http://localhost:3000](http://localhost:3000)

## Proje Yapısı

```
📁 src
 ┣ 📁 app
 ┃ ┣ 📁 product
 ┃ ┃ ┗ 📜 [id].tsx
 ┃ ┗ 📜 page.tsx
 ┣ 📁 components
 ┃ ┣ 📜 ProductCard.tsx
 ┃ ┣ 📜 ProductDetail.tsx
 ┃ ┗ 📜 Button.tsx
 ┣ 📁 context
 ┃ ┗ 📜 CartContext.tsx
 ┣ 📁 styles
 ┃ ┗ 📜 globals.css
 ┗ 📜 layout.tsx
```

## API

Projede kullanılan API: [Fake Store API](https://fakestoreapi.com)

## Katkıda Bulunma

1. Fork'layın
2. Yeni bir dal oluşturun: `git checkout -b yeni-ozellik`
3. Değişikliklerinizi yapın ve commit atın: `git commit -m 'Yeni özellik eklendi'`
4. Push edin: `git push origin yeni-ozellik`
5. Pull Request oluşturun

## Lisans

Bu proje MIT lisansı altında lisanslanmıştır.

---

**Not:** Sorun yaşarsanız lütfen bir issue açın.
