import "./Contact.scss";
import Title from "../../utils/Title";
import SvgContact from "../../utils/SvgContact";
import Reveal from "../Reveal";
import RevealUpNoOverFlow from "../RevealUpNoOverFlow";
import { MdPhoneAndroid } from "react-icons/md";
import Circle from "../../utils/Circle";
import Dots from "../../utils/Dots";
import "./Responsive.scss";
import { FaLocationDot } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa6";

function Contact() {
  return (
    <section className="contact" id="contact">
      <Circle className="circle-contact-1" />
      <Circle className="circle-contact-2" />
      <div className="container-dots-contact">
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
        <Dots />
      </div>
      <div className="title-container">
        <Title title="Contact" />
      </div>
      <div className="container-head-contact">
        <Reveal>
          <h1>Collaborons Ensemble</h1>
        </Reveal>
        <Reveal>
          <p className="para-contact">
            Vous avez un projet en tête ou une idée à concrétiser ? Je suis à
            votre disposition pour discuter de vos besoins et pour apporter des
            solutions adaptées. Que ce soit pour un site web, une application ou
            un conseil en développement, n'hésitez pas à me contacter et voyons
            ensemble comment donner vie à vos idées.
          </p>
        </Reveal>
        <div className="container-flex-contact">
          <div className="container-svg-contact">
            <RevealUpNoOverFlow>
              <SvgContact />
            </RevealUpNoOverFlow>
          </div>
          <div className="about-contact-container">
            <Circle className="glow-effect-1" />
            <Circle className="glow-effect-2" />

            <RevealUpNoOverFlow>
            <div className="container-box-about">
              <div className="container-div-glow-1">
                <div className="container-div-glow-2">
                  <div className="box-contact">
                    <i>
                      <FaLocationDot />
                    </i>
                    <div>
                      <span>Adresse</span>
                      <p>MB 852 Mahabo Andoharanofotsy</p>
                    </div>
                  </div>

                  <div className="box-contact">
                    <i>
                      <MdPhoneAndroid />
                    </i>
                    <div>
                      <span>Téléphone</span>
                      <p>+261 34 89 823 85</p>
                    </div>
                  </div>

                  <div className="box-contact">
                    <i>
                      <FaFacebookF />
                    </i>
                    <div>
                      <span>Facebook</span>
                      <p>Wouna Stone</p>
                    </div>
                  </div>

                  <div className="box-contact">
                    <i>
                      <IoMail />
                    </i>
                    <div>
                      <span>Email</span>
                      <p className="mail">andriantsoajeanfidel39@gmail.com</p>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
            </RevealUpNoOverFlow>

          </div>
        </div>
      </div>
    </section>
  );
}
export default Contact;
