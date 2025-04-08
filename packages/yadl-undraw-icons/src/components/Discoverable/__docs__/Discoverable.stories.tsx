import type { Meta, StoryObj } from "@storybook/react";
import Discoverable from "../Discoverable";

const meta: Meta<typeof Discoverable> = { title: "unDraw/Discoverable", component: Discoverable };

export default meta;
type Story = StoryObj<typeof Discoverable>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
