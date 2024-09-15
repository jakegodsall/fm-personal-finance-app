import Image from "next/image";

export default function FinanceHeader() {
  return (
    <header className="flex w-full justify-center rounded-b-xl bg-primary-grey-darkest py-6 lg:hidden">
      <Image src="logo-white.svg" alt="finance logo" width="121" height="22" />
    </header>
  );
}
