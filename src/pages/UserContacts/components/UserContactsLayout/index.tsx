import { FC } from "react";
import { UserContactsHeader } from "../UserContactsHeader";
import { UserContactsForm } from "../UserContactsForm";
import styles from "./styles.module.scss";

const UserContactsLayout: FC = () => {
    return (
        <div className={styles.container}>
            <UserContactsHeader />
            <UserContactsForm />
        </div>
    );
};

export default UserContactsLayout;
