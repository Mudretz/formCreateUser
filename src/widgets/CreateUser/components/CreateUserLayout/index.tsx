import { FC, ReactNode } from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";
import { Stepper } from "@src/shared/components/common";
import { useAppSelector } from "@src/app/store/hooks";
import { getActiveStep } from "../../slice/createUSer.selector";

const getPage = (activeStep: number): ReactNode => {
    switch (activeStep) {
        case 1: {
            return null;
        }
        case 2: {
            return null;
        }
        case 3: {
            return null;
        }
        default: {
            return null;
        }
    }
};

const CreateUserLayout: FC = () => {
    const activeStep = useAppSelector(getActiveStep);

    return (
        <main
            className={classNames(styles.container, {
                [styles.about]: activeStep === 3,
            })}
        >
            <Stepper stepsCount={3} activeStep={activeStep} />
            {getPage(activeStep)}
        </main>
    );
};

export default CreateUserLayout;
