import type { Meta, StoryObj } from "@storybook/react";
import Groups from "../Groups";

const meta: Meta<typeof Groups> = { title: "Azure/Identity/Groups", component: Groups };

export default meta;
type Story = StoryObj<typeof Groups>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
