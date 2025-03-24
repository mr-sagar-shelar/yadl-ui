import type { Meta, StoryObj } from "@storybook/react";
import Module from "../Module";

const meta: Meta<typeof Module> = { title: "Azure/General/Module", component: Module };

export default meta;
type Story = StoryObj<typeof Module>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
