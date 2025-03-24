import type { Meta, StoryObj } from "@storybook/react";
import FilesSent from "../FilesSent";

const meta: Meta<typeof FilesSent> = { title: "unDraw/FilesSent", component: FilesSent };

export default meta;
type Story = StoryObj<typeof FilesSent>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
