import Head from "next/head";
import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

import { Container, Heading, Description, Body } from "./styles";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  heading: string;
  description: string;
  children?: any;
}

const Page: React.FC<Props> = ({
  title,
  heading,
  description = "",
  children,
  ...props
}) => {
  return (
    <Container {...props}>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <Body>
        <Heading>{heading}</Heading>
        <Description>{description}</Description>
        {children}
      </Body>
      <Footer />
    </Container>
  );
};

export default Page;
