import { Navbar, Sidebar } from "../../components";
import UserCard from "./UserCard";
import UserInfo from "./UserInfo";

const Dashboard = () => {
  return (
    <div className="flex flex-row w-full h-screen font-popins">
      <Sidebar page="dashboard" />
      <div className="flex flex-col w-full h-full">
        <Navbar />

        {/* Body of dashboard */}
        <div className="flex flex-row gap-6 bg-background px-6 py-6 w-full h-screen max-h-screen">
          <UserCard />
          <UserInfo />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
