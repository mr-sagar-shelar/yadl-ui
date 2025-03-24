import type { Meta, StoryObj } from "@storybook/react";
import SearchGrid from "../SearchGrid";

const meta: Meta<typeof SearchGrid> = { title: "Azure/General/SearchGrid", component: SearchGrid };

export default meta;
type Story = StoryObj<typeof SearchGrid>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
