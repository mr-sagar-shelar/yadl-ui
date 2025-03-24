import type { Meta, StoryObj } from "@storybook/react";
import Plan9 from "../Plan9";

const meta: Meta<typeof Plan9> = { title: "SkillSet/Plan9", component: Plan9 };

export default meta;
type Story = StoryObj<typeof Plan9>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
