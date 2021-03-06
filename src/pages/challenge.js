import React from 'react'
import { AnchorLink } from 'gatsby-plugin-anchor-links';

//data
import siteData from '../../data/manifest.json'

//components
import Layout from '../components/layout'
import Head from '../components/head'
import Image from '../components/image'
import Share from '../components/share'

export default function Challenge() {
  return (
    <Layout>
      <Head title='DIY PPE Challenge' />
      <section className="o-section o-section--pushBottom c-masthead c-masthead--centered c-masthead--pink">
        <div className="c-masthead__overlay">
          <div className="o-block o-block--centered">
            <div className="o-block__inner">
              <div className="o-block__container o-block__container--9">
                <div className="o-title o-title--large c-masthead__title c-masthead__title--lead">
                  <div className="o-inner">
                    <h2 className="o-title__headline c-masthead__headline">Make your own DIY #PPEforNHS and help save lives!</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="o-section o-section--pullTop c-cta">
        <div className="c-cta__section c-cta__section--lead">
          <div className="o-block o-block--centered o-block--verticalCentered c-imageBanner">
            <div className="o-block__inner">
              <div className="o-block__container o-block__container--2 c-imageBanner__item">
                <div className="o-inner">
                  <a className="o-asset o-asset--shadow" href="https://instagram.com/ppefornhs" target="_blank">
                    <Image alt="@beigelstirrer with DIY PPE via @PPEforNHS Instagram" filename='largebodiesofwater2.jpg' class="o-asset__source" />
                  </a>
                </div>
              </div>
              <div className="o-block__container o-block__container--2 c-imageBanner__item">
                <div className="o-inner">
                  <a className="o-asset o-asset--shadow" href="https://instagram.com/ppefornhs" target="_blank">
                    <Image alt="@manny.prime with PPE via @PPEforNHS Instagram" filename='mannyprime.jpg' class="o-asset__source" />
                  </a>
                </div>
              </div>
              <div className="o-block__container o-block__container--3 c-imageBanner__item">
                <div className="o-inner">
                  <a className="o-asset o-asset--shadow" href="https://instagram.com/ppefornhs" target="_blank">
                    <Image alt="@manny.prime with PPE via @PPEforNHS Instagram" filename='IMG_3484.png' class="o-asset__source" />
                  </a>
                </div>
              </div>
              <div className="o-block__container o-block__container--2 c-imageBanner__item u-visuallyHiddenMobile">
                <div className="o-inner">
                  <a className="o-asset o-asset--shadow" href="https://instagram.com/ppefornhs" target="_blank">
                    <Image alt="@han_taylorr with PPE via @PPEforNHS Instagram" filename='han_taylorr.jpg' class="o-asset__source" />
                  </a>
                </div>
              </div>
              <div className="o-block__container o-block__container--2 c-imageBanner__item u-visuallyHiddenMobile">
                <div className="o-inner">
                  <a className="o-asset o-asset--shadow" href="https://instagram.com/ppefornhs" target="_blank">
                    <Image alt="@tsiresydomingos with PPE via @PPEforNHS Instagram" filename='IMG_3494.png' class="o-asset__source" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="c-tour">
        <section className="o-section c-tour__item c-tourItem c-tourItem--red" id="challenge-steps">
          <div className="c-tourItem__inner">
            <div className="o-block">
              <div className="o-block__inner">
                <header className="o-title o-title--centered c-tourItem__title">
                  <div className="o-inner">
                    <h3 className="o-title__headline c-tourItem__headline">How to join in</h3>
                  </div>
                </header>
              </div>
            </div>

            <div className="o-block">
              <div className="o-block__inner">
                <div className="o-block__container">
                  <ol className="c-list c-list--boxes c-list--boxesx3">
                    <li className="c-list__item">
                      <div className="c-list__itemInner o-inner">
                        <div className="c-list__itemBody">
                          <h4 className="c-list__itemTitle">Build your DIY protection</h4>
                          <p>Grab anything around the house and get building your own 'protective equipment'. The more creative the better!</p>
                        </div>
                      </div>
                    </li>
                    <li className="c-list__item">
                      <div className="c-list__itemInner o-inner">
                        <div className="c-list__itemBody">
                          <h4 className="c-list__itemTitle">Share, tag & nominate</h4>
                          <p>Share your creation on Twitter or Instagram and nominate 5 friends to one-up you. Don't forget to tag us @PPEforNHS to be featured!</p>
                        </div>
                      </div>
                    </li>
                    <li className="c-list__item">
                      <div className="c-list__itemInner o-inner">
                        <div className="c-list__itemBody">
                          <h4 className="c-list__itemTitle">Donate to protect NHS workers</h4>
                          <p>Donate £5 and help protect a frontline worker for 2 days.</p>
                        </div>
                      </div>
                    </li>
                  </ol>
                  <div className="o-sp__2"></div>
                </div>
                <div className="o-block__container u-centered">
                  <div className="o-inner">
                    <p className="o-note">No social media? No problem. <a href="https://airtable.com/shrKg1W55hKYItIDo" target="_blank" className="o-inlineLink" data-event-id="contact" data-label="challenge_contact">Send us your creation here</a>.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Share location='challenge_footer' />
    </Layout>
  )
}