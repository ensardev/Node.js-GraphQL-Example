# Node.js ile GraphQL Örnek Projesi

Bu proje, Node.js ve GraphQL'i kullanarak basit bir veri sorgulama API'si oluşturmanıza yardımcı olacak bir örnek uygulamayı içermektedir.

## Proje Hakkında

Bu proje, GraphQL'in temel kavramlarını anlamanıza yardımcı olmak için tasarlanmıştır. Basit bir film veri tabanını temsil eden GraphQL API'sini oluşturmayı öğreneceksiniz. API, filmlerin listesini almanıza, belirli bir filmi aramanıza ve yeni filmler eklemenize olanak sağlar.

## Başlangıç

Aşağıdaki adımları takip ederek projeyi yerel ortamınıza kurabilir ve çalıştırabilirsiniz:

1. Bu projeyi yerel makinenize klonlayın:

   ```bash
   git clone https://github.com/ensardev/Node.js-GraphQL-Example.git
   ```

2. Proje dizinine gidin:
	```bash
	cd Node.js GraphQL Example
	```
3. Gerekli bağımlılıkları yüklemek için aşağıdaki komutu çalıştırın:
	```bash
	npm install
	```
4. Projeyi çalıştırmak için aşağıdaki komutu kullanın:
	```bash
	node index.js
	```
	 Bu komut, Node.js sunucusunu başlatacak ve API'yi kullanılabilir hale getirecektir.
    
5.  Tarayıcınızda aşağıdaki URL'yi açın:
	```
	http://localhost:3000/graphql
	```
	Bu URL, GraphQL Playground'e erişmenizi sağlar ve API'yi test etmenizi ve sorguları göndermenizi sağlar.
	
## API Kullanımı

API'yi test etmek için GraphQL Playground'i kullanabilirsiniz. Playground, sağ üst köşedeki "DOCS" sekmesinden mevcut sorgulara ve mutasyonlara erişebilmenizi sağlar.

## Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Daha fazla bilgi için `LICENSE` dosyasını inceleyebilirsiniz.
