import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";

function Layout() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/contact">Contact</Link>
      </nav>
      
      <hr />

      {/* Child components will render here */}
      <Outlet />
    </div>
  );
}

function Home() {
  return <h2>🏠 Home Page</h2>;
}

function About() {
  return <h2>ℹ️ About Page</h2>;
}

function Contact() {
  return <h2>📞 Contact Page</h2>;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Parent route with a layout */}
        <Route path="/" element={<Layout />}>
          {/* Child routes → rendered inside <Outlet /> */}
          <Route index element={<Home />} /> {/* default child */}
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
