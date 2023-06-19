import { Article, Main, Section, PG } from "@fpkit/nextjs";
import { Title, Text } from "@fpkit/react";
import PageHeader from "@/components/page-header";
export default function Page() {
  return (
    <>
      <PG.Header title="About Page">
        <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Text>
      </PG.Header>
      <Main>
        <Section>
          <Article>
            <Title elm="h3">We are a great team of 10X developers!</Title>
            <Text>
              We are a team of passionate developers who love to create amazing
              software. Our mission is to build innovative solutions that help
              businesses and individuals achieve their goals. We specialize in
              web and mobile development, and we use the latest technologies to
              deliver high-quality products that meet our clients&rsquo; needs.
            </Text>
            <Text>
              Our team consists of experienced developers, designers, and
              project managers who work together to ensure that every project is
              a success. We believe in collaboration, transparency, and open
              communication, and we always put our clients first.
            </Text>
            <Text>
              If you&rsquo;re looking for a reliable partner to help you build
              your next project, look no further. Contact us today to learn more
              about our services and how we can help you achieve your goals.
            </Text>
          </Article>
        </Section>
      </Main>
    </>
  );
}
