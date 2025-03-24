import type { Meta, StoryObj } from "@storybook/react";
import Aquila from "../Aquila";

const meta: Meta<typeof Aquila> = { title: "Azure/Other/Aquila", component: Aquila };

export default meta;
type Story = StoryObj<typeof Aquila>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
