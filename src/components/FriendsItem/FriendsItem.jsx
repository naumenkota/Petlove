export default function FriendsItem({
  title,
  imageUrl,
  phone,
  email,
  address,
  addressUrl,
}) {
  return (
    <div>
      <img src={imageUrl} alt={title} />
      <h3>{title}</h3>
      <address>
        {email && (
          <p>
            Email: <a href={`mailto:${email}`}>{email}</a>
          </p>
        )}
        {address && addressUrl && (
          <p>
            Address:{" "}
            <a href={addressUrl} target="_blank" rel="noopener noreferrer">
              {address}
            </a>
          </p>
        )}
        {phone && (
          <p>
            Phone: <a href={`tel:${phone}`}>{phone}</a>
          </p>
        )}
      </address>
    </div>
  );
}
