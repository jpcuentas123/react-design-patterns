import React, { PropsWithChildren } from "react";

type CurrentChildren = React.ReactElement<{ goToNext: (data: any) => void }>;

interface Props {
  onFinish: (data: any) => void;
  children: CurrentChildren | CurrentChildren[] | null;
}

const UncontrolledOnboardingFlow: React.FC<Props> = ({
  children,
  onFinish,
}) => {
  const [currentStep, setCurrentStep] = React.useState(0);
  const [onboardingData, setOnboardingData] = React.useState({});

  const goToNext = (data: any) => {
    const updatedData = { ...onboardingData, ...data };
    if (currentStep === React.Children.count(children) - 1) {
      onFinish(updatedData);
      return;
    }
    setOnboardingData(updatedData);
    setCurrentStep(currentStep + 1);
  };

  const currentChild = React.Children.toArray(children)[
    currentStep
  ] as CurrentChildren;

  return (
    <>
      {React.isValidElement(currentChild)
        ? React.cloneElement(currentChild, { goToNext })
        : currentChild}
    </>
  );
};

export default UncontrolledOnboardingFlow;
