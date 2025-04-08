import type { Meta, StoryObj } from "@storybook/react";
import Destination from "../Destination";

const meta: Meta<typeof Destination> = { title: "unDraw/Destination", component: Destination };

export default meta;
type Story = StoryObj<typeof Destination>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
