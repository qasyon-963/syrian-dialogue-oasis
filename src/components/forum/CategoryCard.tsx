
import { Link } from "react-router-dom";
import { MessageSquare, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface CategoryCardProps {
  id: string;
  title: string;
  description: string;
  topicsCount: number;
  postsCount: number;
  color?: string;
  isNew?: boolean;
}

export const CategoryCard = ({
  id,
  title,
  description,
  topicsCount,
  postsCount,
  color = "bg-forum-primary",
  isNew = false,
}: CategoryCardProps) => {
  return (
    <Link to={`/category/${id}`}>
      <Card className="transition-all duration-200 hover:shadow-md border border-gray-200 overflow-hidden">
        <div className={`h-1 w-full ${color}`} />
        <CardHeader className="pb-2">
          <div className="flex justify-between items-center">
            <CardTitle className="text-xl font-bold">{title}</CardTitle>
            {isNew && (
              <Badge variant="outline" className="bg-forum-primary text-white border-none text-xs">
                جديد
              </Badge>
            )}
          </div>
          <CardDescription className="text-gray-600 mt-1">{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-start space-x-reverse space-x-4 text-sm text-gray-500">
            <div className="flex items-center">
              <MessageSquare className="h-4 w-4 ml-1 text-gray-400" />
              <span>{topicsCount} موضوع</span>
            </div>
            <div className="flex items-center">
              <Users className="h-4 w-4 ml-1 text-gray-400" />
              <span>{postsCount} مشاركة</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};
