import { FC, ReactNode } from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";

type Props = {
    currentStep: number;
    stepsCount: number;
    activeStep: number;
};
const Step: FC<Props> = ({ currentStep, stepsCount, activeStep }) => {
    const getStepIcon = (
        currentStep: number,
        activeStep: number,
    ): ReactNode => {
        if (currentStep === activeStep)
            return (
                <span className={classNames(styles.icon, styles.circle)}>
                    &bull;
                </span>
            );

        if (currentStep < activeStep)
            return (
                <span className={classNames(styles.icon, styles.check)}>
                    &#10004;
                </span>
            );

        return null;
    };

    return (
        <>
            <div className={styles.step}>
                <div
                    className={classNames(styles.stepItem, {
                        [styles.disable]: currentStep > activeStep,
                    })}
                >
                    {getStepIcon(currentStep, activeStep)}
                </div>
            </div>
            {currentStep !== stepsCount && (
                <div
                    className={classNames(styles.horizontalLine, {
                        [styles.active]: currentStep < activeStep,
                    })}
                ></div>
            )}
        </>
    );
};

export default Step;
