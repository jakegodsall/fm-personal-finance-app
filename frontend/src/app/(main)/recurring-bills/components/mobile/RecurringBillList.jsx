import RecurringBillDetail from "./RecurringBillDetail";

export default function RecurringBillList({ data }) {
  return (
    <ul className="flex flex-col divide-y">
      {data.map((bill) => {
        return (
          <li key={bill.id}>
            <RecurringBillDetail
              name={bill.name}
              amount={bill.amount}
              frequency={bill.frequency}
              nextDueDate={bill.next_due_date}
              icon={bill.icon}
              theme={bill.theme}
            />
          </li>
        );
      })}
    </ul>
  );
}
