
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { CategoryCard } from "@/components/forum/CategoryCard";
import { Button } from "@/components/ui/button";
import { MessageSquare, Users, Info } from "lucide-react";

// Mock data for forum categories
const forumCategories = [
  {
    id: "constitution",
    title: "الدستور السوري",
    description: "مناقشة قضايا الدستور السوري ومستقبل الإصلاحات الدستورية",
    topicsCount: 324,
    postsCount: 1280,
    color: "bg-forum-primary",
    isNew: false,
  },
  {
    id: "political-reform",
    title: "الإصلاح السياسي",
    description: "الحوار حول آفاق الإصلاح السياسي وبناء الديمقراطية",
    topicsCount: 256,
    postsCount: 967,
    color: "bg-blue-500",
    isNew: false,
  },
  {
    id: "regional-governance",
    title: "الحكم المحلي",
    description: "النقاش حول اللامركزية والإدارة المحلية وتوزيع السلطات",
    topicsCount: 182,
    postsCount: 745,
    color: "bg-purple-500",
    isNew: true,
  },
  {
    id: "human-rights",
    title: "حقوق الإنسان",
    description: "منصة لمناقشة قضايا حقوق الإنسان والحريات الأساسية",
    topicsCount: 231,
    postsCount: 892,
    color: "bg-red-500",
    isNew: false,
  },
  {
    id: "historical-memory",
    title: "الذاكرة التاريخية",
    description: "نقاش مفتوح حول تاريخ سوريا وذاكرتها الجماعية",
    topicsCount: 157,
    postsCount: 620,
    color: "bg-amber-500",
    isNew: false,
  },
  {
    id: "economic-development",
    title: "التنمية الاقتصادية",
    description: "الحوار حول التحديات الاقتصادية وفرص التنمية المستدامة",
    topicsCount: 203,
    postsCount: 780,
    color: "bg-teal-500",
    isNew: true,
  },
];

// Mock data for statistics
const statistics = {
  topics: 1460,
  posts: 5673,
  members: 2134,
  onlineMembers: 127,
};

const Index = () => {
  useEffect(() => {
    document.title = "منتدى الحوار السوري - الرئيسية";
  }, []);

  return (
    <Layout>
      {/* Hero section */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-cairo text-4xl font-bold text-forum-dark mb-4">
              مرحباً بكم في منتدى الحوار السوري
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              منصة للحوار المفتوح والنقاش السياسي البناء حول مستقبل سوريا. تبادل الأفكار في بيئة آمنة تحترم التنوع وحرية التعبير.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-forum-primary hover:bg-forum-success">
                <Link to="/register">انضم للمنتدى</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/about">تعرف علينا</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome notice for first-time visitors */}
      <div className="bg-forum-accent/20 border-b border-forum-accent/30">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <div className="flex items-start sm:items-center gap-4 text-sm text-gray-700 flex-col sm:flex-row">
            <div className="bg-white p-2 rounded-full">
              <Info className="h-5 w-5 text-forum-primary" />
            </div>
            <div>
              <p className="font-semibold mb-1">مرحباً بك في زيارتك الأولى!</p>
              <p>
                منتدى الحوار السوري هو مساحة آمنة للنقاش المدني حول مستقبل سوريا. 
                نلتزم بمبادئ الاحترام المتبادل والنقاش البناء. 
                <Link to="/guidelines" className="mr-1 text-forum-primary hover:underline">
                  تعرف على إرشادات المشاركة
                </Link>
              </p>
            </div>
            <Button variant="ghost" size="sm" className="mt-2 sm:mt-0 mr-auto">إغلاق</Button>
          </div>
        </div>
      </div>

      {/* Forum Categories */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="font-cairo text-2xl font-bold text-forum-dark mb-4">
              منتديات الحوار
            </h2>
            <p className="text-gray-600">
              استكشف المنتديات المتخصصة للمشاركة في النقاشات المهمة حول مستقبل سوريا
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {forumCategories.map((category) => (
              <CategoryCard
                key={category.id}
                id={category.id}
                title={category.title}
                description={category.description}
                topicsCount={category.topicsCount}
                postsCount={category.postsCount}
                color={category.color}
                isNew={category.isNew}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Forum Statistics */}
      <section className="bg-white py-10 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-cairo text-2xl font-bold text-forum-dark mb-8 text-center">
            إحصائيات المنتدى
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-gray-50 p-6 rounded-lg text-center shadow-sm">
              <MessageSquare className="h-10 w-10 mx-auto mb-2 text-forum-primary opacity-70" />
              <div className="text-2xl font-bold text-forum-dark">{statistics.topics}</div>
              <div className="text-gray-600 text-sm">موضوع</div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg text-center shadow-sm">
              <MessageSquare className="h-10 w-10 mx-auto mb-2 text-blue-500 opacity-70" />
              <div className="text-2xl font-bold text-forum-dark">{statistics.posts}</div>
              <div className="text-gray-600 text-sm">مشاركة</div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg text-center shadow-sm">
              <Users className="h-10 w-10 mx-auto mb-2 text-purple-500 opacity-70" />
              <div className="text-2xl font-bold text-forum-dark">{statistics.members}</div>
              <div className="text-gray-600 text-sm">عضو</div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg text-center shadow-sm">
              <Users className="h-10 w-10 mx-auto mb-2 text-teal-500 opacity-70" />
              <div className="text-2xl font-bold text-forum-dark">{statistics.onlineMembers}</div>
              <div className="text-gray-600 text-sm">متصل الآن</div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
