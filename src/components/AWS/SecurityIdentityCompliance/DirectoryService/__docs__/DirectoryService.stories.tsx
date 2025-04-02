import type { Meta, StoryObj } from "@storybook/react";
import DirectoryService from "../DirectoryService";

const meta: Meta<typeof DirectoryService> = { title: "AWS/SecurityIdentityCompliance/DirectoryService", component: DirectoryService };

export default meta;
type Story = StoryObj<typeof DirectoryService>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
