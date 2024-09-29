import Image from "next/image";

import { formatAsDollars } from "@/app/utils/currency-utils";
import { getOrdinalDay } from "@/app/utils/datetime-utils";

export default function RecurringBillTable({ data }) {
  const themeToClassMap = {
    green: "bg-secondary-green",
    orange: "bg-secondary-yellow",
    blue: "bg-secondary-cyan",
    red: "bg-secondary-red",
    purple: "bg-secondary-purple",
    gray: "bg-secondary-navy",
  };

  console.log(data);
  return (
    <table className="w-full">
      <thead>
        <tr className="border-b-2 border-primary-grey-light">
          <th className="py-4 text-left text-[12px] font-medium text-primary-grey-dark">
            Bill Title
          </th>
          <th className="py-4 text-left text-[12px] font-medium text-primary-grey-dark">
            Due Date
          </th>
          <th className="py-4 text-right text-[12px] font-medium text-primary-grey-dark">
            Amount
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => {
          return (
            <tr
              key={item.id}
              className="border-b-2 border-primary-grey-light last:border-0"
            >
              <td className="flex items-center gap-4 py-5 text-sm font-bold">
                <Image
                  src={item.icon}
                  width={30}
                  height={30}
                  className={`${themeToClassMap[item.theme]} rounded-full p-[0.4rem]`}
                  alt="icon"
                />
                {item.name}
              </td>
              <td className="py-5 text-[14px] capitalize text-secondary-green">
                {item.frequency} - {getOrdinalDay(item.next_due_date)}
              </td>
              <td className="py-5 text-right text-[14px] font-bold">
                {formatAsDollars(item.amount)}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
