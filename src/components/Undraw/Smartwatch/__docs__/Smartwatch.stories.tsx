import type { Meta, StoryObj } from "@storybook/react";
import Smartwatch from "../Smartwatch";

const meta: Meta<typeof Smartwatch> = { title: "unDraw/Smartwatch", component: Smartwatch };

export default meta;
type Story = StoryObj<typeof Smartwatch>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
