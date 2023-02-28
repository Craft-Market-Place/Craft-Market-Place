import React from 'react'

const FeaturedAd = () => {
  return (
    <>
  
           <main className="container">
           
            {navigation.state === "loading" && (
                <div className="alert alert-info my-S">Loading...</div>
            )}  
                <Outlet />
            </main> 
            </>
             )
}

export default FeaturedAd