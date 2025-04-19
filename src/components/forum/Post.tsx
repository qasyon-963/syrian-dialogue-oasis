
import { useState } from "react";
import { MessageSquare, Flag, Share, ArrowUp, ArrowDown } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface PostProps {
  id: string;
  content: string | React.ReactNode;
  author: {
    id: string;
    name: string;
    avatar?: string;
    role?: string;
    joinDate: string;
    postsCount: number;
  };
  createdAt: string;
  votesCount: number;
  isOriginalPost?: boolean;
  onReply?: () => void;
}

export const Post = ({
  id,
  content,
  author,
  createdAt,
  votesCount,
  isOriginalPost = false,
  onReply,
}: PostProps) => {
  const [votes, setVotes] = useState(votesCount);
  const [userVote, setUserVote] = useState<'up' | 'down' | null>(null);

  const handleVote = (type: 'up' | 'down') => {
    if (userVote === type) {
      setUserVote(null);
      setVotes(type === 'up' ? votes - 1 : votes + 1);
    } else {
      if (userVote) {
        // Change vote
        setVotes(type === 'up' ? votes + 2 : votes - 2);
      } else {
        // New vote
        setVotes(type === 'up' ? votes + 1 : votes - 1);
      }
      setUserVote(type);
    }
  };

  return (
    <Card className={`mb-4 border ${isOriginalPost ? 'border-forum-primary shadow-md' : 'border-gray-200'}`}>
      <CardHeader className="flex flex-row space-x-reverse space-x-4 pb-3 border-b border-gray-100">
        <div className="flex flex-col items-center">
          <Avatar className="h-12 w-12">
            <AvatarImage src={author.avatar} alt={author.name} />
            <AvatarFallback className="bg-forum-primary text-white">
              {author.name.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col items-center mt-2 text-center">
            <span className="font-medium text-sm">{author.name}</span>
            {author.role && (
              <Badge className="mt-1 text-xs bg-forum-primary/10 text-forum-primary hover:bg-forum-primary/20 border border-forum-primary/20">
                {author.role}
              </Badge>
            )}
            <div className="text-xs text-gray-500 mt-2">
              <div>عضو منذ {author.joinDate}</div>
              <div>{author.postsCount} مشاركة</div>
            </div>
          </div>
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-500">{createdAt}</span>
            <div className="flex space-x-reverse space-x-2">
              <Button variant="ghost" size="sm" className="text-gray-500 hover:text-forum-primary">
                <Share className="h-4 w-4 ml-1" />
                <span className="text-xs">مشاركة</span>
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-500 hover:text-red-500">
                <Flag className="h-4 w-4 ml-1" />
                <span className="text-xs">إبلاغ</span>
              </Button>
            </div>
          </div>
          
          <div className="prose prose-sm max-w-none mt-2">
            {content}
          </div>
        </div>
      </CardHeader>
      
      <CardFooter className="pt-3 flex justify-between">
        <div className="flex items-center space-x-reverse space-x-1">
          <Button 
            variant="ghost" 
            size="sm" 
            className={`text-gray-500 ${userVote === 'up' ? 'text-forum-primary' : 'hover:text-forum-primary'}`}
            onClick={() => handleVote('up')}
          >
            <ArrowUp className="h-5 w-5" />
          </Button>
          <span className="mx-1 font-medium">{votes}</span>
          <Button 
            variant="ghost" 
            size="sm" 
            className={`text-gray-500 ${userVote === 'down' ? 'text-red-500' : 'hover:text-red-500'}`}
            onClick={() => handleVote('down')}
          >
            <ArrowDown className="h-5 w-5" />
          </Button>
        </div>
        
        <Button 
          variant="outline" 
          size="sm" 
          className="text-forum-primary border-forum-primary/50 hover:bg-forum-primary/10"
          onClick={onReply}
        >
          <MessageSquare className="h-4 w-4 ml-1" />
          <span>رد</span>
        </Button>
      </CardFooter>
    </Card>
  );
};
