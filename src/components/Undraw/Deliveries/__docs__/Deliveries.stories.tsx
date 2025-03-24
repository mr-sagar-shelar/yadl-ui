import type { Meta, StoryObj } from "@storybook/react";
import Deliveries from "../Deliveries";

const meta: Meta<typeof Deliveries> = { title: "unDraw/Deliveries", component: Deliveries };

export default meta;
type Story = StoryObj<typeof Deliveries>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
