import type { Meta, StoryObj } from "@storybook/react";
import Angular from "../Angular";

const meta: Meta<typeof Angular> = { title: "SkillSet/Angular", component: Angular };

export default meta;
type Story = StoryObj<typeof Angular>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
