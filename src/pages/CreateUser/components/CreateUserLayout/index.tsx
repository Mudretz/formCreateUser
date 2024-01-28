import { FC, ReactNode } from "react";
import classNames from "classnames";
import { Stepper } from "@src/shared/components/common";
import { useAppSelector } from "@src/app/store/hooks";
import { getActiveStep } from "../../slice/createUser.selector";
import { UserInfoStep } from "../UserInfoStep";
import { UserAdvantagesStep } from "../UserAdvantagesStep";
import { UserAboutStep } from "../UserAboutStep";
import styles from "./styles.module.scss";

const getPage = (activeStep: number): ReactNode => {
    switch (activeStep) {
        case 1: {
            return <UserInfoStep />;
        }
        case 2: {
            return <UserAdvantagesStep />;
        }
        case 3: {
            return <UserAboutStep />;
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
