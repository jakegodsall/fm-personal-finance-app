import RecurringBillDetail from "./RecurringBillDetail";

const DUMMY_DATA = [
  {
    id: 1,
    user_id: 1,
    name: "Elevate Education",
    amount: 250.0,
    frequency: "monthly",
    next_due_date: "2024-10-01",
    theme: "green",
    icon: "education",
    created_at: "2024-01-01T09:00:00",
    updated_at: "2024-09-01T10:00:00",
  },
  {
    id: 2,
    user_id: 1,
    name: "Bravo Zen Spa",
    amount: 70.0,
    frequency: "monthly",
    next_due_date: "2024-10-03",
    theme: "orange",
    icon: "spa",
    created_at: "2024-02-01T09:15:00",
    updated_at: "2024-09-01T11:00:00",
  },
  {
    id: 3,
    user_id: 1,
    name: "Charlie Electric Company",
    amount: 10.0,
    frequency: "monthly",
    next_due_date: "2024-10-05",
    theme: "red",
    icon: "electricity",
    created_at: "2024-02-10T12:00:00",
    updated_at: "2024-09-01T12:30:00",
  },
  {
    id: 4,
    user_id: 1,
    name: "Delta Taxi",
    amount: 30.0,
    frequency: "monthly",
    next_due_date: "2024-10-06",
    theme: "blue",
    icon: "taxi",
    created_at: "2024-03-01T10:30:00",
    updated_at: "2024-09-01T13:00:00",
  },
  {
    id: 5,
    user_id: 1,
    name: "Echo Game Store",
    amount: 5.0,
    frequency: "monthly",
    next_due_date: "2024-10-12",
    theme: "purple",
    icon: "games",
    created_at: "2024-04-01T09:00:00",
    updated_at: "2024-09-01T13:30:00",
  },
  {
    id: 6,
    user_id: 1,
    name: "Echo Game Store",
    amount: 10.0,
    frequency: "monthly",
    next_due_date: "2024-10-16",
    theme: "gray",
    icon: "games",
    created_at: "2024-04-15T09:00:00",
    updated_at: "2024-09-01T14:00:00",
  },
  {
    id: 7,
    user_id: 1,
    name: "Tango Gas Company",
    amount: 225.0,
    frequency: "monthly",
    next_due_date: "2024-10-22",
    theme: "blue",
    icon: "gas",
    created_at: "2024-05-01T11:00:00",
    updated_at: "2024-09-01T14:30:00",
  },
  {
    id: 8,
    user_id: 1,
    name: "Juliet Restaurant",
    amount: 950.0,
    frequency: "monthly",
    next_due_date: "2024-10-28",
    theme: "red",
    icon: "restaurant",
    created_at: "2024-06-01T09:00:00",
    updated_at: "2024-09-01T15:00:00",
  },
];

export default function RecurringBillList() {
  return (
    <ul>
      {DUMMY_DATA.map((bill) => {
        return (
          <li key={bill.id}>
            <RecurringBillDetail
              name={bill.name}
              amount={bill.amount}
              frequency={bill.frequency}
              nextDueDate={bill.next_due_date}
            />
          </li>
        );
      })}
    </ul>
  );
}
