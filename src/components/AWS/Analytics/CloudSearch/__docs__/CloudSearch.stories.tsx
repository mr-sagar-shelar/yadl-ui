import type { Meta, StoryObj } from "@storybook/react";
import CloudSearch from "../CloudSearch";

const meta: Meta<typeof CloudSearch> = { title: "AWS/Analytics/CloudSearch", component: CloudSearch };

export default meta;
type Story = StoryObj<typeof CloudSearch>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
