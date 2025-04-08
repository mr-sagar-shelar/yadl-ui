import type { Meta, StoryObj } from "@storybook/react";
import Maintenance from "../Maintenance";

const meta: Meta<typeof Maintenance> = { title: "unDraw/Maintenance", component: Maintenance };

export default meta;
type Story = StoryObj<typeof Maintenance>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
