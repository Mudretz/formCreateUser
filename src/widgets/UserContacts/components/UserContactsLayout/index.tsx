import { FC } from "react";
import styles from "./styles.module.scss";
import { UserContactsHeader } from "../UserContactsHeader";

const UserContactsLayout: FC = () => {
    return (
        <div className={styles.container}>
            <UserContactsHeader />
        </div>
    );
};

export default UserContactsLayout;
