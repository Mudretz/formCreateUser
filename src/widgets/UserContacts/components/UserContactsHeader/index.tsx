import { FC } from "react";
import { uniqueId } from "lodash";
import FolderIcon from "@src/shared/assets/folder.svg?react";
import styles from "./styles.module.scss";


const linkList = [
    {
        id: uniqueId(),
        name: "Telegram",
        link: "https://t.me/hearthsth",
        svg: <FolderIcon className={styles.icon} />,
    },
    {
        id: uniqueId(),
        name: "GitHub",
        link: "https://github.com/Mudretz",
        svg: <FolderIcon className={styles.icon} />,
    },
    {
        id: uniqueId(),
        name: "Resume",
        link: "https://drive.google.com/file/d/153dgWLtZdWHyFZxc0F5n6L7b98hP7u-O/view?usp=sharing",
        svg: <FolderIcon className={styles.icon} />,
    },
];

export const UserContactsHeader: FC = () => {
    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <p>ЖГ</p>
            </div>
            <div>
                <p className={styles.name}>Жамсо Гунгаев</p>
                <div className={styles.link_list}>
                    {linkList.map((item) => (
                        <div className={styles.link_list_item} key={item.id}>
                            {item.svg}
                            <a
                                href={item.link}
                                target='_blank'
                                className={styles.link}
                            >
                                {item.name}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
