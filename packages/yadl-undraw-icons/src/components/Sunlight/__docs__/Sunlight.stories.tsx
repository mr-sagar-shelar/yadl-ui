import type { Meta, StoryObj } from "@storybook/react";
import Sunlight from "../Sunlight";

const meta: Meta<typeof Sunlight> = { title: "unDraw/Sunlight", component: Sunlight };

export default meta;
type Story = StoryObj<typeof Sunlight>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
