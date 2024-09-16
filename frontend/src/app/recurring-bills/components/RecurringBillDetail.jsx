import { getOrdinalDay } from "@/app/utils/datetime-utils";
import { formatAsDollars } from "@/app/utils/currency-utils";

export default function RecurringBillDetail({
  name,
  amount,
  frequency,
  nextDueDate,
}) {
  return (
    <div className="flex flex-col">
      <div className="flex items-center">
        <p className="text-sm font-bold">{name}</p>
      </div>
      <div class="flex items-center justify-between">
        <p className="text-[14px] capitalize text-secondary-green">
          {frequency} - {getOrdinalDay(nextDueDate)}
        </p>
        <p className="text-[14px] font-bold">{formatAsDollars(amount)}</p>
      </div>
    </div>
  );
}
