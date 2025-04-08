import type { Meta, StoryObj } from "@storybook/react";
import WorkDocsSDK from "../WorkDocsSDK";

const meta: Meta<typeof WorkDocsSDK> = { title: "AWS/BusinessApplications/WorkDocsSDK", component: WorkDocsSDK };

export default meta;
type Story = StoryObj<typeof WorkDocsSDK>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
