import React from "react";
import {
  FooterContainer,
  BoxContainer,
  FooterContent,
  FooterDescription,
  FooterTitle,
  FooterSubDescription,
} from "../../styles/footer";

const Footer = () => {
  return (
    <FooterContainer id="About">
      <BoxContainer>
        <FooterContent>
          <FooterTitle variant="h2">About us</FooterTitle>

          <FooterDescription variant="subtitle">
            Named “Best Salon” by Main Line Magazine The Philadelphia Inquirer,
            Prauge Salon Style Bar has been committed to “raising the bar ”
            since opening our doors in 2014. Our mission is simple, give every
            guest an excellent experience by providing them with a warm,
            inviting culture results that surpass expectations. At Privé we are
            passionate about making people feel good while looking their best.
            Attending advanced education allows us to keep up with the latest
            trends and provide each guest with a unique customizable result. For
            your convenience, we are open 7 days a week offers online booking 24
            hours a day.
          </FooterDescription>
          <FooterSubDescription>
            Schedule your reservation today!
          </FooterSubDescription>
        </FooterContent>
      </BoxContainer>
    </FooterContainer>
  );
};

export default Footer;
