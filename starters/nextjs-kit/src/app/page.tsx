import { Text } from "@fpkit/react";
import { Main, Section, PG } from "@fpkit/nextjs";

export default function Home() {
  return (
    <PG>
      <PG.Header title="Header Section" data-style="large">
        <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Text>
      </PG.Header>
      <Main styles={{ minHeight: "50vh" }}>
        <Section>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatum, quibusdam, voluptate, quia quae voluptas quos
          </Text>
        </Section>
      </Main>
    </PG>
  );
}
