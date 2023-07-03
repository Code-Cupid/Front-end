import React, { useState } from "react";
import SignupReadme from "./SignupReadme";
import SignupUser from "./SignupUser";

import '../styles/Signup.css'

const Signup = () => {
  const [step, setStep] = useState(1);
  const [userId, setUserId] = useState(null);

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handlePrevious = () => {
    setStep((prevStep) => prevStep - 1);
  };

   return (
    <div>
      {step === 1 && (
        <SignupUser 
          handleNext={handleNext}
          setUserId={setUserId}
        />
      )}
      {step === 2 && (
        <SignupReadme
          handlePrevious={handlePrevious}
          userId={userId}
        />
      )}
    </div>
  );
}
export default Signup;
