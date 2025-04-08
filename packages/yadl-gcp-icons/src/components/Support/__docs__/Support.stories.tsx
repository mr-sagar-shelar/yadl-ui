import type { Meta, StoryObj } from "@storybook/react";
import Support from "../Support";

const meta: Meta<typeof Support> = { title: "GCP/Support", component: Support };

export default meta;
type Story = StoryObj<typeof Support>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
