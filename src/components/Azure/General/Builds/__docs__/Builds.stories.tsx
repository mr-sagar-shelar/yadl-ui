import type { Meta, StoryObj } from "@storybook/react";
import Builds from "../Builds";

const meta: Meta<typeof Builds> = { title: "Azure/General/Builds", component: Builds };

export default meta;
type Story = StoryObj<typeof Builds>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
