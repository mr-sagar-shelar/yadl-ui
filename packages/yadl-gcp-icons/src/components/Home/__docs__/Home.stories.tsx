import type { Meta, StoryObj } from "@storybook/react";
import Home from "../Home";

const meta: Meta<typeof Home> = { title: "GCP/Home", component: Home };

export default meta;
type Story = StoryObj<typeof Home>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
