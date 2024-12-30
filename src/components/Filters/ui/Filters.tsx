import { Input } from "../../../components/Input";
import { Select } from "../../Select";
import cls from "./Filters.module.scss";

interface FiltersProps {
    categoryFilter: string;
    setCategoryFilter: (value: string) => void;
    levelFilter: string;
    setLevelFilter: (value: string) => void;
    typeFilter: string;
    setTypeFilter: (value: string) => void;
    searchQuery: string;
    setSearchQuery: (value: string) => void;
}

export const Filters = ({
    categoryFilter,
    setCategoryFilter,
    levelFilter,
    setLevelFilter,
    typeFilter,
    setTypeFilter,
    searchQuery,
    setSearchQuery,
}: FiltersProps) => {
    return (
        <div className={cls.filters}>
            <div className={cls.filterGroup}>
                <Select
                    options={["Программирование", "Дизайн", "Маркетинг"]}
                    value={categoryFilter}
                    onChange={setCategoryFilter}
                    placeholder="Все категории"
                />

                <Select
                    options={["Начальный", "Средний", "Продвинутый"]}
                    value={levelFilter}
                    onChange={setLevelFilter}
                    placeholder="Все уровни"
                />

                <Select
                    options={["Бесплатный", "Платный"]}
                    value={typeFilter}
                    onChange={setTypeFilter}
                    placeholder="Все"
                />
            </div>

            <Input
                type="text"
                placeholder="Поиск"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
        </div>
    );
};
