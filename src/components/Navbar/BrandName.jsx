const BrandName = ({ img, name }) => {
  return (
    <a className="navbar-brand" href="#">
      <img className="imgNavbar" src={img} alt="logo" />
      {name}
    </a>
  );
};

export default BrandName;
