import type { Meta, StoryObj } from "@storybook/react";
import Cloud_filesCloudFiles from "../Cloud_filesCloudFiles";

const meta: Meta<typeof Cloud_filesCloudFiles> = { title: "unDraw/Cloud_filesCloudFiles", component: Cloud_filesCloudFiles };

export default meta;
type Story = StoryObj<typeof Cloud_filesCloudFiles>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
