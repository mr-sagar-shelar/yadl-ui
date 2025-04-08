import type { Meta, StoryObj } from "@storybook/react";
import CloudStorage from "../CloudStorage";

const meta: Meta<typeof CloudStorage> = { title: "GCP/CloudStorage", component: CloudStorage };

export default meta;
type Story = StoryObj<typeof CloudStorage>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
