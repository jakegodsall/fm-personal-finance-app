import Navigation from "../components/navigation/Navigation";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col items-center">
      <div className="mb-20 w-full">{children}</div>
      <Navigation />
    </div>
  );
}
