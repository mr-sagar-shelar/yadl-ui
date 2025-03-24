import type { Meta, StoryObj } from "@storybook/react";
import RetailApi from "../RetailApi";

const meta: Meta<typeof RetailApi> = { title: "GCP/RetailApi", component: RetailApi };

export default meta;
type Story = StoryObj<typeof RetailApi>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
