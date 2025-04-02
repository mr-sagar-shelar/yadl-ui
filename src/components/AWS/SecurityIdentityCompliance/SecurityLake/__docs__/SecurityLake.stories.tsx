import type { Meta, StoryObj } from "@storybook/react";
import SecurityLake from "../SecurityLake";

const meta: Meta<typeof SecurityLake> = { title: "AWS/SecurityIdentityCompliance/SecurityLake", component: SecurityLake };

export default meta;
type Story = StoryObj<typeof SecurityLake>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
