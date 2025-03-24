import type { Meta, StoryObj } from "@storybook/react";
import Updates from "../Updates";

const meta: Meta<typeof Updates> = { title: "unDraw/Updates", component: Updates };

export default meta;
type Story = StoryObj<typeof Updates>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
