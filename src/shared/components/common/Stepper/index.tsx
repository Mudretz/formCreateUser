import { FC, Fragment } from "react";
import { Step } from "../../ui";
import styles from "./styles.module.scss";

type Props = {
    stepsCount: number;
    activeStep: number;
};

export const Stepper: FC<Props> = ({ stepsCount, activeStep }) => {
    const data = [...Array(stepsCount)].map((_, i) => i + 1);

    return (
        <div className={styles.stepper}>
            {data.map((item) => (
                <Fragment key={item}>
                    <Step
                        currentStep={item}
                        stepsCount={stepsCount}
                        activeStep={activeStep}
                    />
                </Fragment>
            ))}
        </div>
    );
};
