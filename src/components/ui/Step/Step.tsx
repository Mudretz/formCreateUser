import { FC } from "react";
import classNames from "classnames";
import style from "./Step.module.scss";

type Props = {
    step: number,
    steps: number,
    activeStep: number,
};

const Step: FC<Props> = ({ step, steps, activeStep }) => {
    return (
        <>
            <div className={style.step}>
                <div className={classNames(style.stepItem,
                    {
                        [style.disable]: step > activeStep
                    })
                }>
                    {step === activeStep &&
                        <span className={classNames(style.icon, style.circle)}>
                            &bull;
                        </span>
                    }
                    {step < activeStep &&
                        <span className={classNames(style.icon, style.check)}>
                            &#10004;
                        </span>
                    }
                </div>
            </div>
            {step !== steps &&
                <div className={classNames(style.horizontalLine,
                    {
                        [style.active]: step < activeStep
                    }
                )}></div>
            }
        </>
    );
};

export default Step;