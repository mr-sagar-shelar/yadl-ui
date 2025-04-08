import type { Meta, StoryObj } from "@storybook/react";
import Folder from "../Folder";

const meta: Meta<typeof Folder> = { title: "unDraw/Folder", component: Folder };

export default meta;
type Story = StoryObj<typeof Folder>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
