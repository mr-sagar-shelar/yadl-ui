import type { Meta, StoryObj } from "@storybook/react";
import WAC from "../WAC";

const meta: Meta<typeof WAC> = { title: "Azure/Other/WAC", component: WAC };

export default meta;
type Story = StoryObj<typeof WAC>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
