import type { Meta, StoryObj } from "@storybook/react";
import Workers from "../Workers";

const meta: Meta<typeof Workers> = { title: "SkillIcon/Workers", component: Workers };

export default meta;
type Story = StoryObj<typeof Workers>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
