import type { Meta, StoryObj } from "@storybook/react";
import MicDrop from "../MicDrop";

const meta: Meta<typeof MicDrop> = { title: "unDraw/MicDrop", component: MicDrop };

export default meta;
type Story = StoryObj<typeof MicDrop>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
