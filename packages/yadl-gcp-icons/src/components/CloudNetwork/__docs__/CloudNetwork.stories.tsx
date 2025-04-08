import type { Meta, StoryObj } from "@storybook/react";
import CloudNetwork from "../CloudNetwork";

const meta: Meta<typeof CloudNetwork> = { title: "GCP/CloudNetwork", component: CloudNetwork };

export default meta;
type Story = StoryObj<typeof CloudNetwork>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
