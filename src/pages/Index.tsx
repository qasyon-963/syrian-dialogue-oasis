
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { TopicCard } from "@/components/forum/TopicCard";
import { Button } from "@/components/ui/button";
import { MessageSquare, Users } from "lucide-react";

// Mock data for forum discussions
const forumDiscussions = [
  {
    id: "disc-1",
    title: "دور المجتمع المدني في عملية السلام",
    excerpt: "كيف يمكن للمجتمع المدني أن يساهم في تحقيق السلام والاستقرار في سوريا؟",
    author: {
      id: "user-1",
      name: "أحمد العلي",
      avatar: "",
    },
    createdAt: "15 أبريل 2025",
    viewsCount: 324,
    repliesCount: 12,
    votesCount: 45,
    tags: ["سياسة", "مجتمع مدني"],
    isPinned: true,
  },
  {
    id: "disc-2",
    title: "مستقبل التعليم في سوريا",
    excerpt: "مناقشة التحديات والفرص في قطاع التعليم السوري والحلول المقترحة للنهوض به",
    author: {
      id: "user-2",
      name: "سارة محمود",
      avatar: "",
    },
    createdAt: "14 أبريل 2025",
    viewsCount: 256,
    repliesCount: 8,
    votesCount: 32,
    tags: ["تعليم", "تنمية"],
    isHot: true,
  },
  {
    id: "disc-3",
    title: "الاقتصاد السوري: تحديات وحلول",
    excerpt: "نقاش حول سبل تعافي الاقتصاد السوري وآليات تحقيق التنمية المستدامة",
    author: {
      id: "user-3",
      name: "محمد خالد",
      avatar: "",
    },
    createdAt: "13 أبريل 2025",
    viewsCount: 198,
    repliesCount: 15,
    votesCount: 28,
    tags: ["اقتصاد", "تنمية"],
  },
];

// Mock statistics data
const statistics = {
  discussions: 1460,
  comments: 5673,
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
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto font-cairo">
              منصة للحوار البناء وتبادل الأفكار حول مستقبل سوريا.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-forum-primary hover:bg-forum-success">
                <Link to="/register">انضم للمنتدى</Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg"
                className="font-cairo"
              >
                <Link to="/new-discussion">إضافة نقاش جديد</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome message for first-time visitors */}
      <div className="bg-forum-accent/20 border-b border-forum-accent/30">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 text-sm text-gray-700">
            <p className="font-cairo">
              مرحباً بك في منتدى الحوار السوري! نرحب بمشاركتك في النقاشات المطروحة.
              <Link to="/guidelines" className="mr-2 text-forum-primary hover:underline">
                تعرف على إرشادات المشاركة
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Forum Discussions */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="font-cairo text-2xl font-bold text-forum-dark mb-2">
                النقاشات النشطة
              </h2>
              <p className="text-gray-600 font-cairo">
                آخر النقاشات والمواضيع المطروحة في المنتدى
              </p>
            </div>
            <Button asChild className="bg-forum-primary hover:bg-forum-success">
              <Link to="/new-discussion">نقاش جديد</Link>
            </Button>
          </div>

          <div className="space-y-4">
            {forumDiscussions.map((discussion) => (
              <TopicCard
                key={discussion.id}
                {...discussion}
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
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <MessageSquare className="h-10 w-10 mx-auto mb-2 text-forum-primary opacity-70" />
              <div className="text-2xl font-bold text-forum-dark">{statistics.discussions}</div>
              <div className="text-gray-600 text-sm font-cairo">نقاش</div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <MessageSquare className="h-10 w-10 mx-auto mb-2 text-blue-500 opacity-70" />
              <div className="text-2xl font-bold text-forum-dark">{statistics.comments}</div>
              <div className="text-gray-600 text-sm font-cairo">تعليق</div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <Users className="h-10 w-10 mx-auto mb-2 text-purple-500 opacity-70" />
              <div className="text-2xl font-bold text-forum-dark">{statistics.members}</div>
              <div className="text-gray-600 text-sm font-cairo">عضو</div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <Users className="h-10 w-10 mx-auto mb-2 text-teal-500 opacity-70" />
              <div className="text-2xl font-bold text-forum-dark">{statistics.onlineMembers}</div>
              <div className="text-gray-600 text-sm font-cairo">متصل الآن</div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
