import React from "react"
import "./resume.css"

export default () => {
    return (
        <div>
        <div className={"main"}>
            <div style={{display: "flex", width: "100%", flexDirection: "row", alignItems: "center", justifyContent: "center"}}>
                <span><h2>Tim Coulson</h2>
                <p className={"date"}>Master of Engineering, Durham University (2:1)</p>
                </span>
                <div className="contact" style={{marginLeft: "auto", marginTop: 0, marginBottom: 0, display: "flex", alightItems: "center", justifyContent: "center"}}>
                    <ul className={"contact"}>
                        <li><i>📍</i>Oval, London</li>
                        <li><i>✍️</i>tim.r.coulson@gmail.com</li>
                        <li><i>📞</i>+44 7771 868122</li>
                    </ul>
                </div>
            </div>
            <hr/>
            <p className={"profile"}>Optimistic, value-driven Head of Engineering with a variety of experiences in
                web/native app development, distributed systems, data engineering, infrastructure automation and
                hardware. Working alongside fantastic teams, I’ve contributed to the success of a $20 billion FTSE 100
                company, a VC & Crowd backed startup and founded an angel-backed startup.</p>
            <hr style={{marginBottom: "25px"}}/>
            <h3>Kitt <small>- Head of Engineering</small></h3>
            <p className={"date"}>OCTOBER 2018 - PRESENT</p>
            <ul>
                <li>Founding member of Kitt; a PropTech business with £3.5m angel funding.</li>
                <li>Delivered an ambitious platform of 40 micro-services, 15 web apps and a cross-platform mobile app.</li>
                <li>Lead a happy and performant team of 4 developers and 1 product manager.</li>
                <li>Stiched together a bleeding-edge microservice platform using cloud native technologies.</li>
                <li>Novel features: facial recognition/app-based door entry, “virtual” receptionist, cloud printing, IAM.
                </li>

            </ul>
            <h3>JustPark <small>- Senior Software Engineer</small></h3>
            <p className={"date"}>OCTOBER 2015 - OCTOBER 2018</p>
            <ul>
                <li>Refactored/extended the majority of core functionality: payments, search, pricing, bookings and
                    enforcement.
                </li>

                <li>Doggedly integration and unit tested a high-traffic product to enable a step change in velocity.
                </li>

                <li>Enabled business' pivot towards car park management; delivered hardware/software for access and
                    enforcement.
                </li>
                <li>Team lead reporting to the CEO where I helped prioritise, develop team processes, hired 10 people,
                    performed 121s.
                </li>
                <li>Novel features: dynamic pricing engines, app-based car park entry, payment provider router.
                </li>
            </ul>
            <h3>ARM <small>- Software Engineer</small></h3>
            <p className={"date"}>JULY 2013 - OCTOBER 2015</p>
            <ul>
                <li>Solely responsible for evolving a distributed CI/CD platform that was used across the business worldwide.</li>
                <li>Supported delivery of the implementation methodology for Cortex M7 (high performance microcontroller
                    core).
                </li>
                <li>Represented ARM at career’s fairs, school and undergraduate student events.</li>
            </ul>
            <hr style={{marginBottom: "25px"}}/>
            <h3>Technical</h3>
            <ul>
                <li>Strong grasp of algorithms and data structures - let’s get to the whiteboard!</li>
                <li>Current stack is Golang, Node and React. Comfortable with OOP, Functional, Dynamic, Typesafe.</li>
                <li>Deep knowledge of cloud-native technologies: Kubernetes, Terraform, OpenTelemetry, gRPC, PubSub,
                    Argo, Helm.
                </li>
                <li>I know my way around most major cloud vendors including AWS, GCP and Cloudflare.</li>
                <li>Evangelist for mono-repos, testing, DDD, infrastructure-as-code, automation + code quality >
                    documentation.
                </li>

            </ul>
            <h3>Human</h3>
            <ul>
                <li>I spend the majority of my time outside of work writing, recording and producing music.</li>
                <li>If not that, I can be found in an outdoor gym trying to do a handstand!</li>
                <li>I thrive in informal environments and seek genuine friendship with colleagues.</li>
                <li>I value time with family & friends and a maintaining balanced lifestyle.</li>
            </ul>
        </div>
        </div>
    )
}