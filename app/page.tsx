import ThemeSwitcher from "@/components/ThemeSwitcher";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="absolute top-3 right-3">
        <ThemeSwitcher />
      </div>
      <h1 className="text-3xl font-bold">Hello World</h1>
    </>
  );
}
