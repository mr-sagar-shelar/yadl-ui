import type { Meta, StoryObj } from "@storybook/react";
import Both_sidesBothSides from "../Both_sidesBothSides";

const meta: Meta<typeof Both_sidesBothSides> = { title: "unDraw/Both_sidesBothSides", component: Both_sidesBothSides };

export default meta;
type Story = StoryObj<typeof Both_sidesBothSides>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
