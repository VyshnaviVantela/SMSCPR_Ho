import Navbar from './components/navbar';
import Sidebar from './components/sidebar';
import MainFrame from './components/mainFrame';
import RegistrationModel from './components/RegistrationModel';

function App() {
  return (
    <div className="h-screen w-screen bg-[#F3F4F6]">
      <Navbar />
      <Sidebar />
      <MainFrame />
      <RegistrationModel />
    </div>
  );
}

export default App;