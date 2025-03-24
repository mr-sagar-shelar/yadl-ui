import type { Meta, StoryObj } from "@storybook/react";
import HeyByBasecamp from "../HeyByBasecamp";

const meta: Meta<typeof HeyByBasecamp> = { title: "unDraw/HeyByBasecamp", component: HeyByBasecamp };

export default meta;
type Story = StoryObj<typeof HeyByBasecamp>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
