
import { Link } from "react-router-dom";
import { MessageSquare, Eye, ArrowUp, ArrowDown, Calendar } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface TopicCardProps {
  id: string;
  title: string;
  excerpt: string;
  author: {
    id: string;
    name: string;
    avatar?: string;
  };
  createdAt: string;
  viewsCount: number;
  repliesCount: number;
  votesCount: number;
  tags?: string[];
  isPinned?: boolean;
  isHot?: boolean;
}

export const TopicCard = ({
  id,
  title,
  excerpt,
  author,
  createdAt,
  viewsCount,
  repliesCount,
  votesCount,
  tags = [],
  isPinned = false,
  isHot = false,
}: TopicCardProps) => {
  return (
    <Link to={`/topic/${id}`}>
      <Card className="transition-all duration-200 hover:shadow-md border border-gray-200 overflow-hidden mb-4">
        <CardHeader className="pb-2">
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-xl font-bold flex items-center">
                {title}
                {isPinned && (
                  <Badge className="mr-2 bg-amber-500 hover:bg-amber-600 text-white border-none">
                    مثبت
                  </Badge>
                )}
                {isHot && (
                  <Badge className="mr-2 bg-red-500 hover:bg-red-600 text-white border-none">
                    نشط
                  </Badge>
                )}
              </CardTitle>
              <CardDescription className="text-gray-600 mt-2 line-clamp-2">
                {excerpt}
              </CardDescription>
            </div>
            
            <div className="flex flex-col items-center min-w-16 px-2 py-1 rounded-md bg-gray-50">
              <button className="text-gray-400 hover:text-forum-primary">
                <ArrowUp className="h-5 w-5" />
              </button>
              <span className="text-lg font-semibold my-1">{votesCount}</span>
              <button className="text-gray-400 hover:text-red-500">
                <ArrowDown className="h-5 w-5" />
              </button>
            </div>
          </div>
          
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-3">
              {tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </CardHeader>
        
        <CardFooter className="pt-4 border-t border-gray-100 flex flex-wrap justify-between gap-y-2">
          <div className="flex items-center">
            <Avatar className="h-6 w-6 ml-2">
              <AvatarImage src={author.avatar} alt={author.name} />
              <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <span className="text-sm text-gray-600">{author.name}</span>
          </div>
          
          <div className="flex items-center space-x-reverse space-x-4 text-sm text-gray-500">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 ml-1 text-gray-400" />
              <span>{createdAt}</span>
            </div>
            <div className="flex items-center">
              <Eye className="h-4 w-4 ml-1 text-gray-400" />
              <span>{viewsCount}</span>
            </div>
            <div className="flex items-center">
              <MessageSquare className="h-4 w-4 ml-1 text-gray-400" />
              <span>{repliesCount}</span>
            </div>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};
