import type { Meta, StoryObj } from "@storybook/react";
import BusinessDecisions from "../BusinessDecisions";

const meta: Meta<typeof BusinessDecisions> = { title: "unDraw/BusinessDecisions", component: BusinessDecisions };

export default meta;
type Story = StoryObj<typeof BusinessDecisions>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
