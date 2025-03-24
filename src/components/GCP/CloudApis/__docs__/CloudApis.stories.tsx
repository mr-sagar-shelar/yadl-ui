import type { Meta, StoryObj } from "@storybook/react";
import CloudApis from "../CloudApis";

const meta: Meta<typeof CloudApis> = { title: "GCP/CloudApis", component: CloudApis };

export default meta;
type Story = StoryObj<typeof CloudApis>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
