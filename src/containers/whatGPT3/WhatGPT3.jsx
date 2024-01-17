import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <span className="heading">Why choose <span style={{ color: 'red' }}>BizHub</span>?</span>
      <div className="content-list">
        <p>At BizHub, we pride ourselves on revolutionizing the freelancing experience by offering a unique platform tailored to the needs of both freelancers and clients. Here&apos;s why you should choose BizHub:</p>
      </div>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Verified Quality" text="Connect with top-tier freelancers who have undergone a stringent verification process, ensuring you work with skilled professionals dedicated to delivering exceptional results." />
      <Feature title="Secure Transactions" text="Our platform operates within the trusted Discord environment, providing a secure space for freelancers and clients to engage in seamless transactions with the assurance that their data is protected." />
      <Feature title="Transparent Fees" text="BizHub believes in transparent business practices. With a straightforward 20% commission on transactions, you can trust that your funds are supporting continuous platform improvements, security enhancements, and overall service excellence." />
    </div>
  </div>
);

export default WhatGPT3;
