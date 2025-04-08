import type { Meta, StoryObj } from "@storybook/react";
import CloudTest from "../CloudTest";

const meta: Meta<typeof CloudTest> = { title: "Azure/Devops/CloudTest", component: CloudTest };

export default meta;
type Story = StoryObj<typeof CloudTest>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
