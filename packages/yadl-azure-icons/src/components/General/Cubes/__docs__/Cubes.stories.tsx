import type { Meta, StoryObj } from "@storybook/react";
import Cubes from "../Cubes";

const meta: Meta<typeof Cubes> = { title: "Azure/General/Cubes", component: Cubes };

export default meta;
type Story = StoryObj<typeof Cubes>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
