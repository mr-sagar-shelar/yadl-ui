import type { Meta, StoryObj } from "@storybook/react";
import ToTheMoon from "../ToTheMoon";

const meta: Meta<typeof ToTheMoon> = { title: "unDraw/ToTheMoon", component: ToTheMoon };

export default meta;
type Story = StoryObj<typeof ToTheMoon>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
