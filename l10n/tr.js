OC.L10N.register(
    "files_accesscontrol",
    {
    "No rule given" : "Herhangi bir kural belirtilmemiş",
    "File access control" : "Dosya erişimi denetimi",
    "Restrict access to files based on factors such as filetype, user group memberships, time and more." : "Dosyalara erişimi dosya türü, kullanıcı grubu üyeliği, zaman gibi ölçütlerle sınırlayabilirsiniz.",
    "Each rule group consists of one or more rules. A request matches a group if all rules evaluate to true. If a request matches at least one of the defined groups, the request is blocked and the file content can not be read or written." : "Her bir kural grubunda bir ya da bir kaç kural bulunur. Bir isteğin bir gruba uygun olması için gruptaki tüm kurallar karşılanmış olmalıdır. Bir istek tanımlanmış gruplardan en az birine uygun ise istek engellenir ve dosya içeriği yazılamaz ya da okunamaz.",
    "Control access to files based on conditions" : "Dosyalara erişimi belirtilen ölçütlere göre ayarlar",
    "Nextcloud's File Access Control app enables administrators to protect data from unauthorized access or modifications.\n\n## How it works\nThe administrator can create and manage a set of rule groups. Each of the rule groups consists of one or more rules. If all rules of a group hold true, the group matches the request and access is being denied or the upload is blocked. The rules criteria range from IP address, mimetype and request time to group membership, tags, user agent and more.\n\t\t\nAn example would be to deny access to MS Excel/XLSX files owned by the \"Human Resources\" group accessed from an IP not on the internal company network or to block uploads of files bigger than 512 mb by students in the \"1st year\" group.\n\t\nLearn more about File Access Control on [https://nextcloud.com/workflow](https://nextcloud.com/workflow)" : "Nextcloud Dosya Erişimi Denetimi uygulaması yöneticilerin verilere erişim ve değişiklik işlemleri ile ilgili izinleri ayarlamasını sağlar.\n\n## Çalışma şekli\nDosya izinlerinin belirlenmesi için yöneticiler bir kural kümesi oluşturabilir. Kural kümelerinde çeşitli işlemler ile bir araya getirilmiş bir ya da bir kaç kural bulunur. Bir iznin atanması için belirtilen tüm ölçütlerin gerçekleşmesi gerekir. Böylece istek reddedilir ya da yükleme işlemi engellenir. Kural kümesinde, IP adresi aralığı, MIME türü ve grup üyeliği zamanı, etiketler, kullanıcı uygulamaları gibi çeşitli ölçütler kullanılabilir.\n\t\t\nÖrnek olarak \"İnsan Kaynakları\" grubu tarafından oluşturulmuş MS Excel/XLSX dosyalarına kuruluş ağının iç adresleri dışındaki IP adreslerinden erişimin engellenmesi ya da \"1. sınıf\" grubundaki öğrencilerin 512 MB boyutundan büyük dosyalar yüklemesinin engellenmesi verilebilir.\n\t\nDosya Erişimi Denetimi uygulaması hakkında ayrıntılı bilgi almak için [https://nextcloud.com/workflow](https://nextcloud.com/workflow) adresine bakabilirsiniz."
},
"nplurals=2; plural=(n > 1);");
