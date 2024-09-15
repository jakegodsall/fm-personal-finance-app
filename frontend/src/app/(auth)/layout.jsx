import FinanceHeader from "../components/header/FinanceHeader";

export default function Layout({ children }) {
  return (
    <div>
      <FinanceHeader />
      {children}
    </div>
  );
}
