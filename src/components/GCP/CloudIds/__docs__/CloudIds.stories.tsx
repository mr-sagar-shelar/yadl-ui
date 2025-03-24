import type { Meta, StoryObj } from "@storybook/react";
import CloudIds from "../CloudIds";

const meta: Meta<typeof CloudIds> = { title: "GCP/CloudIds", component: CloudIds };

export default meta;
type Story = StoryObj<typeof CloudIds>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
