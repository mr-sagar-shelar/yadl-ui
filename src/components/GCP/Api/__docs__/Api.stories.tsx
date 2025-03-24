import type { Meta, StoryObj } from "@storybook/react";
import Api from "../Api";

const meta: Meta<typeof Api> = { title: "GCP/Api", component: Api };

export default meta;
type Story = StoryObj<typeof Api>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
