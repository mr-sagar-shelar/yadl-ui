import type { Meta, StoryObj } from "@storybook/react";
import CloudArmor from "../CloudArmor";

const meta: Meta<typeof CloudArmor> = { title: "GCP/CloudArmor", component: CloudArmor };

export default meta;
type Story = StoryObj<typeof CloudArmor>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
