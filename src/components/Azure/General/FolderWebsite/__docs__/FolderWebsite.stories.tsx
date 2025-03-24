import type { Meta, StoryObj } from "@storybook/react";
import FolderWebsite from "../FolderWebsite";

const meta: Meta<typeof FolderWebsite> = { title: "Azure/General/FolderWebsite", component: FolderWebsite };

export default meta;
type Story = StoryObj<typeof FolderWebsite>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
