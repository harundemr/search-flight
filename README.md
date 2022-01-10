# Uçuş Sorgulama Uygulaması

## Açıklama

ReactJs kullanarak geliştirilmiştir. \
Herhangi bir css kütüphanesi kullanılmamıştır. Tasarımlar tamamen css ile sıfırdan yazılmıştır.\
3 sayfadan oluşmaktadır.

## Sayfalar
### SearchFlight

Uçuş sorgulama sayfasıdır.\
Şehir seçimleri, yolcu sayısı ve kabin filtreleri kullanılabilmektedir.\
Filtrelemeler Uçuş listeleme sayfasına geçmeden önce yapılır. \
Sonuç 0 ise alert ile kullanıcı bilgilendirilir.\
Sonuç 0 dan büyük ise uçuş listeleme sayfasına yönlendirir.\
Tarih seçimi aktif değildir.

### ListFlight

Uçuş listeleme sayfasıdır.\
Önceki sayfadan seçilen bilgiler bu ekranın üst kısmında özet olarak gösterilir.\
Promosyon kodu seçimi yapılabilir. \
Promosyon kodu seçiminde emonomi kabininin ecoFly paketinde %50 indirim otomatik olarak uygulanır. \
Promosyon kodu seçiminde economy kabininin ecoFly paketi haricindeki tüm paketler disabled olur.\
Liste default olarak Ekonomi Kabin Ücreti ne göre sıralanmış olarak gelir. İstenirse kalkış saati butonu ile kalkış saatine göre sıralama yapılabilir.\
Listedeki her bir uçuş için economy ve business seçimleri yapıldığında ilgili paketler ve özellikleri dropdown olarak açılır. \
Uçuş seçim yapıldığında ilgili paketin 'status' ü kontrol edilip AVAILABLE ise 'Kabin seçimi tamamlandı' sayfasına yönlendirilir.\
Bu aşamada uçuşa ait bilgiler 'Local Storage' ye kaydedilir.\
'status', 'ERROR' ise 'Kabin seçimi tamamlanamadı' sayfasına yönlendirilir.

### Complation

İşlem bittiğinde kullanıcıya mesaj gösterek sayfadır.\
Seçim başarıyla tamamlandıysa parametre olarak isComplate: true alır.\
Seçim başarılıysa 'Local Storage' den uçuş bilgileri çekilir ve ekranda özet bilgi olarak gösterilir.\
Başa dönme butonu ile uçuş sorgulama sayfasına tekrar dönülebilir. Bu aşamada 'Local Storage' temizlenir.

## Komponentler

### Flight

Uçuş listeleme sayfasında listede görünen her bir uçuşa karşılık gelir. \
Prop olarak uçuşa ait bilgileri alır.\

### SubCategory

Flight komponentinde kabin seçildiğinde dropdown olarak açılan paketlerin her birine karşılık gelir.\
Prop olarak o kategoriye ait bilgileri alır.

### Message

Complation sayfasında gösterilen icon ve mesajın gösterimi için tasarlanmıştır.\
Prop olarak type ve content almaktadır.\
Type eğer 'success' ise yeşil tik iconu ile birlikte görünmektedir.\
type eğer 'error' ise kırmızı çarpı iconu ile birlikte görünmektedir.