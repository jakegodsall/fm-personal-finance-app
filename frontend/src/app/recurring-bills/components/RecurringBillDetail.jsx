import { getOrdinalDay } from "@/app/utils/datetime-utils";
import { formatAsDollars } from "@/app/utils/currency-utils";
import Image from "next/image";

const themeToClassMap = {
  green: "bg-secondary-green",
  orange: "bg-secondary-yellow",
  blue: "bg-secondary-cyan",
  red: "bg-secondary-red",
  purple: "bg-secondary-purple",
  gray: "bg-secondary-navy",
};

export default function RecurringBillDetail({
  name,
  amount,
  frequency,
  nextDueDate,
  icon,
  theme,
}) {
  return (
    <div className="my-5 flex flex-col">
      <div className="mb-2 flex items-center gap-4">
        <Image
          src={icon}
          width={30}
          height={30}
          className={`${themeToClassMap[theme]} rounded-full p-[0.4rem]`}
          alt="icon"
        />
        <p className="text-sm font-bold">{name}</p>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-[14px] capitalize text-secondary-green">
          {frequency} - {getOrdinalDay(nextDueDate)}
        </p>
        <p className="text-[14px] font-bold">{formatAsDollars(amount)}</p>
      </div>
    </div>
  );
}
