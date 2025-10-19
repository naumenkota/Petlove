import s from "./FriendsItem.module.css";

export default function FriendsItem({
  title,
  imageUrl,
  phone,
  email,
  address,
  addressUrl,
  workDays,
}) {
  const formatWorkHours = () => {
    if (!workDays || workDays.length === 0) {
      return "Day and night";
    }

    const openDay = workDays.find((day) => day.isOpen);
    if (!openDay || !openDay.from || !openDay.to) {
      return "Day and night";
    }

    return `${openDay.from}-${openDay.to}`;
  };

  return (
    <div className={s.wrapper}>
      <img src={imageUrl} alt={title} className={s.img} />
      <p className={s.work_hours}>{formatWorkHours()}</p>
      <div className={s.info}>
        <h3>{title}</h3>
        <address className={s.address}>
          <div className={s.address_info}>
            <p className={s.address_key}> Email:</p>
            {email ? (
              <a href={`mailto:${email}`} className={s.address_value}>
                {email}
              </a>
            ) : (
              <span className={s.no_data}>not available</span>
            )}
          </div>
          <div className={s.address_info}>
            <p className={s.address_key}>Address:</p>
            {address && addressUrl ? (
              <a
                href={addressUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={s.address_value}
              >
                {address}
              </a>
            ) : (
              <span className={s.address_value}>website only</span>
            )}
          </div>
          <div className={s.address_info}>
            <p className={s.address_key}> Phone: </p>
            {phone ? (
              <a href={`tel:${phone}`} className={s.address_value}>
                {phone}
              </a>
            ) : (
              <span className={s.no_data}>not available</span>
            )}
          </div>
        </address>
      </div>
    </div>
  );
}
