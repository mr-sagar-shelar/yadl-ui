import type { Meta, StoryObj } from "@storybook/react";
import Portfolio from "../Portfolio";

const meta: Meta<typeof Portfolio> = { title: "unDraw/Portfolio", component: Portfolio };

export default meta;
type Story = StoryObj<typeof Portfolio>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
