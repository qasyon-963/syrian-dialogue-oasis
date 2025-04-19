
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-12">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center">
              <span className="text-forum-primary font-cairo text-xl font-bold">
                منتدى الحوار السوري
              </span>
            </div>
            <p className="mt-2 text-sm text-gray-500">
              منصة للحوار المفتوح والنقاش السياسي حول مستقبل سوريا
            </p>
          </div>
          
          <div className="flex flex-wrap gap-x-8 gap-y-4">
            <div>
              <h3 className="text-sm font-semibold text-gray-600 tracking-wider mb-4">
                روابط سريعة
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-sm text-gray-500 hover:text-forum-primary">
                    الرئيسية
                  </Link>
                </li>
                <li>
                  <Link to="/categories" className="text-sm text-gray-500 hover:text-forum-primary">
                    المنتديات
                  </Link>
                </li>
                <li>
                  <Link to="/members" className="text-sm text-gray-500 hover:text-forum-primary">
                    الأعضاء
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-gray-600 tracking-wider mb-4">
                المعلومات
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/about" className="text-sm text-gray-500 hover:text-forum-primary">
                    عن المنتدى
                  </Link>
                </li>
                <li>
                  <Link to="/privacy" className="text-sm text-gray-500 hover:text-forum-primary">
                    سياسة الخصوصية
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="text-sm text-gray-500 hover:text-forum-primary">
                    شروط الاستخدام
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-gray-600 tracking-wider mb-4">
                المساعدة
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/faq" className="text-sm text-gray-500 hover:text-forum-primary">
                    الأسئلة الشائعة
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-sm text-gray-500 hover:text-forum-primary">
                    اتصل بنا
                  </Link>
                </li>
                <li>
                  <Link to="/support" className="text-sm text-gray-500 hover:text-forum-primary">
                    الدعم
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-8 border-t border-gray-200 pt-8 flex flex-col items-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} منتدى الحوار السوري. جميع الحقوق محفوظة.
          </p>
          <p className="mt-2 text-xs text-gray-400">
            هذا المنتدى مساحة للنقاش المدني والبناء. نرجو احترام آراء الآخرين.
          </p>
        </div>
      </div>
    </footer>
  );
};
