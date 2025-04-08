import type { Meta, StoryObj } from "@storybook/react";
import TextFiles from "../TextFiles";

const meta: Meta<typeof TextFiles> = { title: "unDraw/TextFiles", component: TextFiles };

export default meta;
type Story = StoryObj<typeof TextFiles>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
