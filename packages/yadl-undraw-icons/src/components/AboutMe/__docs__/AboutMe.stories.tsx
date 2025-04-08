import type { Meta, StoryObj } from "@storybook/react";
import AboutMe from "../AboutMe";

const meta: Meta<typeof AboutMe> = { title: "unDraw/AboutMe", component: AboutMe };

export default meta;
type Story = StoryObj<typeof AboutMe>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
