import type { Meta, StoryObj } from "@storybook/react";
import Fans from "../Fans";

const meta: Meta<typeof Fans> = { title: "unDraw/Fans", component: Fans };

export default meta;
type Story = StoryObj<typeof Fans>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
