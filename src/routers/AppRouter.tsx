import {AppLayout} from "@layouts/index"
import { Accounts, Home } from "@pages/index"
import { Route, Routes } from "react-router-dom"


function AppRouter() {

  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route path="home" element={<Home />} />
        <Route path="accounts" element={<Accounts />} />
      </Route>
    </Routes>
  )
}

export default AppRouter
