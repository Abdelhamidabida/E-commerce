
import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import ListArticle from "./articles/ListArticle"
import EditArticle from "./articles/EditArticle"
import ViewArticle from "./articles/ViewArticle"
import ListCategorie from "./categories/ListCategorie"
import InsertCategorie from "./categories/InsertCategorie"
import EditCategorie from "./categories/EditCategorie"
import ViewCategorie from "./categories/ViewCategorie"
import ViewScategorie from "./scategories/ViewScategorie"
import EditScategorie from "./scategories/EditScategorie"
import InsertScategorie from "./scategories/InsertScategorie"
import ListScategories from "./scategories/ListScategories"
import Menu from "./Menu"
import InsertArticle from "./articles/insertArticle"
function App() {


  return (
    <>
    <Router>
      <Menu/>
      <Routes>
        <Route path="/articles" element={<ListArticle/>} />
        <Route path="/articles/add" element={<InsertArticle/>} />
        <Route path="/articles/edit/:id" element={<EditArticle/>} />
        <Route path="/articles/view/:id" element={<ViewArticle/>} />

        <Route path="/categories" element={<ListCategorie/>} />
        <Route path="/categories/add" element={<InsertCategorie/>} />
        <Route path="/categories/edit/:id" element={<EditCategorie/>} />
        <Route path="/categories/view/:id" element={<ViewCategorie/>} />

        <Route path="/Scategories" element={<ListScategories/>} />
        <Route path="/Scategories/add" element={<InsertScategorie/>} />
        <Route path="/Scategories/edit/:id" element={<EditScategorie/>} />
        <Route path="/Scategories/view/:id" element={<ViewScategorie/>} />
      </Routes>
    </Router>
      <h1>BIENVENUE</h1>
      
    </>
  )
}

export default App
