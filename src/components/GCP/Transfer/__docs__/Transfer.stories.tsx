import type { Meta, StoryObj } from "@storybook/react";
import Transfer from "../Transfer";

const meta: Meta<typeof Transfer> = { title: "GCP/Transfer", component: Transfer };

export default meta;
type Story = StoryObj<typeof Transfer>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
