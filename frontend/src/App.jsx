import AddPostForm from "./components/common/AddPostForm"
import ApiHandler from "./components/common/ApiHandler"
import Header from "./components/Header"

const App = () => {
  return (
    <div>
      <Header />
      <div className="py-6 px-3 ">
      <AddPostForm />
      <ApiHandler />
      </div>
    </div>
  )
}

export default App
