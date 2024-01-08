import { FC, ReactNode } from "react";
import classNames from "classnames";
import style from "./Step.module.scss";

type Props = {
    currentStep: number,
    stepsCount: number,
    activeStep: number,
};
const Step: FC<Props> = ({ currentStep, stepsCount, activeStep }) => {

    const getStepIcon = (currentStep: number, activeStep: number): ReactNode => {
        if (currentStep === activeStep) return (
            <span className={classNames(style.icon, style.circle)}>
            &bull;
        </span>
        );

        if (currentStep < activeStep) return (
            <span className={classNames(style.icon, style.check)}>
            &#10004;
        </span>
        );

        return null;
    };

    return (
        <>
            <div className={style.step}>
                <div className={classNames(style.stepItem,
                    {
                        [style.disable]: currentStep > activeStep
                    })
                }>
                    {getStepIcon(currentStep, activeStep)}
                </div>
            </div>
            {currentStep !== stepsCount &&
                <div className={classNames(style.horizontalLine,
                    {
                        [style.active]: currentStep < activeStep
                    }
                )}></div>
            }
        </>
    );
};

export default Step;