
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, User, Bell, MessageSquare, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Menu */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-forum-primary font-cairo text-2xl font-bold">
                منتدى الحوار السوري
              </span>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:ml-6 md:flex md:space-x-reverse md:space-x-8">
              <Link to="/" className="text-forum-dark hover:text-forum-primary px-3 py-2 text-sm font-medium">
                الرئيسية
              </Link>
              <Link to="/categories" className="text-forum-dark hover:text-forum-primary px-3 py-2 text-sm font-medium">
                المنتديات
              </Link>
              <Link to="/members" className="text-forum-dark hover:text-forum-primary px-3 py-2 text-sm font-medium">
                الأعضاء
              </Link>
              <Link to="/about" className="text-forum-dark hover:text-forum-primary px-3 py-2 text-sm font-medium">
                عن المنتدى
              </Link>
            </nav>
          </div>

          {/* Search and Action Buttons */}
          <div className="flex items-center space-x-reverse space-x-4">
            <Button variant="ghost" size="icon" className="text-forum-dark">
              <Search className="h-5 w-5" />
            </Button>
            
            <Button variant="ghost" size="icon" className="text-forum-dark">
              <Bell className="h-5 w-5" />
            </Button>
            
            <Button variant="ghost" size="icon" className="text-forum-dark">
              <MessageSquare className="h-5 w-5" />
            </Button>
            
            {/* User Menu */}
            <Link to="/login">
              <Button className="bg-forum-primary hover:bg-forum-success text-white flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>تسجيل الدخول</span>
              </Button>
            </Link>
            
            {/* Mobile menu button */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden text-forum-dark mr-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <Link 
              to="/" 
              className="block px-3 py-2 text-base font-medium text-forum-dark hover:text-forum-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              الرئيسية
            </Link>
            <Link 
              to="/categories" 
              className="block px-3 py-2 text-base font-medium text-forum-dark hover:text-forum-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              المنتديات
            </Link>
            <Link 
              to="/members" 
              className="block px-3 py-2 text-base font-medium text-forum-dark hover:text-forum-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              الأعضاء
            </Link>
            <Link 
              to="/about" 
              className="block px-3 py-2 text-base font-medium text-forum-dark hover:text-forum-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              عن المنتدى
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
