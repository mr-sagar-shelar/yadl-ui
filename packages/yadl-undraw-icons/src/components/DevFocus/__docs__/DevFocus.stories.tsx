import type { Meta, StoryObj } from "@storybook/react";
import DevFocus from "../DevFocus";

const meta: Meta<typeof DevFocus> = { title: "unDraw/DevFocus", component: DevFocus };

export default meta;
type Story = StoryObj<typeof DevFocus>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
