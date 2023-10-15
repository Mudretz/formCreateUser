import { FC, ReactNode } from "react";
import classNames from "classnames";
import style from "./CreateUserPage.module.scss";
import {useAppSelector} from "@/store/hook/hook.ts";
import {getStep} from "@/store/step/selector.ts";
import PersonalInfoPage from "@/components/Pages/CreateUserPage/StepsPage/PersonalInfoPage/PersonalInfoPage.tsx";
import AdvantagesPage from "@/components/Pages/CreateUserPage/StepsPage/AdvantagesPage/AdvantagesPage.tsx";
import AboutMePage from "@/components/Pages/AboutMePage/AboutMePage.tsx";
import Stepper from "@/components/common/Stepper/Stepper.tsx";

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