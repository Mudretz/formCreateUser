import { FC, Fragment } from "react";
import {useAppSelector} from "src/store/hook/hook.ts";
import {getStep} from "src/store/step/selector.ts";
import style from "./Stepper.module.scss";
import Step from "src/components/ui/Step/Step.tsx";

type Props = {
    steps: number
};

const Stepper: FC<Props> = ({ steps }) => {
    const activeStep = useAppSelector(getStep);
    const data = [...Array(steps)].map((_, i) => i + 1);

    return (
        <div className={style.stepper}>
            {data.map((item) => (
                <Fragment key={item}>
                    <Step
                        step={item}
                        steps={steps}
                        activeStep={activeStep}
                    />
                </Fragment>
            ))}
        </div>
    );
};

export default Stepper;