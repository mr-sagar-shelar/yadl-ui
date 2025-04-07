import type { Meta, StoryObj } from "@storybook/react";
import SearchComponents from "../SearchComponents";

const meta: Meta<typeof SearchComponents> = {
  title: "Search",
  component: SearchComponents,
};

export default meta;
type Story = StoryObj<typeof SearchComponents>;

export const Primary: Story = {
  args: {},
};
