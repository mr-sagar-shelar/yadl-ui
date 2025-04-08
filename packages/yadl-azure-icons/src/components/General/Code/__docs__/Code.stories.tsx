import type { Meta, StoryObj } from "@storybook/react";
import Code from "../Code";

const meta: Meta<typeof Code> = { title: "Azure/General/Code", component: Code };

export default meta;
type Story = StoryObj<typeof Code>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
