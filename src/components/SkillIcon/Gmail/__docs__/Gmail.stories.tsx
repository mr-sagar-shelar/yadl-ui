import type { Meta, StoryObj } from "@storybook/react";
import Gmail from "../Gmail";

const meta: Meta<typeof Gmail> = { title: "SkillIcon/Gmail", component: Gmail };

export default meta;
type Story = StoryObj<typeof Gmail>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
