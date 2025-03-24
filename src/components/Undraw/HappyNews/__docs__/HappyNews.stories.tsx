import type { Meta, StoryObj } from "@storybook/react";
import HappyNews from "../HappyNews";

const meta: Meta<typeof HappyNews> = { title: "unDraw/HappyNews", component: HappyNews };

export default meta;
type Story = StoryObj<typeof HappyNews>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
