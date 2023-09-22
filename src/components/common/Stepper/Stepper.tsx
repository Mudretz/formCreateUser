import { FC, Fragment } from "react";
import Step from "src/components/ui/Step/Step.tsx";
import style from "./Stepper.module.scss";

type Props = {
    stepsCount: number,
    activeStep: number
};

const Stepper: FC<Props> = ({ stepsCount, activeStep }) => {
    const data = [...Array(stepsCount)].map((_, i) => i + 1);

    return (
        <div className={style.stepper}>
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

export default Stepper;