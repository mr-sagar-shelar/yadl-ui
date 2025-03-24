import type { Meta, StoryObj } from "@storybook/react";
import ComposeMusic from "../ComposeMusic";

const meta: Meta<typeof ComposeMusic> = { title: "unDraw/ComposeMusic", component: ComposeMusic };

export default meta;
type Story = StoryObj<typeof ComposeMusic>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
