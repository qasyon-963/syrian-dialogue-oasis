
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Post } from "@/components/forum/Post";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, Eye, MessageSquare, Flag, Share } from "lucide-react";

// Mock topic data
const topicsData = {
  "topic-1": {
    id: "topic-1",
    categoryId: "constitution",
    categoryName: "الدستور السوري",
    title: "مسودة الدستور السوري الجديد: تحليل ونقاش",
    createdAt: "12 أبريل 2025",
    viewsCount: 1240,
    repliesCount: 48,
    tags: ["دستور", "إصلاح سياسي", "نظام حكم"],
    isPinned: true,
    isHot: true,
    author: {
      id: "user-1",
      name: "أحمد العلي",
      avatar: "",
      role: "باحث سياسي",
      joinDate: "يناير 2023",
      postsCount: 125,
    },
    content: `
      <div class="mb-4">
        السلام عليكم ورحمة الله وبركاته،</div>
      
      <div class="mb-4">
        أود أن أطرح للنقاش تحليلاً لمسودة الدستور السوري الجديد المقترح، والتي تم تداولها مؤخراً في عدة منصات إعلامية. هذه المسودة تحتوي على تغييرات جوهرية مقارنة بالدستور السابق، وأعتقد أنها تستحق نقاشاً موسعاً من المهتمين بالشأن السوري.
      </div>
      
      <div class="mb-4">
        <strong>أبرز النقاط في المسودة الجديدة:</strong>
        <ul class="list-disc mr-6 my-2 space-y-1">
          <li>تعزيز مبدأ الفصل بين السلطات الثلاث: التشريعية والتنفيذية والقضائية.</li>
          <li>إعادة النظر في صلاحيات رئيس الجمهورية وتقييدها بآليات رقابية أكثر فعالية.</li>
          <li>توسيع نطاق الحقوق والحريات المدنية والسياسية.</li>
          <li>إدراج بنود متعلقة بالحكم المحلي واللامركزية الإدارية.</li>
          <li>إنشاء محكمة دستورية عليا مستقلة للنظر في دستورية القوانين.</li>
        </ul>
      </div>
      
      <div class="mb-4">
        <strong>التحديات المحتملة:</strong>
        <ul class="list-disc mr-6 my-2 space-y-1">
          <li>مدى قابلية هذه البنود للتطبيق الفعلي في ظل الظروف الراهنة.</li>
          <li>آليات ضمان احترام الدستور وعدم تجاوزه من قبل السلطات.</li>
          <li>كيفية تحقيق توافق وطني واسع حول بنود الدستور.</li>
          <li>ضمانات حماية الحقوق والحريات في الممارسة العملية.</li>
        </ul>
      </div>
      
      <div class="mb-4">
        أرى أن هذه المسودة تمثل خطوة في الاتجاه الصحيح، لكنها تحتاج إلى مزيد من التطوير والتحسين لتعكس تطلعات جميع السوريين وتضمن بناء دولة ديمقراطية حديثة.
      </div>
      
      <div>
        ما رأيكم في هذه المسودة؟ وهل تعتقدون أنها تلبي طموحات الشعب السوري في التغيير والإصلاح؟
      </div>
    `,
    replies: [
      {
        id: "reply-1",
        content: `
          <div class="mb-4">
            شكراً للطرح المميز أخ أحمد. أعتقد أن المسودة الجديدة تحتوي على نقاط إيجابية كثيرة، خاصة فيما يتعلق بتعزيز الفصل بين السلطات وتقييد صلاحيات الرئيس.
          </div>
          
          <div class="mb-4">
            لكن يبقى السؤال الأهم: هل ستكون هناك إرادة سياسية حقيقية لتطبيق هذه البنود على أرض الواقع؟ التاريخ يعلمنا أن المشكلة في سوريا لم تكن يوماً في النصوص، بل في آليات التطبيق والالتزام بها.
          </div>
          
          <div>
            أقترح أن نركز النقاش على آليات الرقابة والمحاسبة التي يمكن تضمينها في الدستور لضمان احترامه من قبل جميع السلطات.
          </div>
        `,
        author: {
          id: "user-6",
          name: "رنا محمود",
          avatar: "",
          role: "محامية",
          joinDate: "مارس 2022",
          postsCount: 87,
        },
        createdAt: "12 أبريل 2025",
        votesCount: 24,
      },
      {
        id: "reply-2",
        content: `
          <div class="mb-4">
            أختلف مع بعض ما ورد في المسودة، خاصة فيما يتعلق بتوزيع الصلاحيات بين المركز والمحافظات. أعتقد أن المسودة لا تزال تمنح سلطات واسعة للحكومة المركزية على حساب الإدارات المحلية.
          </div>
          
          <div>
            اللامركزية الحقيقية تتطلب تفويضاً أوسع للصلاحيات، خاصة في المجالات الاقتصادية والتنموية. هذا من شأنه أن يسمح لكل منطقة بتطوير مواردها وفقاً لاحتياجاتها الخاصة.
          </div>
        `,
        author: {
          id: "user-7",
          name: "خالد يوسف",
          avatar: "",
          role: "أكاديمي",
          joinDate: "سبتمبر 2022",
          postsCount: 43,
        },
        createdAt: "13 أبريل 2025",
        votesCount: 15,
      },
    ],
  },
};

