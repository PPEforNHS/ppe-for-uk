import React from 'react'

//styles
import '../styles/main.scss'

//components
import PageHeader from './pageHeader'
import Banner from './banner'
import PageFooter from './pageFooter'

// require('../components/gtm/gtmBody.html')({ siteData: siteData })

export default function Layout({ children }) {
  return (
    <main className='o-site'>
      <Banner />
      <div className="o-site__inner">
        <PageHeader />
        {children}
        <PageFooter />
      </div>
    </main>
  )
}