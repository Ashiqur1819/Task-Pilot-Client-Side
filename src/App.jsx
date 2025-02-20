import './App.css'
import bannerImage from "./assets/banner.webp"

function App() {

  return (
    <>
      <div
        className="h-[500px]"
        style={{ backgroundImage: `url(${bannerImage})` }}
      >
        <h1 className="text-white drop-shadow-2xl text-base">Hello World</h1>
      </div>
    </>
  );
}

export default App
