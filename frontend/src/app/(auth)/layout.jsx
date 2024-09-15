import Image from "next/image";

import FinanceHeader from "../components/header/FinanceHeader";
import AuthGraphic from "../components/ui/AuthGraphic";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col items-center lg:flex-row lg:gap-[140px] lg:p-5">
      <FinanceHeader />
      <AuthGraphic />
      {children}
    </div>
  );
}
