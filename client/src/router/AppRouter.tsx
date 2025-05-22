import Login from "@/components/login/Login";
import NewTransactionTable from "@/components/transaction/new-transaction-table/NewTransactionTable";
import TransactionForm from "@/components/transaction/transaction-form/TransactionForm";
import LoginLayout from "@/layout/LoginLayout";
import MainLayout from "@/layout/MainLayout";
import { Navigate, Route, Routes } from "react-router-dom";


const AppRouter = () => {

    return(
        <Routes>
            <Route element={<LoginLayout />}>
                <Route path="/login" element={<Login />} />
            </Route>
            <Route element={<MainLayout />}>
            <Route path="/" element={<Navigate to="/login" replace />} />
                <Route path="/dashboard" element={<div>I am the dashboard</div>} />
                <Route path="/transaction-form" element={<TransactionForm />} />
                <Route path="/new-transaction" element={<NewTransactionTable />} />
                <Route path="*" element={<div>404 BR0</div>} />
            </Route>
        </Routes>
    )
}

export default AppRouter;