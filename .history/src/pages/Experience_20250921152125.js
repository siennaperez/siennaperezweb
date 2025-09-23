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
          <h3>Storiza Lab</h3>
          <ul>
            <li>description here</li>
            <li>more text</li>
          </ul>
        </div>

        {/* Data Job */}
        <div className="timeline-item right">
          <h3>Data Job?</h3>
          <ul>
            <li>description here</li>
            <li>more text</li>
          </ul>
        </div>

        {/* WiCSE */}
        <div className="timeline-item left">
          <h3>WiCSE</h3>
          <ul>
            <li>description here</li>
            <li>more text</li>
          </ul>
        </div>

        {/* WECE */}
        <div className="timeline-item right">
          <h3>WECE</h3>
          <ul>
            <li>description here</li>
            <li>more text</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
  export default Experience;