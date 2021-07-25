import Main from ".";
import { text, withKnobs } from "@storybook/addon-knobs";

export default {
  title: "Main",
  component: Main,
  decorators: [withKnobs]
};

export const Basic = () => (
  <Main
    title={text("Title", "NextJS Boilerplate")}
    description={text(
      "Description",
      "TypeScript, ReactJS, NextJS and Styled-Components"
    )}
  />
);
