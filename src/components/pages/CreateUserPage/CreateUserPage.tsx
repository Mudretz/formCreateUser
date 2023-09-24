import { FC, ReactNode } from "react";
import { useAppSelector } from "src/store/hook/hook.ts";
import { getStep } from "src/store/step/selector.ts";
import classNames from "classnames";
import PersonalInfoPage from "./StepsPage/PersonalInfoPage/PersonalInfoPage.tsx";
import AdvantagesPage from "./StepsPage/AdvantagesPage/AdvantagesPage.tsx";
import AboutMePage from "../AboutMePage/AboutMePage.tsx";
import Stepper from "src/components/common/Stepper/Stepper.tsx";
import style from "./CreateUserPage.module.scss";

const CreateUserPage: FC = () => {
    const activeStep = useAppSelector(getStep);

    const getPage = (activeStep: number): ReactNode => {
        switch (activeStep) {
            case(1): {
                return <PersonalInfoPage />
            }
            case(2): {
                return <AdvantagesPage />
            }
            case(3): {
                return <AboutMePage />
            }
            default: {
                return null
            }
        }
    };

    return (
        <main
            className={classNames(style.container,
                {
                    [style.about]: activeStep === 3
                }
            )}
        >
            <Stepper stepsCount={3} activeStep={activeStep}/>
            {getPage(activeStep)}
        </main>
    );
};
 
export default CreateUserPage;