import type { Meta, StoryObj } from "@storybook/react";
import CloudHsm from "../CloudHsm";

const meta: Meta<typeof CloudHsm> = { title: "GCP/CloudHsm", component: CloudHsm };

export default meta;
type Story = StoryObj<typeof CloudHsm>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
