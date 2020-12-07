import React from "react"
import "./App.css"


export default () => {
  return (
      <div>
        <div className={"main"}>
          <div style={{display: "flex", width: "100%", flexDirection: "row", alignItems: "center", justifyContent: "center"}}>
                <span><h2>Tim Coulson</h2>
                <p className={"date"}>Master of Engineering (Electronics), Durham University (2:1)</p>
                </span>
            <div className="contact" style={{marginLeft: "auto", marginTop: 0, marginBottom: 0, display: "flex", alightItems: "center", justifyContent: "center"}}>
              <ul className={"contact"}>
                <li><i>📍</i>Camden, London</li>
                <li><i>✍️</i>tim.r.coulson@gmail.com</li>
                <li><i>📞</i>+44 7771 868122</li>
              </ul>
            </div>
          </div>
          <hr/>
          <p className={"profile"}>I am a hands-on leader with a breadth of experience across
            web/native app development, distributed systems, data engineering, infrastructure automation and
            IoT. Working alongside exceptional teams, I’ve contributed to the success of a $40B FTSE 100
            company, a VC and crowd-backed startup and founded an angel-backed PropTech startup.</p>
          <hr style={{marginBottom: "25px"}}/>
          <h3>Kitt <small>- Head of Engineering</small></h3>
          <p className={"date"}>OCTOBER 2018 - PRESENT</p>
          <ul>
            <li>Founding member of Kitt; a PropTech business with £3.5m angel funding - London's fastest growing office provider.</li>
            <li>Determined a roadmap to mechanise the letting, delivery and management of physical space at scale.</li>
            <li>Delivered an ambitious platform of 40 micro-services, 15 web apps, cross-platform mobile app and IoT devices.</li>
            <li>Established a leading-edge stack utilising open-source and SaaS vendors.</li>
            <li>Assembled a happy, focussed and performant team of 4 developers with zero staff turnover.</li>
            <li>Novel features: door entry via app and facial-recognition, remote receptionist, automated security, cloud printing.</li>
          </ul>
          <h3>JustPark <small>- Senior Software Engineer</small></h3>
          <p className={"date"}>OCTOBER 2015 - OCTOBER 2018</p>
          <ul>
            <li>Enabled business' pivot towards car park management; delivered hardware/software for access and
              enforcement.
            </li>
            <li>Responsible for prioritising backend work, developed team processes, hired 10 people, performed 121s.</li>
            <li>Refactored and extended the majority of core functionality: payments, search, pricing, bookings.</li>
            <li>Used profiling tools to identify performance bottlenecks, halving the search results page loading time.</li>
            <li>Implemented thorough integration and unit test cases which enabled a step change in the team's velocity.</li>
            <li>Novel features: dynamic pricing engine, app-based car park entry, payment provider router.
            </li>
          </ul>
          <h3>ARM <small>- Engineer</small></h3>
          <p className={"date"}>JULY 2013 - OCTOBER 2015</p>
          <ul>
            <li>Supported delivery of the implementation methodology for Cortex M7 (high-performance microcontroller
              core).
            </li>
            <li>Sole responsibility for a distributed CI/CD platform that was used across the business worldwide.</li>
            <li>Represented ARM at career fairs, school and undergraduate student events.</li>
          </ul>
          <hr style={{marginBottom: "20px"}}/>
          <h3>Technical</h3>
          <ul>
            <li>Current stack is Golang, Node and React. Comfortable with OOP, Functional, Async and Typesafe paradigms.</li>
            <li>Comfortable with a range of persistence technologies including: Postgres, MySQL, ElasticSearch, Redis.</li>
            <li>Deep knowledge of cloud-native technologies: Kubernetes, OpenTelemetry, gRPC, PubSub, Istio.</li>
            <li>Proficient with Terraform to deliver infrastructure across major cloud vendors including AWS, GCP and Cloudflare.</li>
            <li>Evangelist for mono-repos, testing, DDD, infrastructure-as-code, automation over documentation.</li>
            <li>Background in electronics: microcontroller programming, VHDL, signal processing, control theory.</li>
          </ul>
          <h3>Human</h3>
          <ul>
            <li>Confident leader and eager listener who fosters creative and engaging work environments.</li>
            <li>Curious technologist who thrives under pressure and enjoys the hard problems.</li>
            <li>Performing musician, songwriter and producer.</li>
          </ul>
        </div>
      </div>
  )
}