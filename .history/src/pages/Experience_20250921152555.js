import "./Experience.css";


function Experience() {
return (
    <div className="experience-container">
      <div className="timeline">
        {/* Honeywell */}
        <div className="timeline-item right">
          <h3>Honeywell Aerospace</h3>
          <h4>Cyber Security Systems Engineer Intern</h4>
            <p>Tampa, FL</p>
            <p>May 2025 - August 2025</p>
          <ul>
            <li>Automated workflows with proprietary Python and VBA scripts, including Selenium-based web scraping, to streamline secure code scanning and requirement mapping processes—improving efficiency by 70%, saving an estimated 2,500 hours over 5 years while supporting compliance with the NIST Risk Management Framework.</li>
            <li>Pioneered dynamic code analysis techniques on embedded firmware, implementing tools like Valgrind, libFuzzer, and Ubuntu test environments, creating a brand new process that will increase programmatic effort by 20%.</li>
            <li>Utilized Coverity, GNAT SAS, and Black Duck to conduct static code and open source analysis, identifying Common Weakness Enumerations (CWEs) and support remediation of vulnerabilities in critical systems.</li>
            <li>Add stig and scap analysis</li>
          </ul>
        </div>

        {/* Storiza Lab */}
        <div className="timeline-item left">
          <h3>UF Sports Analytics Lab</h3>
          <h4>Sports Data Analyst</h4>
            <p>Gainesville, FL</p>
            <p>September 2025 - current</p>
          <ul>
            <li>Supporting the UF Swim Team by analyzing performance data and delivering actionable insights that inform coaching strategy, optimize athlete development, and drive competitive success.</li>
          </ul>
        </div>

        {/* Data Job */}
        <div className="timeline-item right">
          <h3>UF Virtual Learning Lab: Storiza</h3>
          <h4>Backend and AI Undergraduate Research Assistant</h4>
            <p>Gainesville, FL</p>
            <p>August 2025 - current</p>
          <ul>
            <li>Developing a system in Storiza, an AI-driven reading comprehension platform for elementary students, that enables integration and switching between LLMs for story generation and validation. </li>
          </ul>
        </div>

        {/* WiCSE */}
        <div className="timeline-item left">
          <h3>Women in Computer Science and Engineering</h3>
          <h4>Backend and AI Undergraduate Research Assistant</h4>
            <p>Gainesville, FL</p>
            <p>August 2025 - current</p>
          <ul>
            <li>Developing a system in Storiza, an AI-driven reading comprehension platform for elementary students, that enables integration and switching between LLMs for story generation and validation. </li>
          </ul>
        </div>

        {/* WECE */}
        <div className="timeline-item right">
          <h3>Women in Electrical and Computer Engineering</h3>
          <h4>title</h4>
            <p>Gainesville, FL</p>
            <p>August 2025 - current</p>
          <ul>
            <li>Developing a system in Storiza, an AI-driven reading comprehension platform for elementary students, that enables integration and switching between LLMs for story generation and validation. </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
  export default Experience;