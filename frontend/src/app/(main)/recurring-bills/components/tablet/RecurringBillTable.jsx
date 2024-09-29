import { getOrdinalDay } from "@/app/utils/datetime-utils";

export default function RecurringBillTable({ data }) {
  console.log(data);
  return (
    <table className="w-full">
      <thead>
        <tr className="border-b-2 border-primary-grey-light">
          <th className="py-4 text-left font-medium text-primary-grey-dark">
            Bill Title
          </th>
          <th className="py-4 text-left font-medium text-primary-grey-dark">
            Due Date
          </th>
          <th className="py-4 text-left font-medium text-primary-grey-dark">
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
              <td className="py-5">{item.name}</td>
              <td className="py-5 capitalize">
                {item.frequency} - {getOrdinalDay(item.next_due_date)}
              </td>
              <td className="py-5">{item.amount}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
