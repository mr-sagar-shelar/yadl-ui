import type { Meta, StoryObj } from "@storybook/react";
import CloudInterconnect from "../CloudInterconnect";

const meta: Meta<typeof CloudInterconnect> = { title: "GCP/CloudInterconnect", component: CloudInterconnect };

export default meta;
type Story = StoryObj<typeof CloudInterconnect>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
