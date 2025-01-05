import cls from "./MaterialList.module.scss";

export const MaterialList = ({ materials }: { materials: { id: string; title: string; url: string }[] }) => {
    return (
        <div className={cls.materials}>
            <h2>Дополнительные материалы</h2>
            <ul>
                {materials.map((material) => (
                    <li key={material.id}>
                        <a href={material.url} target="_blank" rel="noopener noreferrer">
                            {material.title}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};
