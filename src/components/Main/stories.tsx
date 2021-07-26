import Main from ".";
import { text, withKnobs } from "@storybook/addon-knobs";
import { Meta, Story } from "@storybook/react";

export default {
  title: "Main",
  component: Main,
  decorators: [withKnobs]
} as Meta;

export const Basic: Story = () => (
  <Main
    title={text("Title", "NextJS Boilerplate")}
    description={text(
      "Description",
      "TypeScript, ReactJS, NextJS and Styled-Components"
    )}
  />
);
