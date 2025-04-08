import type { Meta, StoryObj } from "@storybook/react";
import Choose from "../Choose";

const meta: Meta<typeof Choose> = { title: "unDraw/Choose", component: Choose };

export default meta;
type Story = StoryObj<typeof Choose>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
