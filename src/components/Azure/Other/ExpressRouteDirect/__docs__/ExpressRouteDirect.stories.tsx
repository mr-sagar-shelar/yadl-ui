import type { Meta, StoryObj } from "@storybook/react";
import ExpressRouteDirect from "../ExpressRouteDirect";

const meta: Meta<typeof ExpressRouteDirect> = { title: "Azure/Other/ExpressRouteDirect", component: ExpressRouteDirect };

export default meta;
type Story = StoryObj<typeof ExpressRouteDirect>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
