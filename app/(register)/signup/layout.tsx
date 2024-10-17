import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign up",
};

export default function SignUpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
