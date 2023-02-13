const Contact = () => {
    return ( 
        <div className="contact-container">
        <div className="contact-container-bg">
            <div className="contactez">
                <div className="title">
                    <h3>Nous contacter</h3>
                </div>
                <div className="contact-elem">
                    <div className="bg-img tel"></div>
                    <label>+213 23541952</label>
                </div>
                <div className="contact-elem">
                    <div className="bg-img email"></div>
                    <label>DZA-info@msc.com</label>
                </div>
                <div className="contact-elem">
                    <div className="bg-img location"></div>
                    <label>Les Sources, Bir Mourad Raïs</label>
                </div>
            </div>
            <div className="suivez">
                <div className="title">
                    <h3>Nous suivre</h3>
                </div>
                <div className="suivre-elements">
                    <div className="suivre-elem facebook"></div>
                    <div className="suivre-elem instagram"></div>
                    <div className="suivre-elem twitter"></div>
                    <div className="suivre-elem linkedin"></div>
                </div>
            </div>
        </div>
        <div className="copyright">
        <label>Copyright © MSC 2022.</label> 
        </div>
        </div>
     );
}
 
export default Contact;