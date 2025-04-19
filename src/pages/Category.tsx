
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { TopicCard } from "@/components/forum/TopicCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MessageSquare, Plus, Filter, ChevronRight, Search } from "lucide-react";

// Mock data for sample forum category
const categoryData = {
  constitution: {
    id: "constitution",
    title: "الدستور السوري",
    description: "مناقشة قضايا الدستور السوري ومستقبل الإصلاحات الدستورية",
    topics: [
      {
        id: "topic-1",
        title: "مسودة الدستور السوري الجديد: تحليل ونقاش",
        excerpt: "تحليل شامل لمسودة الدستور السوري الجديد المقترحة، والتعديلات الأساسية مقارنة بالدستور السابق، وآثارها على النظام السياسي والحقوق والحريات.",
        author: {
          id: "user-1",
          name: "أحمد العلي",
          avatar: ""
        },
        createdAt: "منذ 3 أيام",
        viewsCount: 1240,
        repliesCount: 48,
        votesCount: 76,
        tags: ["دستور", "إصلاح سياسي", "نظام حكم"],
        isPinned: true,
        isHot: true
      },
      {
        id: "topic-2",
        title: "هل يمكن أن يكون الدستور مدخلاً للحل السياسي؟",
        excerpt: "مناقشة دور الدستور في عملية الحل السياسي الشامل، وإمكانية أن يكون مدخلاً لحل الأزمة السورية وتحقيق الاستقرار والسلام.",
        author: {
          id: "user-2",
          name: "سمر حسن",
          avatar: ""
        },
        createdAt: "منذ 5 أيام",
        viewsCount: 980,
        repliesCount: 32,
        votesCount: 54,
        tags: ["دستور", "حل سياسي", "انتقال سياسي"],
        isPinned: false,
        isHot: false
      },
      {
        id: "topic-3",
        title: "الفصل بين السلطات في الدستور: تحديات التطبيق",
        excerpt: "نقاش حول آليات الفصل بين السلطات في الدستور، والتحديات العملية التي تواجه تطبيق هذا المبدأ في سياق الواقع السوري.",
        author: {
          id: "user-3",
          name: "محمد الخطيب",
          avatar: ""
        },
        createdAt: "منذ أسبوع",
        viewsCount: 764,
        repliesCount: 27,
        votesCount: 42,
        tags: ["فصل السلطات", "توازن السلطات", "إصلاح سياسي"],
        isPinned: false,
        isHot: false
      },
      {
        id: "topic-4",
        title: "الحقوق الثقافية والهوياتية في الدستور",
        excerpt: "حوار حول كيفية ضمان الحقوق الثقافية وحماية التنوع في الدستور، ودور ذلك في بناء مجتمع تعددي متماسك.",
        author: {
          id: "user-4",
          name: "ليلى عثمان",
          avatar: ""
        },
        createdAt: "منذ أسبوعين",
        viewsCount: 652,
        repliesCount: 19,
        votesCount: 38,
        tags: ["حقوق ثقافية", "تنوع", "هوية"],
        isPinned: false,
        isHot: false
      },
      {
        id: "topic-5",
        title: "دور المحكمة الدستورية في حماية الدستور",
        excerpt: "مناقشة دور المحكمة الدستورية في حماية الدستور وضمان سيادة القانون، وآليات تعزيز استقلاليتها وفعاليتها.",
        author: {
          id: "user-5",
          name: "عمر الحسين",
          avatar: ""
        },
        createdAt: "منذ شهر",
        viewsCount: 583,
        repliesCount: 15,
        votesCount: 31,
        tags: ["محكمة دستورية", "سيادة القانون", "استقلال القضاء"],
        isPinned: false,
        isHot: false
      },
    ]
  },
  "political-reform": {
    id: "political-reform",
    title: "الإصلاح السياسي",
    description: "الحوار حول آفاق الإصلاح السياسي وبناء الديمقراطية",
    topics: []
  },
  "regional-governance": {
    id: "regional-governance",
    title: "الحكم المحلي",
    description: "النقاش حول اللامركزية والإدارة المحلية وتوزيع السلطات",
    topics: []
  },
  "human-rights": {
    id: "human-rights",
    title: "حقوق الإنسان",
    description: "منصة لمناقشة قضايا حقوق الإنسان والحريات الأساسية",
    topics: []
  }
};

