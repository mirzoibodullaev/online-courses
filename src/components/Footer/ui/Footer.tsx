import cls from "./Footer.module.scss";

export const Footer = () => {
    return (
        <footer className={cls.footer}>
            <div className={cls.socialLinks}>
                <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Facebook
                </a>
                <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Twitter
                </a>
                <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Instagram
                </a>
            </div>
            <div className={cls.contactInfo}>
                <a href="mailto:support@example.com">
                    Email: support@example.com
                </a>
                <a href="tel:1234567890<">Phone: +1 (123) 456-7890</a>
            </div>
            <div className={cls.supportButton}>
                <button
                    onClick={() =>
                        alert("Запрос в службу поддержки отправлен!")
                    }
                >
                    Поддержка
                </button>
            </div>
        </footer>
    );
};
