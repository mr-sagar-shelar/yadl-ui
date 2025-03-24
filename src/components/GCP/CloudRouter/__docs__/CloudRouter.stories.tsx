import type { Meta, StoryObj } from "@storybook/react";
import CloudRouter from "../CloudRouter";

const meta: Meta<typeof CloudRouter> = { title: "GCP/CloudRouter", component: CloudRouter };

export default meta;
type Story = StoryObj<typeof CloudRouter>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