const Category = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const [activeTab, setActiveTab] = useState("latest");
  const [searchTerm, setSearchTerm] = useState("");
  
  const category = categoryId ? categoryData[categoryId as keyof typeof categoryData] : null;
  
  useEffect(() => {
    if (category) {
      document.title = `${category.title} - منتدى الحوار السوري`;
    }
  }, [category]);
  
  if (!category) {
    return (
      <Layout>
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">القسم غير موجود</h1>
          <p className="text-gray-600 mb-8">عذراً، القسم الذي تبحث عنه غير موجود.</p>
          <Button asChild>
            <Link to="/">العودة للرئيسية</Link>
          </Button>
        </div>
      </Layout>
    );
  }
  
  const filteredTopics = category.topics.filter(topic => 
    topic.title.includes(searchTerm) || 
    topic.excerpt.includes(searchTerm) ||
    topic.tags.some(tag => tag.includes(searchTerm))
  );
  
  return (
    <Layout>
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <div className="mb-6 flex items-center text-sm text-gray-500">
          <Link to="/" className="hover:text-forum-primary">الرئيسية</Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <Link to="/categories" className="hover:text-forum-primary">المنتديات</Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <span className="text-forum-dark font-medium">{category.title}</span>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="font-cairo text-3xl font-bold text-forum-dark mb-2">
              {category.title}
            </h1>
            <p className="text-gray-600">{category.description}</p>
          </div>
          
          <Button className="mt-4 md:mt-0 bg-forum-primary hover:bg-forum-success">
            <Plus className="h-4 w-4 ml-1" />
            <span>موضوع جديد</span>
          </Button>
        </div>
        
        {/* Search and filter */}
        <div className="mb-6 flex flex-col sm:flex-row gap-4">
          <div className="relative flex-grow">
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              className="pr-10"
              placeholder="ابحث في المواضيع..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <Button variant="outline" className="flex-shrink-0">
            <Filter className="h-4 w-4 ml-1" />
            <span>تصفية</span>
          </Button>
        </div>
        
        {/* Tabs and Topics */}
        <Tabs defaultValue="latest" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-6">
            <TabsTrigger value="latest">الأحدث</TabsTrigger>
            <TabsTrigger value="popular">الأكثر نشاطاً</TabsTrigger>
            <TabsTrigger value="votes">الأعلى تقييماً</TabsTrigger>
          </TabsList>
          
          <TabsContent value="latest" className="space-y-4">
            {filteredTopics.length === 0 ? (
              <div className="text-center py-12">
                <MessageSquare className="h-12 w-12 mx-auto text-gray-300 mb-4" />
                <h3 className="text-lg font-medium text-forum-dark mb-2">لا توجد مواضيع</h3>
                <p className="text-gray-500 mb-6">لم يتم العثور على مواضيع في هذا القسم. كن أول من يبدأ النقاش!</p>
                <Button>
                  <Plus className="h-4 w-4 ml-1" />
                  <span>إضافة موضوع جديد</span>
                </Button>
              </div>
            ) : (
              filteredTopics.map((topic) => (
                <TopicCard
                  key={topic.id}
                  id={topic.id}
                  title={topic.title}
                  excerpt={topic.excerpt}
                  author={topic.author}
                  createdAt={topic.createdAt}
                  viewsCount={topic.viewsCount}
                  repliesCount={topic.repliesCount}
                  votesCount={topic.votesCount}
                  tags={topic.tags}
                  isPinned={topic.isPinned}
                  isHot={topic.isHot}
                />
              ))
            )}
          </TabsContent>
          
          <TabsContent value="popular">
            {/* Similar content but sorted by popularity */}
            <div className="text-center py-12">
              <p className="text-gray-500">قريباً...</p>
            </div>
          </TabsContent>
          
          <TabsContent value="votes">
            {/* Similar content but sorted by votes */}
            <div className="text-center py-12">
              <p className="text-gray-500">قريباً...</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Category;
