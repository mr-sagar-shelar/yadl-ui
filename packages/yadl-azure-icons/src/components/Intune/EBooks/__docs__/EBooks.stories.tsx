import type { Meta, StoryObj } from "@storybook/react";
import EBooks from "../EBooks";

const meta: Meta<typeof EBooks> = { title: "Azure/Intune/EBooks", component: EBooks };

export default meta;
type Story = StoryObj<typeof EBooks>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
