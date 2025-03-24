import type { Meta, StoryObj } from "@storybook/react";
import HelpfulSign from "../HelpfulSign";

const meta: Meta<typeof HelpfulSign> = { title: "unDraw/HelpfulSign", component: HelpfulSign };

export default meta;
type Story = StoryObj<typeof HelpfulSign>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
