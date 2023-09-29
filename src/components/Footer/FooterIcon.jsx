const FooterIcon = ({ link, icon, name }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <img src={icon} alt={name} />
    </a>
  );
};

export default FooterIcon;
