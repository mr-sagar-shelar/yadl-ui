import type { Meta, StoryObj } from "@storybook/react";
import OsPatchManagement from "../OsPatchManagement";

const meta: Meta<typeof OsPatchManagement> = { title: "GCP/OsPatchManagement", component: OsPatchManagement };

export default meta;
type Story = StoryObj<typeof OsPatchManagement>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
