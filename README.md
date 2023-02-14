Tanımlamalar (inputs):
Film Adı : Yapılacak iş ile ilgili 255 karakteri geçmeyecek şekilde yalnızca alfanümerik karakterler içeren bir başlık metnidir.
Özellikler:
1. * Film ekleme yapılırken tüm alanların doldurulması zorunludur.
2. * Listelemede, en güncel tarihden geçmiş tarihe doğru ve IMDB puanı en yüksekten en düşüğe doğru sıralanmalıdır. (default olarak)
3. * Listelemede ad ve film türü, film yılı ve IMDB puanına göre filtreleme özelliği.
4. a. * Listedeki filmleri düzenleme özelliği.
i. Yalnızca Film adı ve IMDB puanı değiştirebilir.
b. * Silme özelliği
i. Yalnızca onay verildiği takdirde silinir.
5. * Responsive desteği olmalı.
6. Oluşturulan film kayıtları Web storage üzerinde bir alanda yönetilerek, tarayıcıyı kapatıp açtığında bile
veriler ilgili tarayıcıda durmaya devam etmeli
7. Uygulama içerisinde minimum bir tane feature component / generic component kullanılması..
8. omdbapi.com filmler çekilecek. Uygulama ilk
açıldığında bir defaya mahsus bu veriler uygulamaya yüklenerek kullanılması.
9. Yukardaki özelliklerle ilgili unit veya intergation testlerin yazılması. (en az 2 test senaryosu)
10. ESLint veya benzeri bir static kod analiz teknolojisi kullanılarak geliştirme yapılması.
(*) Yıldız ile işaretli maddeler uygulama içerisinde mutlaka beklediğimiz özellikleri içermektedir. Diğer
özelliklerin de kullanılması size ekstradan avantaj sağlayacaktır.
- Uygulama ile ilgili örnek ekran görüntüleri aşağıda paylaşılmıştır.
Teknolojiler:
• Create React App yada Angular.
(webpack ve babel bilginiz varsa custom bir react boilerplate oluşturarak projeyi ayağa kaldırabilirsiniz)
• TypeScript veya JavaScript.
• Styled-Components veya Sass (scss).
• State management olarak Redux veya Context Api
• Uikit olarak, custom ui componentlerinizi oluşturabilir veya uikit component olarak MUI ya da antd
kullanabilirsiniz.
