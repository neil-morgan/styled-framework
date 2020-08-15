import React from "react";
import Colors from "./modules/Colors";
import Typography from "./modules/Typography";
import Test from "./modules/Test";

import { Section, Container } from "./components";

export default () => {
  return (
    <>
      <Section>
        <Container>
          <Typography />
        </Container>
      </Section>
      <Section>
        <Container>
          <Colors />
        </Container>
      </Section>
      <Section>
        <Container>
          <Test />
        </Container>
      </Section>
    </>
  );
};
