import { Materials } from "../../../types";
import cls from "./MaterialList.module.scss";

interface MaterialListProps {
    materials: Materials[];
}

export const MaterialList = ({ materials }: MaterialListProps) => {
    return (
        <div className={cls.materials}>
            <h2>Дополнительные материалы</h2>
            <ul>
                {materials.map((material) => (
                    <li key={material.id}>
                        <a
                            href={material.url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {material.title}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};
