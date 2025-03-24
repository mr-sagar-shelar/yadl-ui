import type { Meta, StoryObj } from "@storybook/react";
import SimpleEmailService from "../SimpleEmailService";

const meta: Meta<typeof SimpleEmailService> = { title: "AWS/BusinessApplications/SimpleEmailService", component: SimpleEmailService };

export default meta;
type Story = StoryObj<typeof SimpleEmailService>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
