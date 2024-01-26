import { FC, useEffect, useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAppDispatch, useAppSelector } from "../../../app/store/hooks/index.ts";
import { aboutMeReceived, clearStateData } from "../../../app/store/data/data.ts";
import { aboutMeSchema, maxStringCount} from "../../../constants/schema/aboutMePageSchema.ts";
import {isApiError, useAuthUserMutation, usePostDataMutation} from "../../../services/apiReduxQuery.ts";
import { getAboutMeData, getState } from "../../../app/store/data/selector.ts";
import { stepDecrease } from "../../../app/store/step/step.ts";
import { useNavigate } from "react-router-dom";
import Button from "../../../shared/components/ui/Button/index.tsx";
import ModalSuccess from "../../../shared/components/common/ModalSuccess/ModalSuccess.tsx";
import ModalError from "../../../shared/components/common/ModalError/ModalError.tsx";
import style from "./AboutMePage.module.scss";
import { transformToArrayString } from "../../../utils/transformToArrayString.ts";

type FormData = yup.InferType<typeof aboutMeSchema>;


const AboutMePage: FC = () => {
    const [active, setActive] = useState<boolean>(false);
    const [message, setMessage] = useState<string>("");
    const [stringCount, setStringCount] = useState(0);
    const [ postData, { isSuccess, isError } ] = usePostDataMutation();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const aboutMeData = useAppSelector(getAboutMeData);
    const state = useAppSelector(getState);
    const { register, handleSubmit, watch, formState: { errors } } = useForm<FormValues>({
        resolver: yupResolver(aboutMeSchema),
        defaultValues: {
            about: aboutMeData
        }
    });

    
    useEffect(() => {
        setStringCount(watch("about").length);
    }, [watch("about")])

    const onSubmit = async (data: FormData) => {
        dispatch(aboutMeReceived(data.about));
        const { authData, createUserData, advantagesData } = state;
        const { nickname, name, sername, sex } = createUserData;
        const { advantages, checkboxes, radioOption } = advantagesData;

        if (sex) {
            try {
                const result = await postData({
                    phone: authData.phone,
                    email: authData.email,
                    nickname: nickname,
                    name: name,
                    serName: sername,
                    sex: sex.value,
                    advantages: transformToArrayString(advantages),
                    checkboxes: checkboxes,
                    radioOption: Number(radioOption),
                    aboutMe: data.about
                }).unwrap();
                if (result.status === "success") {
                    setMessage(result.message);
                    setActive(true);
                }
            } catch (error) {
                setActive(true);
            };
        }
    };

    const handleClickGoBack = () => {
        dispatch(stepDecrease());
    };

    const handleClickSucces = () => {
        navigate("/testTaskCloud");
        dispatch(clearStateData());
    };

    const handleClickClose = () => {
        setActive(false)
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={style.form_item}>
                    <p>
                        {isSuccess && active
                            ? 
                                "О себе" 
                            : 
                                "About"
                        }
                    </p>
                    <textarea
                        id="field-about"
                        className={style.text_area}
                        placeholder="Placeholder"
                        {...register("about")}
                    />
                    <p>{stringCount}/{maxStringCount}</p>
                    {errors.about
                        ?
                            <p className={style.error}>
                                {errors.about?.message}
                            </p>
                        :
                            <p className={style.under_text}>
                                Tip
                            </p>
                    }           
                </div>
                <div className={style.buttons_group}>
                    <Button
                        id="button-back"
                        onClick={handleClickGoBack}
                        theme={"secondary"}
                    >
                        Назад
                    </Button>
                    <Button
                        id="button-send"
                        theme="primary"
                    >
                        Отправить
                    </Button>
                </div>
            </form>
            {isSuccess &&
                <ModalSuccess
                    active={active}
                    setActive={setActive}
                    message={message}
                    onClick={handleClickSucces}
                />
            }
            {isError &&
                <ModalError
                    active={active}
                    setActive={setActive}
                    onClick={handleClickClose}
                />
            }
        </div>
    );
};
 
export default AboutMePage;