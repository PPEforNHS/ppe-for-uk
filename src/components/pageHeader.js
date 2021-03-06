import React from 'react'
import siteData from '../../data/manifest.json'
import { Link } from 'gatsby'
import { AnchorLink } from 'gatsby-plugin-anchor-links';

export default function PageHeader() {
  return (
    <header className="c-pageHeader">
      <div className="o-block">
        <div className="o-block__inner">
          <div className="c-pageHeader__left">
            <div className="o-inner">
              <h1 className="o-brand c-pageHeader__brand"><Link to="/">#{siteData.primaryHashtag}</Link></h1>
            </div>
          </div>
          <div className="c-pageHeader__right u-visuallyHiddenMobile">
            <div className="o-inner">
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}