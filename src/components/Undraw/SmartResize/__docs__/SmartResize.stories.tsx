import type { Meta, StoryObj } from "@storybook/react";
import SmartResize from "../SmartResize";

const meta: Meta<typeof SmartResize> = { title: "unDraw/SmartResize", component: SmartResize };

export default meta;
type Story = StoryObj<typeof SmartResize>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
