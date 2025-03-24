import type { Meta, StoryObj } from "@storybook/react";
import FolderBlank from "../FolderBlank";

const meta: Meta<typeof FolderBlank> = { title: "Azure/General/FolderBlank", component: FolderBlank };

export default meta;
type Story = StoryObj<typeof FolderBlank>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
