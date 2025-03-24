import type { Meta, StoryObj } from "@storybook/react";
import Inspiration from "../Inspiration";

const meta: Meta<typeof Inspiration> = { title: "unDraw/Inspiration", component: Inspiration };

export default meta;
type Story = StoryObj<typeof Inspiration>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
