import FooterIcon from "./FooterIcon";

const Footer = () => {
  return (
    <footer className="footerContainer">
      <div>
        <FooterIcon
          link="https://github.com/VictorMolina02"
          icon="https://www.logo.wine/a/logo/GitHub/GitHub-Logo.wine.svg"
          name="GitHub"
        />
        <FooterIcon
          link="https://twitter.com/vitillo_"
          name="Twitter"
          icon="https://www.iconpacks.net/icons/2/free-twitter-logo-icon-2429-thumb.png"
        />
        <FooterIcon
          link="https://www.linkedin.com/in/victor-molina-25436128a/"
          name="Linkedin"
          icon="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/768px-LinkedIn_icon.svg.png"
        />
      </div>
      <div>
        <p>Copyright©2023 Victor Molina || All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
