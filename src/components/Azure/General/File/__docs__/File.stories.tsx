import type { Meta, StoryObj } from "@storybook/react";
import File from "../File";

const meta: Meta<typeof File> = { title: "Azure/General/File", component: File };

export default meta;
type Story = StoryObj<typeof File>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
