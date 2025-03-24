import type { Meta, StoryObj } from "@storybook/react";
import CookieLove from "../CookieLove";

const meta: Meta<typeof CookieLove> = { title: "unDraw/CookieLove", component: CookieLove };

export default meta;
type Story = StoryObj<typeof CookieLove>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
