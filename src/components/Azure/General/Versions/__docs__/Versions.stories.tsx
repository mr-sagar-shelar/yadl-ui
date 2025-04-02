import type { Meta, StoryObj } from "@storybook/react";
import Versions from "../Versions";

const meta: Meta<typeof Versions> = { title: "Azure/General/Versions", component: Versions };

export default meta;
type Story = StoryObj<typeof Versions>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
