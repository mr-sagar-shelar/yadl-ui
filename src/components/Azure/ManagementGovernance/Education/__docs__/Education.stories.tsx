import type { Meta, StoryObj } from "@storybook/react";
import Education from "../Education";

const meta: Meta<typeof Education> = { title: "Azure/ManagementGovernance/Education", component: Education };

export default meta;
type Story = StoryObj<typeof Education>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
