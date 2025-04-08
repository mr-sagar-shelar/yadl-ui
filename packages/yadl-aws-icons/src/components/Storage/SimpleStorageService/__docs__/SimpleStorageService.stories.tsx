import type { Meta, StoryObj } from "@storybook/react";
import SimpleStorageService from "../SimpleStorageService";

const meta: Meta<typeof SimpleStorageService> = { title: "AWS/Storage/SimpleStorageService", component: SimpleStorageService };

export default meta;
type Story = StoryObj<typeof SimpleStorageService>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
