import dynamic from "next/dynamic";
const Spinner = dynamic(() => import("@/app/_components/Spinner"), {
  ssr: false,
});

export default function Loading() {
  return <Spinner />;
}
