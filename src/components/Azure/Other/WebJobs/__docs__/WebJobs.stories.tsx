import type { Meta, StoryObj } from "@storybook/react";
import WebJobs from "../WebJobs";

const meta: Meta<typeof WebJobs> = { title: "Azure/Other/WebJobs", component: WebJobs };

export default meta;
type Story = StoryObj<typeof WebJobs>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
