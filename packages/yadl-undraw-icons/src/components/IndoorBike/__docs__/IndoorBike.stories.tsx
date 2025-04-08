import type { Meta, StoryObj } from "@storybook/react";
import IndoorBike from "../IndoorBike";

const meta: Meta<typeof IndoorBike> = { title: "unDraw/IndoorBike", component: IndoorBike };

export default meta;
type Story = StoryObj<typeof IndoorBike>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
