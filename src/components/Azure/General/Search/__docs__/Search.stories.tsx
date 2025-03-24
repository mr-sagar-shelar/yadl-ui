import type { Meta, StoryObj } from "@storybook/react";
import Search from "../Search";

const meta: Meta<typeof Search> = { title: "Azure/General/Search", component: Search };

export default meta;
type Story = StoryObj<typeof Search>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
