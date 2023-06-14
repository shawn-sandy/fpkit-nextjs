import Image from "next/image";
import styles from "./page.module.css";
import PageHeader from "@/components/page-header";
import { Text } from "@fpkit/react";
import { Main, Section } from "@fpkit/nextra";

export default function Home() {
  return (
    <>
      <PageHeader title="Header Section">
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Necessitatibus, eius! In impedit natus odit optio sit voluptas
          doloremque qui temporibus eum deleniti repellendus accusamus soluta
          placeat, ab, quae, voluptatum eos!
        </Text>
      </PageHeader>
      <Main>
        <Section>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatum, quibusdam, voluptate, quia quae voluptas quos
          </Text>
        </Section>
      </Main>
    </>
  );
}
