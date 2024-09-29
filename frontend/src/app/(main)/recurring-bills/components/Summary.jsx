import Image from "next/image";

import SummaryTable from "./SummaryTable";

export default function Summary({ data }) {
  return (
    <div className="mb-6 flex flex-col gap-3">
      <div className="flex items-center gap-5 rounded-xl bg-primary-grey-darkest px-5 py-6 text-white">
        <svg
          className={"h-10 w-10 stroke-current"}
          viewBox="0 0 25 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M20.9502 3.75L4.4502 3.75C4.05237 3.75 3.67084 3.90804 3.38954 4.18934C3.10823 4.47064 2.9502 4.85218 2.9502 5.25L2.9502 19.5C2.95026 19.6278 2.983 19.7535 3.0453 19.8651C3.10761 19.9768 3.1974 20.0706 3.30617 20.1378C3.41494 20.2049 3.53906 20.2432 3.66676 20.2489C3.79447 20.2546 3.92151 20.2275 4.03582 20.1703L6.7002 18.8381L9.36457 20.1703C9.46877 20.2225 9.58368 20.2496 9.7002 20.2496C9.81671 20.2496 9.93162 20.2225 10.0358 20.1703L12.7002 18.8381L15.3646 20.1703C15.4688 20.2225 15.5837 20.2496 15.7002 20.2496C15.8167 20.2496 15.9316 20.2225 16.0358 20.1703L18.7002 18.8381L21.3646 20.1703C21.4789 20.2275 21.6059 20.2546 21.7336 20.2489C21.8613 20.2432 21.9855 20.2049 22.0942 20.1378C22.203 20.0706 22.2928 19.9768 22.3551 19.8651C22.4174 19.7535 22.4501 19.6278 22.4502 19.5L22.4502 5.25C22.4502 4.85218 22.2922 4.47064 22.0109 4.18934C21.7296 3.90804 21.348 3.75 20.9502 3.75ZM17.2002 13.5L8.2002 13.5C8.00128 13.5 7.81052 13.421 7.66987 13.2803C7.52921 13.1397 7.4502 12.9489 7.4502 12.75C7.4502 12.5511 7.52921 12.3603 7.66987 12.2197C7.81052 12.079 8.00128 12 8.2002 12L17.2002 12C17.3991 12 17.5899 12.079 17.7305 12.2197C17.8712 12.3603 17.9502 12.5511 17.9502 12.75C17.9502 12.9489 17.8712 13.1397 17.7305 13.2803C17.5899 13.421 17.3991 13.5 17.2002 13.5ZM17.2002 10.5L8.2002 10.5C8.00128 10.5 7.81052 10.421 7.66987 10.2803C7.52921 10.1397 7.4502 9.94891 7.4502 9.75C7.4502 9.55109 7.52921 9.36032 7.66987 9.21967C7.81052 9.07902 8.00128 9 8.2002 9L17.2002 9C17.3991 9 17.5899 9.07902 17.7305 9.21967C17.8712 9.36032 17.9502 9.55109 17.9502 9.75C17.9502 9.94891 17.8712 10.1397 17.7305 10.2803C17.5899 10.421 17.3991 10.5 17.2002 10.5Z" />
        </svg>
        <div className="flex flex-col gap-2">
          <p>Total bills</p>
          <p className="text-2xl font-bold">$384.98</p>
        </div>
      </div>
      <div>
        <SummaryTable />
      </div>
    </div>
  );
}
