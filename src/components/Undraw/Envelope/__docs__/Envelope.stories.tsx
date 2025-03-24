import type { Meta, StoryObj } from "@storybook/react";
import Envelope from "../Envelope";

const meta: Meta<typeof Envelope> = { title: "unDraw/Envelope", component: Envelope };

export default meta;
type Story = StoryObj<typeof Envelope>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
