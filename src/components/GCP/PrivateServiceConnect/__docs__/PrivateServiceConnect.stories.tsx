import type { Meta, StoryObj } from "@storybook/react";
import PrivateServiceConnect from "../PrivateServiceConnect";

const meta: Meta<typeof PrivateServiceConnect> = { title: "GCP/PrivateServiceConnect", component: PrivateServiceConnect };

export default meta;
type Story = StoryObj<typeof PrivateServiceConnect>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
