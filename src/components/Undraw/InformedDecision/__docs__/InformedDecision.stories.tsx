import type { Meta, StoryObj } from "@storybook/react";
import InformedDecision from "../InformedDecision";

const meta: Meta<typeof InformedDecision> = { title: "unDraw/InformedDecision", component: InformedDecision };

export default meta;
type Story = StoryObj<typeof InformedDecision>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
