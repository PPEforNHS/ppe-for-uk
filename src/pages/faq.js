import React, { Component } from 'react'
import Cookies from 'js-cookie';
import 'reset-css';
import { Link } from 'gatsby'

//data
import siteData from '../../data/manifest.json'

//components
import Layout from '../components/layout'
import Share from '../components/share'
import Head from '../components/head'
import Image from '../components/image'

class Faq extends Component {
  constructor() {
    super()

    this.setCookieConsent = this.setCookieConsent.bind(this)
    this.scrollTo = this.scrollTo.bind(this)

    const buildDate = new Date()
    this.runTime = buildDate
    this.weekday = buildDate.toLocaleString('en-US', { weekday: 'long' })
    this.date = buildDate.getDate()
    this.month = buildDate.toLocaleString('en-US', { month: 'long' })
    this.year = buildDate.getFullYear()
  }

  setCookieConsent() {
    let key = 'cookie_consent_accepted';
    let cookieConsentBanner = document.getElementById('cookieConsent')
    let cookieConsentAcceptButton = document.getElementById('cookieConsentAccept')

    if (cookieConsentBanner && cookieConsentAcceptButton) {

      if (Cookies.get(key)) {

        cookieConsentBanner.classList.add('is-hidden')

      } else {

        cookieConsentBanner.classList.remove('is-hidden')

        cookieConsentAcceptButton.addEventListener('click', () => {

          Cookies.set(key, true, { expires: 180 })

          if (Cookies.get(key)) {
            cookieConsentBanner.classList.add('is-hidden')
          } else {
            console.warn('Unable set cookies.')
          }
        });

      }

    } else {
      console.warn('No cookie consent banner!')
    }
  };

  scrollTo(element) {

    let offset = document.getElementsByClassName('c-pageHeader')[0].offsetHeight;
    let count = (element.getBoundingClientRect().top + window.scrollY) - offset;

    return window.scroll({
      top: count,
      left: 0,
      behavior: 'smooth'
    });
  };

  render() {
    return (
      <Layout>
        <Head />

        <div className="c-tour">

          <section className="o-section c-tour__item c-tourItem c-tourItem--faq" id="faq">
            <div className="c-tourItem__inner">
              <div className="o-block o-block--centered">
                <div className="o-block__inner">
                  <div className="o-block__container o-block__container--8">
                    <div className="c-list c-list--faq">
                      <div className="o-inner">
                        <header className="o-title c-tourItem__title c-list__title">
                          <h3 className="o-title__headline c-tourItem__headline">Frequently Asked Questions</h3>
                          <span className="o-note">Updated {this.weekday} {this.date} {this.month}, {this.year}</span>
                        </header>
                        <ul className="c-list__items">
                          <li className="c-list__item">
                            <div className="o-title o-title--small">
                              <h4 className="o-title__headline">How can I donate?</h4>
                              <p className="o-title__byline">Click <a className="o-inlineLink" href="https://www.crowdfunder.co.uk/ppefornhsuk" target="_blank">here</a> or on any of the 'donate' buttons to visit our Crowdfunder page.</p>
                            </div>
                          </li>
                          <li className="c-list__item">
                            <div className="o-title o-title--small">
                              <h4 className="o-title__headline">Why should I donate to you?</h4>
                              <p className="o-title__byline">We have unparalleled connections to manufacturers in China - we are actively connecting individual cases with suppliers - and unlike like big charities, every penny raised will go directly towards purchasing PPE.</p>
                            </div>
                          </li>
                          <li className="c-list__item">
                            <div className="o-title o-title--small">
                              <h4 className="o-title__headline">What will you do with any leftover money?</h4>
                              <p className="o-title__byline">Every pound and every penny we raise will go directly towards purchasing the equipment needed and getting it to frontline staff. If for any reason we are unable to achieve our goals we will donate the money to charities supporting NHS staff in other ways.</p>
                            </div>
                          </li>
                          <li className="c-list__item">
                            <div className="o-title o-title--small">
                              <h4 className="o-title__headline">Are there other ways to get involved?</h4>
                              <p className="o-title__byline">Absolutely! We are looking for people to help us create content, spread the message, and ultimately raise money. Get in touch with us <a className="o-inlineLink" href="https://airtable.com/shrCp4xiDOA9em4TH" target="_blank">here</a>.</p>
                            </div>
                          </li>
                          <li className="c-list__item">
                            <div className="o-title o-title--small">
                              <h4 className="o-title__headline">What equipment can you supply?</h4>
                              <p className="o-title__byline">We have access to certified suppliers of respirator and surgical masks, gowns, gloves, coveralls, eye protection and other essential protective equipment. If you are NHS staff, please <a className="o-inlineLink" href="https://airtable.com/shrCp4xiDOA9em4TH" target="_blank">contact us for more information</a>.</p>
                            </div>
                          </li>
                          <li className="c-list__item">
                            <div className="o-title o-title--small">
                              <h4 className="o-title__headline">Can I get protective equipment from you for myself, family and friends?</h4>
                              <p className="o-title__byline">Right now the need is greatest for frontline NHS staff - too many of whom are are treating patients without adequate protection. For that reason all of the stock we order will be directed towards them, and not private individuals or households.</p>
                              <p className="o-title__byline">Please support and protect NHS staff by staying at home and following <a className="o-inlineLink" href="https://www.gov.uk/coronavirus" target="_blank" >government advice</a>.</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </div>

        <section className="o-section c-cta c-cta--centered" id="cta">
          <div className="o-block o-block--centered">
            <div className="o-block__inner">
              <div className="o-block__container">
                <div className="c-cta__section c-cta__section--lead">
                  <div className="o-title o-title--large c-cta__title">
                    <div className="o-inner">
                      <h2 className="o-title__headline c-cta__headline">Let's protect our nation's <span className="c-nhs">NHS</span> staff.</h2>
                    </div>
                  </div>
                </div>

                <div className="c-cta__section">
                  <div className="o-inner">
                    <div className="o-title o-title--small">
                      <p className="o-title__headline">Your donation has the power to help save lives.</p>
                      <p className="o-title__byline">Every frontline NHS worker deserves to be properly protected against COVID-19.</p>
                    </div>
                    <div className="o-sp__2"></div>
                    <a className="o-button o-button--fill o-button--red" href={siteData.externalLinks.crowdfund} target="_blank" data-event-id="donate" data-label="section_cta">Go to donation page</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Share location='section_footer' />
      </Layout>
    )
  }
}

export default Faq;