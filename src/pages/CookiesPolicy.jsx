import "./CookiesPolicy.css"
import { Link, NavLink } from 'react-router-dom'

const CookiesPolicy = () => {
    

    return (
        <div className="text-container-cookies">
            <h2 id="title-cookies">PRIVACY POLICY</h2>
      <p className="text-cookies">
        This Privacy Policy describes how your personal information is collected, used, and shared when you visit or make a purchase from www.themoominshop.com (the “Site”).
      </p>
      <h3 id="title-cookies">PERSONAL INFORMATION WE COLLECT</h3>
      <p className="text-cookies">
        When you visit the Site, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device. Additionally, as you browse the Site, we collect information about the individual web pages or products that you view, what websites or search terms referred you to the Site, and information about how you interact with the Site. We refer to this automatically-collected information as “Device Information.  We collect Device Information using the following technologies:”</p>
        <ul >
        <li className="text-cookies">
          “Cookies” are data files that are placed on your device or computer and often include an anonymous unique identifier. For more information about cookies, and how to disable cookies, visit <a href="http://www.allaboutcookies.org">http://www.allaboutcookies.org</a>.
        </li>
        <li className="text-cookies">“Log files” track actions occurring on the Site, and collect data including your IP address, browser type, Internet service provider, referring/exit pages, and date/time stamps.
        </li>
        <li className="text-cookies">“Web beacons,” “tags,” and “pixels” are electronic files used to record information about how you browse the Site.
        </li>
      </ul>
      <p className="text-cookies">
        Additionally when you make a purchase or attempt to make a purchase through the Site, we collect certain information from you, including your name, billing address, shipping address, payment information (including credit card numbers, email address, and phone number). We refer to this information as “Order Information.”
      </p>
      <p className="text-cookies">
        When we talk about “Personal Information” in this Privacy Policy, we are talking both about Device Information and Order Information.
      </p> <br></br>
    </div>
            
);
};
export default CookiesPolicy;