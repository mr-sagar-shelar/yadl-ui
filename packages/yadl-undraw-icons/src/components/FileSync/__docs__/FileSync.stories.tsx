import type { Meta, StoryObj } from "@storybook/react";
import FileSync from "../FileSync";

const meta: Meta<typeof FileSync> = { title: "unDraw/FileSync", component: FileSync };

export default meta;
type Story = StoryObj<typeof FileSync>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
