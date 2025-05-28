import Sidebar from "./components/Sidebar";
import DashboardMainContent from "./components/DashboardMainContent";
import CentrePanel from "./components/CentrePanel";

function App() {
  return (
    <div >
        <main style={{ display: "flex", minHeight: "100dvh", background: "#EEF3FF" }}>
      <Sidebar />
      <CentrePanel />
      <DashboardMainContent />
    </main>
    </div>
  );
}

export default App;
