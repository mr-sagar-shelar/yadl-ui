import type { Meta, StoryObj } from "@storybook/react";
import Unlock from "../Unlock";

const meta: Meta<typeof Unlock> = { title: "unDraw/Unlock", component: Unlock };

export default meta;
type Story = StoryObj<typeof Unlock>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
