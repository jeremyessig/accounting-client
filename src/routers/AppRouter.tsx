import {AppLayout} from "@layouts/index"
import { Home } from "@pages/index"
import { Route, Routes } from "react-router-dom"


function AppRouter() {

  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="home" element={<Home />} />
      </Route>
    </Routes>
  )
}

export default AppRouter
