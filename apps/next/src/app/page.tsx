import PageHeader from "@/components/page-header";
import { Text } from "@fpkit/react";
import { Main, Section, Pg } from "@fpkit/nextjs";

export default function Home() {
  return (
    <Pg>
      <Pg.Header title="Header Section" data-style="large">
        <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Text>
      </Pg.Header>
      <Main styles={{ minHeight: "50vh" }}>
        <Section>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatum, quibusdam, voluptate, quia quae voluptas quos
          </Text>
        </Section>
      </Main>
    </Pg>
  );
}
