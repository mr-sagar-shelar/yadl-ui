import type { Meta, StoryObj } from "@storybook/react";
import FileManager from "../FileManager";

const meta: Meta<typeof FileManager> = { title: "unDraw/FileManager", component: FileManager };

export default meta;
type Story = StoryObj<typeof FileManager>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
