import type { Meta, StoryObj } from "@storybook/react";
import ApiMonetization from "../ApiMonetization";

const meta: Meta<typeof ApiMonetization> = { title: "GCP/ApiMonetization", component: ApiMonetization };

export default meta;
type Story = StoryObj<typeof ApiMonetization>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
