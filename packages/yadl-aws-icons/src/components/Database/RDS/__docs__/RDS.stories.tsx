import type { Meta, StoryObj } from "@storybook/react";
import RDS from "../RDS";

const meta: Meta<typeof RDS> = { title: "AWS/Database/RDS", component: RDS };

export default meta;
type Story = StoryObj<typeof RDS>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
