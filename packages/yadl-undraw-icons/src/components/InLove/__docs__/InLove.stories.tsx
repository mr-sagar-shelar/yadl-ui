import type { Meta, StoryObj } from "@storybook/react";
import InLove from "../InLove";

const meta: Meta<typeof InLove> = { title: "unDraw/InLove", component: InLove };

export default meta;
type Story = StoryObj<typeof InLove>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
