import type { Meta, StoryObj } from "@storybook/react";
import Trip from "../Trip";

const meta: Meta<typeof Trip> = { title: "unDraw/Trip", component: Trip };

export default meta;
type Story = StoryObj<typeof Trip>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
