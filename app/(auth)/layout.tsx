import { getUserSessions } from "@/actions/auth";
import { redirect } from "next/navigation";

export default async function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const response = await getUserSessions();
  if(response?.user) {
    redirect("/");
  }
  return <>{children}</>;
}
