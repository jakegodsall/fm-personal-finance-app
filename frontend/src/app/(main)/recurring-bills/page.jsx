import RecurringBillList from "./components/RecurringBillList";

export default function RecurringBillsPage() {
  return (
    <section className="w-full px-4 py-8">
      <h1 className="mb-10 text-3xl font-bold">Recurring Bills</h1>

      <div className="rounded-lg bg-white px-5">
        <RecurringBillList />
      </div>
    </section>
  );
}
