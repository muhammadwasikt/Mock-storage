import AddPostForm from "./components/common/AddPostForm"
import Header from "./components/Header"

const App = () => {
  return (
    <div>
      <Header />
      <div className="py-6 px-3 ">
      <AddPostForm />
      </div>
    </div>
  )
}

export default App
