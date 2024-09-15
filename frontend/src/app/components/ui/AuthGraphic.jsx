import Image from "next/image";

export default function AuthGraphic() {
  return (
    <div className="relative hidden h-[calc(100vh-40px)] max-h-[920px] w-[600px] rounded-xl lg:block">
      <Image
        className="h-[calc(100vh-40px)] max-h-[920px] w-[600px] rounded-xl lg:inline"
        src="./login-illustration.svg"
        alt="man chasing a dollar bill"
        width={600}
        height={900}
        style={{ objectFit: "cover" }}
      />
      <div className="absolute bottom-10 left-10 right-10 flex flex-col gap-6">
        <h2 className="text-2xl font-bold text-white">
          Keep track of your money and save for your future
        </h2>
        <p className="text-xs text-white">
          Personal finance app puts you in control of your spending. Track
          transactions, set budgets, and add to savings pots easily.
        </p>
      </div>
    </div>
  );
}
