import type { Meta, StoryObj } from "@storybook/react";
import AddFile from "../AddFile";

const meta: Meta<typeof AddFile> = { title: "unDraw/AddFile", component: AddFile };

export default meta;
type Story = StoryObj<typeof AddFile>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
