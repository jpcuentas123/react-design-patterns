import React from "react";
import UncontrolledOnboardingFlow from "./Uncontrolled/UncontrolledOnboardingFlow";
interface StepsProps {
  goToNext?: (data: any) => void;
}
const StepOne = ({ goToNext }: StepsProps) => {
  return (
    <div>
      <p>Step one</p>
      <button onClick={() => goToNext && goToNext({ name: "Paul" })}>
        Next
      </button>
    </div>
  );
};

const StepTwo = ({ goToNext }: StepsProps) => {
  return (
    <div>
      <p>Step two</p>
      <button onClick={() => goToNext && goToNext({ age: 30 })}>Next</button>
    </div>
  );
};

const StepThree = ({ goToNext }: StepsProps) => {
  return (
    <div>
      <p>Step three</p>
      <button onClick={() => goToNext && goToNext({ hairColor: "brown" })}>
        Next
      </button>
    </div>
  );
};

const OnboardingComponent = () => {
  const onFinish = (data: any) => {
    console.log({ data });
  };
  return (
    <UncontrolledOnboardingFlow onFinish={onFinish}>
      <StepOne />
      <StepTwo />
      <StepThree />
    </UncontrolledOnboardingFlow>
  );
};

export default OnboardingComponent;