const Topic = () => {
  const { topicId } = useParams<{ topicId: string }>();
  const [replyContent, setReplyContent] = useState("");
  
  const topic = topicId ? topicsData[topicId as keyof typeof topicsData] : null;
  
  useEffect(() => {
    if (topic) {
      document.title = `${topic.title} - منتدى الحوار السوري`;
    }
  }, [topic]);
  
  if (!topic) {
    return (
      <Layout>
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">الموضوع غير موجود</h1>
          <p className="text-gray-600 mb-8">عذراً، الموضوع الذي تبحث عنه غير موجود.</p>
          <Button asChild>
            <Link to="/">العودة للرئيسية</Link>
          </Button>
        </div>
      </Layout>
    );
  }
  
  const handleSubmitReply = (e: React.FormEvent) => {
    e.preventDefault();
    // Would normally submit the reply to the server
    console.log("Submitting reply:", replyContent);
    
    // Clear the textarea
    setReplyContent("");
  };
  
  return (
    <Layout>
      <div className="max-w-5xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <div className="mb-6 flex items-center text-sm text-gray-500">
          <Link to="/" className="hover:text-forum-primary">الرئيسية</Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <Link to="/categories" className="hover:text-forum-primary">المنتديات</Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <Link to={`/category/${topic.categoryId}`} className="hover:text-forum-primary">{topic.categoryName}</Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <span className="text-forum-dark font-medium truncate max-w-xs">{topic.title}</span>
        </div>
        
        {/* Topic Header */}
        <div className="mb-6">
          <div className="flex justify-between items-start mb-4">
            <h1 className="font-cairo text-2xl md:text-3xl font-bold text-forum-dark">{topic.title}</h1>
            
            <div className="flex space-x-reverse space-x-2">
              <Button variant="ghost" size="sm" className="text-gray-500 hover:text-forum-primary">
                <Share className="h-4 w-4 ml-1" />
                <span className="hidden sm:inline">مشاركة</span>
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-500 hover:text-red-500">
                <Flag className="h-4 w-4 ml-1" />
                <span className="hidden sm:inline">إبلاغ</span>
              </Button>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {topic.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
          
          <div className="flex items-center text-sm text-gray-500 space-x-reverse space-x-4">
            <div className="flex items-center">
              <Eye className="h-4 w-4 ml-1 text-gray-400" />
              <span>{topic.viewsCount} مشاهدة</span>
            </div>
            <div className="flex items-center">
              <MessageSquare className="h-4 w-4 ml-1 text-gray-400" />
              <span>{topic.repliesCount} رد</span>
            </div>
            <div>
              <span>{topic.createdAt}</span>
            </div>
          </div>
        </div>
        
        {/* Original Post */}
        <Post
          id={topic.id}
          content={<div dangerouslySetInnerHTML={{ __html: topic.content }} />}
          author={topic.author}
          createdAt={topic.createdAt}
          votesCount={0}
          isOriginalPost={true}
        />
        
        {/* Replies */}
        <div className="mt-8">
          <h2 className="font-cairo text-xl font-bold text-forum-dark mb-4">الردود ({topic.replies.length})</h2>
          
          {topic.replies.map((reply) => (
            <Post
              key={reply.id}
              id={reply.id}
              content={<div dangerouslySetInnerHTML={{ __html: reply.content }} />}
              author={reply.author}
              createdAt={reply.createdAt}
              votesCount={reply.votesCount}
            />
          ))}
        </div>
        
        {/* Reply Form */}
        <div className="mt-8 bg-white p-6 rounded-lg border border-gray-200">
          <h3 className="font-cairo text-lg font-bold text-forum-dark mb-4">إضافة رد</h3>
          
          <form onSubmit={handleSubmitReply}>
            <Textarea
              placeholder="أضف ردك هنا..."
              value={replyContent}
              onChange={(e) => setReplyContent(e.target.value)}
              className="mb-4 min-h-40"
            />
            
            <div className="flex justify-end">
              <Button type="submit" className="bg-forum-primary hover:bg-forum-success">
                <MessageSquare className="h-4 w-4 ml-1" />
                <span>نشر الرد</span>
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Topic;
