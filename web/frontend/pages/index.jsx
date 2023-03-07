import { NavBar, UserForm } from "../components";
import Dashboard from "../components/Dashboard";

export default function HomePage() {
  return (
    <>
      <NavBar />
      <Dashboard/>
      <UserForm/>
    </>
  );
}
