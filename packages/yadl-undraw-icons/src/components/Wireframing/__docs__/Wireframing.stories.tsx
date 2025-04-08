import type { Meta, StoryObj } from "@storybook/react";
import Wireframing from "../Wireframing";

const meta: Meta<typeof Wireframing> = { title: "unDraw/Wireframing", component: Wireframing };

export default meta;
type Story = StoryObj<typeof Wireframing>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
