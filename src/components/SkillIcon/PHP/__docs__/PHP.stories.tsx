import type { Meta, StoryObj } from "@storybook/react";
import PHP from "../PHP";

const meta: Meta<typeof PHP> = { title: "SkillIcon/PHP", component: PHP };

export default meta;
type Story = StoryObj<typeof PHP>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
