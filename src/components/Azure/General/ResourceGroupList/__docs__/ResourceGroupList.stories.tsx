import type { Meta, StoryObj } from "@storybook/react";
import ResourceGroupList from "../ResourceGroupList";

const meta: Meta<typeof ResourceGroupList> = { title: "Azure/General/ResourceGroupList", component: ResourceGroupList };

export default meta;
type Story = StoryObj<typeof ResourceGroupList>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
