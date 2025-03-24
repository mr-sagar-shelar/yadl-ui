import type { Meta, StoryObj } from "@storybook/react";
import Confirmed from "../Confirmed";

const meta: Meta<typeof Confirmed> = { title: "unDraw/Confirmed", component: Confirmed };

export default meta;
type Story = StoryObj<typeof Confirmed>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
