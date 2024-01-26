import { FC } from "react";
import styles from "./styles.module.scss";
import { UserContactsHeader } from "../UserContactsHeader";
import { UserContactsForm } from "../UserContactsForm";

const UserContactsLayout: FC = () => {
    return (
        <div className={styles.container}>
            <UserContactsHeader />
            <UserContactsForm />
        </div>
    );
};

export default UserContactsLayout;
