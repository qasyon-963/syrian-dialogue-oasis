
import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Login = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [registerName, setRegisterName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerConfirmPassword, setRegisterConfirmPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic
    console.log("Login:", { loginEmail, loginPassword, rememberMe });
  };
  
  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle registration logic
    console.log("Register:", { registerName, registerEmail, registerPassword, acceptTerms });
  };
  
  return (
    <Layout>
      <div className="max-w-md mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="login">تسجيل الدخول</TabsTrigger>
            <TabsTrigger value="register">إنشاء حساب</TabsTrigger>
          </TabsList>
          
          <TabsContent value="login">
            <Card>
              <CardHeader>
                <CardTitle className="font-cairo text-2xl text-center">تسجيل الدخول</CardTitle>
                <CardDescription className="text-center">
                  أدخل بيانات الدخول للوصول إلى حسابك
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleLogin}>
                  <div className="grid gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="login-email">البريد الإلكتروني</Label>
                      <Input
                        id="login-email"
                        type="email"
                        placeholder="name@example.com"
                        value={loginEmail}
                        onChange={(e) => setLoginEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="login-password">كلمة المرور</Label>
                        <Link to="/forgot-password" className="text-sm text-forum-primary hover:underline">
                          نسيت كلمة المرور؟
                        </Link>
                      </div>
                      <Input
                        id="login-password"
                        type="password"
                        value={loginPassword}
                        onChange={(e) => setLoginPassword(e.target.value)}
                        required
                      />
                    </div>
                    <div className="flex items-center space-x-reverse space-x-2">
                      <Checkbox
                        id="remember-me"
                        checked={rememberMe}
                        onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                      />
                      <Label htmlFor="remember-me" className="text-sm font-normal">تذكرني</Label>
                    </div>
                    <Button className="w-full bg-forum-primary hover:bg-forum-success" type="submit">
                      تسجيل الدخول
                    </Button>
                  </div>
                </form>
              </CardContent>
              <CardFooter className="flex justify-center">
                <p className="text-sm text-gray-500">
                  ليس لديك حساب؟{" "}
                  <button
                    type="button"
                    className="text-forum-primary hover:underline"
                    onClick={() => {
                      const element = document.querySelector('[data-value="register"]');
                      if (element instanceof HTMLElement) {
                        element.click();
                      }
                    }}
                  >
                    إنشاء حساب جديد
                  </button>
                </p>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="register">
            <Card>
              <CardHeader>
                <CardTitle className="font-cairo text-2xl text-center">إنشاء حساب جديد</CardTitle>
                <CardDescription className="text-center">
                  أدخل بياناتك لإنشاء حساب في المنتدى
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleRegister}>
                  <div className="grid gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="register-name">الاسم</Label>
                      <Input
                        id="register-name"
                        placeholder="اسمك الكامل"
                        value={registerName}
                        onChange={(e) => setRegisterName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="register-email">البريد الإلكتروني</Label>
                      <Input
                        id="register-email"
                        type="email"
                        placeholder="name@example.com"
                        value={registerEmail}
                        onChange={(e) => setRegisterEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="register-password">كلمة المرور</Label>
                      <Input
                        id="register-password"
                        type="password"
                        value={registerPassword}
                        onChange={(e) => setRegisterPassword(e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="register-confirm-password">تأكيد كلمة المرور</Label>
                      <Input
                        id="register-confirm-password"
                        type="password"
                        value={registerConfirmPassword}
                        onChange={(e) => setRegisterConfirmPassword(e.target.value)}
                        required
                      />
                    </div>
                    <div className="flex items-center space-x-reverse space-x-2">
                      <Checkbox
                        id="accept-terms"
                        checked={acceptTerms}
                        onCheckedChange={(checked) => setAcceptTerms(checked as boolean)}
                        required
                      />
                      <Label htmlFor="accept-terms" className="text-sm font-normal">
                        أوافق على{" "}
                        <Link to="/terms" className="text-forum-primary hover:underline">
                          شروط الاستخدام
                        </Link>{" "}
                        و{" "}
                        <Link to="/privacy" className="text-forum-primary hover:underline">
                          سياسة الخصوصية
                        </Link>
                      </Label>
                    </div>
                    <Button className="w-full bg-forum-primary hover:bg-forum-success" type="submit">
                      إنشاء حساب
                    </Button>
                  </div>
                </form>
              </CardContent>
              <CardFooter className="flex justify-center">
                <p className="text-sm text-gray-500">
                  لديك حساب بالفعل؟{" "}
                  <button
                    type="button"
                    className="text-forum-primary hover:underline"
                    onClick={() => {
                      const element = document.querySelector('[data-value="login"]');
                      if (element instanceof HTMLElement) {
                        element.click();
                      }
                    }}
                  >
                    تسجيل الدخول
                  </button>
                </p>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Login;
