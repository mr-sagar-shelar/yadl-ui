import type { Meta, StoryObj } from "@storybook/react";
import AccessContextManager from "../AccessContextManager";

const meta: Meta<typeof AccessContextManager> = { title: "GCP/AccessContextManager", component: AccessContextManager };

export default meta;
type Story = StoryObj<typeof AccessContextManager>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
