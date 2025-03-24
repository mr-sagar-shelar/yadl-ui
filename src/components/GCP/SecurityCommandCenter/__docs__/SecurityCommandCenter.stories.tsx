import type { Meta, StoryObj } from "@storybook/react";
import SecurityCommandCenter from "../SecurityCommandCenter";

const meta: Meta<typeof SecurityCommandCenter> = { title: "GCP/SecurityCommandCenter", component: SecurityCommandCenter };

export default meta;
type Story = StoryObj<typeof SecurityCommandCenter>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
