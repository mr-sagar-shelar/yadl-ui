import type { Meta, StoryObj } from "@storybook/react";
import WorkDocs from "../WorkDocs";

const meta: Meta<typeof WorkDocs> = { title: "AWS/BusinessApplications/WorkDocs", component: WorkDocs };

export default meta;
type Story = StoryObj<typeof WorkDocs>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
