import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./page/Home.page";
import AboutPage from "./page/About.page";
import ContactPage from "./page/Contact.page";
import NavComponent from "./Components/Nav.component";
import BookPage from "./page/Book/Book.page";
import DetailBookPage from "./page/Book/DetailBook.page";
import AuthorPage from "./page/Book/Author.page";
import NotFound from "./not-found";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavComponent />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />}/>
          <Route path="/book" element={<BookPage />}/>
          <Route path="/book/:id" element={<DetailBookPage />}/>
          <Route path="/book/:id/author" element={<AuthorPage />}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
