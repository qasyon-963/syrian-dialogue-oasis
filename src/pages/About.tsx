
import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MessageSquare, Users, Info } from "lucide-react";

const About = () => {
  useEffect(() => {
    document.title = "عن المنتدى - منتدى الحوار السوري";
  }, []);

  return (
    <Layout>
      {/* Hero section */}
      <section className="bg-white border-b">
        <div className="max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-cairo text-4xl font-bold text-forum-dark mb-6">
              عن منتدى الحوار السوري
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              منتدى الحوار السوري هو منصة إلكترونية مستقلة تهدف إلى توفير فضاء آمن للحوار الديمقراطي البناء حول مستقبل سوريا.
              نؤمن بأن التغيير الإيجابي يبدأ بالحوار المفتوح والصادق، والاستماع للآراء المختلفة في جو من الاحترام المتبادل.
            </p>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-forum-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Info className="h-6 w-6 text-forum-primary" />
              </div>
              <h2 className="font-cairo text-2xl font-bold text-forum-dark mb-4">
                رسالتنا
              </h2>
              <p className="text-gray-600 leading-relaxed">
                توفير منصة حرة ومتكافئة يستطيع من خلالها السوريون من مختلف الخلفيات السياسية والفكرية والاجتماعية التعبير
                عن آرائهم والمساهمة في بناء رؤية مشتركة لمستقبل سوريا ديمقراطي وآمن.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-forum-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-forum-primary" />
              </div>
              <h2 className="font-cairo text-2xl font-bold text-forum-dark mb-4">
                رؤيتنا
              </h2>
              <p className="text-gray-600 leading-relaxed">
                أن نكون جسراً للتواصل وتبادل الأفكار بين مختلف أطياف المجتمع السوري، والمساهمة في خلق ثقافة الحوار
                البناء كأساس للتعافي الوطني وبناء مستقبل مشترك يتسع للجميع.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-cairo text-2xl font-bold text-forum-dark mb-8 text-center">
            قيمنا الأساسية
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-forum-dark mb-3">الحرية والتعددية</h3>
              <p className="text-gray-600">
                نؤمن بحرية التعبير والتعددية الفكرية والسياسية، واحترام الآراء المختلفة مهما تعارضت.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-forum-dark mb-3">الاحترام المتبادل</h3>
              <p className="text-gray-600">
                نلتزم بالحوار المحترم الذي يركز على القضايا والأفكار ويبتعد عن الشخصنة والتجريح.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-forum-dark mb-3">المصداقية والشفافية</h3>
              <p className="text-gray-600">
                نعتمد المعلومات الموثوقة ونرفض الشائعات والتضليل، ونسعى للشفافية في جميع أنشطة المنتدى.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-forum-dark mb-3">التنوع والشمولية</h3>
              <p className="text-gray-600">
                نحترم التنوع بكافة أشكاله ونسعى لأن تكون منصتنا شاملة ومتاحة لجميع السوريين من كافة الخلفيات.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-forum-dark mb-3">الاستقلالية</h3>
              <p className="text-gray-600">
                منصتنا مستقلة وغير مرتبطة بأي جهة سياسية أو حزبية، ونتخذ قراراتنا بحرية ومسؤولية.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-forum-dark mb-3">خدمة المصلحة العامة</h3>
              <p className="text-gray-600">
                هدفنا الأساسي هو خدمة المصلحة العامة للشعب السوري وتعزيز فرص السلام والتنمية المستدامة.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Guidelines */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-cairo text-2xl font-bold text-forum-dark mb-8 text-center">
            إرشادات المشاركة في المنتدى
          </h2>

          <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
            <ul className="space-y-4 text-gray-600">
              <li className="flex">
                <span className="font-bold text-forum-primary ml-2">1.</span>
                <p>احترام جميع المشاركين بغض النظر عن آرائهم السياسية أو انتماءاتهم.</p>
              </li>
              <li className="flex">
                <span className="font-bold text-forum-primary ml-2">2.</span>
                <p>التركيز على مناقشة الأفكار والقضايا بدلاً من مهاجمة الأشخاص.</p>
              </li>
              <li className="flex">
                <span className="font-bold text-forum-primary ml-2">3.</span>
                <p>الالتزام بالموضوعية وتجنب الخطاب التحريضي أو العنصري.</p>
              </li>
              <li className="flex">
                <span className="font-bold text-forum-primary ml-2">4.</span>
                <p>عدم نشر أي محتوى يحض على العنف أو الكراهية ضد أي فئة من فئات المجتمع.</p>
              </li>
              <li className="flex">
                <span className="font-bold text-forum-primary ml-2">5.</span>
                <p>الاستناد إلى الحقائق والمعلومات الموثوقة وتجنب نشر الشائعات أو المعلومات المضللة.</p>
              </li>
              <li className="flex">
                <span className="font-bold text-forum-primary ml-2">6.</span>
                <p>احترام خصوصية الآخرين وعدم نشر معلوماتهم الشخصية دون إذنهم.</p>
              </li>
              <li className="flex">
                <span className="font-bold text-forum-primary ml-2">7.</span>
                <p>الالتزام بأخلاقيات الحوار والنقاش وتقبل الآراء المختلفة.</p>
              </li>
            </ul>
          </div>

          <div className="text-center">
            <p className="text-gray-600 mb-6">
              نرحب بانضمامك إلى مجتمع منتدى الحوار السوري للمساهمة في النقاش البناء حول مستقبل سوريا.
            </p>
            <Button asChild className="bg-forum-primary hover:bg-forum-success">
              <Link to="/register">انضم إلينا الآن</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-cairo text-2xl font-bold text-forum-dark mb-4">
            تواصل معنا
          </h2>
          <p className="text-gray-600 mb-6">
            لأي استفسارات أو اقتراحات، يمكنكم التواصل معنا عبر البريد الإلكتروني:
          </p>
          <p className="text-forum-primary font-bold">
            info@syriandialogueforun.org
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default About;
