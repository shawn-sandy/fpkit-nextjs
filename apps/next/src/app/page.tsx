"use client";
import Image from "next/image";
import styles from "./page.module.css";
import PageHeader from "@/components/page-header";
import { Text } from "@fpkit/react";
// import { usePopover } from "@fpkit/";
import { Main, Section } from "@fpkit/nextra";

export default function Home() {
  return (
    <>
      <PageHeader title="Header Section" data-style="large">
        <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Text>
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
