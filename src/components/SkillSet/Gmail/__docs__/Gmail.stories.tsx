import type { Meta, StoryObj } from "@storybook/react";
import Gmail from "../Gmail";

const meta: Meta<typeof Gmail> = { title: "SkillSet/Gmail", component: Gmail };

export default meta;
type Story = StoryObj<typeof Gmail>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
