import type { Meta, StoryObj } from "@storybook/react";
import Destinations from "../Destinations";

const meta: Meta<typeof Destinations> = { title: "unDraw/Destinations", component: Destinations };

export default meta;
type Story = StoryObj<typeof Destinations>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
