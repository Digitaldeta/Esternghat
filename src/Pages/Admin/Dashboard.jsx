import React from 'react'
import Layout from '../../Components/Layout/Layout'
import Sidebar from './Sidebar'
import { useAuth } from '../../Components/context/auth'

const Dashboard = () => {
    const [auth] = useAuth();
    return (
        <Layout>
            <div className="dashboard">
                <section className='h-screen'>
                    <div className='grid grid-cols-4 h-screen'>
                        <div>
                            <Sidebar />
                        </div>
                        <div className='col-span-3'>
                            <h1 className="text-2xl">Name : {auth.user.fullname}</h1>
                            <h1 className="text-2xl">Email : {auth.user.email}</h1>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    )
}

export default Dashboard