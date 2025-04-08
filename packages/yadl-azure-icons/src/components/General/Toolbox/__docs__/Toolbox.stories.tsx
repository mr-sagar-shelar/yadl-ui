import type { Meta, StoryObj } from "@storybook/react";
import Toolbox from "../Toolbox";

const meta: Meta<typeof Toolbox> = { title: "Azure/General/Toolbox", component: Toolbox };

export default meta;
type Story = StoryObj<typeof Toolbox>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
