import ThemeSwitcher from "@/components/ThemeSwitcher";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <ThemeSwitcher />
      <h1 className="text-3xl font-bold">Hello World</h1>
    </>
  );
}
