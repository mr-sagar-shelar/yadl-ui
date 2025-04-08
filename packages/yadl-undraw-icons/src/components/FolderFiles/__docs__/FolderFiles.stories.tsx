import type { Meta, StoryObj } from "@storybook/react";
import FolderFiles from "../FolderFiles";

const meta: Meta<typeof FolderFiles> = { title: "unDraw/FolderFiles", component: FolderFiles };

export default meta;
type Story = StoryObj<typeof FolderFiles>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
