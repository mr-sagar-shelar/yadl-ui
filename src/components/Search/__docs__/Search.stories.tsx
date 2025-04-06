import type { Meta, StoryObj } from "@storybook/react";
import SearchIcons from "../SearchIcons";

const meta: Meta<typeof SearchIcons> = {
  title: "Search",
  component: SearchIcons,
};

export default meta;
type Story = StoryObj<typeof SearchIcons>;

export const Primary: Story = {
  args: {},
};
