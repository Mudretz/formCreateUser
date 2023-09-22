import { FC } from "react";
import { useAppSelector } from "src/store/hook/hook.ts";
import { getStep } from "src/store/step/selector.ts";
import PersonalInfoPage from "../../pages/personalInfoPage/PersonalInfoPage";
import AdvantagesPage from "../../pages/advantagesPage/AdvantagesPage";
import AboutMePage from "../../pages/aboutMePage/AboutMePage";
import style from "./createUserPage.module.scss";
import Stepper from "src/components/common/Stepper/Stepper.tsx";

const CreateUserPage: FC = () => {
    const activeStep = useAppSelector(getStep);

    return (
        <main className={`${style.container} ${activeStep === 3 && style.about}`}>
            <Stepper steps={3}/>
            {activeStep === 1 &&
                <PersonalInfoPage />
            }
            {activeStep === 2 &&
                <AdvantagesPage />
            }
            {activeStep === 3 &&
                <AboutMePage />
            }
        </main>
    );
};
 
export default CreateUserPage;