const FAQ = () => {
  return (
    <div className="mt-56">
      <h2 className="text-4xl font-bold text-center">
        Frequently Asked Questions
      </h2>
      <p
        className="text-center mt-2
            "
      >
        Find quick answers to common questions about our monitoring tools,
        features,
        <br /> pricing, and support to help you get started
      </p>
      <div className="w-[48rem] mx-auto mt-16">
        <div className="collapse collapse-plus bg-[#0F1C190F] ">
          <input type="radio" name="my-accordion-3" defaultChecked />
          <div className="collapse-title text-lg font-medium">
          What does your site monitoring service do?
          </div>
          <div className="collapse-content">
            <p>Our service monitors your website uptime, performance, and security, providing real-time alerts and detailed analytics to ensure optimal operation.</p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-[#0F1C190F] mt-2">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-lg font-medium">
          How often does the monitoring check my website?
          </div>
          <div className="collapse-content">
            <p>We perform checks every minute to ensure your website performance and availability are continuously monitored.</p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-[#0F1C190F] mt-2">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-lg font-medium">
          What types of alerts will I receive?
          </div>
          <div className="collapse-content">
            <p>You will receive instant alerts via email, SMS, or push notifications for any downtime, performance issues, or security threats.</p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-[#0F1C190F] mt-2">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-lg font-medium">
          Is the Basic Plan really free?
          </div>
          <div className="collapse-content">
            <p>Yes, our Basic Plan is completely free with no hidden fees, offering essential monitoring features for your website.</p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-[#0F1C190F] mt-2">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-lg font-medium">
          Can I upgrade or downgrade my plan at any time?
          </div>
          <div className="collapse-content">
            <p>Absolutely! You can upgrade or downgrade your plan at any time to suit your needs, with no long-term commitments.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
