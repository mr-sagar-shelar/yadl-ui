import type { Meta, StoryObj } from "@storybook/react";
import Editor from "../Editor";

const meta: Meta<typeof Editor> = { title: "Editor", component: Editor };

export default meta;
type Story = StoryObj<typeof Editor>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
