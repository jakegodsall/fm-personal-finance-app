import Image from "next/image";

export default function FinanceHeader() {
  return (
    <header className="py-6 w-full flex justify-center bg-primary-grey-darkest rounded-b-xl">
      <Image src="logo-white.svg" alt="finance logo" width="121" height="22" />
    </header>
  );
}
