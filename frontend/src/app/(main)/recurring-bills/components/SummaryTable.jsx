export default function SummaryTable() {
  return (
    <div className="w-full rounded-xl bg-white p-5">
      <table className="w-full">
        <caption className="text-md mb-5 text-left font-bold">Summary</caption>
        <tbody>
          <tr className="border-b-2 border-primary-grey-light">
            <td className="py-4 text-[14px] text-primary-grey-dark">
              Paid Bills
            </td>
            <td className="py-4 text-right text-[14px] font-bold">
              2 ($320.00)
            </td>
          </tr>
          <tr className="border-b-2 border-primary-grey-light">
            <td className="py-4 text-[14px] text-primary-grey-dark">
              Total Upcoming
            </td>
            <td className="py-4 text-right text-[14px] font-bold">
              6 ($1,230.00)
            </td>
          </tr>
          <tr>
            <td className="pt-4 text-[14px] text-primary-grey-dark">
              Due Soon
            </td>
            <td className="pt-4 text-right text-[14px] font-bold">
              2 ($40.00)
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
