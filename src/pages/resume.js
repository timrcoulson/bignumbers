import React from "react"
import "./resume.css"

export default () => {
    return (
    <div style={{padding: "10px"}}>
        <h2>Tim Coulson</h2>
        <hr />
        <p>Optimistic and value-driven Head of Engineering with a variety of experiences in web/native app development, distributed systems, data engineering, infrastructure automation and hardware. Working alongside fantastic teams, I’ve contributed to the success of a $20 billion FTSE 100 company, a VC & Crowd backed startup and founded an angel-backed startup.</p>
        <hr />
        <h3>Kitt <small>- Head of Engineering</small></h3>
        <ul>
            <li>Alongside the CFO and COO of JustPark, I am the other founding member of Kitt; a PropTech business with £3.5m angel funding.</li>
            <li>Delivered an ambitious end-to-end property lettings and management platform comprising of 40 micro-services, 15 web apps and a cross-platform mobile app.</li>
            <li>Lead a happy and performant team of 4 developers and 1 product manager.</li>
            <li>Novel features include facial recognition and app-based door entry, “virtual” receptionist system, automated temperature control and security systems, cloud printing.</li>
        </ul>
        <h3>JustPark <small>- Sr. Software Engineer</small></h3>
        <ul>
            <li>Doggedly integration and unit tested a relatively high-traffic monolithic system which enabled a step change in the team’s velocity.</li>
            <li>Refactored and extended the majority of core functionality including the payments, search, pricing, booking and enforcement systems.</li>
            <li>Had an active role in the business’ pivot towards car park management; delivering hardware and software for access and enforcement.</li>
            <li>Informal team lead reporting to the CEO where I helped prioritise, develop team processes, hired 10 people and performed 121s.</li>
        </ul>
        <h3>ARM <small>- Software Engineer</small></h3>
        <ul>
            <li>Solely responsible for evolving a CI/CD platform that was used across the business worldwide.</li>
            <li>Supported delivery of the implementation methodology for Cortex M7 (ARM’s highest performance microcontroller core) by automating controlled experiments for EDA synthesis.</li>
            <li>Represented ARM at career’s fairs and student events - primary age through to University.</li>
        </ul>
        <hr />
        <h3>Technical</h3>
        <ul>
            <li>Strong grasp of algorithms and data structures - let’s get to the whiteboard!</li>
            <li>Current stack is Golang, Node and React. I’m comfortable with most mainstream paradigms: OOP, Functional, Dynamic, Typesafe.</li>
            <li>Deep knowledge of cloud-native technologies: Kubernetes, Terraform, OpenTelemetry, gRPC, PubSub, Argo, Helm.</li>
            <li>I know my way around most major cloud vendors including AWS, GCP and Cloudflare.</li>
            <li>I am an evangelist for mono-repos, TDD, DDD, infrastructure-as-code, automation + code quality >>> documentation.</li>
        </ul>
        <h3>Human</h3>
        <ul>
            <li>Advised, bootstrapped or contributed to various early stage projects including Neumind, C-Me and several others that never saw the light of day!</li>
            <li>I have a few commits out in the open source community but in truth it’s never been a priority.</li>
            <li>I spend the majority of my time outside of work creating music.</li>
            <li>I value time with family & friends and a maintaining balanced lifestyle.</li>
        </ul>
    </div>
)
}