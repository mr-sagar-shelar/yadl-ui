import type { Meta, StoryObj } from "@storybook/react";
import DefenderMarquee from "../DefenderMarquee";

const meta: Meta<typeof DefenderMarquee> = { title: "Azure/Other/DefenderMarquee", component: DefenderMarquee };

export default meta;
type Story = StoryObj<typeof DefenderMarquee>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
