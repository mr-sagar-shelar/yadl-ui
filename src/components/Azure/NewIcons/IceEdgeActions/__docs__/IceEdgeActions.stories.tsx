import type { Meta, StoryObj } from "@storybook/react";
import IceEdgeActions from "../IceEdgeActions";

const meta: Meta<typeof IceEdgeActions> = { title: "Azure/NewIcons/IceEdgeActions", component: IceEdgeActions };

export default meta;
type Story = StoryObj<typeof IceEdgeActions>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
