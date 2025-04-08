import type { Meta, StoryObj } from "@storybook/react";
import FreeServices from "../FreeServices";

const meta: Meta<typeof FreeServices> = { title: "Azure/General/FreeServices", component: FreeServices };

export default meta;
type Story = StoryObj<typeof FreeServices>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
