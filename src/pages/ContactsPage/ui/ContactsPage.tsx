import cls from "./ContactsPage.module.scss";

const ContactsPage = () => {
    return (
        <div className={cls.contactsPage}>
            <h1 className={cls.title}>Контакты</h1>
            <p className={cls.description}>
                Если у вас есть вопросы, предложения или вы хотите узнать больше о наших курсах, 
                свяжитесь с нами удобным для вас способом!
            </p>
            <div className={cls.contactInfo}>
                <div className={cls.contactItem}>
                    <span className={cls.label}>Телефон:</span> 
                    <a href="tel:+1234567890" className={cls.link}>+1 (234) 567-890</a>
                </div>
                <div className={cls.contactItem}>
                    <span className={cls.label}>Email:</span> 
                    <a href="mailto:info@courses.com" className={cls.link}>info@courses.com</a>
                </div>
                <div className={cls.contactItem}>
                    <span className={cls.label}>Адрес:</span> 
                    1234, ул. Программирования, г. Кодинг
                </div>
            </div>
            <p className={cls.note}>
                Мы готовы ответить на ваши вопросы с понедельника по пятницу с 9:00 до 18:00.
            </p>
        </div>
    );
};

export default ContactsPage;
