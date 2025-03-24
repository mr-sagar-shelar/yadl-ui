import type { Meta, StoryObj } from "@storybook/react";
import AttachedFile from "../AttachedFile";

const meta: Meta<typeof AttachedFile> = { title: "unDraw/AttachedFile", component: AttachedFile };

export default meta;
type Story = StoryObj<typeof AttachedFile>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
